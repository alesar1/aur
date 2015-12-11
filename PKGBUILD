# Maintainer: Rowan Lewis <rl@nbsp.io>

pkgname=slap
pkgver=0.1.56
pkgrel=1
pkgdesc="Sublime-like terminal-based text editor."
arch=("x86_64")
url="https://github.com/slap-editor/$pkgname/"
depends=('nodejs' 'python2')
makedepends=('npm')
license=('MIT')
source=("https://github.com/slap-editor/$pkgname/archive/v${pkgver}.zip")
sha256sums=('7354f2e1939bb80efcbe616af92cdfab6ac7a8ae148343dea920ac1ed403fd18')

build() {
	cd "$srcdir/$pkgname-$pkgver"

	msg 'Fetching NPM dependencies...'
	npm install --python="`which python2`"
}

package() {
	cd "$srcdir/$pkgname-$pkgver"

	mkdir -p "$pkgdir/usr/lib"
	install -dm 755 "$pkgdir/usr/lib/$pkgname"
	cp -dpr --no-preserve=ownership ./ "$pkgdir/usr/lib/$pkgname"

	mkdir -p "$pkgdir/usr/share/licenses"
	install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	mkdir -p "$pkgdir/usr/bin"
	ln -s "/usr/lib/$pkgname/slap.js" "$pkgdir/usr/bin/slap"
}
