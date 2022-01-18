# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=python-eciespy
pkgver=0.3.11
pkgrel=1
pkgdesc="Elliptic curve integrated encryption scheme for secp256k1"
arch=('any')
url="https://github.com/ecies/py"
license=('MIT')
depends=('python-coincurve' 'python-eth-keys' 'python-pycryptodome')
makedepends=('python-poetry-core' 'python-build' 'python-install')
checkdepends=()
optdepends=()
changelog=
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/e/eciespy/eciespy-$pkgver.tar.gz")
sha256sums=('2aa1a6516ac3bc5185d6d58f196c91f869a812b640492769660ef257426acee7')

build() {
	cd "eciespy-$pkgver"
	python -m build \
		--wheel \
		--skip-dependency-check \
		--no-isolation
}

check() {
	cd "eciespy-$pkgver"
}

package() {
	export PYTHONHASHSEED=0
	cd "eciespy-$pkgver"
	python -m install \
		--optimize=1 \
		--destdir="$pkgdir/" \
		dist/*.whl

	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
}
