_pkgname=trio
pkgname=python-trio
pkgver=0.7.0
pkgrel=2
pkgdesc="An async/await-native I/O library for humans and snake people"
arch=('any')
url="https://github.com/python-trio/trio"
license=('MIT')
depends=('python' 'python-attrs' 'python-sortedcontainers' 'python-idna' 'python-async_generator' 'python-outcome' 'python-sniffio')
makedepends=('python-setuptools')
provides=('python-multio-provider')
source=('https://files.pythonhosted.org/packages/e1/ec/cf93ec61713ed046a3122b64dbe2e320c22a285260adab9d37ffee69c5e7/trio-0.7.0.tar.gz')
md5sums=('bc23af948660cf08e08ab093fb271567')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py install --root=$pkgdir --optimize=1 --skip-build
}

# vim:set sw=2 et:
