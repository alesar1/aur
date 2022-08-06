# Maintainer: zhuangzhuang <xufengyuan20080802@outlook.com>

pkgname=piscesde-screenlocker-git
_pkgname=piscesde-screenlocker
pkgver=0
pkgrel=2
pkgdesc="piscesDE system screen locker"
arch=('x86_64')
url="https://github.com/piscesys/screenlocker"
license=('GPL')
groups=('piscesde-git')
depends=('piscesde-fishui-git' 'libpiscesde-git')
makedepends=('extra-cmake-modules' 'qt5-tools' 'git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+$url.git")
sha512sums=('SKIP')

build() {
  cd screenlocker
  
  cmake -DCMAKE_INSTALL_PREFIX=/usr .
  make
}

package() {
  cd screenlocker
  make DESTDIR="$pkgdir" install
}
