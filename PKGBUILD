# Maintainer: Tyler Veness <calcmogul at gmail dot com>

pkgbase=python-control
pkgname=('python2-control' 'python-control')
pkgver=0.8.3
pkgrel=2
pkgdesc="Implements basic operations for analysis and design of feedback control systems in Python"
arch=('any')
license=('BSD')
url="https://github.com/python-control/python-control"
depends=('python-scipy'
         'python-matplotlib')
optdepends=('python-slycot: matrix equation support, model simplification tools, and state feedback')
makedepends=('python-setuptools' 'python2-setuptools')
checkdepends=('python-nose' 'python2-nose' 'python-slycot')
options=('staticlibs')
source=("https://github.com/python-control/python-control/archive/${pkgver}.tar.gz"
        "0001-ease-precision-tolerenace-for-iosys-tests-366.patch"
        "0001-only-call-np.delete-with-actual-removal-430.patch"
        "LICENSE")
md5sums=('50093b092d5a687bd7ca02532e4b2d58'
         'c95262d57324de7aa0ffd3de5bbbb547'
         'c414dcf7c670c9dc8c0b3774ff705435'
         '5e21e2b8826c3345f50711d5634bc975')

prepare() {
  cd python-control-$pkgver
  patch -p1 < ../0001-ease-precision-tolerenace-for-iosys-tests-366.patch
  patch -p1 < ../0001-only-call-np.delete-with-actual-removal-430.patch
  cd ..

  cp -a python-control-$pkgver python2-control-$pkgver
  cd python2-control-$pkgver

  sed -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
      -e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
      -e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
      -i $(find . -name '*.py')
}

build() {
  export LDFLAGS="$LDFLAGS -shared"

  echo "Building Python2"
  cd python2-control-$pkgver
  python2 setup.py build

  echo "Building Python3"
  cd ../python-control-$pkgver
  python setup.py build
}

check() {
  cd python-control-$pkgver
  python setup.py test
}

package_python2-control() {
  export LDFLAGS="$LDFLAGS -shared"

  cd python2-control-$pkgver
  python2 setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1

  install -m755 -d "${pkgdir}/usr/share/licenses/python2-control"
  install -m644 ../LICENSE "${pkgdir}/usr/share/licenses/python2-control/"
}

package_python-control() {
  provides=('python3-control')

  export LDFLAGS="$LDFLAGS -shared"

  cd python-control-$pkgver
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1

  install -m755 -d "${pkgdir}/usr/share/licenses/python-control"
  install -m644 ../LICENSE "${pkgdir}/usr/share/licenses/python-control/"
}
