# Contributor: Mark Carter <alt.mcarter@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=neoleo-git
pkgver=8.0.0.r314.g440c01d
pkgrel=1
pkgdesc="Lightweight curses spreadsheet based on GNU oleo"
arch=('i686' 'x86_64')
url="https://github.com/blippy/neoleo"
conflicts=(${pkgname%-git})
provides=(${pkgname%-git})
license=('GPL')
depends=('ncurses')
makedepends=('git')
source=("git+$url.git" return_values.patch)
options=('!makeflags')
sha256sums=('SKIP'
            '77f299642035e0bbf3218c1cde5d7b98217434fef0d3c2af6bb2979e8894d934')

pkgver() {
  cd ${pkgname%-git}
  git describe --tags | sed 's+-+.r+' |tr - . | cut -c2-
}

prepare() {
  cd ${pkgname%-git}
  git apply "$srcdir"/return_values.patch
}

build() {
  cd ${pkgname%-git}
  autoreconf -iv
  ./configure --prefix=/usr
  make
}

package() {
  cd ${pkgname%-git}
  make DESTDIR="$pkgdir/" install
}
