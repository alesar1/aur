pkgname=mock-core-configs
_pkgver=28.4
_rpmrel=1
_pkgtag=$pkgname-$_pkgver-$_rpmrel
pkgver=$_pkgver.$_rpmrel
pkgrel=1
pkgdesc="Mock core config files basic chroots"
url="https://github.com/rpm-software-management/mock"
arch=('any')
license=('GPL2')
depends=('distribution-gpg-keys')
source=("$url/archive/$_pkgtag.tar.gz")
md5sums=('fadacc66c3df0d6c7e83b997d8b60bf7')

prepare() {
	mv "mock-$_pkgtag" "$pkgname-$pkgver"
}

package() {
	cd "$pkgname-$pkgver"

	pushd mock-core-configs >/dev/null

	mkdir -p "$pkgdir/"etc/mock
	install -Dp -m644 etc/mock/*.cfg "$pkgdir/"etc/mock/

	popd >/dev/null
}

# vim: set ft=sh ts=4 sw=4 noet:
