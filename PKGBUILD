# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>
# Contributor: Shengyu Zhang <la@archlinuxcn.org>

pkgname=uivonim
pkgver=0.29.0
pkgrel=1
pkgdesc="A Neovim GUI designed for programming"
arch=('x86_64')
license=('AGPL')
url='https://github.com/smolck/uivonim'
depends=('neovim>=0.5.0' 'electron' 'nodejs')
makedepends=('npm' 'asar')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz"
        "$pkgname.sh"
        "$pkgname.desktop")

sha256sums=('9e22522b70d1b57bdcf6722b744f06c362bc60db7a67989a34521ef8473e735a'
            '6586fb00ced506b207e9e1c39ea605584311642d0a097453f2789c5d8e9b5191'
            '178ff70ae743cae77899e982a89b958b179793e7394b6384d9d2165d00622302')

prepare() {
	_dist='/usr/lib/electron'
	_ver="$(cat $_dist/version)"
	cd "$pkgname-$pkgver"
	sed -i "s|\"electron\": \".*\"|\"electron\": \"$_ver\"|" package.json
}

build() {
	cd "$pkgname-$pkgver"
	npm --cache "$srcdir/npm-cache" ci
	npm run build
	./node_modules/.bin/electron-builder --linux --dir -c.electronDist="$_dist" -c.electronVersion="$_ver" --c.asar=true
}

package() {
	install -Dm755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 "$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
	cd "$pkgname-$pkgver"
	install -dm755 "$pkgdir/usr/lib/$pkgname/"
	asar e dist/linux-unpacked/resources/app.asar "$pkgdir/usr/lib/$pkgname/"
	install -Dm644 art/icon.png "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
}
