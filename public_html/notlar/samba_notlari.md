SAMBA NOTLARI
=============

## SAMBA
#### Paketler
samba                   -> sunucu
samba-common-bin        -> smbpasswd gibi bazı samba komutlarının çalışması için
smbclient               -> samba istemci
cifs-utils              -> samba paylaşımlarını mount edebilmek için


#### Kullanıcı ekleme
Linux hesabı olması gerekiyor ama Samba parolası bağımsız

```
adduser --no-create-home --shell /bin/false --disabled-password kullanici
smbpasswd -a kullanici
```

Bütün Samba kullanıcı klasörleri, aynı noktada toplanabilir

```
mkdir -p /home/data/sambadata/kullanici
chown kullanici: /home/data/sambadata/kullanici
```

#### Kullanıcı silme
```
smbpasswd -x kullanici
```

#### Kullanici parolasını değiştirme
```
smbpasswd kullanici
```

#### Kullanıcı için paylaşım oluşturma
/etc/samba/smb.conf

```
[kullanici_paylasim_adi]
path = /home/data/sambadata/kullanici
valid users = kullanici, yetkili1, yetkili2
write list = kullanici
read list = yetkili1, yetkili2
writeable = yes
create mask = 0744
directory mask = 0755
```

#### NTLM ile erişime izin verme
/etc/samba/smb.conf dosyasında `[global]` içinde

```
ntlm auth = true
```


## smbclient
#### paylaşımları listeleme
```
smbclient -U kullanici -L localhost
```

#### paylaşımlara erişim
```
smbclient -U kullanici //localhost/paylasim_adi
```

#### mount
```
mkdir -p /home/emrah/samba/samba1
```

/home/emrah/samba/samba1.crt
```
username=emrah
password=parola
```

```
chmod 600 /home/emrah/samba/samba1.crt
```

root olarak
```
mount -t cifs //10.10.10.10/paylasim \
    -o credentials=/home/emrah/samba/samba1.crt,\
    nounix,uid=1001,file_mode=0600,dir_mode=0700 \
    /home/emrah/samba/samba1
```


## samba-tool
```
samba-tool user create user1 parola
samba-tool user delete user1
samba-tool user list
```

```
net sam set pwdmustchangenow user1 yes
```

pdbedit incelenecek.
