Celtx Installation
==================
Celtx 2.9.7 on Debian Buster

## install
```bash
mkdir -p /root/downloads
cp Celtx-2.9.7-64.tar.bz2 /root/downloads/
cd /root/downloads

tar xjf Celtx-2.9.7-64.tar.bz2
mv celtx /usr/local/
ln -s libpng16.so.16 /usr/lib/x86_64-linux-gnu/libpng12.so.0
```

## /etc/hosts
```
127.0.0.2   publish.celtx.com www.celtx.com celtx.com
```

## launcher
* Type: Application
* Name: Celtx
* Command: /usr/local/celtx/celtx
* Icon: /usr/local/celtx/icons/mozicon128.pn
