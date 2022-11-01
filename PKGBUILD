# Maintainer: Charles Vejnar <first name [dot] last name [at] gmail [dot] com>

pkgname=star-cshl
pkgver=2.7.10b
pkgrel=3
pkgdesc="STAR aligns RNA-seq reads to a reference genome using uncompressed suffix arrays"
arch=("x86_64")
url="https://github.com/alexdobin/STAR"
license=("GPL3")
makedepends=('vim')
source=("$pkgname-$pkgver.tar.gz::https://github.com/alexdobin/STAR/archive/${pkgver}.tar.gz")
sha1sums=('6ecdc8a287863b6b95ee5fa4f57331cb466c1745')

build() {
    cd "$srcdir/STAR-${pkgver}/source"

    make STAR
    mv STAR STARshort
    make clean
    make STARlong
}

package() {
    cd "$srcdir/STAR-${pkgver}/source"

    install -Dm755 STARshort "$pkgdir/usr/bin/STAR"
    install -Dm755 STARlong "$pkgdir/usr/bin/STARlong"
    install -Dm644 parametersDefault "$pkgdir/usr/share/doc/star-cshl/parameters"

    cd "$srcdir/STAR-${pkgver}/doc"

    install -Dm644 STARmanual.pdf "$pkgdir/usr/share/doc/star-cshl/STARmanual.pdf"
}
