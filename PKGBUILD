# Contributor: Shaber
# Maintainer: Dan Johansen <strit@manjaro.org>

pkgname=corefm
pkgver=2.7.0
pkgrel=1
pkgdesc="A lightwight filemanager from the CoreApps family."
arch=('x86_64' 'aarch64')
url="https://gitlab.com/cubocore/$pkgname"
license=('GPL3')
depends=('qt5-base' 'qt5-multimedia' 'libcprime' 'libcsys')
groups=('coreapps')
source=("https://gitlab.com/cubocore/$pkgname/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
md5sums=('4aed6b60b1f5df83c6b90a2f317f795c')

prepare() {
  mkdir -p build
}

build() {
  cd ${pkgname}-v${pkgver}

  qmake-qt5 ${pkgname}.pro
  make
}

package() {
  cd ${pkgname}-v${pkgver}
  make INSTALL_ROOT=${pkgdir} install
}
