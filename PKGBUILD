# Maintainer: Fabio Loli <loli_fabio@protonmail.com>
# Contributor: kagan <juanynie AT gmail DOT com>
# Contributor: Valheru <valheru AT facticius DOT net>
# Contributor: jackoneill

pkgname=qcomicbook
pkgver=0.9.1
pkgrel=1
pkgdesc="A reader of comic book archives"
url="http://qcomicbook.org/"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('qt5-x11extras'
         'poppler-qt5')
optdepends=('p7zip'
            'unace'
            'unrar'
            'rar')
makedepends=('cmake' 'qt5-tools')
source=("https://github.com/stolowski/QComicBook/archive/$pkgver.tar.gz")
md5sums=('d8762ff0698652cd2c383dbaa30cc132')

build() {
   cd "$srcdir/QComicBook-$pkgver"
   cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release  
   make
}

package() {
   cd "$srcdir/QComicBook-$pkgver"
   make DESTDIR="$pkgdir" install
}
