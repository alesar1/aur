# Maintainer: Erhan SAHIN <erhan@ssahin.net>

pkgname=python2-suds-jurko
pkgver=0.6
pkgrel=1
pkgdesc="Lightweight SOAP client (Jurko's fork)"
arch=('i686' 'x86_64')
url="https://bitbucket.org/jurko/suds"
license=('LGPL')
depends=('python2')
md5sums=('1309e9bc2454aa3434041f0a24ae4e11')

source=("http://pypi.python.org/packages/source/s/suds-jurko/suds-jurko-${pkgver}.tar.bz2")

build() {
  cd "$srcdir"/suds-jurko-$pkgver
  python2 setup.py build
}

package() {
  cd "$srcdir"/suds-jurko-$pkgver
  python2 setup.py install --root="$pkgdir"/ --optimize=1

  install -D LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

