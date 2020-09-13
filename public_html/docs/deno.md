Deno
====

## installation

```bash
curl -sSf https://github.com/denoland/deno/releases | \
    grep -o "/denoland/deno/releases/download/.*/deno-.*linux.*\.zip"

mkdir deno
cd deno

wget https://github.com/denoland/deno/releases/download/v1.3.3/deno-x86_64-unknown-linux-gnu.zip
unzip deno-x86_64-unknown-linux-gnu.zip

./deno info
```
