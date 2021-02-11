# Maintainer: xiretza <xiretza+aur@xiretza.xyz>

_pkgname=pyVHDLModel
pkgname=python-pyvhdlmodel-git
pkgver=0.8.0.r4.g353b307
pkgrel=1
pkgdesc="An abstract VHDL language model written in Python"
arch=(any)
url="https://github.com/VHDL/pyVHDLModel"
license=('Apache')
depends=('python' 'python-pydecor')
makedepends=('git' 'python-setuptools')
checkdepends=('python-pytest')
provides=("${pkgname%%-git}=$pkgver")
conflicts=("${pkgname%%-git}")
source=("git+$url.git")

sha256sums=('SKIP')

pkgver() {
	cd "$_pkgname"

	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$_pkgname"

	python setup.py build
}

check() {
	cd "$_pkgname"

	pytest tests/
}

package() {
	cd "$_pkgname"

	python setup.py install --root="$pkgdir" --optimize=1 --skip-build

	install -Dm 644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
