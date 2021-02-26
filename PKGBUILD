# Maintainer: Daniel Eklöf <daniel at ekloef dot se>
pkgname=fuzzel
pkgver=1.5.1
pkgrel=1
pkgdesc="Application launcher for wlroots based Wayland compositors"
arch=('x86_64' 'aarch64')
url=https://codeberg.org/dnkl/fuzzel
license=(mit)
makedepends=('meson' 'ninja' 'scdoc' 'tllist>=1.0.1')
depends=('libxkbcommon' 'wayland' 'pixman' 'cairo' 'librsvg' 'libpng' 'fcft>=2.0.0')
changelog=CHANGELOG.md
source=(https://codeberg.org/dnkl/${pkgname}/archive/${pkgver}.tar.gz)
sha256sums=('8a7394a32664638c91e865d63cf5d5a34d8caf4594854ed4867afae1a6f38eb7')

build() {
  cd ${pkgname}

  meson --prefix=/usr --buildtype=release . build
  ninja -C build
}

package() {
  cd ${pkgname}
  DESTDIR="${pkgdir}/" ninja -C build install
}
