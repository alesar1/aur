# Maintainer: Bjoern Franke <bjo@nord-west.org>
pkgname=esniper
pkgver=2.32.0
pkgrel=1
pkgver_stripped='2-32-0'
pkgdesc="A simple, lightweight tool for sniping eBay auctions."
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'arm')
url="http://esniper.sourceforge.net/"
license=('BSD')
depends=('curl' 'openssl')
source=(http://downloads.sourceforge.net/esniper/${pkgname}-${pkgver_stripped}.tgz 'http://esniper.cvs.sourceforge.net/viewvc/esniper/esniper/auction.c' )

sha512sums=('b32e93ee964489d560d9123ce5f87c5cbf94d9a0198196095a0b85411ed4ad6657f7a2531e24c1e51644562b433e418faa56b62abd8f0b6e95ce6014a746d7af'
            '0aea2a9e1ea3f73d777058b9f8cc1394e24a5fe947073eeefc93c88bc2778bd112aa9cd5b435f7bb102f1d518ba5fe66be6c878c6ed6471016214b9c168594e9')

prepare()
{
	mv "${srcdir}/auction.c" "${srcdir}/${pkgname}-${pkgver_stripped}/auction.c"
}

build()
{
  cd "${srcdir}/${pkgname}-${pkgver_stripped}"
  ./configure --prefix=/usr
  make
}

package()
{
  cd "${srcdir}/${pkgname}-${pkgver_stripped}"
  make DESTDIR="${pkgdir}" install
  install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
  install -D -m755 frontends/snipe "${pkgdir}/usr/bin/snipe"
}
