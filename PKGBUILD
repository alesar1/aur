# Maintainer: 0x9fff00 <0x9fff00+git@protonmail.ch>
# Contributor: Felix Yan <felixonmars@archlinux.org>

# Based on python-responses in [community]

_name=responses
pkgname=python2-$_name
pkgver=0.10.9
pkgrel=1
pkgdesc='A utility library for mocking out the `requests` Python library.'
arch=('any')
license=('Apache')
url="https://github.com/getsentry/$_name"
depends=('python2' 'python2-requests' 'python2-cookies' 'python2-six' 'python2-mock')
makedepends=('python2-setuptools')
checkdepends=('python2-pytest-runner' 'python2-pytest-cov' 'python2-flake8' 'python2-pytest-localserver')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha512sums=('bd5b725c938f37961aadad43e6f16d40b37ff1e011dae55582e4d6ff798eb6a5e797442df3edd921e4950b31d4767bf2928f1bfcb2223e17a6418f789d62a757')

build() {
  cd $_name-$pkgver

  python2 setup.py build
}

check() {
  cd $_name-$pkgver

  python2 setup.py pytest
}

package() {
  cd $_name-$pkgver

  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
