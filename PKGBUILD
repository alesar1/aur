# Maintainer: xia0er <xia0er@gmail.com>
# Contributor: Xyne <xyne@archlinux.ca>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Douglas Soares de Andrade <dsa@aur.archlinux.org>
# Contributor: Angel "angvp" Velasquez <angvp[at]archlinux.com.ve> 

pkgbase=python-numpy-openblas
#pkgname=("python2-numpy-openblas" "python-numpy-openblas")
pkgname=python-numpy-openblas
pkgver=1.15.3
pkgrel=1
pkgdesc="Scientific tools for Python - built with openblas"
arch=("i686" "x86_64")
license=("custom")
url="http://numpy.scipy.org/"
source=("python-numpy-$pkgver.tar.gz::https://github.com/numpy/numpy/archive/v$pkgver.tar.gz") 
sha256sums=('0f811d66850c1d8cc230ad5a725b5e626525015eacc32a213b0e63bacef7cfc3')

depends=("python" "cython" "openblas-lapack")
options=('staticlibs')
makedepends=("python-distribute" "gcc-fortran" "python-nose")
optdepends=("python-nose: testsuite")
provides=("python3-numpy=${pkgver}" "python-numpy=${pkgver}")
conflicts=("python3-numpy" "python-numpy")

package() {
  _pyver=3.7
  _pyinc=3.7m

  export Atlas=None
  export LDFLAGS="$LDFLAGS -shared"

  echo "Building Python3"
  cd "$srcdir/numpy-$pkgver"

  #python setup.py config_fc --fcompiler=gnu95 config
  python setup.py config_fc --fcompiler=gnu95 build

  python setup.py config_fc --fcompiler=gnu95 install \
    --prefix=/usr --root="${pkgdir}" --optimize=1

  install -m755 -d "${pkgdir}/usr/share/licenses/python-numpy"
  install -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/python-numpy/"

  install -m755 -d "${pkgdir}/usr/include/python${_pyinc}"
  ln -sf /usr/lib/python${_pyver}/site-packages/numpy/core/include/numpy "${pkgdir}/usr/include/python${_pyinc}/numpy"

}

