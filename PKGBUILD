# Maintainer: Andrew Sun <adsun701@gmail.com>

_pypiname=wheel
pkgbase=mingw-w64-python-wheel
pkgname=('mingw-w64-python-wheel' 'mingw-w64-python2-wheel')
pkgver=0.30.0
pkgrel=2
pkgdesc="A built-package format for Python (mingw-w64)"
arch=(any)
url="https://pypi.python.org/pypi/wheel"
license=('MIT')
makedepends=('mingw-w64-python-setuptools' 'mingw-w64-python2-setuptools' 'fakeroot' 'lib32-fakeroot')
depends=('wine')
source=("https://github.com/pypa/${_pypiname}/archive/${pkgver}.tar.gz")
md5sums=('a7341e955a3563e806abd44efabad9cb')
_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  mkdir "${srcdir}/python3-build-i686-w64-mingw32"
  mkdir "${srcdir}/python2-build-i686-w64-mingw32"
  mkdir "${srcdir}/python3-build-x86_64-w64-mingw32"
  mkdir "${srcdir}/python2-build-x86_64-w64-mingw32"
  
  cp -R ${srcdir}/${_pypiname}-${pkgver}/. "${srcdir}/python3-build-i686-w64-mingw32"
  cp -R ${srcdir}/${_pypiname}-${pkgver}/. "${srcdir}/python2-build-i686-w64-mingw32"
  cp -R ${srcdir}/${_pypiname}-${pkgver}/. "${srcdir}/python3-build-x86_64-w64-mingw32"
  cp -R ${srcdir}/${_pypiname}-${pkgver}/. "${srcdir}/python2-build-x86_64-w64-mingw32"
}

build() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/python3-build-${_arch}"
    wine /usr/${_arch}/bin/python3.exe setup.py build
    cd "${srcdir}/python2-build-${_arch}"
    wine /usr/${_arch}/bin/python2.exe setup.py build
  done
}

package_mingw-w64-python-wheel() {
  depends=('mingw-w64-python')
  optdepends=('mingw-w64-python-keyring: for wheel.signatures')
  
  for _arch in ${_architectures}; do
  cd "${srcdir}/python3-build-${_arch}"
  /usr/${_arch}/bin/python3.exe setup.py install --root="$pkgdir/" --prefix=\usr/${_arch} --optimize=1
  install -D -m644 LICENSE.txt "${pkgdir}/usr/${_arch}/share/licenses/${pkgname}/LICENSE.txt"
  done
}

package_mingw-w64-python2-wheel() {
  depends=('mingw-w64-python2')
  optdepends=('mingw-w64-python2-keyring: for wheel.signatures')
  for _arch in ${_architectures}; do
  cd "${srcdir}/python2-build-${_arch}"
  /usr/${_arch}/bin/python2.exe setup.py install --root="$pkgdir/" --prefix=\usr/${_arch} --optimize=1
  install -D -m644 LICENSE.txt "${pkgdir}/usr/${_arch}/share/licenses/${pkgname}/LICENSE.txt"
  mv "${pkgdir}/usr/${_arch}/bin/wheel.exe" "${pkgdir}/usr/${_arch}/bin/wheel2.exe"
  mv "${pkgdir}/usr/${_arch}/bin/wheel-script.py" "${pkgdir}/usr/${_arch}/bin/wheel2-script.py"
  done
  mv "${pkgdir}/usr/i686-w64-mingw32/bin/wheel.exe.manifest" "${pkgdir}/usr/i686-w64-mingw32/bin/wheel2.exe.manifest"
}
