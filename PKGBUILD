# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Contributor: Fixed Torres <aur_linuxero@outlook.com>

pkgname=sayonara-player
_pkgver=1.5.1-stable5
pkgver=${_pkgver//-/_}
pkgrel=2
pkgdesc="Small, clear and fast audio player for Linux written in C++, supported by the Qt framework. It uses Gstreamer as audio backend."
arch=(i686 x86_64)
url="http://sayonara-player.com"
license=(GPL3)
depends=(qt5-base taglib gst-plugins-base gst-plugins-good)
makedepends=(cmake qt5-tools gst-plugins-bad)
optdepends=('gst-libav: additional codecs'
            'gst-plugins-bad: additional codecs'
            'gst-plugins-ugly: additional codecs')
source=("http://sayonara-player.com/sw/${pkgname}-${_pkgver}.tar.gz"
        "sayonara-qpainter.patch::https://gitlab.com/luciocarreras/sayonara-player/-/commit/8ece134217a3efaf61383e060353f105ab1a4b21.patch")
sha512sums=('0400a768685a65ac1d7379c10fa8ee7146a181fb208507fe40175feee5352e7ac9c263f6b506711aa93ac0aed3f64c1052790830181cec2d354a05c11c886a13'
            'd7a189bfa925a35d2534ce13b6d2407222203b7241abd8b08f3a4ae1f4f0d6bca9c93bd06b70ee7a2783cd32710ed7a782e8fa9dc06b98b3798149fad2bba170')

prepare() {
 cd "$srcdir/$pkgname"
  [[ -d build ]] || mkdir build
  patch -Np1 -i ../sayonara-qpainter.patch
}

build() {
  cd "$srcdir/${pkgname}/build"
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DUSE_SYSTEM_TAGLIB=1 \
    -DWITH_TESTS=1
  make
}

check() {
  cd "$srcdir/${pkgname}/build"
  make test
}
 
package() {
  cd "$srcdir/${pkgname}/build"
  make DESTDIR="$pkgdir/" install
}
