from flask import Blueprint, render_template, send_file, redirect, url_for, request, session
import src.utils as utils
import src.config as config
import src.modules.user as userctl

user_bp = Blueprint('user', __name__, url_prefix='/user')

@user_bp.route('/signup', methods=['POST'])
def signup():
    return redirect(url_for('main.index'))

@user_bp.route('/signin', methods=['POST'])
def signin():
    signin_id = request.form.get('signin-id')
    signin_pw = request.form.get('signin-pw')
    
    session['user_info'] = {
        'id': signin_id,
        'pw': signin_pw
    }
    
    return redirect(url_for('main.index'))

@user_bp.route('/signout')
def signout():
    session.pop('user_info', None)
    return redirect(url_for('main.index'))

@user_bp.route('/dashboard')
def dashboard():
    return render_template('user/dashboard.html')

@user_bp.route('/validate')
def validate():
    request_id = request.args.get('id')
    request_pw = request.args.get('pw')
    
    