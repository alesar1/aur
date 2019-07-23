# Maintainer: Donald Webster <fryfrog@gmail.com
# Contributor: Andrew Rabert <arabert at nullsum dot net>

pkgname=('python-enzyme' 'python2-enzyme')
_name=${pkgname#python-}
pkgver=0.4.1
pkgrel=2
pkgdesc="Python module to parse metadata in video files."
arch=(any)
url="https://github.com/Diaoul/enzyme"
license=('Apache')
makedepends=('python-setuptools' 'python2-setuptools')
conflicts=(${pkgname}-git)
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha512sums=('62a85c076a7eb320249a507dcc9dd26572e3a9b9643e0a960ed114a80c75213e6e5028a726fbcdd0c2c46c53af980a69828a54a66af9a17af3210273376395b3')

prepare() {
  cp -a enzyme-${pkgver}{,-py2}
}

package_python-enzyme() {
  depends=('python')
  cd "${srcdir}/enzyme-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
}

package_python2-enzyme() {
  depends=('python2')
  cd "${srcdir}/enzyme-${pkgver}-py2"
  python2 setup.py install --root="${pkgdir}/" --optimize=1
}
