# Maintainer: Gabriel Fontes <eu@misterio.me>

pkgname=flavours
pkgdesc='A simple and easy cli to build and use base16 schemes'
pkgver=0.3.5
pkgrel=1
arch=('any')
url='https://github.com/Misterio77/flavours'
license=('MIT')
depends=('git')
makedepends=('rust')
source=("$pkgname-${pkgver}.tar.gz::https://github.com/misterio77/flavours/archive/v${pkgver}.tar.gz")
sha256sums=('8826ce256b74d1c83eea14f953485ea81ff3cee0cfbd80f7cd299fb5f90307ab')

build() {
	cd "$pkgname-$pkgver"
	cargo build --release --locked
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 "example.toml" "$pkgdir/etc/$pkgname.conf"
	#completions
	install -Dm644 "completions/bash" "$pkgdir/usr/share/bash-completion/completions/$pkgname"
	install -Dm644 "completions/fish" "$pkgdir/usr/share/fish/vendor_completions.d/$pkgname.fish"
	install -Dm644 "completions/zsh" "$pkgdir/usr/share/zsh/site-functions/_$pkgname"
}
