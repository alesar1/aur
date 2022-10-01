# Maintainer: Daniel Pereira <daniel@garajau.com.br>

pkgname=wmcompanion
pkgver=0.5.0
pkgrel=1
pkgdesc="Desktop system event listener for minimal window manager users"
url="https://github.com/kriansa/wmcompanion"
arch=(any)
license=(Apache)
depends=(python python-dbus-next)
makedepends=(python-poetry python-installer)
source=("https://github.com/kriansa/wmcompanion/archive/v${pkgver}.tar.gz")
sha256sums=(29429cb1b2200cabc904b2d2b45741efaf8783d22ed0bc2f75506c47e7e59cf3)

build() {
  cd "$pkgname-$pkgver" || exit 1
  poetry build -f wheel
}

package() {
  cd "$pkgname-$pkgver" || exit 1
  python -m installer --destdir="$pkgdir" dist/*.whl
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
