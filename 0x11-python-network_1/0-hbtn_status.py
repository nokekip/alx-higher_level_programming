#!/usr/bin/python3

""" Module for fetching https://alx-intranet.hbtn.io/status """

import urllib.request

def get_status():
    with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as url:
        return url.read()

if __name__ == "__main__":
    # get status and print the body of the response
    status = get_status()
    print("Body response:")
    print("\t- type:", type(status))
    print("\t- content:", status)
    print("\t- utf8 content:", status.decode('utf-8'))