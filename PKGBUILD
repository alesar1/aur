# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=system-monitoring-center
pkgver=2.0.1
pkgrel=1
pkgdesc="Multi-featured system monitor."
arch=('any')
url="https://github.com/hakandundar34coding/system-monitoring-center"
license=('GPL3')
depends=('dmidecode' 'gtk4' 'iproute2' 'polkit' 'python-cairo' 'python-gobject'
         'util-linux')
makedepends=('python-setuptools')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('0c42780a796a7e019b99fedafd5e7c40c29fcdc774173a92b6826ca5ee59f485')

build() {
  cd "$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
