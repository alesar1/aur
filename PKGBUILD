# Maintainer: Paul Taylor <bao7uo at gmail dot com>
# Contributer: BlackArch

pkgname='python2-pylnk'
pkgver='0.2'
pkgrel=2
pkgdesc='Windows LNK File Parser and Creator.'
arch=('any')
url='https://pypi.python.org/pypi/pylnk/'
license=('LGPL')
depends=('python2')
makedepends=('python2-setuptools')
source=("https://pypi.python.org/packages/fb/08/33f44f78d9735d45cdf19c9794d2898266ce176c83e8cbc88e3eecc59216/pylnk-${pkgver}.tar.gz")
sha1sums=('5a640d56cba340800c3834797f10c75d23828fd5')

build() {
  cd "$srcdir/pylnk-$pkgver"

  python2 setup.py build
}

package() {
  cd "$srcdir/pylnk-$pkgver"

  python2 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
}

