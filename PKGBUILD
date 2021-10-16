pkgname=python-assimulo
pkgver=3.2.7
pkgrel=1
pkgdesc="A package for solving ordinary differential equations and differential algebraic equations"
url="http://www.jmodelica.org/assimulo"
arch=('x86_64')
license=('LGPL')
makedepends=('python-setuptools' 'cython' 'gcc-fortran')
depends=('python-scipy' 'python-matplotlib' 'lapack' 'sundials')
source=("https://github.com/modelon-community/Assimulo/archive/Assimulo-${pkgver}.tar.gz" sundials5.patch)
sha256sums=('f33d279acd1c8e050815a265183c65fd6413bf38f920ae1b43cb199f16553f45'
            '7530b38c04c8bfea74af80c7023b22d60b08eec8e7843d36d4a02995ef65d111')

prepare() {
  cd "${srcdir}"/Assimulo-Assimulo-$pkgver

  # try to build with sundials 5.0
  patch -p0 -i "${srcdir}"/sundials5.patch

  # use shared lib
  sed -i "s|BLASname_t+'.a'|BLASname_t+'.so'|g" setup.py
}

build() {
  cd "${srcdir}"/Assimulo-Assimulo-$pkgver
}

package() {
  cd "${srcdir}"/Assimulo-Assimulo-$pkgver
  python setup.py install --root=${pkgdir} --optimize=1 --extra-fortran-link-flags="-shared" --sundials-home=/usr --blas-home=/usr/lib --lapack-home=/usr --extra-c-flags="-fallow-argument-mismatch"
}

