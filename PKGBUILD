# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=gxr
pkgver=0.15.0
pkgrel=1
pkgdesc="glib wrapper for the OpenVR and soon the OpenXR API"
arch=('i686' 'x86_64')
url="https://gitlab.freedesktop.org/xrdesktop/gxr"
license=('MIT')
depends=('glibc' 'glib2' 'gtk3' 'gulkan' 'openvr')
makedepends=('meson')
optdepends=('glfw')
source=("https://gitlab.freedesktop.org/xrdesktop/gxr/-/archive/$pkgver/gxr-$pkgver.tar.bz2")
sha256sums=('5a51e6433dc0d00068a2e11256a801ce5a7b63a6ce60336d75f2435715fc4fb7')


build() {
  cd "$pkgname-$pkgver"

  meson \
    --buildtype=plain \
    --prefix="/usr" \
    --sbindir="bin" \
    "_build"
  ninja -C "_build"
}

check() {
  cd "$pkgname-$pkgver"

  #meson test -C "_build"
}

package() {
  cd "$pkgname-$pkgver"

  DESTDIR="$pkgdir" meson install -C "_build"
  install -Dm644 "LICENSE" -t "$pkgdir/usr/share/licenses/gxr"
}
