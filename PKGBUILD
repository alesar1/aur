pkgname=duckstation-git
pkgver=preview.r3723.65daf1d6
pkgdesc='A Sony PlayStation (PSX) emulator, focusing on playability, speed, and long-term maintainability'
pkgrel=1
arch=('x86_64' 'aarch64')
url="https://github.com/stenzek/duckstation"
license=('GPL3')
makedepends=('git' 'cmake' 'extra-cmake-modules' 'qt5-tools')
depends=('sdl2' 'qt5-base')
optdepends=(
)
provides=('duckstation')
conflicts=()

_branch=master
source=("git+https://github.com/stenzek/duckstation.git#branch=${_branch}")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/duckstation"
  printf "%s.r%s.%s" "$(git describe --abbrev=0 --tags)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/duckstation"

  cmake -DCMAKE_BUILD_TYPE=Release -DUSE_WAYLAND=1 -DUSE_DRMKMS=1
  make
}

package() {
  cd "${srcdir}/duckstation"

  install -m 755 -d "${pkgdir}/usr/bin/"
  install -m 755 -t "${pkgdir}/usr/bin/" bin/duckstation-nogui bin/duckstation-qt

  install -m 755 -d "${pkgdir}/usr/share/applications/"
  install -m 644 appimage/duckstation-qt.desktop "${pkgdir}/usr/share/applications/duckstation.desktop"
  sed -e 's/Terminal=true/Terminal=false/' -e 's/Name=DuckStation Qt/Name=DuckStation/' -e 's/Icon=duckstation-qt/Icon=duckstation/' -i "${pkgdir}/usr/share/applications/duckstation.desktop"

  install -m 755 -d "${pkgdir}/usr/share/pixmaps/"
  install -m 644 appimage/icon-64px.png "${pkgdir}/usr/share/pixmaps/duckstation.png"
}
