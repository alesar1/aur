# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>

pkgname=r-vimcom
pkgver=1.2_7
pkgrel=1
pkgdesc='Intermediates communication between Vim and R'
url='https://github.com/jalvesaq/VimCom'
arch=('i686' 'x86_64')
license=('unknown')
depends=('r>=3.0.0')
source=("https://github.com/jalvesaq/VimCom/releases/download/v${pkgver//_/-}/${pkgname#r-}_${pkgver//_/-}.tar.gz")
sha256sums=('15a844ac1fab869d409f262a2a9063e2796749169a106b0f9bd46af228db98b2')

package() {
  mkdir -p ${pkgdir}/usr/lib/R/library
  R CMD INSTALL ${pkgname#r-} -l ${pkgdir}/usr/lib/R/library
}
