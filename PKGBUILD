# Maintainer: John Williams <jwilliams4200 liamg reverse&remove moc>
pkgname=snapraid
pkgver=8.1
pkgrel=1
pkgdesc="tool for Snapshot RAID: generate parity files, maintain checksums on data, restore lost data"
arch=('x86_64' 'i686')
url="http://snapraid.sourceforge.net/"
license=('GPL3')
depends=('openssl')
conflicts=('snapraid-git')
source=("http://sourceforge.net/projects/snapraid/files/snapraid-${pkgver}.tar.gz")
sha256sums=('6bf89a1319ac3403958cd2c98a9c6102728c0070cfa1aedd90c4561d93c54e5d')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure --prefix="/usr"
  make 
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make check || return 1
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

