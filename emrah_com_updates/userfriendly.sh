#!/bin/bash
set -e

DEST="$(dirname $0)/../public_html/media/userfriendly.gif"
SRC=$(curl -s http://www.userfriendly.org/ | \
      egrep -ohi 'src="http://www.userfriendly.org/cartoons/archives/[^"]*' | \
      head -1 | cut -d '"' -f2)

[ -z "$SRC" ] && exit 1

wget -q -O $DEST $SRC
