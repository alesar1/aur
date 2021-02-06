# Maintainer: Daniel Peukert <daniel@peukert.cc>
# Contributor: malet <malet@invalid>
_projectname='visitors'
pkgname="ocaml-$_projectname"
pkgver='20210127'
pkgrel='1'
pkgdesc='An OCaml syntax extension for generating visitor classes'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.inria.fr/fpottier/$_projectname"
license=('LGPL2.1')
depends=('ocaml>=4.07.0' 'ocaml-ppx_deriving>=5.0' 'ocaml-ppxlib>=0.9.0' 'ocaml-result')
makedepends=('dune>=2.0.0')
options=('!strip')
source=("$pkgname-$pkgver-$pkgrel.tar.gz::$url/-/archive/$pkgver/$_projectname-$pkgver.tar.gz")
sha256sums=('b3057bf30fe4c7767643a8511a4e15f956114bde4001e58a720540ebc467f39f')

_sourcedirectory="$_projectname-$pkgver"

build() {
	cd "$srcdir/$_sourcedirectory/"
	dune build --release --verbose
}

package() {
	cd "$srcdir/$_sourcedirectory/"
	DESTDIR="$pkgdir" dune install --prefix '/usr' --libdir 'lib/ocaml' --release --verbose

	install -dm755 "$pkgdir/usr/share/doc/$pkgname"
	mv "$pkgdir/usr/doc/$_projectname/"* "$pkgdir/usr/share/doc/$pkgname/"
	rm -r "$pkgdir/usr/doc/"

	install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
	ln -sf "/usr/share/doc/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
