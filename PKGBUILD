# Maintainer: Hannes Schulze <projects@guidedlinux.org>
pkgname=archmaker
pkgver=0.0.2
pkgrel=1
pkgdesc="Quickly and easily create your own arch-based GNU/Linux-distribution"
arch=('x86_64')
url="https://archmaker.guidedlinux.org/"
license=('GPL3')
depends=('qt5-base' 'qt5-quickcontrols2' 'qt5-graphicaleffects' 'qt5-quickcontrols' 'archiso' 'xterm')
makedepends=('git')
provides=('archmaker')
conflicts=('archmaker')
source=("$pkgname-$pkgver"::'git+https://github.com/guidedlinux/archmaker#branch=qtrewrite')
md5sums=('SKIP')

build() {
  cd "$pkgname-$pkgver"

  mkdir build && cd build

  qmake ..
  make
}

package() {
  cd "$pkgname-$pkgver"/build

  make INSTALL_ROOT="$pkgdir/" install
}
