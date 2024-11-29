import os
import hashlib
import sqlite3
import src.config as config
import src.utils as utils

con = sqlite3.connect(config.USER_DB_PATH)
cur = con.cursor()

def initialize_db():
    cur.execute('''
    CREATE TABLE IF NOT EXISTS user (
        uuid TEXT PRIMARY KEY,
        id TEXT NOT NULL,
        pw TEXT NOT NULL,
        name TEXT,
        email TEXT
    )
    ''')
    con.commit()
initialize_db()

def signup(id, pw, name, email=None):
    cur.execute(f"SELECT * FROM user WHERE id = '{id}'")
    if cur.fetchone():
        return False

    hashed_pw = hashlib.sha256(pw.encode()).hexdigest()
    uuid = utils.generate_uuid()
    cur.execute("INSERT INTO user (uuid, id, pw, name, email) VALUES (?, ?, ?, ?, ?)", (uuid, id, hashed_pw, name, email))
    con.commit()
    return True

def signin(id, pw, name):
    hashed_pw = hashlib.sha256(pw.encode()).hexdigest()
    cur.execute(f"SELECT * FROM user WHERE id = '{id}' AND pw = '{hashed_pw}'")
    user = cur.fetchone()
    if user:
        return {
            'uuid': user[0],
            'id': user[1],
            'pw': user[2],
            'name': user[3],
            'email': user[4]
        }
    return None

def delete(uuid):
    cur.execute(f"DELETE FROM user WHERE uuid = '{uuid}'")
    con.commit()
    
def update(uuid, id=None, pw=None, name=None, email=None):
    if id:
        cur.execute("UPDATE user SET id = ? WHERE uuid = ?", (id, uuid))
    if pw:
        hashed_pw = hashlib.sha256(pw.encode()).hexdigest()
        cur.execute("UPDATE user SET pw = ? WHERE uuid = ?", (hashed_pw, uuid))
    if name:
        cur.execute("UPDATE user SET name = ? WHERE uuid = ?", (name, uuid))
    if email:
        cur.execute("UPDATE user SET email = ? WHERE uuid = ?", (email, uuid))
    con.commit()