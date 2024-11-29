import datetime
import os
import hashlib

default_timef = "%Y%m%d%H%M%S"

def get_now_ftime(time_format: str | None = default_timef) -> str:
    time = datetime.now()
    f_time = time.strftime(time_format)
    return f_time

def convert_now_ftime(_time_str: str, _format = '%Y%m%d%H%M%S') -> datetime:
    return datetime.strptime(_time_str, _format)

def get_hash(_data = os.urandom(32)):
    return hashlib.sha256(_data).hexdigest()