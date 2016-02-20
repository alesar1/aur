# Maintainer: Daniel Renninghoff <renninghoff AT archlinux DOT info>
# Contributor: gucong <gucong43216@gmail.com>
# Contributor: P. A. López-Valencia <palopezv AT gmail DOT com>
# Contributor: wangjiezhe <wangjiezhe AT yandex DOT com>

pkgname=hoichess
pkgver=0.17.0
pkgrel=2
pkgdesc="Xboard compatible chess engine and xiangqi (Chinese chess) engine"
arch=('i686' 'x86_64')
license=('GPL2')
url="http://www.hoicher.de/hoichess"
depends=()
source=(${url}/download/${pkgname}-${pkgver}-gpl.tar.gz)
md5sums=('87e40588c276f09ea474e1bed92b2ebd')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"
  sed -i 's/games$/bin/' Makefile
  sed -i 's/CXXFLAGS\ =/CXXFLAGS\ +=/' src/Makefile
  cd "book"
  sh "download-gnuchess-book"
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
