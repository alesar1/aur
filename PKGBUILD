# Maintainer: Dušan Simić <dusan.simic1810@gmail.com>

_electron=electron12
_appname=insomnia
pkgname="$_appname-electron-bin"
_dirname="Insomnia.Core"
pkgver=2022.1.0
pkgrel=2
pkgdesc='Cross-platform HTTP and GraphQL Client'
arch=(any)
_repo=Kong/insomnia
url="https://github.com/$_repo"
license=('MIT')
depends=("$_electron")
provides=("$_appname")
conflicts=("$_appname")
source=("$url/releases/download/core@$pkgver/$_dirname-$pkgver.tar.gz"
        "icon.png::$url/raw/core@$pkgver/packages/$_appname-app/app/ui/images/$_appname-core-logo.png"
				"https://raw.githubusercontent.com/$_repo/core@$pkgver/LICENSE"
        "$_appname.sh"
				"$_appname.desktop")
sha256sums=('464072991b029ce4ab610f2cbf532597ced2d96402b00c695ac1ba61270e0d37'
            '9495087cb09512d2693f1dd4bc3c2c72a026d1c2d9238922115f8bffcf56e6df'
            'cc91b5641bbbf592a69ca5f7b45807efba470068e815fc7682a42022bbd3cbb9'
            '9eba2a175624d9236f9acbefffd92a5a6a64bf6250700b29684d7aa4a1057c77'
            '790a02378c36db77797669e6b58a426a037664c2680e8b29b9f606c6bb517e94')

prepare() {
	cd "$srcdir"
	sed -i "s~@ELECTRON@~$_electron~" "$_appname.sh"
}

package() {
	install -Dm755 "$_appname.sh" "$pkgdir/usr/bin/$_appname"
	install -Dm644 "$_appname.desktop" -t "$pkgdir/usr/share/applications"

	install -Dm644 icon.png "$pkgdir/usr/share/pixmaps/$_appname.png"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"

	cd "$_dirname-$pkgver"

	# Fix file permissions in resources dir
	find resources -type f -exec chmod 644 {} \;

	install -d "$pkgdir/usr/lib/$_appname"
	cp -r "resources/." "$pkgdir/usr/lib/$_appname"
}
