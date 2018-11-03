# Maintainer: Kyle Sferrazza <kyle.sferrazza@gmail.com>

_themename=arch-solarized
_pkgname="plymouth-theme-${_themename}"
pkgname="${_pkgname}-git"
pkgver=33f0027
pkgrel=1
pkgdesc='A Plymouth theme with a solarized-dark arch linux logo.'
arch=('any')
url="https://github.com/kylesferrazza/${_pkgname}/"
depends=('plymouth')
makedepends=('git')
source=($_pkgname::"git+https://github.com/kylesferrazza/${_pkgname}.git")
sha256sums=('SKIP')

package() {
  cd $_pkgname

  _themedir="$pkgdir/usr/share/plymouth/themes/${_themename}"

  install -Dm644 img/bg.png "${_themedir}/img/bg.png"
  install -Dm644 "${_themename}.plymouth" "${_themedir}/${_themename}.plymouth"
  install -Dm644 "${_themename}.script" "${_themedir}/${_themename}.script"
}
