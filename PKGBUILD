# Maintainer: Ilango Rajagopal <ilangokul@gmail.com>

pkgname=vscode-html-languageserver
_parent=vscode
pkgver=1.55.0
pkgrel=1
pkgdesc="HTML Language server from vscode"
arch=(any)
url="https://github.com/Microsoft/vscode/tree/master/extensions/html-language-features/server"
license=('custom')
depends=(nodejs)
makedepends=(typescript npm)
source=("$_parent-$pkgver.tar.gz::https://github.com/microsoft/vscode/archive/$pkgver.tar.gz"
	"vscode-html-languageserver")
sha256sums=('5a208d6cfaf35ea4d098c858faf2dff14092d74534c1b5966df87f1d5be24ef0'
            'SKIP')

prepare() {
	cd "$_parent-$pkgver/extensions/html-language-features/server"

	# Version will always be 1.0.0 in package.json, patch it to $pkgver
	sed -iE -e "s/\(\s*version\":\s*\"\)1.0.0/\1$pkgver/" package.json
}

build() {
	cd "$_parent-$pkgver/extensions/html-language-features/server"
	tsc || true
}

package() {
	cd "$_parent-$pkgver/extensions/html-language-features/server"
	cd out
	cp ../package.json .
	npm pack
	npm install -g --prefix "${pkgdir}/usr" "$pkgname-$pkgver.tgz"

	# npm gives ownership of ALL FILES to build user
	# https://bugs.archlinux.org/task/63396
	chown -R root:root "${pkgdir}"

	# Package the runner
	install -Dt "${pkgdir}/usr/bin" "${srcdir}/vscode-html-languageserver"

	# License
	install -Dm 0644 -t "${pkgdir}/usr/share/licenses/$pkgname" "${srcdir}/$_parent-$pkgver/LICENSE.txt"
}
