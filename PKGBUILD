# Maintainer: Andrew Sun <adsun701 at gmail dot com>
# Contributor: Radek Podgorny <radek at podgorny dot cz>
# Contributor: Adam Caldwell <adam dot caldwell at gmail dot com>

pkgname=bwping
pkgver=2.0
pkgrel=1
pkgdesc="Tool to measure bandwidth and RTT between two hosts using ICMP"
arch=('x86_64')
url="https://bwping.sourceforge.io/"
license=('BSD')
depends=('glibc')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/oleg-derevenetz/bwping/archive/RELEASE_${pkgver}.tar.gz")
sha256sums=('777aeb5b696bfe4960ab6dc5ce3eac7e788c91e07af2f94ec450678cf0b657a7')

build() {
  cd "${srcdir}/${pkgname}-RELEASE_${pkgver}"
  ./configure --prefix=/usr --sbindir=/usr/bin
  make
}

package() {
  cd "${srcdir}/${pkgname}-RELEASE_${pkgver}"
  make DESTDIR="${pkgdir}" install
  
  # License
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/bwping/COPYING"
}
