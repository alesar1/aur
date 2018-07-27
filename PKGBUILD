# Contributor: Serkan Hosca <serkan@hosca.com>

pypi_name=pathlib2
pkgbase="python-$pypi_name"
pkgname=("python-$pypi_name" "python2-$pypi_name")
pkgver=2.3.2
pkgrel=2
pkgdesc="Object-oriented filesystem paths for python"
arch=('any')
license=('MIT')
url="https://pypi.org/project/pathlib2/"
makedepends=('python' 'python2' 'python-setuptools' 'python2-setuptools')
source=("https://pypi.io/packages/source/p/${pypi_name}/${pypi_name}-${pkgver}.tar.gz")
md5sums=('fd76fb5d0baa798bfe12fb7965da97f8')

prepare() {
  cp -a ${pypi_name}-${pkgver}{,-python2}
}

build() {
  cd "${srcdir}/${pypi_name}-${pkgver}"
  python setup.py build

  cd "${srcdir}/${pypi_name}-${pkgver}-python2"
  python2 setup.py build
}

package_python-pathlib2() {
  pkgdesc="Python 3 client for ${pypi_name}"
  depends=('python' )

  cd "${srcdir}/${pypi_name}-${pkgver}"
  python setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}" --skip-build
}

package_python2-pathlib2() {
  pkgdesc="Python 2 client for ${pypi_name}"
  depends=('python2' 'python2-scandir' )

  cd "${srcdir}/${pypi_name}-${pkgver}-python2"
  python2 setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}" --skip-build
}

# vim: set ft=sh ts=4 sw=4 noet:
