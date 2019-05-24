# Maintainer: Marcin Mielniczuk <marmistrz dot dev at zoho dot eu>

pkgname=ibus-libzhuyin
pkgver=1.9.1
pkgrel=3
pkgdesc="New Zhuyin engine based on libzhuyin for IBus"
arch=('x86_64')
license=('GPL2')
url="https://github.com/libzhuyin/ibus-libzhuyin"
# libpinyin provides both libpinyin.so and libzhuyin.so
depends=('ibus' 'opencc' 'python-xdg' 'libpinyin')
makedepends=('git' 'intltool' 'gnome-common' 'wget')
source=("$pkgname-$pkgver.tar.gz::https://github.com/libzhuyin/ibus-libzhuyin/archive/$pkgver.tar.gz")
sha512sums=('568adadf01b1cc1d0f0527b95de0dde884208402c817523007b11df9f39c04c3d6fa58f6434fc48d897bac6a2ecf2d50a1e9a2c214d52f7189d15101a5da5e10')

build() {
  cd $pkgname-$pkgver
  ./autogen.sh --prefix=/usr --libexecdir=/usr/lib/$pkgname --enable-opencc
  make
}

package() {
  cd $pkgname-$pkgver
  make NO_INDEX=true DESTDIR="$pkgdir" install
}
