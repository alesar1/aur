# Maintainer: Andre Kugland <kugland at gmail dot com>

_pkgname=bip39
pkgname=$_pkgname-git
pkgver=r10.2a4bf1e
pkgrel=1
pkgdesc="Generate mnemonic codes according to BIP-0039"
arch=('x86_64')
depends=('libsodium')
makedepends=('git' 'make' 'base-devel')
conflicts=("$_pkgname")
source=("$_pkgname::git+https://github.com/kugland/bip39.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd "$srcdir/$_pkgname"
  make bip39
}

package() {
  cd "$srcdir/$_pkgname"
  mkdir -p "$pkgdir/usr/bin" || true
	mkdir -p "$pkgdir/usr/share/man/man1" || true
  mkdir -p "$pkgdir/usr/share/doc/bip39" || true
  make install PREFIX="$pkgdir/usr"
}
