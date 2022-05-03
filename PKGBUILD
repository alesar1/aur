# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Ben Westover <kwestover.kw@gmail.com>

pkgname=python-blspy
pkgver=1.0.11
pkgrel=1
pkgdesc='Python BLS Signatures implementation'
url='https://github.com/Chia-Network/bls-signatures'
arch=('x86_64')
license=('Apache')
depends=('python')
optdepends=('gmp: faster implementation (install at compile-time)')
makedepends=(
	'cmake'
	'git'
	'pybind11'
	'python-build'
	'python-installer'
	'python-setuptools'
	'python-setuptools-scm'
	'python-wheel')
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/b/blspy/blspy-$pkgver.tar.gz"
        'CXXFLAGS.patch')
sha256sums=('dd361c21eff064b912f49a6e0d8f6b9125942b0f498554aa8c2e4818d89c1ed0'
            '15b18c754175b1a697e62c509e26864316c6a39825f5e2c87495a2f9a1b7bb7f')

prepare() {
	cd "blspy-$pkgver"
	patch -p1 < "$srcdir/CXXFLAGS.patch"
	sed -i "s/\${CXXFLAGS}/${CXXFLAGS}/" CMakeLists.txt
}

build() {
	cd "blspy-$pkgver"
	python -m build --wheel --no-isolation
}

package() {
	cd "blspy-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir/" dist/*.whl
}
