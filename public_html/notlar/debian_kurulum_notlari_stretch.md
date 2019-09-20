DEBIAN STRETCH KURULUM NOTLARI
==============================
Kurulum, Netinstall CD'si ile yapılacak.


Temel sistemin kurulması
------------------------
__Select a language__: English   
__Select your location__: other -> Asia -> Turkey   
__Configure locales__: United States en_US.UTF-8   
__Additional locales__: tr_TR.UTF-8   
__System Locale__: en_US.UTF-8   
__Select a keyboard layout__: PC-style -> Turkish (Q layout)   
__Configure the network__: Özel bi durum olmadıkça DHCP kulan   
__DNS__:
```
208.67.222.222
208.67.220.220
8.8.8.8
8.8.4.4
```

__Configure the clock (time zone)__: Europe/Istanbul   
__Partitition disks__: Manual   
__Partition table__: gpt   

#### örnek bölümlendirme 1
```
/       500 MB  sda1    (bootable)
/usr      5 GB  sda2    (~3 GB)
/var      5 GB  sda3    (~2 GB)
/tmp    500 MB  sda4    (tmpfs yapılabilir)
swap      1 GB  sda5    (hibernate için ~RAM)
/home     X GB  sda6
```

#### örnek bölümlendirme 2
```
/boot   100 MB  sda1    (bootable)
crypto    X GB  sda2    (mount to /)
```

SSD disk kullanılıyor ve TRIM desteği varsa ext4 partitionlarda discard
özelliği aktif hale getirilecek. Bütün partitionlarda noatime özelliği
aktif olsun.


Kurulum sonrası ilk ayarlar
---------------------------
#### /etc/apt/apt.conf.d/80recommends
```
APT::Install-Recommends "0";
APT::Install-Suggests "0";
```

#### /etc/apt/sources.list
```
deb http://ftp2.de.debian.org/debian/ stretch main non-free contrib
deb-src http://ftp2.de.debian.org/debian/ stretch main non-free contrib
deb http://security.debian.org/debian-security stretch/updates main contrib non-free
deb-src http://security.debian.org/debian-security stretch/updates main contrib non-free
```

#### Multimedia deposu kullanilacaksa...
```
deb http://www.deb-multimedia.org stretch main non-free
deb-src http://www.deb-multimedia.org stretch main non-free
```

#### x2go kullanılacaksa...
```
deb http://packages.x2go.org/debian stretch main
```

#### riot.im kurulacaksa...
```
deb https://riot.im/packages/debian/ stable main
```

#### Ring kurulacaksa...
```
deb https://dl.ring.cx/ring-nightly/debian_9/ ring main
```

#### Anahtar yüklemeleri
###### Multimedia
```bash
apt install deb-multimedia-keyring
apt update
```

###### x2go
```bash
apt-get install x2go-keyring
apt update
```

###### riot.im
```bash
wget -qNP /tmp/ https://riot.im/packages/debian/repo-key.asc
apt-key add /tmp/repo-key.asc
apt update
```

###### Ring
```bash
apt install apt-transport-https dirmngr
apt-key adv --keyserver pgp.mit.edu --recv-keys \
    A295D773307D25A33AE72F2F64CD5FA175348F84
apt update
```

#### Güncelleme
```bash
apt update && \
apt -dy dist-upgrade && \
apt autoclean && \
apt dist-upgrade && \
apt autoremove --purge
```

#### İlk aşamada yüklenecek paketler
```bash
apt install zsh tmux git vim-nox autojump bridge-utils
apt install dbus libpam-systemd (container içine kurulumlarda gerekebilir)
```

#### Default paketlerden silinecekler
```bash
apt purge installation-report reportbug nano
apt purge tasksel tasksel-data task-english os-prober
rm -rf /var/lib/os-prober
# autoremove ile silinmemesi icin bu komut gerekli.
apt install openssh-server
apt autoremove --purge
```

#### Grub ayarları
Grub için parola iki kere girilecek, görüntü gelmeyecek.

```bash
grub-mkpasswd-pbkdf2 >>/etc/grub.d/01_password
```

###### /etc/grub.d/01_password
```
#!/bin/sh
# parola grub-mkpasswd-pbkdf2 komutu ile üretiliyor
cat <<EOF
set superusers="emrah"
password_pbkdf2 emrah grub.pbkdf2.sha512.10000.596F22EFFB36830CAF9C22B...
EOF
```

```bash
chmod 755 /etc/grub.d/01_password
```

###### /etc/grub.d/10_linux
line 34, --unrestricted eklenecek
```
    CLASS="--class gnu-linux --class gnu --class os --unrestricted"
```

