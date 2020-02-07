# Maintainer: CareF <CareF.lm@gmail.com>

pkgname=deepin-dock-plugin-arch-update
pkgver=2.3.3
pkgrel=1
pkgdesc="A plugin for deepin dock, Arch Linux update indicator"
arch=('x86_64')
url="https://github.com/CareF/deepin-dock-plugin-arch-update"
depends=('deepin-dock' 'pacman-contrib')
makedepends=('git' 'qt5-base' 'qt5-tools' 'dtkcore')
install=$pkgname.install
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/CareF/deepin-dock-plugin-arch-update/archive/v${pkgver}.tar.gz")
md5sums=('5069e5acb047843df0e73e6c4092f889')

build() {
  qmake "$srcdir/$pkgname-$pkgver/source"
  make ${MAKEFLAGS}
}

package(){
  make INSTALL_ROOT="$pkgdir" install
}
