# Maintainer: Greg Erwin <first name last name 256 at gmail dot com>

pkgname=libgpiod-git
pkgver=r602.039b301
pkgrel=2
pkgdesc="C library and tools for interacting with the linux GPIO character device"
url="https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
license=('LGPL2.1')
depends=('linux>=4.8' 'python')
makedepends=('git' 'autoconf-archive')
source=('git://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git')
sha1sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${pkgname%-git}"
  ./autogen.sh \
    --enable-tools=yes \
    --enable-bindings-cxx \
    --enable-bindings-python \
    --prefix=/usr
  make
}

package() {
  cd "$srcdir/${pkgname%-git}"
  make DESTDIR="$pkgdir/" install
}
