#!/usr/bin/python
# -*- coding: UTF-8 -*-

import sys
import re
import urllib2

# Gunun resminin yolunu ve adini arayacak sablonu olustur
PATTERN = 'SRC="http://www.userfriendly.org/(cartoons/archives/.*?)">'
PATTERN = re.compile(PATTERN, re.IGNORECASE)
# UserFriendly blogunu olusturan dosya.
FILE = '/home/emrah/proje/www_emrah_com/public_html/inc/userfriendly.new.html'

try:
    # userfriendly.org site icerigini al.
    req = urllib2.Request('http://www.userfriendly.org')
    cnn = urllib2.urlopen(req)
    res = cnn.read()
    cnn.close

    # Gunun resminin linkini tesbit et.
    g = PATTERN.search(res)
    if not g:
        raise NameError('Resim tesbit edilemedi')
    link = g.group(1)

    # UserFriendly blogunu olusturacak icerigi guncelle.
    block = """
		<a href="http://www.userfriendly.org/"
		title="Başka karikatürler de görmek istiyorsanız, tıklayınız">
		<img src="http://www.userfriendly.org/%s" alt="" />
		</a>
		<br />
		<span class="h3">
		<a href="http://www.userfriendly.org">From UserFriendly.org</a><br />
		Copyright © 2004 J.D. &quot;Illiad&quot; Frazer.
		</span><br />""" % (link)

    # UserFriendly blogunu olusturacak icerigi tasiyan dosyayi guncelle.
    with open(FILE, 'w') as f:
        f.write(block)
        f.close()

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
