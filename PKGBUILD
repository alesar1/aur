# Maintainer: Emilio Reggi <nag@mailbox.org>
pkgname=himalaya-git
_pkgname=himalaya
pkgver=r82.0d763a1
pkgrel=1
pkgdesc="Minimalist CLI email client, written in Rust."
arch=('any')
url="https://github.com/soywod/himalaya"
license=('BSD')
depends=('gcc-libs' 'openssl')
makedepends=('cargo' 'git')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}"::"git+${url}")
md5sums=('SKIP')

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"
	cargo build --release --locked --all-features --target-dir=target
}

check() {
   cd "$_pkgname"
   cargo test --release --locked --target-dir=target
}

package() {
   cd "$_pkgname"
   install -Dm 755 target/release/${_pkgname} -t "${pkgdir}/usr/bin"
   install -Dm 644 README.md -t "$pkgdir/usr/share/doc/${_pkgname}"
   install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/${_pkgname}"
}
