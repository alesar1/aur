# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>

_pkgname=pytest-md-report
pkgname=python-${_pkgname}
pkgver=0.0.13
pkgrel=1
pkgdesc='pytest plugin to create a report in Markdown table format'
arch=('any')
url='https://github.com/thombashi/pytest-md-report'
license=('MIT')
depends=('python' 'python-pathvalidate' 'python-pytablewriter' 'python-pytest' 'python-typepy')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('b802f46ebd63bc04afce8f9f32a85daae388f902c7c9516302dbd1fbf9e090e5')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}" 'README.rst'
  install -Dm644 -t "${pkgdir}/usr/share/licenses/${_pkgname}" 'LICENSE'
}

# vim: ts=2 sw=2 et:
