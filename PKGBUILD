# Maintainer: Andrew Whatson <whatson@gmail.com>

_pkgbase=faudio
_pkgname=lib32-${_pkgbase}
pkgname=${_pkgname}-git
pkgver=19.08.r0.g2cc0ee5
pkgrel=1
pkgdesc="XAudio2 reimplementation"
arch=(x86_64)
url="https://github.com/FNA-XNA/FAudio/"
license=('custom:zlib')
provides=("${_pkgname}")
depends=("${_pkgbase}" 'lib32-sdl2' 'lib32-ffmpeg')
makedepends=('git' 'cmake')
source=('git+https://github.com/FNA-XNA/FAudio'
        'faudio.pc'
        'force-lib32-sdl2.patch')
sha256sums=('SKIP'
            '10b0d2bd3a5e415971b36abf6bf6b853d7e3cd0dc316b6e4c773815a56b4a26f'
            '13fbcb9ef210db64bc73e3193b7c3a89cb2fac98fd4a1251389523dfb118c3bc')

pkgver() {
  cd FAudio
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p build

  cd FAudio
  patch -p1 -i ../force-lib32-sdl2.patch
}

build() {
  export CC="gcc -m32 -mstackrealign"
  export CXX="g++ -m32 -mstackrealign"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cd build
  cmake ../FAudio \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_LIBDIR=lib32 \
    -DFFMPEG=ON \
    -DFFmpeg_LIBRARY_DIRS=/usr/lib32
  make
}

package() {
  DESTDIR="$pkgdir" make -C build install
  rm -r "$pkgdir"/usr/include

  install -Dm644 FAudio/LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
  install -Dm644 faudio.pc "$pkgdir"/usr/lib32/pkgconfig/faudio.pc
}
