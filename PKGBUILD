# Maintainer: rootjdev <rootjdev@gmail.com>
pkgname=assemblyline-bin
pkgver=1.3.0
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
sha256sums=('6f5509cc0f54be89799b91f94cb7bfe9006685226eeb3e1ccb1bd45e1ed8677f')
