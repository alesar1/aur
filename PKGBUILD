pkgname=mock-core-configs
pkgver=36.3
_rpmrel=1
_pkgtag=$pkgname-$pkgver-$_rpmrel
pkgrel=$_rpmrel.1
pkgdesc="Mock core config files basic chroots"
url="https://github.com/rpm-software-management/mock"
arch=('any')
license=('GPL2')
depends=('distribution-gpg-keys>=1.55')
source=("$url/archive/$_pkgtag.tar.gz")
sha256sums=('699468482d5a1eb3962f2034676156b298ffc564cc4b027b531d875c02700372')

# Uncomment to not package configs for EOLed versions of distributions
#_without_eol=1

prepare() {
	mv "mock-$_pkgtag" "$pkgname-$pkgver"
}

package() {
	cd "$pkgname-$pkgver"

	pushd "$pkgname" >/dev/null

	mkdir -p "$pkgdir/"etc/mock
	install -Dp -m644 etc/mock/*.cfg "$pkgdir/"etc/mock/
	rm "$pkgdir/"etc/mock/site-defaults.cfg

	mkdir -p "$pkgdir/"etc/mock/templates
	install -Dp -m644 etc/mock/templates/*.tpl "$pkgdir/"etc/mock/templates/

	if ((!_without_eol)); then
		mkdir -p "$pkgdir/"etc/mock/eol
		install -Dp -m644 etc/mock/eol/*.cfg "$pkgdir/"etc/mock/eol/

		mkdir -p "$pkgdir/"etc/mock/eol/templates
		install -Dp -m644 etc/mock/eol/templates/*.tpl "$pkgdir/"etc/mock/eol/templates/
	fi

	popd >/dev/null
}

# vim: set ft=sh ts=4 sw=4 noet:
