#!/usr/bin/python
# -*- coding:utf-8 -*-

from glob       import glob
from os.path    import basename, exists

HOME                = '/home/emrah/proje/www_emrah_com'
DIRECTORIES         = [ 'public_html/notlar',
                        'public_html/kodlar']



# --------------------------------------------------------------------
# text dosyanin icerigini alir
def getTxt(file):
    try:
        d = open(file, 'r')
        txt = d.read()
        d.close()

        return txt
    except:
        return ''



# --------------------------------------------------------------------
# HTML verisi icinde olmamasi gereken karakterleri duzenler
def encode(txt):
    try:
        txt = txt.replace('&', '&amp;')
        txt = txt.replace('<', '&lt;')
        txt = txt.replace('>', '&gt;')
        txt = txt.replace('"', '&quot;')
        txt = txt.replace('^', '&circ;')
        txt = txt.replace('~', '&tilde;')
        txt = txt.replace('–', '&ndash;')
        txt = txt.replace('—', '&mdash;')

        return txt
    except:
        return ''



# --------------------------------------------------------------------
# text veriyi html'e donusturur
def txt2html(filename, txt):
        try:
            cevap = '<?xml version="1.0" encoding="UTF-8"?>\n'
            cevap += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n'
            cevap += '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="tr" lang="tr">\n'
            cevap += '<head>\n'
            cevap += '<meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8" />\n'
            cevap += '<title>%s</title>\n'
            cevap += '</head>\n'
            cevap += '<body>\n'
            cevap += '<pre><code>\n'
            cevap += '%s'
            cevap += '</code></pre>\n'
            cevap += '</body>\n'
            cevap += '</html>'
            cevap = cevap % (filename, encode(txt))

            return cevap
        except:
            return ''



# --------------------------------------------------------------------
# html dosyayi oluşturur
def createHtmlFile(path, html):
    try:
        htmlfile = '%s.html' % path

        if exists(htmlfile):
            d = open(htmlfile, 'r')
            txt = d.read()
            d.close()
            if txt == html: return True

        d = open(htmlfile, 'w')
        d.write(html)
        d.close()

        return True
    except:
        return False



# --------------------------------------------------------------------
for dir in DIRECTORIES:
    for path in glob('%s/%s/*.txt' % (HOME, dir)):
        filename = basename(path)
        txt = getTxt(path)
        html = txt2html(filename, txt)
        createHtmlFile(path, html)

