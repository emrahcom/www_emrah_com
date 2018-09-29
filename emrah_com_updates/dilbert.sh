#!/bin/bash
set -e

DEST="$(dirname $0)/../public_html/medya/dilbert.gif"
SRC=$(curl -s http://dilbert.com/ | \
      egrep -ohi 'src="http://assets.amuniversal.com/[^"]*' | \
      head -1 | cut -d '"' -f2)

[ -z "$SRC" ] && exit 1

wget -q -O $DEST $SRC
