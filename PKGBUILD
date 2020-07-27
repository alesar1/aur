pkgname=bincalc
pkgver=2
pkgrel=1
pkgdesc='Command line calculator for bit fiddling (showing bits, showing as floats, etc.)'
url='https://github.com/sandsmark/bincalc'
arch=('x86_64' 'i686')
license=('GPL2')
makedepends=(gcc)
depends=(gmp)
source=("https://github.com/sandsmark/bincalc/archive/${pkgver}.tar.gz")
sha256sums=('5aeb1cca199a6cee56df42646a8969ec7c0056697db5d91c64f7caa7f38b4f5e')

build() {
    cd bincalc-${pkgver}

    # gnu make and/or gcc are broken
    LDFLAGS+=,--no-as-needed

    make
}

package() {
    cd bincalc-${pkgver}
    install -D -m755 bincalc -t "${pkgdir}/usr/bin"
}
