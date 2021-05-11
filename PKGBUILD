# Maintainer: David < david at rjamo dot dev >
# Contributor: Tom < reztho at archlinux dot us >
pkgname=libpkcs11-dnie
pkgver=1.6.6
pkgrel=1
pkgdesc="PKCS11 library for DNIe"
arch=('x86_64')
url="https://www.dnielectronico.es/"
depends=('pcsclite' 'pcsc-tools' 'ccid')
license=('custom')
install=${pkgname}.install
DLAGENTS=('https::/usr/bin/curl -A "Mozilla/5.0" -fLC - --retry 3 --retry-delay 3 -o %o %u')
source=("https://www.dnielectronico.es/descargas/distribuciones_linux/libpkcs11-dnie_1.6.6_amd64.deb")

package() {
  cd "${srcdir}/"
  tar -xJf data.tar.xz
  mv usr "${pkgdir}/"
}

md5sums=('ac9b48788b87a681b8fa8c4bf727b812')
