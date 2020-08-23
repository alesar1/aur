# Maintainer : Cole Deck <cole at deck dot sh>

pkgname=asus-rog-nb-wmi-dkms-git
_pkgname=asus-rog-nb-wmi
pkgver=0.1.0.r0.g1fd6b5c
pkgrel=1
pkgdesc="Kernel module to patch asus-nb-wmi to support more ROG laptops"
arch=('x86_64')
url="https://gitlab.com/asus-linux/asus-rog-nb-wmi"
license=()
provides=()
conflicts=()
depends=('dkms' 'linux-headers')
makedepends=()
source=("git+https://gitlab.com/asus-linux/asus-rog-nb-wmi.git"
	"dkms.conf")
sha256sums=("SKIP"
	    "b952938712ccb756b7e263cb401d9a81d6e97e5ba14a329c4b541982e8f342ad")

pkgver() {
    cd "$srcdir/${_pkgname}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}"
  sed -e "s/REPLACE_ME/${pkgver}/" -i "dkms.conf"
}

package() {
  cd "${srcdir}/${_pkgname}"
  install -d -m 755 ${pkgdir}/usr/src/${_pkgname}-${pkgver}/src
  install -m 644 Makefile ${pkgdir}/usr/src/${_pkgname}-${pkgver}/Makefile
  install -m 644 src/asus-rog-nb-wmi.c ${pkgdir}/usr/src/${_pkgname}-${pkgver}/src/asus-rog-nb-wmi.c
  install -m 644 src/asus-wmi.h ${pkgdir}/usr/src/${_pkgname}-${pkgver}/src/asus-wmi.h

  cd "${srcdir}"
  install -m 644 dkms.conf ${pkgdir}/usr/src/${_pkgname}-${pkgver}/dkms.conf

  install -d -m 755 ${pkgdir}/etc/modprobe.d
  echo "blacklist asus-nb-wmi" > ${pkgdir}/etc/modprobe.d/asus-rog-nb-wmi.conf
}
