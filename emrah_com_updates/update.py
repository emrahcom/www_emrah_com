#!/usr/bin/python
# -*- coding: UTF-8 -*-

import sys
import  subprocess

BASEDIR = '/home/emrah/proje/www_emrah_com/public_html/inc'
INCS = ['userfriendly', 'dilbert']

try:
    # Guncellenmis herbir include dosyasini, gosterimde kullanilacak adiyla
    # kopyala.
    for inc in INCS:
        command = ['cp',
                   '%s/%s.new.html' % (BASEDIR, inc),
                   '%s/%s.html' % (BASEDIR, inc)]
        p = subprocess.Popen(command)
        p.wait()

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
