# Maintainer: Jonas Schürmann <jonasschuermann@aol.de>
# Contributor: condy <condy0919[at]gmail[dot]com>
pkgname=psysh
pkgver=0.9.9
pkgrel=1
pkgdesc="PsySH is a runtime developer console, interactive debugger and REPL for PHP."
url="http://psysh.org"
arch=('x86_64' 'i686')
license=('MIT')
depends=('php')
provides=('psysh')
optdepends=('mariadb: mysql command support')
source=("https://github.com/bobthecow/psysh/releases/download/v${pkgver}/psysh-v${pkgver}.tar.gz"
        "LICENSE-${pkgver}::https://raw.githubusercontent.com/bobthecow/psysh/v${pkgver}/LICENSE")
sha256sums=('dc466f88dbb00140d95c23f8826e9d235ed407d1360dc35cf90273a7c08acb4e'
            'ea877138671d7068328bf698de950f09a13429ff49096202414472ffbdeeab66')

package() {
  cd "${srcdir}"
  install -Dm755 psysh "${pkgdir}/usr/bin/psysh"
  install -Dm644 "LICENSE-${pkgver}" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
