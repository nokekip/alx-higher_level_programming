#!/usr/bin/python3

"""Script to send a POST request to a URL with
an email parameter and display the response body."""

import urllib.request
import urllib.parse
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]

    data = urllib.parse.urlencode({'email': email}).encode('utf-8')

    request = urllib.request.Request(url, data)

    with urllib.request.urlopen(request) as response:
        body = response.read()
        print(body.decode('utf-8'))
