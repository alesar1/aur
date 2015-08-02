# Maintainer: Sam Stuewe <halosghost at archlinux dot info>
pkgname=libsixel-git
pkgver=r1938.8849016
pkgrel=1
pkgdesc='A lightweight, fast implementation of DEC SIXEL graphics codec'
arch=('x86_64' 'i686')
url='https://github.com/saitoha/libsixel'
license=('MIT')
depends=('curl' 'libjpeg-turbo' 'libpng')

source=("git+https://github.com/saitoha/libsixel")
sha256sums=(SKIP)

pkgver() {
  cd "libsixel"
  printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "libsixel"
  ./configure --prefix=/usr
  make
}

package() {
  cd "libsixel"
  make DESTDIR="$pkgdir" install
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
