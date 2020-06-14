# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>

pkgname=python-uao
_pkgname=pyUAO
pkgver=0.1.1
pkgrel=1
pkgdesc='Big5-UAO table in pure Python'
arch=(any)
url='https://github.com/eight04/pyUAO'
license=(MIT)
depends=(python)
makedepends=(python-setuptools)
source=("https://github.com/eight04/pyUAO/archive/v$pkgver/$_pkgname-$pkgver.tar.gz")
sha256sums=('78840b16a5eb12a02c5bfe1ce241cf7fff9287c02258b9c2f9eec73c21ae8649')

build() {
  cd $_pkgname-$pkgver
  python setup.py build
}

check() {
  cd $_pkgname-$pkgver
  python test.py
}

package() {
  cd $_pkgname-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}
