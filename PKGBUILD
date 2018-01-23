# Maintainer: Darshan Parajuli <parajulidarshan@gmail.com>
pkgbase=calc
pkgname=calc-git
pkgver=0.1.0
pkgrel=1
pkgdesc="A simple command line calculator."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/darshanparajuli/calc"
license=('MIT')
makedepends=('git' 'rustc' 'cargo')
source=('git+https://github.com/darshanparajuli/calc')
md5sums=('SKIP')

_calc=calc

pkgver() {
	cd "$srcdir/$_calc"
    printf "%s" "$(git describe --always)"
}

package() {
    cd "$srcdir/$_calc"
	cargo build --release

	install -D -m 755 "$srcdir/$_calc/target/release/calc" "$pkgdir/usr/bin/calc"
	install -D -m 644 LICENSE "$pkgdir/usr/share/licenses/calc/LICENSE"
}
