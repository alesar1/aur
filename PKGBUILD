# Maintainer: Kenneth Henderick <kenneth@ketronic.be>
# Maintainer: Donald Webster <fryfrog@gmail.com>
# Contributor: kfgz <kfgz at interia dot pl>
# Contributor: : philomath <philomath868 at gmail dot com>
# Contributor: Florian "Bluewind" Pritz <flo at xssn dot at>
# Contributor: Tim Karreman <tim at karreman dot net>

pkgname=mbuffer
pkgver=20200505
pkgrel=1
pkgdesc="A tool for buffering data streams."
arch=('x86_64' 'armv7l')
url="http://www.maier-komor.de/mbuffer.html"
license=('GPL3')
depends=('openssl')
backup=('etc/mbuffer.rc')
source=("http://www.maier-komor.de/software/${pkgname}/${pkgname}-${pkgver}.tgz")
md5sums=('df39047654456f260665d66711cabcc5')

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
