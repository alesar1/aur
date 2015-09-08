# Contributor: Florian Walch <florian.walch@gmx.at>
# Maintainer: Robin Baumgartner <robin@baumgartners.ch>
pkgname=trytond
pkgver=3.6.3
_pkgdir=3.6
pkgrel=1
pkgdesc="A three-tiers high-level general purpose application platform (server application)"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python2>=2.4' 'python2-lxml' 'python2-relatorio>=0.2.0'
         'python2-genshi>=0.5' 'python2-polib' 'python2-sql')
optdepends=('python2-psycopg2: support for PostgreSQL database'
  'python-pywebdav: support for WebDAV feature'
  'pydot: support for displaying workflow graphs'
  'python-pytz: timezone support'
  'pyopenssl: support for SSL connection')
makedepends=('python2-distribute')
install="trytond.install"
source=("http://downloads.tryton.org/$_pkgdir/$pkgname-$pkgver.tar.gz"
        'trytond.install'
        'trytond.service')
md5sums=('bf717f68ac97ef8f41608f78cec89120'
         '768e68c01cb5913e36ea89c67fc98038'
         'b1535a8528dfd8f655624bf6faea6985')

build() {
  cd $srcdir/$pkgname-$pkgver
  python2 setup.py build
}

package() {
  cd $srcdir/$pkgname-$pkgver
  python2 setup.py install --root=$pkgdir
  install -D -m755 $startdir/trytond.service $pkgdir/usr/lib/systemd/system/trytond.service
}
