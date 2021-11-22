eval $(cat PKGBUILD| grep -P '^_pkgname=')
cd "$(dirname "$0")"
ver="$(curl https://releases.mozilla.org/pub/${_pkgname}/releases/ | sed -rn 's/([^0-9]*)([0-9]*\.[0-9]*?(\.[0-9]*)).*/\2/p' | sort -V | tail -n1)"
#ver=91.0
sed -r "s/(pkgver=)(.*)/\1$ver/" -i PKGBUILD
makepkg --printsrcinfo > .SRCINFO
eval $(cat PKGBUILD| grep pkgrel=)
ver_msg="autohook $ver"
git commit -am "$ver_msg"
git push

(
  [ -e 'home:nicman23/${_pkgname}-appmenu-bin/' ] || osc co home:nicman23 ${_pkgname}-appmenu-bin
  sed "s/PKGVER/${ver}/g" _service \
   > home:nicman23/${_pkgname}-appmenu-bin/_service
  cd home:nicman23/${_pkgname}-appmenu-bin/
  osc commit -m "$ver_msg"
  osc results -w
)

sleep 30m
[ -e ${_pkgname}-appmenu-bin ] || git clone ssh://aur@aur.archlinux.org/${_pkgname}-appmenu-bin.git
cd ${_pkgname}-appmenu-bin
sed "s/^pkgver=.*/pkgver=${ver}/g" -i PKGBUILD
sed "s/^pkgrel=.*/pkgrel=${pkgrel}/g" -i PKGBUILD

makepkg --printsrcinfo > .SRCINFO
git commit -am "$ver_msg"
git push
