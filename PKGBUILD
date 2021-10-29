# Maintainer: Tom Hesse <heyhoman at mailbox dot org>
pkgname=4scanner
pkgver=1.6.2
pkgrel=1
pkgdesc="Command line tool to download images from multiple imageboards"
arch=('any')
url="https://github.com/pboardman/4scanner/"
license=('MIT')
depends=('python>=3.0.0' 'python-requests>=2.20.0')
makedepends=('python-setuptools')
install=4scanner.install
source=($pkgname-$pkgver.tar.gz::https://github.com/pboardman/4scanner/archive/refs/tags/$pkgver.tar.gz)
sha256sums=('dc7470615353b137a0af4732b995428c5e794e4b85aeb70f84ba76e2f86224b1')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py clean --all
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README"
	install -Dm644 OPTIONS.md "$pkgdir/usr/share/doc/$pkgname/OPTIONS"
	install -Dm644 example.json "$pkgdir/usr/share/doc/$pkgname/example.json"
	install -Dm644 contrib/systemd/4scanner.service "$pkgdir/usr/share/doc/$pkgname/4scanner.service"
	python setup.py install --root "$pkgdir" --skip-build
}
