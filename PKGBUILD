# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgbase=python-fanshim
pkgname=('python-fanshim' 'python2-fanshim')
_name=${pkgname#python-}
pkgver=0.0.2
pkgrel=1
pkgdesc="Python library for the Pimoroni Fan Shim for Raspberry Pi."
arch=('any')
url="https://github.com/pimoroni/fanshim-python"
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")

sha512sums=('bcf7f07eb9cdd0c76b5d2dba3d410b8ee5912d3373966a8d54c0a241c2cd1170d21d8cdb227a5dc593c094ea8f88d74cd4d4491bab03b080d306c64b241ac1fa')

prepare() {
  cp -a fanshim-$pkgver{,-py2}
}

build() {
  cd "${srcdir}"/fanshim-${pkgver}
  python setup.py build

  cd "${srcdir}"/fanshim-${pkgver}-py2
  python2 setup.py build
}

package_python-fanshim() {
  depends=('python-psutil')
  cd fanshim-${pkgver}
  python setup.py install --root="$pkgdir" --optimize=1
}

package_python2-fanshim() {
  depends=('python2-psutil')
  cd fanshim-${pkgver}-py2
  python2 setup.py install --root="$pkgdir" --optimize=1
}
