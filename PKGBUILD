# Maintainer: Timothy Rice <t.rice@ms.unimelb.edu.au>

pkgname=datamash
pkgver=1.0.7
pkgrel=1
pkgdesc="A command-line program which performs numeric, textual and statistical operations on plain text data."
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/datamash/"
license=("GPL")
depends=('glibc')
source=("http://ftp.gnu.org/gnu/${pkgname}/${pkgname}-${pkgver}.tar.gz")

build() {
    cd "$pkgname-$pkgver"
    ./configure --prefix=/usr
    make
}

check() {
    cd "$pkgname-$pkgver"
    make check
}

package() {
    cd "$pkgname-$pkgver/"
    make DESTDIR="$pkgdir/" install
}
md5sums=('9f317bab07454032ba9c068e7f17b04b')
