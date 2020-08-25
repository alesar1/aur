# Maintainer: Mika Cousin <mika dot cousin at gmail dot com>

pkgname=olc-git
pkgver=0.2.1.alpha
pkgrel=1
pkgdesc='Open Lighting Console'
arch=(any)
url=https://github.com/mikacousin/olc
license=(GPL3)
depends=(
  ola-git
  gtk3
  python-cairo
  python-gobject
  python-psutil
  portmidi
  python-mido
  python-pyliblo
)
makedepends=(
  git
  gobject-introspection
  meson
)
provides=('olc')
source=('git+https://github.com/mikacousin/olc')

pkgver() {
  cd "$srcdir/olc"
  git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  arch-meson olc build --libexec='lib/olc'
  ninja -C build
}

package() {
  DESTDIR="${pkgdir}" ninja -C build install
}

md5sums=('SKIP')