```bash
update-grub
```

#### CTRL-ALT-DEL ile sistem kapatilacaksa
```bash
ln -s /lib/systemd/system/poweroff.target \
      /etc/systemd/system/ctrl-alt-del.target
systemctl daemon-reload
```

#### /etc/fstab
noatime eklenecek.
Trim desteği olan SSD diskler için discard eklenecek.

#### /etc/fstab tmpfs ayarları
USB stick kurulumlarında yapılacak.

```
/dev/mapper/crypto-usb  /                   ext4    noatime,errors=remount-ro                   0  1
tmpfs                   /tmp                tmpfs   defaults,noatime,mode=1777,size=300M        0  0
tmpfs                   /var/log            tmpfs   defaults,noatime,mode=0755,size=100M        0  0
tmpfs                   /var/cache/browser  tmpfs   noatime,size=150M,nr_inodes=10k,mode=1777   0  0
```

#### SSH ayarları
###### /etc/ssh/sshd_config
```
Port 22                                 # standart port kullanilmayacak
PermitRootLogin prohibit-password
```

###### /etc/ssh/ssh_config
```
ServerAliveInterval 100                 # SSH baglantisi yaptigimizda, sunucudan kopmamamiz icin
                                        # her 100 saniyede bir ping gonderir.
```

#### reboot
###### Normal kurulum
```bash
reboot
```

###### USB Stick kurulumu
```bash
mkdir -p /var/cache/browser
rm -rf /tmp/* /var/log/*; sync; reboot
```


systemd-networkd
----------------
#### /etc/network/interfaces
Comment network interfaces except loopback

#### /etc/systemd/network/90-bridge.netdev
```
[NetDev]
Name=br0
Kind=bridge
```

#### /etc/systemd/network/91-bridge-ports.network
```
[Match]
Name=en*

[Network]
Bridge=br0
```

#### /etc/systemd/network/92-bridge.network
```
[Match]
Name=br0

[Network]
DHCP=yes
Address=172.16.244.9/24
Address=192.168.0.9/24
Address=192.168.1.9/24
Address=192.168.2.9/24
```

#### systemd-networkd
```bash
systemctl enable systemd-networkd
systemctl restart systemd-networkd
```

#### /etc/resolv.conf
```
nameserver 208.67.220.220
nameserver 208.67.222.222
nameserver 8.8.4.4
```


Paketlerin Kurulumu
-------------------
#### python (temel) paketleri
```bash
apt install python3 bpython3
apt install python3-pip
```

#### LXC
```bash
apt install lxc debootstrap
```

#### monitoring paketleri
```bash
apt install htop iotop tiptop bmon
apt install -d atop powertop sysstat
apt install -d nethogs iftop bwm-ng
apt install -d --install-recommends sysdig          # Sistem cagrilarini analiz
```

#### network paketleri
```bash
apt install fping arping arp-scan mtr curl dnsutils whois
apt install heirloom-mailx
apt install sshuttle sudo                           # VPN over SSH
apt install --install-recommends openvpn            # SSL VPN client olacaksa
apt install nmap tcpdump
apt install ngrep netcat-openbsd socat
apt install -d telnet
apt install -d minicom                              # Seri porttan bağlanan cihazlar için
apt install -d httpie                               # curl alternatif
apt install -d wvdial usb-modeswitch                # USB 3G modem kullanılacaksa
apt install -d pptp-linux                           # VPN tunel icin
apt install -d nuttcp                               # Network performan olcme
apt install -d ethtool net-tools
```

#### parallel komut çalıştırma
```bash
apt install -d parallel
```

#### IRC, jabber, gtalk
```bash
apt install -d weechat-curses weechat-plugins bitlbee
```

#### soft raid olacaksa
```bash
apt install -d mdadm
```

#### firmware
```bash
apt install firmware-linux-free
```

#### firmware (non-free depo)
```bash
apt install firmware-linux-nonfree firmware-misc-nonfree --install-recommends
apt install atmel-firmware firmware-atheros firmware-bnx2 firmware-bnx2x
apt install firmware-brcm80211 firmware-cavium firmware-ipw2x00
apt install firmware-iwlwifi firmware-libertas firmware-myricom
apt install firmware-netxen firmware-realtek zd1211-firmware
apt install firmware-b43-installer
```

#### wireless manager
USB stick kurulumlarında wireless araçları olsun
Diğer makinelerde wireless adaptör varsa olsun

```bash
apt install wicd-curses wicd-cli rfkill
```

