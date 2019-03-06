# Maintainer: Andrew Sun <adsun701@gmail.com>
# Contributor: Anatol Pomozov anatol dot pomozov at g mail
# Contributor: Leslie P. Polzer <polzer@gnu.org>
# Contributor: bender02 at archlinux dot us
# Contributor: Felix Saparelli <me@passcod.name>

pkgname=mongoose
pkgver=6.14
pkgrel=1
pkgdesc="Easy to use, powerful, embeddable web server"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('glibc' 'openssl')
url="https://github.com/cesanta/mongoose"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/cesanta/mongoose/archive/${pkgver}.tar.gz")
sha256sums=('f11d2fb23eec08ee5d95da600649177b9bdcf9eaa6be407d997b174e271e4d78')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  # hopefully upstream will provdide an official Makefile
  # https://github.com/cesanta/mongoose/issues/326
  gcc -shared -fPIC -DMG_ENABLE_SSL $CFLAGS $LDFLAGS mongoose.c -o libmongoose.so -lssl
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm755 libmongoose.so "${pkgdir}/usr/lib/libmongoose.so"
  install -Dm644 mongoose.h "${pkgdir}/usr/include/mongoose.h"
}
