# Maintainer: rootjdev <rootjdev@gmail.com>
pkgname=assemblyline-bin
pkgver=1.2.1
pkgrel=0
pkgdesc="An in-memory assembler for x86. (latest stable release)"
arch=(x86_64)
url="https://github.com/0xAde1a1de/assemblyline.git"
license=('Apache')
makedepends=(tar make libtool)
provides=(libassemblyline asmline)
source=("https://github.com/0xADE1A1DE/AssemblyLine/releases/download/v${pkgver}/${pkgname%-bin}-${pkgver}.tar.gz")
build() {
  cd "${pkgname%-bin}-${pkgver}"
  ./configure --prefix=/usr
  make clean all
}

package() {
  cd "${pkgname%-bin}-${pkgver}"
  make DESTDIR="$pkgdir/" install
}
sha256sums=('ddfccc70598de60dbe56c76390ebfe79fad35f956a760495662debf0c031e95d')
