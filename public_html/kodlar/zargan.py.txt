#!/usr/bin/python
# -*- coding:utf-8 -*-

"""
    file    : zargan.py
    author      : emrah
    usage       : zargan.py word

    This script is a console based Zargan interface. Zargan is a
    Turkish-English dictionary web site: www.zargan.com
"""

import re
import sys
import httplib
import urllib
import socket
import HTMLParser

# Debug mode. 0 for production, 1 for testing.
DEBUG = 0
# Color mode for print out. 0 for no color, 1 for colored print out.
COLORED = 1
# Server address and web page.
SERVER = 'www.zargan.com'
PAGE = '/mobil/sozluk.asp'
# Regex pattern to parse word list block.
P_WORD_BLOCK = re.compile('<div id="listResults">(.*?)</div>', re.DOTALL)
# Regex pattern to parse (word, meaning) pair.
P_WORD_PAIR  = '.*?<span class="listString">(.*?)</span>'
P_WORD_PAIR += '.*?<a href=".*?">(.*?)</a>(.*)'
P_WORD_PAIR  = re.compile(P_WORD_PAIR, re.DOTALL)



# -----------------------------------------------------------------------------
def get_response_from_zargan(word):
    """
    Get response from Zargan web site for the given word(s). This is
    an unparsed HTML text.
    """
    try:
        header = {'Content-type'   : 'application/x-www-form-urlencoded',
                  'Accept'         : 'text:plain' }
        param = urllib.urlencode({'sozcuk': word})
        cnn = httplib.HTTPConnection(SERVER)
        socket.setdefaulttimeout(5)
        cnn.request('GET', PAGE, param, header)
        res = cnn.getresponse().read().decode('utf-8')
        cnn.close()

        result = HTMLParser.HTMLParser().unescape(res)
    except Exception, err:
        if DEBUG:
            raise
        else:
            sys.stderr.write('%s\n' % err)

        result = None

    return result



# -----------------------------------------------------------------------------
def get_dict_pairs(html):
    """
    Parse the unparsed HTML text to get (word, meaning) pairs.
    """
    try:
        result = []

        # Parse word list block.
        g = P_WORD_BLOCK.search(html)
        if not g:
            raise NameError('Word list block not found')
        html = g.group(1)

        # Parse (word, meaning) pairs
        while True:
            g = P_WORD_PAIR.search(html)
            if not g:
                break
            result.append((g.group(1).strip(), g.group(2).strip()))
            html = g.group(3)
    except Exception, err:
        if DEBUG:
            raise
        else:
            sys.stderr.write('%s\n' % err)

    return result



# -----------------------------------------------------------------------------
def print_dict_pairs(pairs):
    """
    Print out the (word, meaning) pairs.
    """
    try:
        # If no result found, print out :(
        if not pairs:
            sys.stderr.write(':(\n')

        for key, value in pairs:
            if COLORED:
                out =  "\033[35m%s\033[0m : " % (key.strip().encode('utf-8'))
                out += "%s\n" % (value.strip().encode('utf-8'))
            else:
                out =  "%s : " % (key.strip().encode('utf-8'))
                out += "%s\n"    % (value.strip().encode('utf-8'))

            sys.stdout.write(out)

        result = True
    except Exception, err:
        if DEBUG:
            raise
        else:
            sys.stderr.write('%s\n' % err)

        result = False

    return result




# -----------------------------------------------------------------------------
if __name__ == '__main__':
    try:
        # Get words as argument.
        if len(sys.argv) < 2:
            sys.stderr.write('Usage: %s word [word...]\n' % sys.argv[0])
            sys.exit(1)
        word = ' '.join(sys.argv[1:])

        # Get unparsed html response from zargan.com
        html = get_response_from_zargan(word)
        # Parse and get (word, meaning) pairs from html output.
        pairs = get_dict_pairs(html)
        # Print (word, meaning) pairs.
        print_dict_pairs(pairs)

        sys.exit(0)
    except Exception, err:
        if DEBUG:
            raise
        else:
            sys.stderr.write('%s\n' % err)

        sys.exit(1)
