# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=xisxwayland
pkgver=1
pkgrel=2
pkgdesc="Tool to determine whether the X server in use is Xwayland"
url="https://gitlab.freedesktop.org/xorg/app/xisxwayland"
arch=(x86_64)
license=(MIT)
makedepends=(meson ninja)
depends=(libx11 libxrandr)
source=("https://xorg.freedesktop.org/archive/individual/app/xisxwayland-$pkgver.tar.xz"
        "$url/-/commit/f4d8ab82ac0b724bba1c43c6d3196a223c560a61.patch")
sha256sums=('39eff8ab32e7fa3d94fad61eaba9c970f51221f2b76897a66f16ff0b34f02a29'
            '2ab17e7984c9d27ac980e175d784dc255ccc6377d0942f480a34d4b5903d274d')

prepare() {
  patch -d $pkgname-$pkgver -p1 -i ../f4d8ab82ac0b724bba1c43c6d3196a223c560a61.patch
}

build() {
  arch-meson $pkgname-$pkgver build
  ninja -C build
}

check() {
  ninja -C build test
}

package() {
  DESTDIR="$pkgdir" ninja -C build install
}
