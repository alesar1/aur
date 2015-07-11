# Maintainer: Christoph Wiechert <wio@psitrax.de>
pkgname=purple-facebook
pkgver=a34b993324e4
pkgrel=1
pkgdesc="Facebook Messenger protocol into pidgin, finch, and libpurple"
url="https://github.com/jgeboski/purple-facebook"
arch=('x86_64' 'i686')
license=('GPL')
depends=('libpurple')

makedepends=('make')
source=("https://github.com/jgeboski/purple-facebook/releases/download/a34b993324e4/purple-facebook-${pkgver}.tar.gz")
md5sums=('SKIP')

build() {
  cd "${srcdir}/purple-facebook-${pkgver}"
  ./configure
}

package() {
  cd "${srcdir}/purple-facebook-${pkgver}"
  make DESTDIR="${pkgdir}" install
  libtool --finish /usr/lib/purple-2
}

# vim:set ts=2 sw=2 et:
