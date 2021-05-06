# Maintainer: Robert Falkenberg <robert.falkenberg@tu-dortmund.de>

pkgname=python-pysim-git
_pyname=pysim
pkgver=1.0.r169.g4210a70
pkgrel=1
pkgdesc='A python tool to program SIMs / USIMs / ISIMs'
arch=('any')
url='http://osmocom.org/projects/pysim/wiki'
license=('GPL2')
depends=('python'
         'python-pyscard'
         'python-pyserial'
         'python-pytlv'
         'python-cmd2>=1.3.0'
         'python-jsonpath-ng'
         'python-construct>=2.9'
         'python-bidict')
makedepends=('python-setuptools' 'git')
provides=('python-pysim')
source=('git+https://git.osmocom.org/pysim')
sha256sums=('SKIP')

pkgver() {
  cd ${_pyname}
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | sed 's/^\(v\)\1*//'
}

package() {
  install=$pkgname.install
  cd "${srcdir}/${_pyname}"
  python setup.py install --root="${pkgdir}/" --optimize=1
}
