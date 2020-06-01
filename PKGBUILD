# Maintainer: Kyle McNally <kyle@kmcnally.net>
# Contributor: John Williams <jwilliams4200 liamg reverse&remove moc>
pkgname=snapraid
pkgver=11.5
pkgrel=1
pkgdesc="tool for Snapshot RAID: generate parity files, maintain checksums on data, restore lost data"
arch=('x86_64' 'i686')
url="http://www.snapraid.it/"
license=('GPL3')
depends=('libutil-linux' 'glibc')
conflicts=('snapraid-git')
source=("https://github.com/amadvance/snapraid/releases/download/v${pkgver}/snapraid-${pkgver}.tar.gz")
sha256sums=('1f5267261bdbcf4d48b9359ce67184df11905590739140f740327fb73bcecafa')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure --prefix="/usr"
  make
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make check
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}/" prefix="/usr" mandir="/usr/share/man" install

  # documentation
  install -D -m644 snapraid.conf.example ${pkgdir}/usr/share/${pkgname}/snapraid.conf.example
  install -D -m644 AUTHORS ${pkgdir}/usr/share/doc/${pkgname}/AUTHORS
  install -D -m644 COPYING ${pkgdir}/usr/share/doc/${pkgname}/COPYING
  install -D -m644 HISTORY ${pkgdir}/usr/share/doc/${pkgname}/HISTORY
  install -D -m644 INSTALL ${pkgdir}/usr/share/doc/${pkgname}/INSTALL
  install -D -m644 README ${pkgdir}/usr/share/doc/${pkgname}/README
  install -D -m644 CHECK ${pkgdir}/usr/share/doc/${pkgname}/CHECK
  install -D -m644 TODO ${pkgdir}/usr/share/doc/${pkgname}/TODO
}
