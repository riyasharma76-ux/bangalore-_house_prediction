from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)

# Load the model when the app starts
util.load_saved_artifacts()

@app.route("/")
def home():
    return "Bangalore House Price Prediction API"

@app.route('/get_location_names')
def get_location_names():
    return jsonify({
        'locations': util.get_location_names()
    })

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])

    estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)

    return jsonify({
        'estimated_price': estimated_price
    })

if __name__ == "__main__":
    app.run()
