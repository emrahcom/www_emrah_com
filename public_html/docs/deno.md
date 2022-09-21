Deno
====

installation
============
https://github.com/denoland/deno/releases

```bash
cd /tmp
wget -T 30 -O deno.zip \
  https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip
unzip deno.zip

./deno --version
./deno info

cp deno /usr/local/bin
deno --version
```

manual
======
https://deno.land/manual

format
======

```bash
deno fmt --check
deno fmt
cat script.ts | deno fmt -
```

```
// deno-fmt-ignore
// deno-fmt-ignore-file
```
