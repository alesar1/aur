# Maintainer : Cole Deck <cole at deck dot sh>

pkgname=hid-asus-rog-dkms-git
_pkgname=hid-asus-rog
pkgver=0.4.4.r0.gd14d2fb
pkgrel=1
pkgdesc="Kernel module to patch hid-asus to support more ROG laptops"
arch=('x86_64')
url="https://gitlab.com/asus-linux/hid-asus-rog"
license=()
provides=()
conflicts=()
depends=('dkms' 'linux-headers')
makedepends=()
source=("git+https://gitlab.com/asus-linux/hid-asus-rog.git"
	"dkms.conf")
sha256sums=("SKIP"
	    "a9d78677756306c7687bef847f81425b5d04a53bb16cee8c586a6fce1e93777d")

pkgver() {
    cd "$srcdir/${_pkgname}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}/${_pkgname}"
  _pkgver=$(git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g')
  sed -e "s/REPLACE_ME/$_pkgver/" -i "../dkms.conf"
}

package() {
  cd "${srcdir}/${_pkgname}"
  install -d -m 755 ${pkgdir}/usr/src/${_pkgname}-${pkgver}/src
  install -m 644 Makefile ${pkgdir}/usr/src/${_pkgname}-${pkgver}/Makefile
  install -m 644 src/hid-asus-rog.c ${pkgdir}/usr/src/${_pkgname}-${pkgver}/src/hid-asus-rog.c
  install -m 644 src/hid-ids.h ${pkgdir}/usr/src/${_pkgname}-${pkgver}/src/hid-ids.h

  cd "${srcdir}"
  install -m 644 dkms.conf ${pkgdir}/usr/src/${_pkgname}-${pkgver}/dkms.conf

  install -d -m 755 ${pkgdir}/etc/modprobe.d
  echo "blacklist hid-asus" > ${pkgdir}/etc/modprobe.d/asus-rog.conf
}
