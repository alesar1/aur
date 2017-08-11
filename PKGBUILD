# Contributor: Serkan Hosca <serkan@hosca.com>

pkgname=python-pre-commit
pypi_name=pre_commit
pkgver=0.16.2
pkgrel=2
pkgdesc="A framework for managing and maintaining multi-language pre-commit hooks."
arch=('any')
license=('MIT')
url="http://pre-commit.com/"
makedepends=(
  'python' 'python-nodeenv' 'python-aspy-yaml' 'python-virtualenv' 'python-cached-property' 'python-identify'
  'python2' 'python2-aspy-yaml' 'python2-virtualenv' 'python2-cached-property' 'python2-identify'
)
source=("https://pypi.io/packages/source/p/${pypi_name}/${pypi_name}-${pkgver}.tar.gz")
md5sums=('84bc0bd93d090f1e51bf825c54e2643c')

prepare() {
  cp -a ${pypi_name}-${pkgver}{,-python2}
}

build() {
  cd "${srcdir}/${pypi_name}-${pkgver}"
  python setup.py build

  cd "${srcdir}/${pypi_name}-${pkgver}-python2"
  python2 setup.py build
}

package_python-pre-commit() {
  pkgdesc='Python 3 client for pre-commit'
  depends=('python' 'python-nodeenv' 'python-aspy-yaml' 'python-virtualenv' 'python-cached-property' 'python-identify')

  cd "${srcdir}/${pypi_name}-${pkgver}"
  python setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}" --skip-build
}

package_python2-pre-commit() {
  pkgdesc='Python 2 client for pre-commit'
  depends=('python2' 'python-nodeenv' 'python2-aspy-yaml' 'python2-virtualenv' 'python2-cached-property' 'python2-identify')

  cd "${srcdir}/${pypi_name}-${pkgver}-python2"
  python2 setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}" --skip-build
  mv ${pkgdir}/usr/bin/pre-commit ${pkgdir}/usr/bin/pre-commit2
}

# vim: set ft=sh ts=4 sw=4 noet:
