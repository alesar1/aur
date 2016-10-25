# Maintainer: Michael Carlberg <c@rlberg.se>
# Contributor: Michael Carlberg <c@rlberg.se>
pkgname=lemonbuddy
pkgver=2.1.0
pkgrel=5
pkgdesc="A fast and easy-to-use tool for Lemonbar"
arch=("i686" "x86_64")
url="https://github.com/jaagr/lemonbuddy"
license=("MIT")
depends=("libxft" "xcb-util-wm")
optdepends=("alsa-lib: volume module support"
            "libmpdclient: mpd module support"
            "wireless_tools: network module support"
            "i3ipc-glib-git: i3 module support")
makedepends=("cmake" "python2" "pkg-config" "clang35" "libc++" "boost")
conflicts=("lemonbuddy-git")
source=("${pkgname}::git+${url}.git#tag=${pkgver}")
md5sums=("SKIP")

prepare() {
  cd "$pkgname" || exit
  git submodule update --init --recursive
  mkdir build
}

build() {
  cd "${pkgname}/build" || exit
  cmake \
    -DCMAKE_C_COMPILER=clang \
    -DCMAKE_CXX_COMPILER=clang++ \
    -DCMAKE_EXE_LINKER_FLAGS=-lc++ \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package() {
  cd "${pkgname}/build" || exit
  make DESTDIR="${pkgdir}/" install
  cd .. || exit
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
