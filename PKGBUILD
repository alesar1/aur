# Maintainer: Vladimir Tsanev <tsachev@gmail.com>
# Contributor: Ankur Srivastava <ankurs47@gmail.com>
pkgname=python2-mercurial_keyring
pkgver=0.6.7
pkgrel=1
pkgdesc="Mercurial Keyring Extension"
arch=('any')
url="http://pypi.python.org/pypi/mercurial_keyring"
makedepends=('python2-distribute')
depends=('python2-keyring' 'python2')
license=('BSD')
source=(http://pypi.python.org/packages/source/m/mercurial_keyring/mercurial_keyring-$pkgver.tar.gz)
md5sums=('1188569abb046692bf5ad1badf6d8c89')

package() {
  cd $srcdir/mercurial_keyring-$pkgver
  python2 setup.py install --root=$pkgdir || return 1

  install -Dm 644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
