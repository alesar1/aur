# Maintainer: Ben Mitchell <bjosephmitchell@gmail.com>
_pkgname=pacext
pkgname="${_pkgname}-git"
pkgver=r1.93ab058
pkgrel=1
pkgdesc="Pacman extensions with more convenient syntax"
arch=('any')
url="https://github.com/CRISPYricePC/${_pkgname}"
license=('MIT')
depends=('pacman')
makedepends=('git')
optdepends=('sudo: Running root commands' 'doas: Running root commands')
provides=('pacext')
source=(
  "${_pkgname}::git+${url}.git"
)
md5sums=('SKIP')

package() {
  install -Dm755 "${srcdir}/${_pkgname}/${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 "${srcdir}/${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
