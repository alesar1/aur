# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Aetf <aetf at unlimitedcodeworks dot xyz>

pkgname=globus-cli
pkgver=3.4.0
pkgrel=1
pkgdesc='CLI for Globus'
arch=('any')
url='https://github.com/globus/globus-cli'
license=('Apache')
depends=(
	'python-globus-sdk'
	'python-click'
	'python-jmespath=0.10.0'
	'python-requests'
	'python-cryptography')
makedepends=(
	'git'
	'python-build'
	'python-installer'
	'python-setuptools'
	'python-wheel')
replaces=('python-globus-cli')
changelog=changelog.adoc
source=("$pkgname::git+$url#tag=$pkgver?signed")
sha256sums=('SKIP')
validpgpkeys=('FC694E40DC03A8B702D96372CF7E843C41E814C9')

build() {
	cd "$pkgname"
	python -m build --wheel --no-isolation
}

package() {
	export PYTHONHASHSEED=0
	cd "$pkgname"
	python -m installer --destdir="$pkgdir/" dist/*.whl
}
