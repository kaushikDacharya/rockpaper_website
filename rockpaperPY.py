from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/compute', methods=['POST'])
def result():
    data = request.get_json()
    playerhand = data['playerhand']
    computerhand = data['computerhand']

    hands = {
        'rock':    np.array([1, 0, 0]),
        'scissor': np.array([0, 1, 0]),
        'paper':   np.array([0, 0, 1])
    }

    v_player   = hands[playerhand]
    v_computer = hands[computerhand]
    resulting  = np.cross(v_player, v_computer)

    if np.array_equal(resulting, [0, 0, 0]):
        return jsonify({"result": "draw"})
    elif np.array_equal(resulting, [1, 0, 0]) or np.array_equal(resulting, [0, 1, 0]) or np.array_equal(resulting, [0, 0, 1]):
        return jsonify({"result": "win"})
    else:
        return jsonify({"result": "lose"})

if __name__ == "__main__":
    app.run(debug=True) 