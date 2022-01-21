# Maintainer: Daniel Peukert <daniel@peukert.cc>
_projectname='luv'
pkgname="ocaml-$_projectname"
pkgver='0.5.11'
pkgrel='1'
pkgdesc='Cross-platform asynchronous I/O and system calls'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/aantron/$_projectname"
license=('MIT')
depends=('libuv' 'ocaml>=4.02.0' 'ocaml-ctypes>=0.14.0' 'ocaml-result')
makedepends=('dune>=2.0.0')
options=('!strip')
source=("$pkgname-$pkgver-$pkgrel.tar.gz::$url/archive/$pkgver.tar.gz")
sha512sums=('f1532990e9494d2ae9f11845a788888b0f3f176fefde5fe6eeeb694a7f82db20c679448f5ecd4bd143c608927c44638e8f0bf97fd3c5dcc38f839fbe1c22c036')

_sourcedirectory="$_projectname-$pkgver"

prepare() {
	cd "$srcdir/$_sourcedirectory/"

	# Remove folder with tests, as we don't run them anyway and they contain additional
	# opam files, which would otherwise get built
	rm -rf 'test/'
}

build() {
	cd "$srcdir/$_sourcedirectory/"
	LUV_USE_SYSTEM_LIBUV='yes' dune build --release --verbose
}

# Ignoring this for now, as I would have to package ocaml-alcotest and its dependencies
# (about 20 packages) just for this single package, which is not something I want to do
# check() {
# 	cd "$srcdir/$_sourcedirectory/"
# 	dune runtest --release --verbose
# }

package() {
	cd "$srcdir/$_sourcedirectory/"
	DESTDIR="$pkgdir" dune install --prefix '/usr' --libdir 'lib/ocaml' --release --verbose

	install -dm755 "$pkgdir/usr/share/doc/$pkgname"
	mv "$pkgdir/usr/doc/$_projectname/"* "$pkgdir/usr/share/doc/$pkgname/"
	rm -r "$pkgdir/usr/doc/"

	install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
	ln -sf "/usr/share/doc/$pkgname/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
