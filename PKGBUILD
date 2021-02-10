# Author: Roman Gilg <subdiff@gmail.com>

pkgname=wrapland-kwinft
pkgver=0.521.0.beta
_pkgver=0.521.0-beta.0
pkgrel=0
pkgdesc='Qt/C++ library wrapping libwayland'
arch=(x86_64)
url="https://gitlab.com/kwinft/wrapland"
license=(LGPL)
depends=('kwayland' 'wayland')
provides=("wrapland")
conflicts=("wrapland")
makedepends=(extra-cmake-modules doxygen qt5-tools wayland-protocols pkgconf)
source=("https://gitlab.com/kwinft/wrapland/-/archive/wrapland@$_pkgver/wrapland-wrapland@$_pkgver.tar.gz")
md5sums=('ec28e234ae5615bcc7ec7fbedde01053')

prepare() {
  tar -xvf wrapland-wrapland@$_pkgver.tar.gz
  mkdir -p "$srcdir"/build/make
}

build() {
  cd "$srcdir"/build
  cmake "$srcdir/wrapland-wrapland@$_pkgver" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_LIBEXECDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF \
    -DBUILD_QCH=ON
  make
}

package() {
  cd "$srcdir"/build
  make DESTDIR="$pkgdir" install
}
