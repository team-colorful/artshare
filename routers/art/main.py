from flask import Blueprint, render_template, send_file

art_bp = Blueprint('art', __name__, url_prefix='/art')

@art_bp.route('/view')
def view():
    return render_template('art/view.html')

@art_bp.route('/edit')
def edit():
    return render_template('art/edit.html')

@art_bp.route('/search')
def search():
    return render_template('art/search.html')

@art_bp.route('/upload')
def upload():
    return render_template('art/upload.html')