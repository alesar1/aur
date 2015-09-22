# Maintainer: googol <googol@posteo.de>
# Former Maintainer unknown (because the line in the PKGBUILD was accidentally removed).
pkgname=python2-alembic
pkgver=0.8.2
pkgrel=1
pkgdesc="Alembic is a lightweight database migration tool for usage with the SQLAlchemy Database Toolkit for Python 2."
arch=('any')
url="https://bitbucket.org/zzzeek/alembic"
license=('MIT')
depends=('python2' 'python2-sqlalchemy' 'python2-mako')
source=(https://pypi.python.org/packages/source/a/alembic/alembic-${pkgver}.tar.gz
        https://pypi.python.org/packages/source/a/alembic/alembic-${pkgver}.tar.gz.asc)
sha256sums=('a69d65a766801c40e921ca24ae358bf081a990f54b867bbdc3e2a73e975550be'
            'SKIP')
# Developers key: https://projects.archlinux.org/svntogit/community.git/tree/trunk/PKGBUILD?h=packages/python-sqlalchemy
validpgpkeys=('83AF7ACE251C13E6BB7DEFBD330239C1C4DAFEE1')

build() {
  cd "$srcdir"/alembic-${pkgver}
  python2 setup.py build
}

package() {
  cd "$srcdir"/alembic-${pkgver}
  python2 setup.py install --root="$pkgdir/" --prefix="/usr" --optimize=1
  # Avoid conflicts between python2-alembic and python-alembic
  mv $pkgdir/usr/bin/alembic $pkgdir/usr/bin/alembic2
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
