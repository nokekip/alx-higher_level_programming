#!/usr/bin/python3

def safe_function(fct, *args):
    from sys import stderr
    try:
        safe = fct(*args)
        return (safe)

    except Exception as r:
        print("Exception: {}".format(r), file=stderr)

        return None
