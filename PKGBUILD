# Maintainer:  Iyán Méndez Veiga <me (at) iyanmv (dot) com>
# Contributor: Julian Mehne <julian (dot) mehne (at) posteo (dot) de>
# Contributor: renyuneyun <renyuneyun (at) gmail (dot) com>
_name=octave_kernel
pkgname=jupyter-${_name}
pkgver=0.34.1
pkgrel=1
pkgdesc="A Jupyter kernel for Octave"
arch=('any')
url="https://github.com/Calysto/octave_kernel"
license=('BSD')
depends=('jupyter' 'jupyter-metakernel>=0.24.2' 'jupyter-notebook' 'octave')
makedepends=('python-pip')
optdepends=('gnuplot: for making plots' 'jupyterlab: JupyterLab computational environment')
source=("https://github.com/Calysto/octave_kernel/archive/v${pkgver}.tar.gz")
sha256sums=('d4433115bbf03ae355ca96c1bb322f58dbd43bde257457c3e1c37060ce14e35f')

build() {
  cd "$srcdir"/$_name-${pkgver}
  python setup.py build
}

package() {
  cd "$srcdir"/$_name-${pkgver}
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
