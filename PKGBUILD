# Contributor: thorsten w. <p@thorsten-wissmann.de>
# Maintainer: aksr <aksr at t-com dot me>
pkgname=ctris
pkgver=0.42.1
pkgrel=1
pkgdesc="A colorized, small and flexible Tetris(TM)-clone for the console."
arch=('i686' 'x86_64')
url="http://www.hackl.dhs.org/ctetris/"
license=('GPL')
depends=('ncurses')
makedepends=()
backup=()
source=("https://github.com/dominikhackl/$pkgname/archive/v${pkgver}.tar.gz")
md5sums=('b739f716c2cbfed0bb28719b269f1cc7')
sha1sums=('6f7640da5543a8558aad87f3da57b3bfa5896fd5')
sha256sums=('c5fe3e70b76129ea83cac85a3c5dbc084066a62d7ef4edcc73c545ee89222ed8')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make BINDIR=$pkgdir/usr/bin/ DESTDIR=$pkgdir install
}

