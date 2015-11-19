# Maintainer: Celestial Walrus <aur@celestial.cf>

pkgname=cava-git
_pkgname=cava
pkgver=r218.2a2750a
pkgrel=1
pkgdesc='Console-based Audio Visualizer for Alsa'
arch=(i686 x86_64)
url='https://github.com/karlstav/cava'
license=(none)
depends=(glibc)
makedepends=(git fftw)
source=(git://github.com/karlstav/cava)
sha1sums=('SKIP')

provides=($_pkgname)
conflicts=($_pkgname)

pkgver() {
  cd $_pkgname
  echo r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd $_pkgname
  sed -i -e 's/ncursesw5-config/ncursesw6-config/' makefile
  make
}

package() {
  cd $_pkgname
  install -Dm755 cava "$pkgdir/usr/bin/cava"
}

