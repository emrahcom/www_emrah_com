#!/usr/bin/python
# -*- coding: UTF-8 -*-

import  re
import  urllib2

INDEX   = '/home/emrah/proje/www_emrah_com/public_html/index2.html'

istek   = urllib2.Request('http://www.dilbert.com')

try:
        bag = urllib2.urlopen(istek)
except IOError:
        print u'siteye ba\011Flan\u0131lamad\u0131'
else:
        ham_metin = bag.read()
        bag.close

        # gunun resminin yolunu ve adini arayacak sablonu olustur
        sablon = re.compile('<img src="http://dilbert.com(/dyn/str_strip/.*?)"', re.IGNORECASE)

        # gunun resminin yolunu ve adini ara
        gruplar = sablon.search(ham_metin)

        if gruplar:
                # index2.html sayfasindaki linki degistir ve ...
                dosya = open(INDEX, 'r')
                icerik = dosya.read()
                dosya.close()

                icerik = re.sub('(<img src="http://www.dilbert.com)(/dyn/str_strip/.*?)(")', \
                                '\\1' + gruplar.group(1) + '\\3', \
                                icerik, \
                                re.DOTALL | re.IGNORECASE)

                # index2.html'in icerigi olarak kaydet
                dosya = open(INDEX, 'w')
                dosya.write(icerik)
                dosya.close()
        else:
                print('resim tesbit edilemedi')

