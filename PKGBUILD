# Maintainer: Wispy <wspvlv@gmail.com>
pkgname=wimg
pkgver=0.1
pkgrel=1
pkgdesc="A minimalistic image viewer made with WLib and SDL2"
arch=(x86_64)
url=""
license=('GPL3')
groups=()
depends=( sdl2 wlib )
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=($pkgname-$pkgver.tar.gz)
noextract=()
md5sums=(SKIP)

package() {
  DESTDIR="$pkgdir"
  install -Dm644 wimg -t ${DESTDIR}/usr/bin
}