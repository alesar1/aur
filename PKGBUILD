# Maintainer: Mikkel Kroman <mk@uplink.io>
# Contributor: Lukas Fleischer <lfleischer@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: naelstrof <naelstrof@gmail.com>

pkgname=slop-opengl
pkgver=4.3.21
pkgrel=2
pkgdesc='Utility to query the user for a selection and print the region to stdout'
arch=('i686' 'x86_64')
url='https://github.com/naelstrof/slop'
license=('GPL3')
depends=('libxext' 'libx11' 'imlib2' 'mesa' 'glew' 'libxrandr' 'libgl')
makedepends=('cmake' 'glm')
source=("${pkgname}-${pkgver}.tar.gz::$url/archive/v${pkgver}.tar.gz")
md5sums=('14feae4eed73470bf843c6d65dbb4dff')

build() {
  cd "$pkgname-$pkgver"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_OPENGL_SUPPORT=1 . .
  make
}

package() {
  make -C "$pkgname-$pkgver" DESTDIR="$pkgdir" install
}
