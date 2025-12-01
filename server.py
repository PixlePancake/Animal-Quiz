from flask import Flask, send_from_directory, request
from flask_socketio import SocketIO, emit, join_room, leave_room
import random
import string

app = Flask(__name__, static_folder='.', static_url_path='')
app.config['SECRET_KEY'] = 'dierenquiz-secret-key'
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet', ping_timeout=60, ping_interval=25)

games = {}
BOARD_SIZE = 24
WINNING_SCORE = 10

def generate_pin():
    return ''.join(random.choices(string.digits, k=6))

def get_sid():
    return getattr(request, 'sid', None)

def get_player_index(game, sid):
    for i, player in enumerate(game['players']):
        if player['id'] == sid:
            return i
    return -1

def is_player_in_game(game, sid):
    return get_player_index(game, sid) >= 0

def is_current_player(game, sid):
    if not game['players']:
        return False
    current_player = game['players'][game['currentPlayerIndex']]
    return current_player['id'] == sid

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

@socketio.on('connect')
def handle_connect():
    print(f"Client connected: {get_sid()}")

@socketio.on('create_game')
def create_game(data):
    pin = generate_pin()
    while pin in games:
        pin = generate_pin()
    
    player_name = data.get('name', 'Host')
    player_genius = data.get('genius', 'einstein')
    sid = get_sid()
    
    games[pin] = {
        'host': sid,
        'players': [{
            'id': sid,
            'name': player_name,
            'position': 0,
            'score': 0,
            'genius': player_genius
        }],
        'started': False,
        'currentPlayerIndex': 0,
        'usedQuestions': {cat: [] for cat in ['zoogdieren', 'vogels', 'vissen', 'reptielen', 'insecten', 'huisdieren']}
    }
    
    join_room(pin)
    emit('game_created', {'pin': pin, 'players': games[pin]['players']})

@socketio.on('join_game')
def handle_join_game(data):
    pin = data.get('pin', '').strip()
    player_name = data.get('name', 'Speler')
    player_genius = data.get('genius', 'curie')
    sid = get_sid()
    
    if pin not in games:
        emit('error', {'message': 'Spelcode niet gevonden'})
        return
    
    if games[pin]['started']:
        emit('error', {'message': 'Het spel is al begonnen'})
        return
    
    if len(games[pin]['players']) >= 4:
        emit('error', {'message': 'Het spel is vol (max 4 spelers)'})
        return
    
    games[pin]['players'].append({
        'id': sid,
        'name': player_name,
        'position': 0,
        'score': 0,
        'genius': player_genius
    })
    
    join_room(pin)
    emit('joined_game', {'pin': pin, 'players': games[pin]['players']})
    emit('player_joined', {'players': games[pin]['players']}, to=pin)

@socketio.on('start_game')
def handle_start_game(data):
    pin = data.get('pin')
    sid = get_sid()
    
    if pin not in games:
        return
    
    game = games[pin]
    
    if game['host'] != sid:
        emit('error', {'message': 'Alleen de host kan het spel starten'})
        return
    
    game['started'] = True
    game['currentPlayerIndex'] = 0
    
    emit('game_started', {
        'players': game['players'],
        'currentPlayerIndex': 0
    }, to=pin)

@socketio.on('roll_dice')
def handle_roll_dice(data):
    pin = data.get('pin')
    sid = get_sid()
    
    if pin not in games:
        return
    
    game = games[pin]
    
    if not is_player_in_game(game, sid):
        return
    
    if not is_current_player(game, sid):
        emit('error', {'message': 'Het is niet jouw beurt'})
        return
    
    result = random.randint(1, 6)
    current_player = game['players'][game['currentPlayerIndex']]
    
    new_position = (current_player['position'] + result) % BOARD_SIZE
    current_player['position'] = new_position
    
    emit('dice_rolled', {
        'result': result,
        'playerId': current_player['id'],
        'newPosition': new_position,
        'players': game['players']
    }, to=pin)

@socketio.on('answer_question')
def handle_answer_question(data):
    pin = data.get('pin')
    correct = data.get('correct', False)
    is_bonus = data.get('isBonus', False)
    sid = get_sid()
    
    if pin not in games:
        return
    
    game = games[pin]
    
    if not is_player_in_game(game, sid):
        return
    
    if not is_current_player(game, sid):
        return
    
    current_player = game['players'][game['currentPlayerIndex']]
    
    if correct:
        points = 2 if is_bonus else 1
        current_player['score'] += points
    
    if current_player['score'] >= WINNING_SCORE:
        emit('game_over', {
            'winner': current_player,
            'players': game['players']
        }, to=pin)
    else:
        game['currentPlayerIndex'] = (game['currentPlayerIndex'] + 1) % len(game['players'])
        emit('turn_changed', {
            'players': game['players'],
            'currentPlayerIndex': game['currentPlayerIndex']
        }, to=pin)

@socketio.on('disconnect')
def handle_disconnect():
    sid = get_sid()
    for pin, game in list(games.items()):
        player_index = get_player_index(game, sid)
        if player_index >= 0:
            was_current_player = (player_index == game['currentPlayerIndex'])
            game['players'].pop(player_index)
            
            if len(game['players']) == 0:
                del games[pin]
            else:
                if game['currentPlayerIndex'] >= len(game['players']):
                    game['currentPlayerIndex'] = 0
                elif was_current_player and player_index < len(game['players']):
                    pass
                elif player_index < game['currentPlayerIndex']:
                    game['currentPlayerIndex'] -= 1
                
                emit('player_left', {
                    'players': game['players'],
                    'currentPlayerIndex': game['currentPlayerIndex']
                }, to=pin)
            break

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=False)
