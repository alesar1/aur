Maintainer='Gilles Hamel <hamelg@laposte.net>'
pkgname=python-whisper
pkgver=1.1.5
pkgrel=1
pkgdesc='Fixed-size database that provides fast, reliable storage of numeric data over time.'
arch=('any')
url='https://github.com/graphite-project/whisper'
license=('Apache')
depends=('python')
conflicts=('python2-whisper')
makedepends=('python-setuptools')
options=(!emptydirs)
source=($pkgname-$pkgver.tar.gz::"https://github.com/graphite-project/whisper/archive/$pkgver.tar.gz")
md5sums=('26490aa9be1f7de184e6f5c079d647bb')

package() {
  cd "$srcdir/whisper-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
