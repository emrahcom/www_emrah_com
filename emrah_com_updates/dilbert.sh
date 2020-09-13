#!/bin/bash
set -e

DEST="$(dirname $0)/../public_html/media/dilbert.gif"
SRC=$(curl -s https://dilbert.com/ | \
      egrep -ohi 'src="//assets.amuniversal.com/[^"]*' | \
      head -1 | cut -d '"' -f2)

[ -z "$SRC" ] && exit 1
SRC="https:$SRC"

wget -q -O $DEST $SRC
