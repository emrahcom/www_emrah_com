#!/usr/bin/python
#-*- coding: utf8 -*-

import sys
import random

# Meallerin yer aldigi ana klasor.
BASEDIR = '/home/emrah/proje/www_emrah_com/public_html'
# Ayet blogunun yer aldigi include dosya.
INC = '/home/emrah/proje/www_emrah_com/public_html/inc/kuran.html'

# Sure listesi.
sureler = {
    1: (7, ('Fâtiha', 'fatiha'), ('Fâtiha', 'fatiha')),
    2: (286, ('Bakara', 'bakara'), ('Bakara', 'bakara')),
    3: (200, ('Âl-i İmran', 'ali imran'), ('Âl-i İmrân', 'ali imran')),
    4: (176, ('Nisa', 'nisa'), ('Nisâ', 'nisa')),
    5: (120, ('Mâide', 'maide'), ('Mâide', 'maide')),
    6: (165, ('En\'am', 'enam'), ('En’âm', 'enam')),
    7: (206, ('Araf', 'araf'), ('A’râf', 'araf')),
    8: (75, ('Enfâl', 'enfal'), ('Enfâl', 'enfal')),
    9: (129, ('Bara\'e', 'barae'), ('Tevbe', 'tevbe')),
    10: (109, ('Yunus', 'yunus'), ('Yûnus', 'yunus')),
    11: (123, ('Hûd', 'hud'), ('Hûd', 'hud')),
    12: (111, ('Yûsuf', 'yusuf'), ('Yûsuf', 'yusuf')),
    13: (43, ('Ra\'d', 'rad'), ('Ra’d', 'rad')),
    14: (52, ('İbrahim', 'ibrahim'), ('İbrahim', 'ibrahim')),
    15: (99, ('Hicr', 'hicr'), ('Hicr', 'hicr')),
    16: (128, ('Nahl', 'nahl'), ('Nahl', 'nahl')),
    17: (111, ('Beni İsrail', 'beni israil'), ('İsrâ', 'isra')),
    18: (110, ('Kehf', 'kehf'), ('Kehf', 'kehf')),
    19: (98, ('Meryem', 'meryem'), ('Meryem', 'meryem')),
    20: (135, ('Tâ Hâ', 'ta ha'), ('Tâ-Hâ', 'ta ha')),
    21: (112, ('Enbiya', 'enbiya'), ('Enbiyâ', 'enbiya')),
    22: (78, ('Hac', 'hac'), ('Hac', 'hac')),
    23: (118, ('Muminûn', 'muminun'), ('Mü’minûn', 'muminun')),
    24: (64, ('Nûr', 'nur'), ('Nûr', 'nur')),
    25: (77, ('Furkan', 'furkan'), ('Furkân', 'furkan')),
    26: (227, ('Şuara', 'suara'), ('Şu’arâ', 'suara')),
    27: (93, ('Neml', 'neml'), ('Neml', 'neml')),
    28: (88, ('Kasas', 'kasas'), ('Kasas', 'kasas')),
    29: (69, ('Ankebût', 'ankebut'), ('Ankebût', 'ankebut')),
    30: (60, ('Rûm', 'rum'), ('Rûm', 'rum')),
    31: (34, ('Lokman', 'lokman'), ('Lokman', 'lokman')),
    32: (30, ('Secde', 'secde'), ('Secde', 'secde')),
    33: (73, ('Ahzâb', 'ahzab'), ('Ahzâb', 'ahzab')),
    34: (54, ('Sebe', 'sebe'), ('Sebe', 'sebe')),
    35: (45, ('Fâtır', 'fatir'), ('Fâtır', 'fatir')),
    36: (83, ('Yâsin', 'yasin'), ('Yâsîn', 'yasin')),
    37: (182, ('Saffât', 'saffat'), ('Sâffât', 'saffat')),
    38: (88, ('Sâd', 'sad'), ('Sâd', 'sad')),
    39: (75, ('Zümer', 'zumer'), ('Zümer', 'zumer')),
    40: (85, ('Ğafir', 'gafir'), ('Mü’min', 'mumin')),
    41: (54, ('Fussilet', 'fussilet'), ('Fussilet', 'fussilet')),
    42: (53, ('Şûra', 'sura'), ('Şûrâ', 'sura')),
    43: (89, ('Zuhruf', 'zuhruf'), ('Zuhruf', 'zuhruf')),
    44: (59, ('Dühân', 'duhan'), ('Duhân', 'duhan')),
    45: (37, ('Câsiye', 'casiye'), ('Câsiye', 'casiye')),
    46: (35, ('Ahkaf', 'ahkaf'), ('Ahkâf', 'ahkaf')),
    47: (38, ('Muhammed', 'muhammed'), ('Muhammed', 'muhammed')),
    48: (29, ('Fetih', 'fetih'), ('Fetih', 'fetih')),
    49: (18, ('Hucurât', 'hucurat'), ('Hucurât', 'hucurat')),
    50: (45, ('Qaf', 'qaf'), ('Kâf', 'kaf')),
    51: (60, ('Zâriyât', 'zariyat'), ('Zâriyât', 'zariyat')),
    52: (49, ('Tûr', 'tur'), ('Tûr', 'tur')),
    53: (62, ('Necm', 'necm'), ('Necm', 'necm')),
    54: (55, ('Kamer', 'kamer'), ('Kamer', 'kamer')),
    55: (78, ('Rahman', 'rahman'), ('Rahmân', 'rahman')),
    56: (96, ('Vâkıa', 'vakia'), ('Vâkı’a', 'vakia')),
    57: (29, ('Hadîd', 'hadid'), ('Hadîd', 'hadid')),
    58: (22, ('Mücâdile', 'mucadile'), ('Mücâdele', 'mucadele')),
    59: (24, ('Haşr', 'hasr'), ('Haşr', 'hasr')),
    60: (13, ('Mumtahine', 'mumtahine'), ('Mümtehine', 'mumtehine')),
    61: (14, ('Saff', 'saff'), ('Saff', 'saff')),
    62: (11, ('Cuma', 'cuma'), ('Cum’a', 'cuma')),
    63: (11, ('Munâfikûn', 'munafikun'), ('Münâfikûn', 'munafikun')),
    64: (18, ('Teğâbun', 'tegabun'), ('Teğâbun', 'tegabun')),
    65: (12, ('Talâk', 'talak'), ('Talâk', 'talak')),
    66: (12, ('Tahrim', 'tahrim'), ('Tahrîm', 'tahrim')),
    67: (30, ('Mulk', 'mulk'), ('Mülk', 'mulk')),
    68: (52, ('Kalem', 'kalem'), ('Kalem', 'kalem')),
    69: (52, ('Hâkka', 'hakka'), ('Hâkka', 'hakka')),
    70: (44, ('Meâric', 'mearic'), ('Me’âric', 'mearic')),
    71: (28, ('Nuh', 'nuh'), ('Nûh', 'nuh')),
    72: (28, ('Cin', 'cin'), ('Cin', 'cin')),
    73: (20, ('Müzemmil', 'muzemmil'), ('Müzzemmil', 'muzzemmil')),
    74: (56, ('Muddessir', 'muddessir'), ('Müddessir', 'muddessir')),
    75: (40, ('Kıyame', 'kiyame'), ('Kıyâme', 'kiyame')),
    76: (31, ('İnsan', 'insan'), ('İnsan', 'insan')),
    77: (50, ('Mürselât', 'murselat'), ('Mürselât', 'murselat')),
    78: (40, ('Nebe', 'nebe'), ('Nebe', 'nebe')),
    79: (46, ('Nâziât', 'naziat'), ('Nâzi’ât', 'naziat')),
    80: (42, ('Abese', 'abese'), ('Abese', 'abese')),
    81: (29, ('Tekvir', 'tekvir'), ('Tekvîr', 'tekvir')),
    82: (19, ('İntifâr', 'intifar'), ('İnfitâr', 'infitar')),
    83: (36, ('Mutaffifîn', 'mutaffifin'), ('Mutaffifîn', 'mutaffifin')),
    84: (25, ('İnşikak', 'insikak'), ('İnşikâk', 'insikak')),
    85: (22, ('Bürûc', 'buruc'), ('Bürûc', 'buruc')),
    86: (17, ('Târık', 'tarik'), ('Târık', 'tarik')),
    87: (19, ('A\'la', 'ala'), ('A’lâ', 'ala')),
    88: (26, ('Ğâşiye', 'gasiye'), ('Gâşiye', 'gasiye')),
    89: (30, ('Fecr', 'fecr'), ('Fecr', 'fecr')),
    90: (20, ('Beled', 'beled'), ('Beled', 'beled')),
    91: (15, ('Şems', 'sems'), ('Şems', 'sems')),
    92: (21, ('Leyl', 'leyl'), ('Leyl', 'leyl')),
    93: (11, ('Duha', 'duha'), ('Duhâ', 'duha')),
    94: (8, ('Şarh', 'sarh'), ('İnşirâh', 'insirah')),
    95: (8, ('Tîn', 'tin'), ('Tîn', 'tin')),
    96: (19, ('Alak', 'alak'), ('Alak', 'alak')),
    97: (5, ('Kadr', 'kadr'), ('Kadr', 'kadr')),
    98: (8, ('Beyyine', 'beyyine'), ('Beyyine', 'beyyine')),
    99: (8, ('Zilzâl', 'zilzal'), ('Zilzâl', 'zilzal')),
    100: (11, ('Âdiyât', 'adiyat'), ('Âdiyât', 'adiyat')),
    101: (11, ('Karia', 'karia'), ('Kâri’a', 'karia')),
    102: (8, ('Tekâsür', 'tekasur'), ('Tekâsür', 'tekasur')),
    103: (3, ('Asr', 'asr'), ('Asr', 'asr')),
    104: (9, ('Humeze', 'humeze'), ('Hümeze', 'humeze')),
    105: (5, ('Fil', 'fil'), ('Fil', 'fil')),
    106: (4, ('Kureyş', 'kureys'), ('Kureyş', 'kureys')),
    107: (7, ('Mâun', 'maun'), ('Mâ’ûn', 'maun')),
    108: (3, ('Kevser', 'kevser'), ('Kevser', 'kevser')),
    109: (6, ('Kâfirûn', 'kafirun'), ('Kâfirûn', 'kafirun')),
    110: (3, ('Nasr', 'nasr'), ('Nasr', 'nasr')),
    111: (5, ('Mesed', 'mesed'), ('Tebbet', 'tebbet')),
    112: (4, ('İhlâs', 'ihlas'), ('İhlâs', 'ihlas')),
    113: (5, ('Felak', 'felak'), ('Felâk', 'felak')),
    114: (6, ('Nâs', 'nas'), ('Nâs', 'nas')),
}



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
# Verilen meal numarasina gore ayet blogunu olusturur.
def get_block(mealno, sure, ayetno):
    try:
        suread = sure[mealno][0]
        surekod = sure[mealno][1]
        ayetpath = '%s/meal%s/%s/%s/index.html' % \
                   (BASEDIR, mealno, surekod, ayetno)
        surelink = 'meal%s/%s/sure.txt' % (mealno, surekod)

        # Ayet metnini al.
        with open(ayetpath, 'r') as f:
            ayet = f.read().strip()

        block = """
		<span class="h3">
		&gt;&gt;&gt;
		<a href="%s" title="%s %s">
		%s
		</a></span>""" % (surelink, encode(suread), ayetno,
                                  encode(ayet))

        return block
    except Exception, err:
        sys.stderr.write(str(err))
        return ''



# --------------------------------------------------------------------
try:
    sureno = random.sample(sureler.keys(), 1)[0]
    sure = sureler[sureno]
    ayetno = random.randint(1, sure[0])

    # Include file iceriginde kullanilacak bloklari hazirla.
    block1 = get_block(1, sure, ayetno)
    block2 = get_block(2, sure, ayetno)

    # Include file icerigini kaydet.
    with open(INC, 'w') as f:
        f.write(block1)
        f.write('\n\n		<br />\n')
        f.write(block2)

    sys.exit(0)
except Exception, err:
    sys.stderr.write(str(err))
    sys.exit(1)
