# Package maintainer: Leonid B <leonid dot bloch at esrf dot fr>
# Upstream contact: silx at esrf dot fr
pkgname=python-pyfai
pkgver=0.13.0
pkgrel=1
pkgdesc="Fast Azimuthal Integration in Python."
arch=('any')
url="http://www.silx.org"
license=('GPLv3' 'BSD' 'MIT')
depends=('python-numpy' 'python-scipy' 'python-matplotlib' 'python-fabio'
         'python-h5py' 'python-pyopencl' 'python-pyqt5' 'fftw' 'opencl-driver')
makedepends=('git' 'cython')
source=("https://github.com/silx-kit/pyFAI/archive/v${pkgver}.tar.gz")
sha1sums=('221f18a4048b5a6725f577ecde99656057e3f310')

build() {
    cd "${srcdir}/pyFAI-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/pyFAI-${pkgver}"
    python setup.py install --root="${pkgdir}/" --optimize=1
    install -D LICENSES.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D copyright "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"
}
