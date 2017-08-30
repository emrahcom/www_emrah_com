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
    <div id="userfriendly" class="row">
        <div class="col-12 text-center">
            <a href="http://www.userfriendly.org/" class="nav-link">
                <img src="http://www.userfriendly.org/%s" class="img-fluid" alt="" /><br/>
            </a>
            <a href="http://www.userfriendly.org/" class="nav-link">
                <small>From UserFriendly.org</small>
            </a>
            <small>Copyright © J.D. &quot;Illiad&quot; Frazer.</small>
        </div>
    </div>""" % (link)

    # UserFriendly blogunu olusturacak icerigi tasiyan dosyayi guncelle.
    with open(FILE, 'w') as f:
        f.write(block)
        f.close()

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
