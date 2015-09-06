# Maintainer: Zhuoyun Wei <wzyboy@wzyboy.org>

pkgname=telegram-purple
pkgver=1.2.0beta3
_pkgver=v1.2.0-beta3
pkgrel=1
pkgdesc="Adds support for Telegram to Pidgin, Adium, Finch and other Libpurple based messengers."
arch=('i686' 'x86_64')
url="https://github.com/majn/telegram-purple"
license=("GPL")
makedepends=("git")
depends=('glib2' 'openssl' 'libpurple' 'zlib' 'libwebp')
source=("git+https://github.com/majn/telegram-purple.git")
sha256sums=('SKIP')

prepare() {
  cd "${srcdir}/${pkgname}"
  git checkout $_pkgver
  git submodule sync
  git submodule update --init --recursive
}

build() {
  cd "${srcdir}/${pkgname}"
  ./configure
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  make DESTDIR="$pkgdir" install
}

