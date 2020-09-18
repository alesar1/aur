# Maintainer: j.r <j.r@jugendhacker.de>
pkgname=python-telegram
pkgver=0.12.0
pkgrel=2
pkgdesc="Python API for the tdlib library. It helps you build your own Telegram clients."
arch=(any)
url="https://github.com/alexander-akhmetov/python-telegram"
license=('MIT')
depends=('python3')
conflicts=('python-telegram-bot')
source=("$pkgname-$pkgver.tar.gz::https://github.com/alexander-akhmetov/$pkgname/archive/$pkgver.tar.gz"
	"0001-Use-system-tdlib.diff"
	"0002-Remove-binarys.diff")
md5sums=('ebf3e34648e21da96e6470474e0fd7eb'
         '287acb342038ba44bb86cdc2c6cb303b'
         'c9085c229e25cab11bffd1431c220ef1')

prepare() {
	cd "${pkgname}-${pkgver}"
	patch -p1 -i ${srcdir}/0001-Use-system-tdlib.diff
	patch -p1 -i ${srcdir}/0002-Remove-binarys.diff
	rm -r telegram/lib
}

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build

	install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
