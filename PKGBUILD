# Maintainer: Wenxuan Zhang <wenxuangm@gmail.com>
_pkgname=rust-script
pkgname=rust-script
pkgver=0.8.0
pkgrel=2
pkgdesc='Run Rust files and expressions without any setup or compilation necessary'
arch=(i686 x86_64)
url='https://rust-script.org'
license=('MIT' 'APACHE')
depends=()
makedepends=('rust>=1.47')
conflicts=("rust-script-git" "rust-script-bin")
provides=()

source=("https://github.com/fornwall/rust-script/archive/v${pkgver}.tar.gz")
md5sums=('77f6eb649942318ea1c1a72a769d6ce8')

build() {
	cd "$srcdir/${_pkgname}-${pkgver}"
	cargo build --release --locked
}

package() {
	cd "$srcdir/${_pkgname}-${pkgver}"
	install -Dm755 "target/release/${_pkgname}"        "$pkgdir/usr/bin/${_pkgname}"
	install -Dm644 "README.md"                         "$pkgdir/usr/share/doc/${_pkgname}/README.md"
	install -Dm644 "LICENSE-MIT"                       "$pkgdir/usr/share/licenses/${_pkgname}/LICENSE-MIT"
	install -Dm644 "LICENSE-APACHE"                    "$pkgdir/usr/share/licenses/${_pkgname}/LICENSE-APACHE"
}

# vim:set noet sts=0 sw=4 ts=4 ft=PKGBUILD:
