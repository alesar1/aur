# Maintainer: Wenxuan Zhang <wenxuangm@gmail.com>
_pkgname=rust-script
pkgname=rust-script
pkgver=0.16.0
pkgrel=0
pkgdesc='Run Rust files and expressions without any setup or compilation necessary'
arch=(i686 x86_64)
url='https://rust-script.org'
license=('MIT' 'APACHE')
depends=()
makedepends=('rust')
conflicts=("rust-script-git" "rust-script-bin")
provides=()

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/fornwall/rust-script/archive/v${pkgver}.tar.gz")
md5sums=('f9c9421e0ef3214f12a97ae383dcfb4c')

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
