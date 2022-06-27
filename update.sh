#!/bin/bash

source PKGBUILD
PKGNAME=$_name
RELEASES=$(curl -sL https://pypi.org/pypi/$PKGNAME/json | jq .releases)
LAST=$(jq -r <<<$RELEASES '
[ keys[]
    | select(contains("beta") == false)
    | [split(".")[] | tonumber] ]
  | sort[-1]
  | join(".")
')

if [ "$pkgver" == "$LAST" ]; then
    echo "Already up to date" >&2
    exit 0
fi

DOWNLOAD_URL=$(jq -r <<<$RELEASES --arg last $LAST '
    .[$last][] | select(.packagetype == "sdist").url
')

HSUM=$(curl -sL $DOWNLOAD_URL | b2sum - | cut -d' ' -f1)

sed -i 's/b2sums=.*$/b2sums=("'$HSUM'")/' PKGBUILD
sed -i 's/pkgver=.*/pkgver='$LAST'/' PKGBUILD
sed -i 's/pkgrel=.*/pkgrel=1/' PKGBUILD

# Make sure it builds fine
makepkg

git add PKGBUILD
git commit -m "Update to $LAST"
git push
