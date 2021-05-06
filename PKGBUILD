# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >
# Previous Maintainer: Felix Golatofski <contact@xdfr.de>
# Previous Contributor: Felix Serrano Blanco <felixseblanc@gmail.com>

pkgname=libtd-git
pkgver=1.7.0.r747.gb342ec33
pkgrel=1
pkgdesc='TDLib (Telegram Database library) is a cross-platform library for building Telegram clients (Git)'
arch=('x86_64' 'arm' 'armv7h' 'armv6h' 'aarch64')
url='https://core.telegram.org/tdlib'
license=('Boost')
depends=('openssl' 'zlib')
makedepends=('git' 'gcc' 'make' 'cmake' 'gperf' 'php')
provides=('libtd')
conflicts=('telegram-tdlib' 'libtd')
source=("${pkgname%-git}::git+https://github.com/tdlib/td.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cmake -B build -S "${pkgname%-git}" -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}
