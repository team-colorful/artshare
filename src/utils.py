import os
import hashlib

def get_hash(_data = os.urandom(32)):
    return hashlib.sha256(_data).hexdigest()