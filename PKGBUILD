# Maintainer: Greg Erwin <first name last name 256 at gmail dot com>

pkgname=libgpiod
pkgver=1.6.3
pkgrel=1
pkgdesc="C library and tools for interacting with the linux GPIO character device"
url="https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
license=('LGPL2.1')
depends=('linux-api-headers>=4.8' 'python')
makedepends=('autoconf-archive' 'help2man')
conflicts=('libgpiod-git')
source=("$url/snapshot/$pkgname-$pkgver.tar.gz")
sha256sums=('eb446070be1444fd7d32d32bbca53c2f3bbb0a21193db86198cf6050b7a28441')

build() {
  cd "$pkgname-$pkgver"
  ./autogen.sh \
    --prefix=/usr \
    --enable-tools=yes \
    --enable-bindings-cxx \
    --enable-bindings-python
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
