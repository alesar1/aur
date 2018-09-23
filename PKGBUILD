_pkgname=sniffio
pkgname=python-sniffio
pkgver=1.0.0
pkgrel=1
pkgdesc="Sniff out which async library your code is running under"
arch=('any')
url="https://github.com/python-trio/sniffio"
license=('MIT')
depends=('python')
makedepends=('python-setuptools')
source=('https://files.pythonhosted.org/packages/c8/83/0e3953535271855718993595c582a0af7726b41beba683e63e1c3abc1982/sniffio-1.0.0.tar.gz')
md5sums=('f1ee89409cd401ca1bed64bb5945e495')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py install --root=$pkgdir --optimize=1 --skip-build
}

# vim:set sw=2 et:
