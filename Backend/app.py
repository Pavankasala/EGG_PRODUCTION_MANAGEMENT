from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

egg_data = [
    {'id': 1, 'date': '2025-07-19', 'quantity': 210, 'grade': 'A', 'sold': True},
    {'id': 2, 'date': '2025-07-20', 'quantity': 225, 'grade': 'A', 'sold': False},
    {'id': 3, 'date': '2025-07-21', 'quantity': 215, 'grade': 'B', 'sold': False},
    {'id': 4, 'date': '2025-07-22', 'quantity': 230, 'grade': 'A', 'sold': True},
]

@app.route('/api/eggs')
def get_eggs():
    total_eggs = sum(item['quantity'] for item in egg_data)
    total_sold = sum(item['quantity'] for item in egg_data if item['sold'])
    
    response_data = {
        'egg_batches': egg_data,
        'total_eggs': total_eggs,
        'total_sold': total_sold,
        'in_stock': total_eggs - total_sold
    }
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
