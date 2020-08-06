# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
# Contributor: Lukas Fleischer <lfleischer@archlinux.org>
# Contributor: Aleksey Filippov <sarum9in@gmail.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Thomas S Hatch <thatch45@gmail.com>
# Contributor: Geoffroy Carrier <geoffroy@archlinux.org>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname='protobuf-static'
_pkgname='protobuf'
pkgver=3.12.3
pkgrel=1
pkgdesc="Protocol Buffers - Google's data interchange format"
arch=('x86_64')
url='https://developers.google.com/protocol-buffers/'
license=('BSD')
depends=('gcc-libs' 'zlib')
makedepends=()
options=('staticlibs')
provides=("protobuf=$pkgver")
conflicts=('protobuf')
source=("$_pkgname-$pkgver.tgz::https://github.com/google/${_pkgname}/archive/v${pkgver}.tar.gz"
    "no-thirdparty.patch")
sha256sums=('71030a04aedf9f612d2991c1c552317038c3c5a2b578ac4745267a45e7037c29'
            '6fc836196e69b872794e821111df64effe69f984d46d83c902a9df8953a868b3')

prepare() {
  cd "$_pkgname-$pkgver"
  rm -rf third_party
  patch -p1 < ../no-thirdparty.patch
}

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  autoreconf -vif
  ./configure --prefix=/usr
  make CFLAGS="$CFLAGS -fPIC" CXXFLAGS="$CXXFLAGS -fPIC"
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  make DESTDIR="$pkgdir" install

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 editors/protobuf-mode.el "$pkgdir"/usr/share/emacs/site-lisp/protobuf-mode.el
}
