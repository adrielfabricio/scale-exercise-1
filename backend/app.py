import requests
from flask_cors import CORS
from flask import Flask, jsonify, request

URL = 'https://reqres.in/api/users'

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def users():
	global URL
	page = request.args.get('page')
	req = requests.get(url=f'{URL}?page={page}')
	print(req.json())
	data = req.json()
	
	return jsonify(data)

if __name__ == '__main__':
	app.run()