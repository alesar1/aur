# Maintainer: asm0dey <pavel.finkelshtein@gmail.com>
# Contributor: asm0dey <pavel.finkelshtein@gmail.com>

pkgname=fselect-git
pkgrel=1
pkgver=0.3.2.r16.g5bfe8e4
url="https://github.com/jhspetersson/fselect"
license=("MIT")
arch=(i686 x86_64)
pkgdesc='Find files with SQL-like queries'

source=("$pkgname::git://github.com/jhspetersson/fselect.git")
md5sums=('SKIP')
makedepends=('rust' 'git')
depends=('gcc-libs')
provides=('fselect')
conflicts=('fselect')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$pkgname"
    cargo build --release
}

package() {
    mkdir -pv "$pkgdir/usr/bin"
    mv "$pkgname/target/release/fselect" "$pkgdir/usr/bin"
    mkdir -pv "$pkgdir/usr/share/licenses/$pkgname"
    mv "$srcdir/$pkgname/LICENSE-MIT" "$pkgdir/usr/share/licenses/$pkgname"
}
