# Maintainer: Dan Johansen <strit@manjaro.org>
# Contributor: Shaber

pkgname=coreterminal
pkgver=4.2.0
pkgrel=2
pkgdesc="A terminal emulator from the C Suite"
arch=('x86_64' 'aarch64')
url="https://gitlab.com/cubocore/coreapps/$pkgname"
license=('GPL3')
depends=('qt5-base' 'qt5-serialport' 'libcprime>=2.7.1' 'qtermwidget')
makedepends=('cmake' 'ninja')
groups=('coreapps')
source=("https://gitlab.com/cubocore/coreapps/$pkgname/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
md5sums=('b5d7c6ecf6efad00f8d4eb44be1114de')

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../${pkgname}-v${pkgver} \
	-GNinja \
	-DCMAKE_INSTALL_PREFIX=/usr \
	-DCMAKE_INSTALL_LIBDIR=lib
  ninja
}

package() {
  cd build
  DESTDIR="${pkgdir}" ninja install
}
