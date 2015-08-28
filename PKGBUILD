# Maintainer: John Jenkins twodopeshaggy@gmail.com
# Contributor: alejandrogomez <alejandroogomez@gmail.com>

pkgname=turses
pkgver=0.3.1
pkgrel=1
pkgdesc="A Twitter client for the console"
arch=('any')
url="https://github.com/dialelo/turses"
license=('GPLv3')
depends=('ncurses' 'python2-future' 'python2' 'python2-oauth2' 'python2-tweepy' 'python2-urwid' 'python2-setuptools')
source=(https://github.com/dialelo/turses/archive/v$pkgver.tar.gz)
md5sums=('9c3b1d3739a40698d7f92103ee8286ba')

build() {
    cd "$srcdir/$pkgname-$pkgver"
    sed -i -e 's/future==0.14.3/future==0.15.0/' setup.py
}

package() {
   cd "$srcdir/$pkgname-$pkgver"
   python2 setup.py install --root="$pkgdir/" --optimize=1
}
