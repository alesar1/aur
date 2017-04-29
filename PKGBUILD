# Maintainer: ArsenArsen <arsenarsentmc@outlook.com>
pkgname=kshare-git
pkgver=1.1.r14.g3c92607
pkgrel=1
pkgdesc="A ShareX inspired cross platform utility written with Qt."
arch=('i686' 'x86_64')
url="https://github.com/ArsenArsen/KShare"
license=('MIT')
provides=('kshare=${pkgver}')
depends=(qt5-base qt5-x11extras)
source=(git+https://github.com/ArsenArsen/KShare.git)
sha1sums=('SKIP')

build() {
  cd "${srcdir}/KShare"
  git submodule update --init --recursive  
  qmake
  make
}

package() {
  cd "${srcdir}/KShare"
  echo $pkgdir
  mkdir -p "$pkgdir/usr/bin"
  install ./KShare "$pkgdir/usr/bin"
}

pkgver() {
  cd "${srcdir}/KShare"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

