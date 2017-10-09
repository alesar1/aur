# Maintainer: Will Handley <wh260@cam.ac.uk> (aur.archlinux.org/account/wjhandley)
pkgname=lalxml
_pkgname=${pkgname}
pkgver=1.2.4
pkgrel=3
pkgdesc="The LIGO Scientific Consortium Algorithm Library Suite. ${_pkgname}"
arch=(any)
url="https://wiki.ligo.org/DASWG/LALSuiteInstall"
license=('unknown')
groups=('lalsuite')
depends=('lalcore')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("http://software.ligo.org/lscsoft/source/lalsuite/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('5509bcc9cbce0b497036d3fc87628d1cbaa9f33af20cf33609cabd9c6ee398f1')
build() {
    cd "$srcdir/${_pkgname}-${pkgver}"
    sed -i 's/\-Werror//g' configure
    ./configure --prefix=$pkgdir/usr CFLAGS=-O3
    make -j
}
package() {
    cd "$srcdir/${_pkgname}-${pkgver}"
    make install
}
check() {
    cd "$srcdir/${_pkgname}-${pkgver}"
    make -j check
}
