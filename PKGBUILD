# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
# Contributor: Coelacanthus <liuhongwu2003@outlook.com>
pkgbase=python-baidu-aip
pkgname=('python-baidu-aip' 'python2-baidu-aip')
pkgver=2.2.18.0
pkgrel=2
pkgdesc=''
arch=('any')
license=('Apache')
url='https://github.com/Baidu-AIP'
makedepends=('python-setuptools' 'python2-setuptools')
checkdepends=('python-pytest-runner' 'python2-pytest-runner')
source=("$pkgbase-$pkgver.src.tar.gz::https://pypi.io/packages/source/b/baidu-aip/baidu-aip-$pkgver.tar.gz")
sha512sums=('4f582ed5c4d615cdd99fc5d890eba2e8ccb78d336afe3d306ecaf45e1f9bd71b9f6fdf8d7e5c7b05d1656dc2613e852baa162b6245a2e8fe09750d5ee9b66ca0')

prepare() {
  cp -a baidu-aip-$pkgver{,-py2}
}

build() {
  cd "$srcdir"/baidu-aip-$pkgver
  python setup.py build

  cd "$srcdir"/baidu-aip-$pkgver-py2
  python2 setup.py build
}

package_python-baidu-aip() {
  depends=('python')

  cd baidu-aip-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  #install -D -m644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_python2-baidu-aip() {
  depends=('python2')

  cd baidu-aip-$pkgver-py2
  python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
  #install -D -m644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
