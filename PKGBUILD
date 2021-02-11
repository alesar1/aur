# Maintainer: Emil Velikov <emil.l.velikov@gmail.com>
# Maintainer: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>
# Contributor: Clayton Craft <clayton@craftyguy.net>

pkgname=waffle-git
pkgver=1.5.2.3.r286.gb6d9448
pkgrel=1
pkgdesc='Library for choosing window system and OpenGL API at runtime (git version)'
arch=('x86_64' 'aarch64')
url='http://www.waffle-gl.org'
provides=('waffle')
conflicts=('waffle')
license=('BSD')

depends=('libx11' 'libxcb' 'wayland')
makedepends=('git' 'meson' 'xcb-proto' 'mesa' 'libxslt' 'docbook-xsl')

source=('git+https://gitlab.freedesktop.org/mesa/waffle.git')
sha256sums=('SKIP')

_gitname='waffle'

pkgver() {
  cd $_gitname
  git describe --long | sed 's/^debian\///;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $_gitname

  arch-meson build \
    --buildtype release \
    -D gbm=enabled \
    -D glx=enabled \
    -D surfaceless_egl=enabled \
    -D x11_egl=enabled \
    -D wayland=enabled \
    -D build-manpages=true \
    -D build-htmldocs=true \
    -D build-examples=false

  meson configure build
  ninja -C build
}

package() {
  cd $_gitname

  DESTDIR="$pkgdir/" ninja -C build install
  install -m755 -d "$pkgdir"/usr/share/licenses/$pkgname
  install -m644 "$pkgdir"/usr/share/doc/waffle1/LICENSE.txt \
    "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.txt
}

