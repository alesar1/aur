# Maintainer: Tomislav Ivek <tomislav.ivek@gmail.com>

pkgname=('python-node-semver')
pkgver=0.8.1
pkgrel=2
pkgdesc="python version of node-semver"
arch=('any')
url="https://github.com/podhmo/python-node-semver"
license=('MIT')
depends=('python')
conflicts=('python-semver')
makedepends=('python-setuptools')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/podhmo/python-node-semver/archive/$pkgver.tar.gz")
sha512sums=('5a988755ed97aa1ba9b97595738200821787c2cc71f40198cffdc22c4b823fe132668946ecc3f0fb66d6c33fe0ec7bdcfa9c9794e3d382b38f8551d15d4af5e6')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --optimize=1 --root=${pkgdir}
  install -D -m644 "$srcdir/$pkgname-$pkgver/LICENSE" "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}
