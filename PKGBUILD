# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: polyzen

set -u
_pyver="python2"
_pybase='pathspec'
pkgname="${_pyver}-${_pybase}"
pkgver='0.5.3'
pkgrel='1'
pkgdesc='Utility library for gitignore style pattern matching of file paths'
arch=('any')
url='https://github.com/cpburnz/python-path-specification'
license=('custom:MPLv2')
depends=('python')
makedepends=("${_pyver}" "${_pyver}-distribute") # same as python-setuptools
_srcdir="${_pybase}-${pkgver}"
#_verwatch=("https://pypi.python.org/simple/${_pybase}/" "${_pybase}-\([0-9\.]\+\)\.tar\.gz" 't')
source=("https://pypi.io/packages/source/${_pybase: 0:1}/${_pybase}/${_pybase}-${pkgver}.tar.gz")
sha256sums=('54478a66a360f4ebe4499c9235e4206fca5dec837b8e272d1ce37e0a626cc64d')

build() {
  set -u
  cd "${_srcdir}"
  ${_pyver} setup.py build
  set +u
}

check() {
  set -u
  cd "${_srcdir}"
  # If pip is installed, some package tests download missing packages. We can't allow that.
  #${_pyver} setup.py test --verbose
  set +u
}

package() {
  set -u
  depends=("${_pyver}") # "${_pydepends[@]}")
  cd "${_srcdir}"
  ${_pyver} setup.py install --root="${pkgdir}"
  #install -Dpm644 'LICENSE' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  set +u
}
set +u

# vim:set ts=2 sw=2 et:
