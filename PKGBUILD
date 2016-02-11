# Maintainer: Christian Rebischke <chris.rebischke[at]archlinux[dot]org>
_pkgname='cloud-buster'
pkgname=cloud-buster-git
pkgver=0.0.106.b7d1a76
pkgrel=1
pkgdesc="A cloudflare-resolver"
arch=('any')
url="https://github.com/SageHack/cloud-buster"
license=('GPL3')
depends=('python')
provides=('cloud-buster')
conflicts=('cloud-buster')
source=('git+https://github.com/SageHack/cloud-buster.git' 'cloud-buster.sh')
sha512sums=('SKIP'
            'bb773d1c650e1667a91aa67d9bbf1ae683e190a6f2a320665dc077ac8fdedd95294721f9e0f2c7a6adc195ab2873d7638b62bca0656a0bf33fe8539fc890d49c')

pkgver() {
	cd "$_pkgname"
	printf "%s.%s.%s" 0.0 "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"
	python -O -m compileall .
}

package() {
	mkdir -p "$pkgdir/usr/share/"
	mkdir -p "$pkgdir/usr/bin/"
	install -D -m755 "$srcdir/cloud-buster.sh" "$pkgdir/usr/bin/cloud-buster"
	cd "$srcdir"
	mv cloud-buster "$pkgdir/usr/share/"
}

# vim:set noet sts=4 sw=4 ts=4 tw=76:
