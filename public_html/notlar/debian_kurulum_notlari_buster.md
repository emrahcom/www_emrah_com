DEBIAN BUSTER KURULUM NOTLARI
==============================
Kurulum, Netinstall CD'si ile yapılacak.
Stretch notlarına göre düzenleniyor, henüz test edilmedi.


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

#### USB stick için örnek bölümlendirme
```
/boot   200 MB  sda1    (bootable)
crypto    X GB  sda2    (mount to /)
```

SSD disk kullanılıyor ve TRIM desteği varsa ext4 partitionlarda discard
özelliği aktif hale getirilecek. Bütün partitionlarda noatime özelliği
aktif olsun.

crypto disk adı değiştirilecekse `cryptsetup` notlarına bak.


Kurulum sonrası ilk ayarlar
---------------------------
#### /etc/apt/apt.conf.d/80recommends
```
APT::Install-Recommends "0";
APT::Install-Suggests "0";
```

#### /etc/apt/sources.list
```
deb http://ftp2.de.debian.org/debian buster main non-free contrib
deb-src http://ftp2.de.debian.org/debian buster main non-free contrib
deb http://ftp2.de.debian.org/debian buster-updates main non-free contrib
deb-src http://ftp2.de.debian.org/debian buster-updates main non-free contrib
deb http://security.debian.org/debian-security buster/updates main contrib non-free
deb-src http://security.debian.org/debian-security buster/updates main contrib non-free
```

#### Multimedia deposu kullanilacaksa...
```
deb http://www.deb-multimedia.org buster main non-free
deb-src http://www.deb-multimedia.org buster main non-free
```

```bash
apt-get update --allow-insecure-repositories
apt-get install deb-multimedia-keyring
apt-get update
```

#### Güncelleme
```bash
apt-get update && \
apt-get autoclean && \
apt-get -dy dist-upgrade && \
apt-get dist-upgrade && \
apt-get autoremove --purge
```

#### İlk aşamada yüklenecek paketler
```bash
apt-get install zsh tmux vim-nox autojump bridge-utils
```

#### Default paketlerden silinecekler
```bash
apt-get purge installation-report reportbug nano
apt-get purge os-prober
rm -rf /var/lib/os-prober
apt-get autoremove --purge
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
UUID=xxxxxx             /boot               ext4    noatime                                     0  2
tmpfs                   /tmp                tmpfs   defaults,noatime,mode=1777,size=300M        0  0
tmpfs                   /var/log            tmpfs   defaults,noatime,mode=0755,size=100M        0  0
tmpfs                   /var/cache/browser  tmpfs   noatime,size=150M,nr_inodes=10k,mode=1777   0  0
```

#### SSH ayarları
###### /etc/ssh/sshd_config
```
Port 22                                 # standart port kullanilmayacak
PasswordAuthentication no               # parola ile giris kapatilacaksa
GatewayPorts yes                        # tunel uzerinden komsu makineye ulasilacaksa
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
#### dnsmasq
```bash
apt-get install dnsmasq
```

#### /etc/network/interfaces
Comment network interfaces except loopback

#### /etc/systemd/network/90-bridge.netdev
```
[NetDev]
Name=br0
Kind=bridge
```

#### /etc/systemd/network/90-dummy.netdev
```
[NetDev]
Name=dummy0
Kind=dummy
```

#### /etc/systemd/network/91-bridge-ports.network
```
[Match]
Name=dummy0

[Network]
Bridge=br0
```

#### /etc/systemd/network/92-bridge.network
```
[Match]
Name=br0

