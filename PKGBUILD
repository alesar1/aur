# Maintainer: Florian Loitsch <florian@toit.io>
pkgname=toit
_tag="v1.6.11"
_repo="https://github.com/toitlang/toit.git"
_commit=6f8ce60b95ab540316af047d21dfdea5fda5b051
pkgver="${_tag#v}"
pkgrel=1
pkgdesc="Toit programming language SDK"
arch=('x86_64')
url="https://toitlang.org"
license=('LGPL')
depends=('gcc-libs')
makedepends=(
	'git'
	'cmake'
	'ninja'
	'go'
)
source=("git+$_repo#commit=$_commit")
noextract=()
md5sums=('SKIP')

prepare() {
	cd "$srcdir/${pkgname%-git}"

	# Initial the top-level modules but not nested ones.
	git submodule update --init .

	cd third_party/esp-idf
	# We only need mbedtls of the esp-idf submodule to build the host tools.
	# Don't bother initializing all the other components.
	git submodule update --init components/mbedtls
}

build() {
	cd "$srcdir/${pkgname%-git}"
	TOIT_GIT_VERSION=v$pkgver make -j1 all
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir/" install
	mkdir -p "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toit.run" "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toit.compile" "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toit.pkg" "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toit.lsp" "$pkgdir/usr/bin"
}
