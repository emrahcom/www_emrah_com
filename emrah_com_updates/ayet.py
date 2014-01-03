#!/usr/bin/python
#-*- coding: utf8 -*-

import sys
import random

# Meallerin yer aldigi ana klasor.
BASEDIR = '/home/emrah/proje/www_emrah_com/public_html'
# Ayet blogunun yer aldigi include dosya.
INC = '/home/emrah/proje/www_emrah_com/public_html/inc/kuran.html'

# Meal listesi.
mealler = { 1: 'Muhammed Esed',
            2: 'Edip Yüksel' }

# Sure listesi.
sureler = {
    1: (7,   ('Fâtiha', 'fatiha'),
             ('Fatiha (Açılış)', 'fatiha (acilis)')),
    2: (286, ('Bakara', 'bakara'),
             ('Düve (Bakara)', 'duve (bakara)')),
    3: (200, ('Âl-i İmran', 'ali imran'),
             ('Al-i İmran (İmran Ailesi)', 'ali imran (imran ailesi)')),
    4: (176, ('Nisa', 'nisa'),
             ('Nisa (Kadın)', 'nisa (kadin)')),
    5: (120, ('Mâide', 'maide'),
             ('Maide (Ziyafet)', 'maide (ziyafet)')),
    6: (165, ('En\'am', 'enam'),
             ('En’am (Çiftlik Hayvanları)', 'enam (ciftlik hayvanlari)')),
    7: (206, ('Araf', 'araf'),
             ('Araf (Orta Yer)', 'araf (orta yer)')),
    8: (75,  ('Enfâl', 'enfal'),
             ('Enfal (Ganimetler)', 'enfal (ganimetler)')),
    9: (129, ('Bara\'e', 'barae'),
             ('Bara’e (Ultimatom)', 'barae (ultimatom)')),
    10: (109,('Yunus', 'yunus'),
             ('Yunus (Yunus)', 'yunus (yunus)')),
    11: (123,('Hûd', 'hud'),
             ('Hud (Hud)', 'hud (hud)')),
    12: (111,('Yûsuf', 'yusuf'),
             ('Yusuf (Yusuf)', 'yusuf (yusuf)')),
    13: (43, ('Ra\'d', 'rad'),
             ('Ra’d (Gök Gürlemesi)', 'rad (gok gurlemesi)')),
    14: (52, ('İbrahim', 'ibrahim'),
             ('İbrahim (İbrahim)', 'ibrahim (ibrahim)')),
    15: (99, ('Hicr', 'hicr'),
             ('Hicr (Hicr Vadisi)', 'hicr (hicr vadisi)')),
    16: (128,('Nahl', 'nahl'),
             ('Nahl (Arı)', 'nahl (ari)')),
    17: (111,('Beni İsrail', 'beni israil'),
             ('Ben-i İsrail (İsrailoğulları)', 'beni israil (israilogullari)')),
    18: (110,('Kehf', 'kehf'),
             ('Kehf (Mağara)', 'kehf (magara)')),
    19: (98, ('Meryem', 'meryem'),
             ('Meryem (Meryem)', 'meryem (meryem)')),
    20: (135,('Tâ Hâ', 'ta ha'),
             ('Ta Ha (TT.H)', 'ta ha (tt.h)')),
    21: (112,('Enbiya', 'enbiya'),
             ('Enbiya (Peygamber)', 'enbiya (peygamber)')),
    22: (78, ('Hac', 'hac'),
             ('Hac (Yıllık Tartışma Konferansı)', 'hac (yillik tartisma konferansi)')),
    23: (118,('Muminûn', 'muminun'),
             ('Muminun (İnananlar)', 'muminun (inananlar)')),
    24: (64, ('Nûr', 'nur'),
             ('Nur (Işık)', 'nur (isik)')),
    25: (77, ('Furkan', 'furkan'),
             ('Furkan (Yasalar Kitabı)', 'furkan (yasalar kitabi)')),
    26: (227,('Şuara', 'suara'),
             ('Şuara (Şairler)', 'suara (sairler)')),
    27: (93, ('Neml', 'neml'),
             ('Neml (Karınca)', 'neml (karinca)')),
    28: (88, ('Kasas', 'kasas'),
             ('Kasas (Tarih)', 'kasas (tarih)')),
    29: (69, ('Ankebût', 'ankebut'),
             ('Ankebut (Dişi Örümcek)', 'ankebut (disi orumcek)')),
    30: (60, ('Rûm', 'rum'),
             ('Rum (Romalılar)', 'rum (romalilar)')),
    31: (34, ('Lokman', 'lokman'),
             ('Lokman (Lokman)', 'lokman (lokman)')),
    32: (30, ('Secde', 'secde'),
             ('Secde (Secde)', 'secde (secde)')),
    33: (73, ('Ahzâb', 'ahzab'),
             ('Ahzab (Partiler)', 'ahzab (partiler)')),
    34: (54, ('Sebe', 'sebe'),
             ('Sebe (Sebe)', 'sebe (sebe)')),
    35: (45, ('Fâtır', 'fatir'),
             ('Fatır (Yaratan)', 'fatir (yaratan)')),
    36: (83, ('Yâsin', 'yasin'),
             ('Ya Sin (Y.S.)', 'ya sin (y.s.)')),
    37: (182,('Saffât', 'saffat'),
             ('Saffat (Dizenler)', 'saffat (dizenler)')),
    38: (88, ('Sâd', 'sad'),
             ('Sad (SS)', 'sad (ss)')),
    39: (75, ('Zümer', 'zumer'),
             ('Zümer (Yığınlar)', 'zumer (yiginlar)')),
    40: (85, ('Ğafir', 'gafir'),
             ('Gafir (Bağışlayan)', 'gafir (bagislayan)')),
    41: (54, ('Fussilet', 'fussilet'),
             ('Fussilet (Açıklanmış)', 'fussilet (aciklanmis)')),
    42: (53, ('Şûra', 'sura'),
             ('Şura (Danışma)', 'sura (danisma)')),
    43: (89, ('Zuhruf', 'zuhruf'),
             ('Zuhruf (Gösteriş)', 'zuhruf (gosteris)')),
    44: (59, ('Dühân', 'duhan'),
             ('Duhan (Duman)', 'duhan (duman)')),
    45: (37, ('Câsiye', 'casiye'),
             ('Casiye (Diz Çöküş)', 'casiye (diz cokus)')),
    46: (35, ('Ahkaf', 'ahkaf'),
             ('Ahkaf (Kum Tepecikleri)', 'ahkaf (kum tepecikleri)')),
    47: (38, ('Muhammed', 'muhammed'),
             ('Muhammed (Muhammed)', 'muhammed (muhammed)')),
    48: (29, ('Fetih', 'fetih'),
             ('Fetih (Zafer)', 'fetih (zafer)')),
    49: (18, ('Hucurât', 'hucurat'),
             ('Hucurat (Odalar)', 'hucurat (odalar)')),
    50: (45, ('Qaf', 'qaf'),
             ('Qaf (Q)', 'qaf (q)')),
    51: (60, ('Zâriyât', 'zariyat'),
             ('Zariyat (Savuranlar)', 'zariyat (savuranlar)')),
    52: (49, ('Tûr', 'tur'),
             ('Tur (Sina Dağı)', 'tur (sina dagi)')),
    53: (62, ('Necm', 'necm'),
             ('Necm (Yıldızlar)', 'necm (yildizlar)')),
    54: (55, ('Kamer', 'kamer'),
             ('Kamer (Ay)', 'kamer (ay)')),
    55: (78, ('Rahman', 'rahman'),
             ('Rahman (Rahman)', 'rahman (rahman)')),
    56: (96, ('Vâkıa', 'vakia'),
             ('Vakıa (Kaçınılmaz Olay)', 'vakia (kacinilmaz olay)')),
    57: (29, ('Hadîd', 'hadid'),
             ('Hadid (Demir)', 'hadid (demir)')),
    58: (22, ('Mücâdile', 'mucadile'),
             ('Mücadele (Tartışma)', 'mucadele (tartisma)')),
    59: (24, ('Haşr', 'hasr'),
             ('Haşr (Sürgün)', 'hasr (surgun)')),
    60: (13, ('Mumtahine', 'mumtahine'),
             ('Mümtahine (Sorgulanan)', 'mumtahine (sorgulanan)')),
    61: (14, ('Saff', 'saff'),
             ('Saff (Düzenli Birlik)', 'saff (duzenli birlik)')),
    62: (11, ('Cuma', 'cuma'),
             ('Cuma (Cuma)', 'cuma (cuma)')),
    63: (11, ('Munâfikûn', 'munafikun'),
             ('Münafikun (İkiyüzlüler)', 'munafikun (ikiyuzluler)')),
    64: (18, ('Teğâbun', 'tegabun'),
             ('Tegabun (Aldanma)', 'tegabun (aldanma)')),
    65: (12, ('Talâk', 'talak'),
             ('Talak (Boşanma)', 'talak (bosanma)')),
    66: (12, ('Tahrim', 'tahrim'),
             ('Tahrim (Yasaklama)', 'tahrim (yasaklama)')),
    67: (30, ('Mulk', 'mulk'),
             ('Mülk (Yönetim)', 'mulk (yonetim)')),
    68: (52, ('Kalem', 'kalem'),
             ('Kalem (Kalem)', 'kalem (kalem)')),
    69: (52, ('Hâkka', 'hakka'),
             ('Hakka (Gerçekleşen)', 'hakka (gerceklesen)')),
    70: (44, ('Meâric', 'mearic'),
             ('Mearic (Yükseliş Yolları)', 'mearic (yukselis yollari)')),
    71: (28, ('Nuh', 'nuh'),
             ('Nuh (Nuh)', 'nuh (nuh)')),
    72: (28, ('Cin', 'cin'),
             ('Cin (Cin)', 'cin (cin)')),
    73: (20, ('Müzemmil', 'muzemmil'),
             ('Müzzemmil (Bürünen)', 'muzzemmil (burunen)')),
    74: (56, ('Muddessir', 'muddessir'),
             ('Müddesir (Gizlenen)', 'muddesir (gizlenen)')),
    75: (40, ('Kıyame', 'kiyame'),
             ('Kıyame (Diriliş)', 'kiyame (dirilis)')),
    76: (31, ('İnsan', 'insan'),
             ('İnsan (İnsan)', 'insan (insan)')),
    77: (50, ('Mürselât', 'murselat'),
             ('Mürselat (Gönderilenler)', 'murselat (gonderilenler)')),
    78: (40, ('Nebe', 'nebe'),
             ('Nebe (Haber)', 'nebe (haber)')),
    79: (46, ('Nâziât', 'naziat'),
             ('Naziat (Söküp Çıkaranlar)', 'naziat (sokup cikaranlar)')),
    80: (42, ('Abese', 'abese'),
             ('Abese (Surat Astı)', 'abese (surat asti)')),
    81: (29, ('Tekvir', 'tekvir'),
             ('Tekvir (Yuvarlama)', 'tekvir (yuvarlama)')),
    82: (19, ('İntifâr', 'intifar'),
             ('İnfitar (Yarılma)', 'infitar (yarilma)')),
    83: (36, ('Mutaffifîn', 'mutaffifin'),
             ('Mutaffıfin (Kandıranlar)', 'mutaffifin (kandiranlar)')),
    84: (25, ('İnşikak', 'insikak'),
             ('İnkişaf (Çatlama)', 'inkisaf (catlama)')),
    85: (22, ('Bürûc', 'buruc'),
             ('Buruc (Galaksiler)', 'buruc (galaksiler)')),
    86: (17, ('Târık', 'tarik'),
             ('Tarık (Parlak Yıldız)', 'tarik (parlak yildiz)')),
    87: (19, ('A\'la', 'ala'),
             ('A’la (Yüce)', 'ala (yuce)')),
    88: (26, ('Ğâşiye', 'gasiye'),
             ('Ğaşiye (Bunaltan)', 'gasiye (bunaltan)')),
    89: (30, ('Fecr', 'fecr'),
             ('Fecir (Tan)', 'fecir (tan)')),
    90: (20, ('Beled', 'beled'),
             ('Beled (Kent)', 'beled (kent)')),
    91: (15, ('Şems', 'sems'),
             ('Şems (Güneş)', 'sems (gunes)')),
    92: (21, ('Leyl', 'leyl'),
             ('Leyl (Gece)', 'leyl (gece)')),
    93: (11, ('Duha', 'duha'),
             ('Duha (Kuşluk)', 'duha (kusluk)')),
    94: (8,  ('Şarh', 'sarh'),
             ('İnşirah (Sakinleştirme)', 'insirah (sakinlestirme)')),
    95: (8,  ('Tîn', 'tin'),
             ('Tin (İncir)', 'tin (incir)')),
    96: (19, ('Alak', 'alak'),
             ('Alak (Embriyo)', 'alak (embriyo)')),
    97: (5,  ('Kadr', 'kadr'),
             ('Kadr (Kudret)', 'kadr (kudret)')),
    98: (8,  ('Beyyine', 'beyyine'),
             ('Beyyine (Kanıt)', 'beyyine (kanit)')),
    99: (8,  ('Zilzâl', 'zilzal'),
             ('Zilzal (Deprem)', 'zilzal (deprem)')),
    100: (11,('Âdiyât', 'adiyat'),
             ('Adiyat (Aşanlar)', 'adiyat (asanlar)')),
    101: (11,('Karia', 'karia'),
             ('Karia (Şok)', 'karia (sok)')),
    102: (8, ('Tekâsür', 'tekasur'),
             ('Tekasür (Çoğaltma Yarışı)', 'tekasur (cogaltma yarisi)')),
    103: (3, ('Asr', 'asr'),
             ('Asr (Çağ)', 'asr (cag)')),
    104: (9, ('Humeze', 'humeze'),
             ('Hümeze (Dedikoducu)', 'humeze (dedikoducu)')),
    105: (5, ('Fil', 'fil'),
             ('Fil (Fil)', 'fil (fil)')),
    106: (4, ('Kureyş', 'kureys'),
             ('Kureyş (Kureyş)', 'kureys (kureys)')),
    107: (7, ('Mâun', 'maun'),
             ('Maun (Yardımlaşma)', 'maun (yardimlasma)')),
    108: (3, ('Kevser', 'kevser'),
             ('Kevser (Bolluk)', 'kevser (bolluk)')),
    109: (6, ('Kâfirûn', 'kafirun'),
             ('Kafirun (İnkarcılar)', 'kafirun (inkarcilar)')),
    110: (3, ('Nasr', 'nasr'),
             ('Nasr (Yardım)', 'nasr (yardim)')),
    111: (5, ('Mesed', 'mesed'),
             ('Mesed (Diken)', 'mesed (diken)')),
    112: (4, ('İhlâs', 'ihlas'),
             ('İhlas (Özgüleme)', 'ihlas (ozguleme)')),
    113: (5, ('Felak', 'felak'),
             ('Felak (Şafak)', 'felak (safak)')),
    114: (6, ('Nâs', 'nas'),
             ('Nas (Halk)', 'nas (halk)'))
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
                <a href="%s" title="%s meali: %s %s">
		%s
		</a></span>""" % (surelink, mealler[mealno],
                                  encode(suread), ayetno,
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
