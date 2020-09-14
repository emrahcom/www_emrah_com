Deno
====

installation
============
https://github.com/denoland/deno/releases

```bash
curl -sSf https://github.com/denoland/deno/releases | \
    grep -o "/denoland/deno/releases/download/.*/deno-.*linux.*\.zip"

mkdir deno
cd deno

LATEST=$(curl -sSf https://github.com/denoland/deno/releases | \
    grep -o "/denoland/deno/releases/download/.*/deno-.*linux.*\.zip" | \
    head -n1)

wget -O deno-x86_64-unknown-linux-gnu.zip https://github.com/$LATEST
unzip deno-x86_64-unknown-linux-gnu.zip

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