#### dosyalar, dosya sistemi, uzak dosya sistemi
```bash
apt install bzip2 zip unzip ack
apt install autojump parted
apt install lftp ncftp rsync
apt install ccrypt cryptsetup encfs
apt install pwgen                                   # Random parola üretmek için
apt install -d diffutils patch tree
apt install -d sshfs
apt install -d nbd-client nbd-server
apt install -d cifs-utils smbclient
apt install -d ntfs-3g
```

#### Veritabanı istemcileri
```bash
apt install -d postgresql-client
apt install -d mysql-client
apt install -d sqlite3
apt install -d sqsh                                 # MS SQL ve Sybase shell
```

#### CD/DVD paketleri
```bash
apt install -d wodim dvd+rw-tools
```

#### Multimedia
```bash
apt install -d alsa-base alsa-utils
apt install pulseaudio pulseaudio-utils
apt install mpv ffmpeg
```

#### Programlama paketleri
```bash
apt install vim-nox                                 # script destekli vim
apt install git                                     # versiyon kontrol sistemi
apt install -d php-cli                              # komut satırından PHP
```

#### Python
```bash
apt install python3-pip --install-recommends
pip3 install --upgrade setuptools wheel
pip3 install --upgrade flake8
pip3 install --upgrade pexpect                      # shell uygulamalarını interaktif çalıştırma
pip3 install --upgrade requests                     # HTTP kütüphanesi, arkada urllib3 kullanıyor
pip3 install --upgrade s3cmd                        # S3 object storage işlemleri
pip3 install --upgrade grip                         # MarkDown viewer
```

#### Bu paketleri pip3 ile kurmayı dene.
Henüz test edilmedi.
```bash
apt install -d python3-psutil                       # cpu, memory, process vb takip için
apt install -d pychecker pylint pyflakes pyflakes3  # kod kalitesi ve hata kontrol
apt install -d python3-psycopg2                     # PostgreSQL kullanılacaksa
apt install -d python3-simplejson python3-lxml      # JSON ve XML kullanılacaksa
apt install -d python3-pycurl                       # Curl paketi
apt install -d python3-ipy python-ipaddr            # IP handling
apt install -d python3-netifaces                    # Network device
apt install -d python3-openssl python3-crypto       # Güvenlik ve şifreleme
apt install -d python-serial python-parallel        # Seri ve parallel portan haberleşme için
```

#### PostgreSQL
```bash
apt install -d postgresql postgresql-contrib
apt install -d phppgadmin                           # PostrgreSQL icin web UI olacaksa...
```

#### Masaüstü paketleri
```bash
apt install --install-recommends xorg
apt install --install-recommends spectrwm           # spectrwm kullanilacaksa...
apt install dbus-x11
apt install xterm
apt install xtrlock unclutter
apt install scrot                                   # screen capture
apt install firefox-esr --install-recommends
apt install flashplayer-mozilla                     # multimedia deposundan...
apt install smplayer
apt install pavucontrol                             # pulsaudio icin ses kontrol GUI
apt install x2goclient
apt install x11vnc xvnc4viewer
apt install freerdp-x11 libfreerdp-plugins-standard # better rdesktop
apt install zathura                                 # pdf okuyucu
apt install chromium fonts-liberation               # alternatif browser gerekecekse...
apt install libreoffice --install-recommends        # office uygulamalari gerekecekse...
apt install gimp --install-recommends               # resim düzenlemek gerekecekse...
apt install krita --install-recommends              # resim düzenlemek gerekecekse...
apt install riot-web desktop-file-utils             # Matrix client
apt install -d -t ring ring-daemon ring             # kendi deposundan kurulacak
```

#### Debian kaynak kod paketleri ile çalışılacaksa
```bash
apt install -d dpkg-dev build-essential fakeroot
```


Yazılımların ayarlanması
------------------------
#### LXC ayarları
Template kurulumları
```bash
lxc-create -n jessie -t debian -- -r jessie
lxc-create -n wheezy -t debian -- -r wheezy
lxc-create -n squeeze -t debian -- -r squeeze
```

#### sshuttle
###### visudo
```
emrah   ALL=NOPASSWD: /usr/bin/sshuttle, /bin/systemctl suspend
```

#### zsh
###### ~/.zshrc (root için)
```
bindkey -v
export TMOUT=1200
setopt autocd
setopt hist_ignore_space

alias ls='ls --color=auto'
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."
alias ......="cd ../../../../.."
```

