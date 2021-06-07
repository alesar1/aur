# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>

pkgname=tree-sitter-yaml-git
pkgver=0.5.0.r1.g0e36bed
pkgrel=1
pkgdesc="YAML grammar for tree-sitter"
arch=('x86_64')
url="https://github.com/ikatyang/tree-sitter-yaml"
license=('MIT')
groups=('tree-sitter-grammars')
depends=('gcc-libs')
makedepends=('git' 'tree-sitter' 'npm')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("$pkgname::git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	git describe --long --tags | sed 's/^v//;s/-/.r/;s/-/./'
}

prepare() {
	cd "$pkgname"
	tree-sitter generate
}

build() {
	cd "$pkgname/src/"
	cc $CFLAGS -std=c99 -c parser.c
	c++ $CPPFLAGS -c scanner.cc
	c++ $LDFLAGS -shared parser.o scanner.o -o "$srcdir/parser.so"
}

package() {
	install -Dvm 644 parser.so "$pkgdir/usr/lib/libtree-sitter-yaml.so"
	install -d "$pkgdir/usr/share/nvim/runtime/parser/"
	ln -s "/usr/lib/libtree-sitter-yaml.so" "$pkgdir/usr/share/nvim/runtime/parser/yaml.so"
	cd "$pkgname"
	install -Dvm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dvm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
