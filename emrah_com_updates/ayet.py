#!/usr/bin/python
#-*- coding: utf8 -*-

import sys
import random

# Surelerin yer aldigi ana klasor.
BASEDIR = '/home/emrah/proje/www_emrah_com/public_html/kuran'
# Ayet blogunun yer aldigi include dosya.
INC = '/home/emrah/proje/www_emrah_com/public_html/inc/kuran.html'

# Sure listesi.
sureler = {'Abese': ['abese', 42],
           'Âdiyât': ['adiyat', 11],
           'Ahkaf': ['ahkaf', 35],
           'Ahzâb': ['ahzab', 73],
           'A\'la': ['ala', 19],
           'Alak': ['alak', 19],
           'Âl-i İmran': ['ali imran', 200],
           'Ankebût': ['ankebut', 69],
           'Araf': ['araf', 206],
           'Asr': ['asr', 3],
           'Bakara': ['bakara', 286],
           'Bara\'e': ['barae', 129],
           'Beled': ['beled', 20],
           'Beni İsrail': ['beni israil', 111],
           'Beyyine': ['beyyine', 8],
           'Bürûc': ['buruc', 22],
           'Câsiye': ['casiye', 37],
           'Cin': ['cin', 28],
           'Cuma': ['cuma', 11],
           'Duha': ['duha', 11],
           'Dühân': ['duhan', 59],
           'En\'am': ['enam', 165],
           'Enbiya': ['enbiya', 112],
           'Enfâl': ['enfal', 75],
           'Fâtiha': ['fatiha', 7],
           'Fâtır': ['fatir', 45],
           'Fecr': ['fecr', 30],
           'Felak': ['felak', 5],
           'Fetih': ['fetih', 29],
           'Fil': ['fil', 5],
           'Furkan': ['furkan', 77],
           'Fussilet': ['fussilet', 54],
           'Ğafir': ['gafir', 85],
           'Ğâşiye': ['gasiye', 26],
           'Hac': ['hac', 78],
           'Hadîd': ['hadid', 29],
           'Hâkka': ['hakka', 52],
           'Haşr': ['hasr', 24],
           'Hicr': ['hicr', 99],
           'Hucurât': ['hucurat', 18],
           'Hûd': ['hud', 123],
           'Humeze': ['humeze', 9],
           'İbrahim': ['ibrahim', 52],
           'İhlâs': ['ihlas', 4],
           'İnsan': ['insan', 31],
           'İnşikak': ['insikak', 25],
           'İntifâr': ['intifar', 19],
           'Kadr': ['kadr', 5],
           'Kâfirûn': ['kafirun', 6],
           'Kalem': ['kalem', 52],
           'Kamer': ['kamer', 55],
           'Karia': ['karia', 11],
           'Kasas': ['kasas', 88],
           'Kehf': ['kehf', 110],
           'Kevser': ['kevser', 3],
           'Kıyame': ['kiyame', 40],
           'Kureyş': ['kureys', 4],
           'Leyl': ['leyl', 21],
           'Lokman': ['lokman', 34],
           'Mâide': ['maide', 120],
           'Mâun': ['maun', 7],
           'Meâric': ['mearic', 44],
           'Meryem': ['meryem', 98],
           'Mesed': ['mesed', 5],
           'Mücâdile': ['mucadile', 22],
           'Muddessir': ['muddessir', 56],
           'Muhammed': ['muhammed', 38],
           'Mulk': ['mulk', 30],
           'Muminûn': ['muminun', 118],
           'Mumtahine': ['mumtahine', 13],
           'Munâfikûn': ['munafikun', 11],
           'Mürselât': ['murselat', 50],
           'Mutaffifîn': ['mutaffifin', 36],
           'Müzemmil': ['muzemmil', 20],
           'Nahl': ['nahl', 128],
           'Nâs': ['nas', 6],
           'Nasr': ['nasr', 3],
           'Nâziât': ['naziat', 46],
           'Nebe': ['nebe', 40],
           'Necm': ['necm', 62],
           'Neml': ['neml', 93],
           'Nisa': ['nisa', 176],
           'Nuh': ['nuh', 28],
           'Nûr': ['nur', 64],
           'Qaf': ['qaf', 45],
           'Ra\'d': ['rad', 43],
           'Rahman': ['rahman', 78],
           'Rûm': ['rum', 60],
           'Sâd': ['sad', 88],
           'Saffât': ['saffat', 182],
           'Saff': ['saff', 14],
           'Şarh': ['sarh', 8],
           'Sebe': ['sebe', 54],
           'Secde': ['secde', 30],
           'Şems': ['sems', 15],
           'Şuara': ['suara', 227],
           'Şûra': ['sura', 53],
           'Tâ Hâ': ['ta ha', 135],
           'Tahrim': ['tahrim', 12],
           'Talâk': ['talak', 12],
           'Târık': ['tarik', 17],
           'Teğâbun': ['tegabun', 18],
           'Tekâsür': ['tekasur', 8],
           'Tekvir': ['tekvir', 29],
           'Tîn': ['tin', 8],
           'Tûr': ['tur', 49],
           'Vâkıa': ['vakia', 96],
           'Yâsin': ['yasin', 83],
           'Yunus': ['yunus', 109],
           'Yûsuf': ['yusuf', 111],
           'Zâriyât': ['zariyat', 60],
           'Zilzâl': ['zilzal', 8],
           'Zuhruf': ['zuhruf', 89],
           'Zümer': ['zumer', 75]}



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
    except Exception, err:
        sys.stderr.write(str(err))
        return ''



# --------------------------------------------------------------------
try:
    sure = random.sample(sureler.keys(), 1)[0]
    surekod = sureler[sure][0]
    ayetno = random.randint(1, sureler[sure][1])
    ayetpath = '%s/%s/%s/index.html' % (BASEDIR, surekod, ayetno)
    surelink = 'kuran/%s/sure.txt' % (surekod)

    # Ayet metnini al.
    with open(ayetpath, 'r') as f:
        ayet = f.read().strip()

    # Include file icerigini hazirla.
    block = """
		<span class="h3">
		<a href="%s">
		%s
		</a></span>""" % (surelink, encode(ayet))

    # Include file icerigini kaydet.
    with open(INC, 'w') as f:
        f.write(block)

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