###### ~/.zshrc (normal kullanıcı)
```
bindkey -v
HISTSIZE=5000
SAVEHIST=5000
export TMOUT=1200
setopt autocd
setopt hist_ignore_space

# proxy
alias proxy="ssh -ND 8080 emrah"

# spectrwm kullanilacaksa
alias x='ssh-agent startx'

# rxvt-unicode-256color kullanilacaksa
case "$TERM" in
    rxvt-unicode-256color)
    TERM=rxvt-unicode
    ;;
esac

alias ls='ls --color=auto'
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."
alias ......="cd ../../../../.."
. /usr/share/autojump/autojump.sh

alias z='~/bin/zargan.py'
zz(){
        z $@ | more
}
zl(){
        z $@ 2>/dev/null | head -10
}

update_hosts(){
    HOSTS=`cat <<EOF
        host1
        host2
        host3
EOF

    for h in `echo $HOSTS`; do
        echo update $h
        ssh -t $h "apt-get update"
        ssh -t $h "apt-get autoclean"
        ssh -t $h "apt-get -dy dist-upgrade"
        echo
    done

    for h in `echo $HOSTS`; do
        echo upgrade $h
        ssh -t $h "apt-get dist-upgrade"
        ssh -t $h "apt-get autoremove"
    done
}
```

#### PyPI
###### ~/.pypirc
```
[distutils]
    index-servers =
      pypi
      testpypi

    [pypi]
    repository=https://upload.pypi.org/legacy/
    username=emrah

    [testpypi]
    repository=https://test.pypi.org/legacy/
    username=emrah
