# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
_pkgname='hlsdl'
pkgname="$_pkgname-git"
pkgver='r181.be7300b'
pkgrel='1'
pkgdesc='C program to download VoD HLS (.m3u8) files - git version'
arch=('x86_64')
url="https://github.com/selsta/$_pkgname"
license=('MIT')
depends=('curl' 'openssl')
makedepends=('make' 'git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$pkgname::git+$url")
sha256sums=('SKIP')

_sourcedirectory="$pkgname"

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/$_sourcedirectory/"
	make
}

package() {
	cd "$srcdir/$_sourcedirectory/"
	install -Dm755 "$_pkgname" "$pkgdir/usr/bin/$_pkgname"
	install -Dm644 'LICENSE' "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
