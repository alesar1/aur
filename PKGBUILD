# Maintainer: Alexis Janon <kardyne -at- gmail -dot- com>

_pkgsrcname=tabler-icons
_pkgmaintainer=tabler
_versionprefix=v
pkgver=1.25.0
pkgrel=1
pkgdesc="A set of over 700 icons."
pkgname=ttf-tabler-icons
arch=(any)
url="https://github.com/tabler/tabler-icons"
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/${_pkgmaintainer}/${_pkgsrcname}/archive/${_versionprefix}${pkgver}.tar.gz")
md5sums=('5a4af6d94a173a3bd0ab655df3a6ab73')

package() {
  cd "${srcdir}/${_pkgsrcname}-${pkgver}/"
  install -D -m644 "iconfont/fonts/tabler-icons.ttf" "$pkgdir/usr/share/fonts/TTF/tabler-icons.ttf"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
