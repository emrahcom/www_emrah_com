#!/usr/bin/python
# -*- coding: UTF-8 -*-

import  os
import  subprocess

INDEX   = '/home/emrah/proje/www_emrah_com/public_html/index.html'
INDEX2  = '/home/emrah/proje/www_emrah_com/public_html/index2.html'

# crontab tarafindan dun hazirlanmis olan index2.html dosyasini, 
# index.html olarak kopyala
p      = subprocess.Popen('cp %s %s' % (INDEX2, INDEX), shell=True)
status = os.waitpid(p.pid, 0)[1]