```

#### Source Code Pro
https://github.com/adobe-fonts/source-code-pro   
https://github.com/adobe-fonts/source-code-pro/archive/2.030R-ro/1.050R-it.zip   
Download zip

```bash
mkdir -p ~/.fonts/Source_Code_Pro
unzip 1.050R-it.zip -d ~/.fonts/Source_Code_Pro
```

#### xterm default font
###### ~/.Xdefaults
```
UXTerm*background: black
UXTerm*foreground: green
UXTerm*faceName: Source Code Pro
UXTerm*faceSize: 12
UXTerm*termName: xterm-256color
UXTerm*on2Clicks: word
UXTerm*on3Clicks: regex [^ \n]+
UXTerm*on4Clicks: regex [^'"(){}\n]+
UXTerm*on5Clicks: regex [^\n]+
```

#### spectrwm kullanılacaksa
###### ~/.xinitrc
```
#/home/emrah/proje/browser_live/mozilla2ram.sh
xset r rate 250 60
exec /usr/bin/spectrwm
```

###### ~/.spectrwm.conf
```
disable_border          = 1
bar_at_bottom           = 1
maximize_hide_bar       = 1
modkey                  = Mod4
program[lock]           = xtrlock
program[firefox]        = firefox-esr
bind[firefox]           = MOD+Shift+f
program[bpython3]       = x-terminal-emulator -T "bpython3" -e /usr/bin/bpython3
bind[bpython3]          = MOD+Shift+p
program[bpython]        = x-terminal-emulator -T "bpython" -e /usr/bin/bpython
bind[bpython]           = MOD+Shift+o
program[weechat]        = x-terminal-emulator -T "Weechat" -xrm "*metaSendsEscape:true" -e tmux new-session /usr/bin/weechat
bind[weechat]           = MOD+Shift+w
program[mplayer_mute]   = sh -c "echo mute > /tmp/mplayer.pipe"
bind[mplayer_mute]      = Pause
program[mplayer_vol_l]  = sh -c "echo 'volume -1' > /tmp/mplayer.pipe"
bind[mplayer_vol_l]     = XF86AudioLowerVolume
program[mplayer_vol_r]  = sh -c "echo 'volume +1' > /tmp/mplayer.pipe"
bind[mplayer_vol_r]     = XF86AudioRaiseVolume
```

#### ~/bin/
###### capture_screen
Ekran görüntüsünü alıp SimpleHTTPServer ile web'ten yayınlar.
Pencere yöneticisi için kısayol oluşturulsun.

```
#!/bin/bash

mkdir -p /tmp/screenshot
scrot /tmp/screenshot/screenshot.png
echo '<html><body><img src="screenshot.png" /></body></html>' >
/tmp/screenshot/index.html

x-terminal-emulator -vb +sb -fg NavajoWhite1 -bg black -cr yellow \
-fn "-misc-fixed-medium-r-normal--18-120-100-100-c-90-iso10646-1" \
-T "Capture Screen" -e /bin/bash -c \
"/sbin/ifconfig eth | grep 'inet addr:' | cut -d: -f2 | cut -d' ' -f1; \
echo -e '\n\n'; \
cd /tmp/screenshot && python -m SimpleHTTPServer 9999"
```

###### zargan.py
Kod deposundan kopyalanacak.

#### Firefox
###### preferences
* General -> When Firefox starts: Show a blank page
* General -> Home page: https://emrah.com/
* General -> Language -> Choose -> Turkish (add, move down)
* General -> Language -> Check your spelling as you type: false
* General -> Downloads -> Always ask you where to save files: true
* General -> Firefox Updates -> Automatically update search engines: False
* General -> Network Proxy -> Settings
```
  Manual Proxy Configuration
  SOCKS Host: localhost
  SOCKS Port: 28080
  SOCKS Type: SOCKS v5
  No Proxy for: localhost, 127.0.0.1, 192.168.0.0/16, 172.16.0.0/12, 10.0.0.0/8
  Proxy DNS when using SOCKS v5: true
```
* Search -> Default Search Engine: DuckDuckGo
* Privacy & Security -> Forms & Passwords
  -> Remember logins and passwords for websites: False
* Privacy & Security -> History -> Never Remeber History
* Privacy & Security -> Tracking Protection -> Always
* Privacy & Security -> Block dangerous downloads: False
* Privacy & Security -> Certificates -> View Certificates -> Authorities
  -> Delete or Distrust
```
E-Tuğra (silinecek)
TUBITAK (silinecek)
TURKTRUST (silinecek)
```

Bu işlem sonrasında otorite, listede kalacak ama güvenilir olduğunu
belirten OK işareti kalkacak.

###### about:config
* __browser.cache.disk.enable__: false
* __browser.sessionstore.interval__: 60000
* __network.prefetch-next__: false
* __intl.charset.fallback.utf8_for_file__: true

###### Add-ons
* Tridactyl
* Adblock Plus
* NoScript Security Suite by Giorgio Maone
* Markdown Viewer Webext

###### Diğer
* Noscript whitelist temizlenir.
* Bir kere boş tab açılıp Tridactyl için izin verilir.
* Noscript izni verilecek sitelere bir kere girilir.
  * duckduckgo
  * demo siteler
  * player (dash, hls)
  * egroupware
  * github, ycombinator, wttr.in, debian, pypi
  * bankalar, yemeksepeti
  * digital ocean
  * radyolar

###### second profile
__second__ adlı profili oluştur.
```bash
firefox-esr -no-remote -ProfileManager
```

```bash
cd ~/.mozilla/firefox
DEFAULT=$(ls | grep .default)
SECOND=$(ls | grep .second)
rm -rf $SECOND
cp -arp $DEFAULT $SECOND
```

#### bitlbee
###### /etc/bitlbee/bitlbee.conf
```
DaemonInterface = 127.0.0.1
AuthMode = Closed
AuthPassword = md5:...
```

###### md5 değerini bulmak için
```bash
bitlbee -x hash parola1
```

```bash
/etc/init.d/bitlbee restart
```

#### weechat
Ayarların default değerlerle oluşması için weechat-curses bir kere
başlatılır.

###### ~/.weechat/weechat.conf
```
item_time_format = "%a, %d %b %Y %H:%M"
```

###### ~/.weechat/logger.conf
```
auto_log = off
```

###### ~/.weechat/irc.conf
```
[server_default]
nicks = "emrah,emrah_,emrah__"
realname = "emrah"
username = "emrah"

[server]
freenode.addresses = "chat.freenode.net/7000"
freenode.ssl = on
freenode.ssl_dhkey_size = 512
freenode.password = "parola"
freenode.autoconnect = on
freenode.autoreconnect = on
freenode.autoreconnect_delay = 10
freenode.nicks = "emrah,emrah_,emrah__"
freenode.username = "emrah"
freenode.realname = "emrah"
freenode.autojoin = "#gnu,#debian"
freenode.autorejoin = on
freenode.autorejoin_delay = 1
bitlbee_loc.addresses = "127.0.0.1/6667"
bitlbee_loc.ssl = off
bitlbee_loc.password = "parola1"
bitlbee_loc.autoconnect = on
bitlbee_loc.autoreconnect = on
bitlbee_loc.autoreconnect_delay = 10
bitlbee_loc.nicks = "emrah,emrah_,emrah__"
bitlbee_loc.username = "emrah"
bitlbee_loc.realname = "emrah"
bitlbee_loc.command = "/msg nickserv identify parola2"
bitlbee_loc.autorejoin = on
bitlbee_loc.autorejoin_delay = 1
```

###### bitlbee hesabının açılması
```
register parola2
set charset utf-8

# gtalk
account add jabber emrah@gmail.com
account gtalk set ssl true
account gtalk set server talk.google.com
account gtalk set port 5223
account gtalk set password "parola_gtalk"
account gtalk on
```
