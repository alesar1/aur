# Maintainer: Jan-Jaap Korpershoek <jjkorpershoek96 at gmail dot com>

_ref=''
pkgname=kak-lsp-git
pkgver=4.0.0.r0.5c556a5
pkgrel=1
pkgdesc='Kakoune Language Server Protocol Client'
arch=('x86_64')
url="https://github.com/ul/kak-lsp"
license=('custom:unlicense')
depends=('kakoune')
makedepends=('git' 'rust')
optdepends=() # Language servers
provides=("kak-lsp")
conflicts=("kak-lsp")
install="kak-lsp-git.install"
source=("${pkgname}::git+https://github.com/ul/kak-lsp${_ref}")
md5sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"
	printf "%s" "$(git describe --long | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "${srcdir}/${pkgname}"
	cargo build --release
}

package() {
	cd "${srcdir}/${pkgname}"
	install -Dm755 -t "${pkgdir}/usr/bin" target/release/kak-lsp
	install -Dm644 -t "${pkgdir}/usr/share/${pkgname}/examples/" kak-lsp.toml
	install -Dm644 UNLICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

