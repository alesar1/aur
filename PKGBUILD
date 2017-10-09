# Maintainer: Will Handley <wh260@cam.ac.uk> (aur.archlinux.org/account/wjhandley)
pkgname=lalframe
_pkgname=${pkgname}
pkgver=1.4.3
pkgrel=3
pkgdesc="The LIGO Scientific Consortium Algorithm Library Suite. ${_pkgname}"
arch=(any)
url="https://wiki.ligo.org/DASWG/LALSuiteInstall"
license=('unknown')
groups=('lalsuite')
depends=('libframe' 'lalcore')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("http://software.ligo.org/lscsoft/source/lalsuite/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('cbb6ed39abb5a02d792523fc53208330cf8adf02bc4290cac635d42577acb5b1')
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
