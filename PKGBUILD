# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com

set -u
_pybase='csv2odf'
_pyver="python"
_pyverother='python python2 '
_pyverother=(${_pyverother//${_pyver} /})
pkgname="${_pyver}-${_pybase}"
pkgver='2.06'
pkgrel='1'
pkgdesc='convert CSV to formatted spreadsheets and documents'
arch=('any')
url="https://sourceforge.net/projects/${_pybase}"
license=('MIT')
_pydepends=("${_pyver}-wcwidth>=0.1.0")
makedepends=("${_pyver}" "${_pyver}-distribute") # same as python-setuptools
_srcdir="${_pybase}-${pkgver}"
_verwatch=("${url}/files/" "\s\+${_pybase}-\([0-9\.]\+\)</a></th>.*" 'f')
source=("${url}/files/${_pybase}-${pkgver}/${_pybase}-${pkgver}.tar.gz")
sha256sums=('6a491c90f532183c0336d9bb26003f43e4950e41db5a1782e84d1100d66b20e0')

package() {
  set -u
  depends=("${_pyver}") # "${_pydepends[@]}")
  conflicts=("${_pyverother[@]/%/-${_pybase}}")
  cd "${_srcdir}"
  ${_pyver} setup.py install --root="${pkgdir}"
  install -Dpm644 'doc/license' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  set +u
}
set +u
# vim:set ts=2 sw=2 et:
