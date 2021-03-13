# Maintainer: Nico <d3sox at protonmail dot com>
pkgname=soundux-git
pkgver=r609.556c382
pkgrel=3
epoch=1
pkgdesc="A cross-platform soundboard"
arch=('any')
url="https://github.com/Soundux/Soundux"
license=('GPL3')
depends=('pulseaudio' 'webkit2gtk')
makedepends=('git' 'cmake' 'ninja')
conflicts=('soundux')
provides=('soundux')
source=("git+https://github.com/Soundux/Soundux.git")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/Soundux"

  # Get the version number.
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/Soundux"
  git submodule update --init --recursive
  mkdir -p build
  cd build
  cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
  ninja
}

package() {
  cd "${srcdir}/Soundux/build"
  DESTDIR="$pkgdir/" ninja install
  # install binary symlink
  mkdir -p "${pkgdir}/usr/bin/"
  ln -sf /opt/soundux/soundux "${pkgdir}/usr/bin/soundux"
}
