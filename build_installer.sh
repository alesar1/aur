#!/bin/sh

# Buildscript for creating the distribution independed installer.
# Works only in this directory because some dependencies are here located.

set -e

version=$(grep ^pkgver PKGBUILD | cut -d= -f2) || exit 1
release=$(grep ^pkgrel PKGBUILD | cut -d= -f2) || exit 1
arch=$(uname -m)

printf "\nCreate clean build environment..."
if [ -d src/ ] ;then rm -rf src/* ;else mkdir src/ ;fi

if [ ! -f "makeself-2.4.0.run" ] ;then
    curl -L -O https://github.com/megastep/makeself/releases/download/release-2.4.0/makeself-2.4.0.run
fi

chmod a+x ./makeself-2.4.0.run
./makeself-2.4.0.run --tar x ./makeself.sh ./makeself-header.sh 2>/dev/null
chmod a-x ./makeself-2.4.0.run
mv ./makeself.sh ./makeself-header.sh src/

cd src/
mkdir evesetup/
echo "done."

printf "\nCopy needed files from AUR package..."
tar xf ../eve-icons.tar.gz -C evesetup/
for eta in $(ls ../eve-transl5.11-??.tar.gz) ;do cp $eta evesetup/ ;done
for cmd in evelauncher.sh everegedit evewine evewinecfg evewinetricks ;do
    cp ../$cmd evesetup/
    if [ ! "$cmd" = "evewine" ] ;then
        cp ../${cmd%.*}.desktop evesetup/
    fi
done
cp -f ../evelauncher.sh.in evesetup/evelauncher.sh
cp ../setup.sh.in evesetup/setup.sh
chmod a+x evesetup/setup.sh
echo "done."

if [ ! -r "../evelauncher-$version.tar.gz" ] ;then
    curl -L -O https://binaries.eveonline.com/evelauncher-$version.tar.gz
fi

printf "\nExtract evelauncher-$version.tar.gz..."
tar xf ../evelauncher-$version.tar.gz
echo "done."

printf "\nClean up evelauncher directory..."
cd evelauncher/
rm -f ./*.a ./*.la ./*.prl
chmod 0755 ./*
chmod 0644 ./*.qm ./*.conf
echo "done."

printf "\nReplace identical files with symbolic links to the original file\n\n"
ln -sfv evelauncher.sh LogLite.sh
libb=/dev/zero
for lib in $(find ./ -maxdepth 1 -type f -name 'lib*' -printf '%s-%f\n'|sort -r)
do
    liba=${lib#*-}
    if [ "$(cmp -s $liba $libb; echo $?)" = "0" ] ;then
        ln -sfv $libb $liba
    else
        libb=$liba
    fi
done

printf "\nRemove unneeded symbols from files..."
find ./ -maxdepth 1 -type f -exec strip -s {} 2>/dev/null \;
echo "done."

printf "\nRepack evelauncher-$version.tar.gz..."
cd ../
tar czf evelauncher-$version.tar.gz evelauncher/
mv evelauncher-$version.tar.gz evesetup/
rm -rf  evelauncher/
echo "done."

printf "\nBuild self-extractable archive evesetup-$version-$release-$arch.run\n\n"
./makeself.sh --xz evesetup/ ../evesetup-$version-$release-$arch.run \
    "EVE Online Launcher Setup" ./setup.sh
cd ..
printf "\nClean up build environment..."
rm -rf src/*
echo "done."
