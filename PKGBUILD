# Maintainer: Andrew Whatson <whatson@gmail.com>

_pkgname=faudio
_gitname=FAudio
pkgname=${_pkgname}-git
pkgver=r979.a98be73
pkgrel=1
pkgdesc="Accuracy-focused XAudio reimplementation for open platforms"
arch=('i686' 'x86_64')
url='https://github.com/FNA-XNA/FAudio'
license=('custom')
provides=("${_pkgname}")
depends=('sdl2' 'ffmpeg')
makedepends=('git' 'cmake')
source=('git+https://github.com/FNA-XNA/FAudio'
        'faudio.pc')
sha256sums=('SKIP'
            '19dfd14a8d04d88bec136f72486dee3d02f5c9e890abaebe62e1982164764c87')

pkgver() {
  cd "$srcdir/${_gitname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  mkdir -p "$srcdir/${_gitname}/build"
  cd "$srcdir/${_gitname}/build"

  cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="${pkgdir}/usr" \
    -DFFMPEG=ON

  make
}

package() {
  cd "$srcdir/${_gitname}/build"

  make install

  mkdir "${pkgdir}/usr/include/FAudio"
  mv "${pkgdir}/usr/include"/*.h "${pkgdir}/usr/include/FAudio"

  sed -i 's!"${_IMPORT_PREFIX}/include"!"${_IMPORT_PREFIX}/include/FAudio"!' \
    "${pkgdir}/usr/lib/cmake/FAudio/FAudio-targets.cmake"

  install -D -m644 -t "${pkgdir}/usr/share/licenses/${_pkgname}" ../LICENSE
  install -D -m644 -t "${pkgdir}/usr/lib/pkgconfig" ../../faudio.pc
}
