# Maintainer: Jonas Witschel <diabonas@archlinux.org>
pkgname=python-tpm2-pytss-git
_name=${pkgname#python-}
pkgver=1.1.0rc1.r0.890c19f
pkgrel=1
pkgdesc='Python bindings for tpm2-tss'
arch=('x86_64')
url='https://github.com/tpm2-software/tpm2-pytss'
license=('BSD')
depends=('python' 'python-asn1crypto' 'python-cffi' 'python-cryptography' 'tpm2-tss'
         'libtss2-esys.so' 'libtss2-fapi.so' 'libtss2-mu.so' 'libtss2-rc.so' 'libtss2-tctildr.so')
makedepends=('git' 'python-build' 'python-installer' 'python-pkgconfig'
             'python-setuptools' 'python-setuptools-scm' 'python-wheel')
checkdepends=('python-pytest' 'swtpm')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=('tpm2-pytss-git')
source=("git+$url.git")
sha512sums=('SKIP')

pkgver() {
	cd "${_name%-git}"
	git describe --long | sed 's/[-_]rc/rc/I;s/\([^-]*-\)g/r\1/;s/-/./g'
}

build() {
	cd "${_name%-git}"
	python -m build --wheel --no-isolation
}

check() {
	cd "${_name%-git}"
	cp build/lib.*/tpm2_pytss/_libtpm2_pytss.abi3.so tpm2_pytss
	cp build/lib.*/tpm2_pytss/internal/{type_mapping,versions}.py tpm2_pytss/internal
	python -B -m pytest
}

package() {
	cd "${_name%-git}"
	python -m installer --destdir="$pkgdir" dist/*.whl
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
