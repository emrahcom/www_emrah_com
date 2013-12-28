#!/usr/bin/python
# -*- coding: UTF-8 -*-

import sys
import re
import urllib2

# Gunun resminin yolunu ve adini arayacak sablonu olustur
PATTERN = '<img src="http://dilbert.com/(dyn/str_strip/.*?)"'
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
		<a href="http://www.dilbert.com/"
		title="Başka karikatürler de görmek istiyorsanız, tıklayınız">
		<img src="http://www.dilbert.com/%s" alt="" />
		</a>
		<br />
		<span class="h3">
		<a href="http://www.dilbert.com">From Dilbert.com</a><br />
		Copyright © Scott Adams, Inc./Dist. by UFS, Inc.
		</span><br />""" % (link)

    # Dilbert blogunu olusturacak icerigi tasiyan dosyayi guncelle.
    with open(FILE, 'w') as f:
        f.write(block)
        f.close()

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