[Network]
Address=172.17.17.1/24
```

#### systemd-networkd
```bash
systemctl enable systemd-networkd
systemctl restart systemd-networkd
```

#### /etc/resolv.conf
```
nameserver 127.0.0.1
nameserver 208.67.220.220
nameserver 8.8.4.4
```

#### /etc/sysctl.d/90-ip-forward.conf
```
net.ipv4.ip_forward=1
```

#### iptables
```bash
apt-get install iptables-persistent
iptables -t nat -A POSTROUTING -s 172.17.17.0/24 -o wlp9s0 -j MASQUERADE
iptables-save > /etc/iptables/rules.v4
```


Paketlerin Kurulumu
-------------------
#### base paketler
```bash
apt-get install iputils-ping net-tools procps xz-utils
apt-get install ack jq
```

#### python (temel) paketleri
```bash
apt-get install python3 bpython3
apt-get install python3-pip
```

#### LXC
```bash
apt-get install lxc debootstrap
```

#### monitoring paketleri
```bash
apt-get install htop iotop tiptop bmon
apt-get install -d atop powertop sysstat
apt-get install -d nethogs iftop bwm-ng
```

#### network paketleri
```bash
apt-get install wget ca-certificates
apt-get install fping arping arp-scan mtr curl dnsutils whois
apt-get install s-nail
apt-get install sshuttle sudo                           # VPN over SSH
apt-get install --install-recommends openvpn            # SSL VPN client olacaksa
apt-get install nmap tcpdump
apt-get install ngrep netcat-openbsd socat
apt-get install -d telnet
apt-get install -d minicom                              # Seri porttan bağlanan cihazlar için
```

#### firmware
```bash
apt-get install firmware-linux-free
```

#### firmware (non-free depo)
```bash
apt-get install firmware-linux --install-recommends
apt-get install firmware-atheros firmware-bnx2 firmware-bnx2x
apt-get install firmware-brcm80211 firmware-cavium firmware-ipw2x00
apt-get install firmware-iwlwifi firmware-libertas firmware-myricom
apt-get install firmware-netronome firmware-netxen firmware-qlogic
apt-get install firmware-ralink firmware-realtek firmware-zd1211
apt-get install firmware-b43-installer
```

#### wireless manager
USB stick kurulumlarında wireless araçları olsun
Diğer makinelerde wireless adaptör varsa olsun

```bash
apt-get install wicd-curses wicd-cli rfkill
```

#### dosyalar, dosya sistemi, uzak dosya sistemi
```bash
apt-get install bzip2 zip unzip unrar
apt-get install autojump parted
apt-get install rsync
apt-get install ccrypt cryptsetup encfs
apt-get install pwgen                                   # Random parola üretmek için
apt-get install -d lftp ncftp
apt-get install -d diffutils patch tree
apt-get install -d sshfs
apt-get install -d nbd-client nbd-server
apt-get install -d cifs-utils smbclient
apt-get install -d ntfs-3g
```

#### Veritabanı istemcileri
```bash
apt-get install -d postgresql-client
apt-get install -d mariadb-client
apt-get install -d sqlite3
apt-get install -d sqsh                                 # MS SQL ve Sybase shell
```

#### CD/DVD paketleri
```bash
apt-get install -d wodim dvd+rw-tools
```

#### Multimedia
```bash
apt-get install -d alsa-utils
apt-get install pulseaudio pulseaudio-utils
apt-get install mpv ffmpeg
```

#### Programlama paketleri
```bash
apt-get install vim-nox                                 # script destekli vim
apt-get install git                                     # versiyon kontrol sistemi
apt-get install -d php-cli                              # komut satırından PHP
```

#### Python
```bash
apt-get install python3-pip --install-recommends
pip3 install --upgrade setuptools wheel
pip3 install --upgrade flake8
pip3 install --upgrade pexpect                      # shell uygulamalarını interaktif çalıştırma
pip3 install --upgrade requests                     # HTTP kütüphanesi, arkada urllib3 kullanıyor
pip3 install --upgrade sqlalchemy                   # veritabani işlemleri
pip3 install --upgrade s3cmd                        # S3 object storage işlemleri
pip3 install --upgrade grip                         # MarkDown viewer
pip3 install --upgrade flask flask_session flask_restful
pip3 install --upgrade redis schema
```

#### Masaüstü paketleri
```bash
apt-get install --install-recommends xorg
apt-get install --install-recommends spectrwm           # spectrwm kullanilacaksa...
apt-get install dbus-x11
apt-get install xterm
apt-get install xtrlock unclutter
apt-get install scrot                                   # screen capture
apt-get install firefox-esr --install-recommends
apt-get install flashplayer-mozilla                     # multimedia deposundan...
apt-get install smplayer
apt-get install pavucontrol                             # pulsaudio icin ses kontrol GUI
apt-get install x11vnc xvnc4viewer
apt-get install freerdp2-x11                            # better rdesktop
apt-get install zathura                                 # pdf okuyucu
apt-get install chromium fonts-liberation               # alternatif browser gerekecekse...
apt-get install libreoffice --install-recommends        # office uygulamalari gerekecekse...
apt-get install gimp --install-recommends               # resim düzenlemek gerekecekse...
apt-get install krita --install-recommends              # resim düzenlemek gerekecekse...
```

#### Debian kaynak kod paketleri ile çalışılacaksa
```bash
apt-get install -d dpkg-dev build-essential fakeroot
```


Yazılımların ayarlanması
------------------------
#### LXC ayarları
Template kurulumları. Buster ve apt-cacher-ng için container kurulabilir.

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
###### zargan.py
Kod deposundan kopyalanacak.

#### Firefox
###### preferences
* General -> Language -> Choice: Turkish (bottom)
* General -> Language -> Check your spelling as you type: Off
* General -> Downloads -> Always ask you where to save files: On
* General -> Firefox Updates -> Automatically update search engines: Off
* General -> Browsing -> Recommend extensions as you browse: Off
* General -> Browsing -> Recommend features as you browse: Off
* General -> Network Proxy -> Settings
```
  Manual Proxy Configuration
  SOCKS Host: localhost
  SOCKS Port: 8888
  SOCKS Type: SOCKS v5
  No Proxy for: localhost, 127.0.0.1, 192.168.0.0/16, 172.16.0.0/12, 10.0.0.0/8
  Proxy DNS when using SOCKS v5: true
```

* Home -> Homepage and new windows: Custom URLS (https://emrah.com/)
* Home -> New tabs: Blank Page
* Search -> Default Search Engine: DuckDuckGo
* Privacy & Security -> Content Blocking -> Strict
* Privacy & Security -> Do Not Track -> Always
* Privacy & Security -> Cookies and Site Data -> Delete cookies and site data
  when Firefox is closed: On
* Privacy & Security -> Logins & Passwords -> Off (Ask to save...)
* Privacy & Security -> History -> Use Custom Settings -> Clear history when
  Firefox closes: On
* Privacy & Security -> Permissions -> Prevent accessibility services from
  accessing your browser: On
* Privacy & Security -> Security -> Block dangerous and deceptive content: False
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

###### Add-ons
* Vim Vixen
* uBlock Origin
* NoScript Security Suite by Giorgio Maone
* Markdown Viewer Webext
* Dark Reader
* Worldwide Radio
* Privacy Badger

###### Diğer
* Noscript whitelist temizlenir.
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
