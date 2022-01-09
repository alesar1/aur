# Maintainer: Yury Gubich <blue@macaw.me>
pkgname=squawk
pkgver=0.2.0
pkgrel=1
pkgdesc="An XMPP desktop messenger, written on pure c++ (qt)"
arch=('i686' 'x86_64')
url="https://git.macaw.me/blue/squawk"
license=('GPL3')
depends=('hicolor-icon-theme' 'desktop-file-utils' 'lmdb' 'qxmpp' 'boost')
makedepends=('cmake>=3.3' 'imagemagick' 'qt5-tools')
optdepends=('kwallet: secure password storage (requires rebuild)')

source=("$pkgname-$pkgver.tar.gz")
sha256sums=('8e93d3dbe1fc35cfecb7783af409c6a264244d11609b2241d4fe77d43d068419')
build() {
        cd "$srcdir/squawk"
        cmake . -D CMAKE_INSTALL_PREFIX=/usr -D CMAKE_BUILD_TYPE=Release
        cmake --build . -j $nproc
}
package() {
        cd "$srcdir/squawk"
        DESTDIR="$pkgdir/" cmake --build . --target install 
}
