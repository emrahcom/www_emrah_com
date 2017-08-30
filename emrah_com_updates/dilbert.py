#!/usr/bin/python
# -*- coding: UTF-8 -*-

import sys
import re
import urllib2

# Gunun resminin yolunu ve adini arayacak sablonu olustur
PATTERN = '<img.*?src="http://assets.amuniversal.com/(.*?)"'
PATTERN = re.compile(PATTERN, re.IGNORECASE)
# Dilbert blogunu olusturan dosya.
FILE = '/home/emrah/proje/www_emrah_com/public_html/inc/dilbert.new.html'

try:
    # dilbert.com site icerigini al.
    req = urllib2.Request('http://www.dilbert.com')
    cnn = urllib2.urlopen(req)
    res = cnn.read()
    cnn.close

    # Gunun resminin linkini tesbit et.
    g = PATTERN.search(res)
    if not g:
        raise NameError('Resim tesbit edilemedi')
    link = g.group(1)

    # Dilbert blogunu olusturacak icerigi guncelle.
    block = """
    <div id="dilbert" class="row">
        <div class="col-12 text-center">
            <a href="http://www.dilbert.com" class="nav-link">
                <img src="http://assets.amuniversal.com/%s" class="img-fluid" alt="" /><br/>
            </a>
            <a href="http://www.dilbert.com" class="nav-link">
                <small>From Dilbert.com</small>
            </a>
            <small>Copyright © Scott Adams</small>
        </div>
    </div>""" % (link)

    # Dilbert blogunu olusturacak icerigi tasiyan dosyayi guncelle.
    with open(FILE, 'w') as f:
        f.write(block)
        f.close()

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
