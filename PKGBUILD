# Maintainer: Kenneth Henderick <kenneth@ketronic.be>
# Maintainer: Donald Webster <fryfrog@gmail.com>
# Contributor: kfgz <kfgz at interia dot pl>
# Contributor: : philomath <philomath868 at gmail dot com>
# Contributor: Florian "Bluewind" Pritz <flo at xssn dot at>
# Contributor: Tim Karreman <tim at karreman dot net>

pkgname=mbuffer
pkgver=20190725
pkgrel=1
pkgdesc="A tool for buffering data streams."
arch=('x86_64')
url="http://www.maier-komor.de/mbuffer.html"
license=('GPL3')
depends=('openssl')
source=("http://www.maier-komor.de/software/${pkgname}/${pkgname}-${pkgver}.tgz")
md5sums=('ba73ff60b121f2feb5980df1bcbe9c72')

build() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  ./configure --prefix=/usr \
  --disable-debug
  make
}

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
}
