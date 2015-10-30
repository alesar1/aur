# Maintainer: maz-1 < ohmygod19993@gmail.com >

_pkgname=unshield
pkgname=${_pkgname}-git
pkgver=r159.ef73f41
pkgrel=1
pkgdesc="Extracts CAB files from InstallShield installers"
arch=('i686' 'x86_64')
url="https://github.com/twogood/unshield"
license=('MIT')
depends=('zlib' 'openssl')
makedepends=('cmake' 'git')
provides=${_pkgname}
conflicts=${_pkgname}
source=("git+https://github.com/twogood/unshield")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}


build() {
  cd ${srcdir}/${_pkgname}
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    .
  make
}

package() {
  cd ${srcdir}/${_pkgname}
  make DESTDIR=${pkgdir} install
  ln -s libunshield.so ${pkgdir}/usr/lib/libunshield.so.0
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/unshield/LICENSE
}
