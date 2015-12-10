# Maintainer: Dario Ostuni <another.code.996@gmail.com>
pkgname=cgicc
pkgver=3.2.16
pkgrel=5
pkgdesc="C++ library that simplifies the creation of CGI applications"
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/cgicc/"
license=('LGPL3')
makedepends=('doxygen')
options=()
source=("https://ftp.gnu.org/gnu/cgicc/$pkgname-$pkgver.tar.gz"
        "fix_pc_file.patch")
sha256sums=('9dceb36d2da52791ee11f2fb5bb6435c22e69ef50f38073c4329386b883d5aaa'
            '5a0b29ce1028cba8d7cc7d52244077c030ed8f447e169a7afa946b376150b35b')

build() {
  cd "$pkgname-$pkgver"
  patch -p2 -b -z .orig < "${srcdir}/fix_pc_file.patch"
  ./configure --prefix=/usr
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}
