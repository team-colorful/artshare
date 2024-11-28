import os
import dotenv
from flask import Flask, request, jsonify, render_template

dotenv.load_dotenv()

HOST_IP    =  str(os.getenv('HOST_IP'))
HOST_PORT  =  int(os.getenv('HOST_PORT'))
HOST_DEBUG = bool(os.getenv('HOST_DEBUG'))

app = Flask(__name__)

if __name__ == '__main__':
    app.run(host=HOST_IP, port=HOST_PORT, debug=HOST_DEBUG)