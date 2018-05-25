# Maintainer: Allen Hoffmeyer <allen dot hoffmeyer at gmail dot com>
#               (adapted from work by Louis R. Marascio <lrm at fitnr dot com>)
# Contributor: trader <trader9 at gawab dot com>
# Contributor: masutu <masutu dot arch at googlemail dot com>
# Contributor: Guillaume Horel <guillaume.horel@gmail.com>

pkgname=quantlib
_pkgname=QuantLib
pkgver=1.13
pkgrel=1
pkgdesc="A free/open-source library for quantitative finance."
arch=('x86_64')
url="http://quantlib.org"
license=('BSD')
options=(!libtool)
depends=('boost-libs' 'sh')
makedepends=('make' 'boost' 'gcc')
source=("Quantlib-$pkgver.tar.gz::https://bintray.com/quantlib/releases/download_file?file_path=$_pkgname-$pkgver.tar.gz")
sha256sums=('bb52df179781f9c19ef8e976780c4798b0cdc4d21fa72a7a386016e24d1a86e6')

build() {
  cd "$srcdir"/"$_pkgname-$pkgver"/
  ./autogen.sh
  ./configure --prefix=/usr --enable-intraday --enable-openmp --disable-static
  make
}

package() {
  cd "$srcdir"/"$_pkgname-$pkgver"/
  make DESTDIR="$pkgdir/" install
  install -D -m644 LICENSE.TXT "$pkgdir/usr/share/licenses/$pkgname/LICENSE.TXT"
}

# vim:set ts=2 sw=2 et:
