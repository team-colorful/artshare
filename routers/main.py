from flask import Blueprint, render_template, send_file, session
# import routers
from routers.art.main import art_bp
from routers.user.main import user_bp

main_bp = Blueprint('main', __name__)
main_bp.register_blueprint(art_bp)
main_bp.register_blueprint(user_bp)

@main_bp.route('/')
def index():
    return render_template('index.html', user_info=session.get('user_info', None))