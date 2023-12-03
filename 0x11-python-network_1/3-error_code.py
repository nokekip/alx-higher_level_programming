#!/usr/bin/python3
'''
Dealing with http errors when requesting info from a server
'''

import urllib.request
import urllib.error
import sys


def fetch_url_content(url):
    try:
        with urllib.request.urlopen(url) as response:
            body = response.read().decode('utf-8')
            print(body)
    except urllib.error.HTTPError as e:
        print(f"Error code: {e.code}")


if __name__ == "__main__":
    url = sys.argv[1]
    fetch_url_content(url)
