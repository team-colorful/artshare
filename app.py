import os
import dotenv
from flask import Flask, request, jsonify, render_template, session
# import main router
from routers.main import main_bp

dotenv.load_dotenv()

HOST_IP    =  str(os.getenv('HOST_IP'))
HOST_PORT  =  int(os.getenv('HOST_PORT'))
HOST_DEBUG = bool(os.getenv('HOST_DEBUG'))

app = Flask(__name__)
app.register_blueprint(main_bp)
app.secret_key = os.urandom(24)

if __name__ == '__main__':
    app.run(host=HOST_IP, port=HOST_PORT, debug=HOST_DEBUG)