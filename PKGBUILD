# Maintainer: Max Mehl <aur at mehl dot mx>

pkgname='reuse'
pkgver=0.4.1
pkgrel=1
pkgdesc='Helper tool for providing and confirming copyright and licensing information'
arch=('any')
url='https://git.fsfe.org/reuse/tool'
license=('GPL3')
depends=('python' 'git')
makedepends=('python-setuptools')
source=(
  "${pkgname}-${pkgver}.tar.gz::https://git.fsfe.org/reuse/tool/archive/v${pkgver}.tar.gz"
)
sha256sums=('39ef418a794a8378542cc1dc7cacfd76e073e33a5ebdacada0f5a64d0033cb03')

package() {
  cd tool

  python setup.py -q install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et:
