# Maintainer: Maxime "pep" Buquet <archlinux@bouah.net>

_pkgname=git-pw
_tag=1.5.1
pkgname=${_pkgname}
pkgver=${_tag}
pkgrel=1
pkgdesc="A tool for integrating Git with Patchwork, the web-based patch tracking system"
url='https://github.com/getpatchwork/git-pw'
license=('MIT')
arch=('any')
depends=(
  'python-requests'
  'python-click'
  'python-pbr'
  'python-arrow'
  'python-tabulate'
)
makedepends=('python-setuptools')
source=("${_pkgname}::git+https://github.com/getpatchwork/git-pw.git#tag=${_tag}")
sha256sums=('SKIP')

package() {
  cd ${_pkgname}
  python setup.py install --root="${pkgdir}" --optimize=1
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
