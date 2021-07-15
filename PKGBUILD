# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>

pkgname=vivarium-git
pkgver=0.0.3.r15.g460fd72
pkgrel=2
pkgdesc="A dynamic tiling Wayland compositor inspired by xmonad"
arch=('x86_64')
url="https://github.com/inclement/vivarium"
license=('GPL3')
depends=('wlroots>=0.14.0' 'wlroots<0.15.0' 'xcb-util-renderutil')
makedepends=('git' 'meson' 'wayland-protocols')
optdepends=('xorg-xwayland: X.org support under Wayland'
            'waybar: Bar program for Wayland; the only tested one')
provides=('vivarium')
conflicts=('vivarium')
install="$pkgname.install"
source=("git+$url")
md5sums=('SKIP')
validpgpkeys=('4AEE18F83AFDEB23')

pkgver() {
  cd vivarium
  git describe --long --tags | sed 's/^v//;s/-/.r/;s/-/./'
}

build() {
  meson --prefix=/usr --buildtype=release -Ddevelop=false -Dwerror=false vivarium build
  meson compile -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
