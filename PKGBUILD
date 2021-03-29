# Maintainer: Kenneth Henderick <kenneth@ketronic.be>
# Maintainer: Donald Webster <fryfrog@gmail.com>
# Contributor: kfgz <kfgz at interia dot pl>
# Contributor: : philomath <philomath868 at gmail dot com>
# Contributor: Florian "Bluewind" Pritz <flo at xssn dot at>
# Contributor: Tim Karreman <tim at karreman dot net>

pkgname=mbuffer
pkgver=20210328
pkgrel=1
pkgdesc="A tool for buffering data streams."
arch=('x86_64' 'armv7l' 'aarch64')
url="http://www.maier-komor.de/mbuffer.html"
license=('GPL3')
depends=('openssl')
backup=('etc/mbuffer.rc')
source=("http://www.maier-komor.de/software/${pkgname}/${pkgname}-${pkgver}.tgz")
md5sums=('4e4712db5fbd4e71bfbfa2c145c6c646')

build() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  ./configure --prefix=/usr \
  --disable-debug
  make
}

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install

  # Put the mbuffer.rc in /etc instead of /usr/etc
  mkdir -p "${pkgdir}/etc"
  mv "${pkgdir}/usr/etc/mbuffer.rc" "${pkgdir}/etc/"
  rmdir "${pkgdir}/usr/etc"
}
