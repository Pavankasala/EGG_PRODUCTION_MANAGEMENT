# app.py
from flask import Flask, jsonify
from flask_cors import CORS # Import CORS

app = Flask(__name__)
# This is crucial to allow your React app to talk to this server
CORS(app) 

# This is your database for now. The backend is in charge of it.
egg_data = [
    {'id': 1, 'date': '2025-07-19', 'quantity': 210, 'grade': 'A', 'sold': True},
    {'id': 2, 'date': '2025-07-20', 'quantity': 225, 'grade': 'A', 'sold': False},
    {'id': 3, 'date': '2025-07-21', 'quantity': 215, 'grade': 'B', 'sold': False},
    {'id': 4, 'date': '2025-07-22', 'quantity': 230, 'grade': 'A', 'sold': True},
]

# This creates a URL (an API endpoint) for your React app to get data from
@app.route('/api/eggs')
def get_eggs():
    # We calculate total eggs and total sold on the backend
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
    # The server will run on http://127.0.0.1:5000
    app.run(debug=True)
