#!/usr/bin/python3
# -*- coding:utf-8 -*-

"""
    file        : zargan.py author      : emrah
    usage       : zargan.py word

    This script is a console based Zargan interface. Zargan is a
    Turkish-English dictionary web site: www.zargan.com
"""

import re
import sys
import html
import requests

# Debug mode. 0 for production, 1 for testing.
DEBUG = 0
# Color mode for print out. 0 for no color, 1 for colored print out.
COLORED = 1
# Server address and web page.
PAGE = 'http://www.zargan.com/tr/q'
# Regex pattern to find translation.
RE_WORD = re.compile('<span class="red">(.*?)</span>(.*?)(<br>|\n|\r|$)')
# Regex pattern to find term.
RE_TERM = '<div class="resultsPane">.*?'
RE_TERM +='<div class="resultCell">.*?'
RE_TERM +='<a href="/tr/q/.*?">(.*?)</a>.*?'
RE_TERM +='<a href="/tr/q/.*?">(.*?)</a>'
RE_TERM = re.compile(RE_TERM, re.DOTALL)




# -----------------------------------------------------------------------------
if __name__ == '__main__':
    try:
        # Get words as argument.
        if len(sys.argv) < 2:
            sys.stderr.write('Usage: %s word [word...]\n' % sys.argv[0])
            sys.exit(1)
        word = ' '.join(sys.argv[1:])

        # Get unparsed html response from zargan.com
        res = requests.get('{}/{}'.format(PAGE, word))
        for (scope, translation, end) in RE_WORD.findall(res.text):
            item = ('(\033[36m{}\033[0m) {}'.format(
                        html.unescape(scope).strip(),
                        html.unescape(translation).strip())
                        if scope
                        else html.unescape(translation))
            print(item.strip())
        for (term, translation) in RE_TERM.findall(res.text):
            item = '\033[31m{}\033[0m : {}'.format(
                        html.unescape(term).strip(),
                        html.unescape(translation).strip())
            print(item.strip())

        sys.exit(0)
    except Exception as err:
        if DEBUG:
            raise
        else:
            sys.stderr.write('%s\n' % err)

        sys.exit(1)
