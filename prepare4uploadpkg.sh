#!/usr/bin/env bash

makepkg --nobuild --skipinteg

rm -rf src/ macOS-Sierra/ gtk-theme-macOS-Sierra-archers-git-*.tar.xz

namcap PKGBUILD && makepkg --printsrcinfo > .SRCINFO || exit 1
git add . || exit 1 # PKGBUILD prepare4uploadpkg.sh .SRCINFO
git commit -am "New package commit" || exit 1
git push --set-upstream origin master || exit 1

read -p "Press [Enter] key to exit..."

exit $?
