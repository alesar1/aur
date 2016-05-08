# Maintainer: Felix Wiegand <koffeinflummi@gmail.com>

_pkgname="armake"
pkgname="${_pkgname}-git"
pkgver=0.1
pkgrel=1
pkgdesc="An open-source implementation of the Arma modding tools."
arch=('i686' 'x86_64')
url="https://github.com/KoffeinFlummi/armake"
license=('GPL2')
depends=()
optdepends=()
source=("git+https://github.com/KoffeinFlummi/armake.git")
sha256sums=('SKIP')

build() {
    cd "${srcdir}/${_pkgname}"
    make
} 

package() {
    cd "${srcdir}/${_pkgname}"
    mkdir -p "${pkgdir}/usr/bin"
    make PREFIX="${pkgdir}" install
}
