# Maintainer: core_contingency <ccontingency(at)gmail(dot)com>
# Contributor: ScarecrowDM <diego(dot)busnelli@hotmail(dot)com>
# Contributor: Alex Xu (Hello71) <alex_y_xu@yahoo.ca>
# Contributor: pyamsoft <pyam(dot)soft(at)gmail(dot)com>

pkgname=libstrangle
pkgdesc="Simple FPS Limiter"
pkgver=0.1.1
pkgrel=1
url='https://gitlab.com/torkel104/libstrangle'
arch=('x86_64')
depends=('lib32-gcc-libs' 'lib32-glibc' 'libglvnd')
makedepends=('git')
provides=('libstrangle')
conflicts=('libstrangle')
license=('GPL3')
source=("libstrangle-0.1.1.tar.gz::https://gitlab.com/torkel104/libstrangle/-/archive/${pkgver}/libstrangle-${pkgver}.tar.gz")
sha256sums=('8413f260ce1ab15cd38752f67650dee2f822f858d384d6c0784a9428c23cd105')

prepare() {
    cd $_pkgname
    sed -i -e '/ldconfig/d' makefile
}

build() {
    cd $_pkgname
    make prefix=/usr
}

package() {
    cd $_pkgname
    make prefix=/usr DESTDIR="$pkgdir" install-common install-32 install-64 install-ld

    # Install the README.md locally
    install -d "$pkgdir/usr/share/doc/$_pkgname"
    install -m644 -t "$pkgdir/usr/share/doc/$_pkgname" README.*
}
