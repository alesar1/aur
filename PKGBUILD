# Contributor: Isak Karlsson <isak.karlsson@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgbase=rust-nightly
pkgname=('rust-nightly' 'rust-nightly-doc')
pkgver=1.13.0_2016.09.13
pkgrel=3
arch=('i686' 'x86_64')
pkgdesc='A safe, concurrent, practical language'
url='http://www.rust-lang.org/'
license=('MIT' 'Apache')
depends=('shared-mime-info')
makedepends=('libffi' 'perl' 'python2' 'curl' 'llvm' 'clang' 'haskell-pandoc' 'emacs')
source=("https://static.rust-lang.org/dist/2016-09-13/rustc-nightly-src.tar.gz")
sha256sums=('55a217902af13af83d981794536a680894bd44e5715e4b5133542d67a96c5590')
options=('!makeflags' 'staticlibs' '!strip' '!emptydirs')
conflicts=('rust')
provides=('rust')

build() {
  cd rustc-nightly
  ./configure --prefix=/usr --disable-rpath --enable-compiler-docs
  make
 }

package_rust-nightly() {
	depends=('shared-mime-info')
	optdepends=('rust-doc-git: language and API documentation')
	provides=('rust')
	conflicts=('rust')
	options=('staticlibs')
	cd rustc-nightly

	make DESTDIR="$pkgdir" install
	rm -fr "$pkgdir"/usr/share/doc/rust/html

	rm -f "$pkgdir"/usr/lib/rustlib/{components,manifest-rustc,manifest-rust-docs,rust-installer-version,install.log,uninstall.sh}

	install --directory "$pkgdir"/usr/share/licenses/rust-nightly/
	install -m644 COPYRIGHT LICENSE-* "$pkgdir"/usr/share/licenses/rust-nightly
}


package_rust-nightly-doc() {
       pkgdesc="A safe, concurrent, practical language from Mozilla. (Language and API documentation)"
       arch=('any')
       options+=('!strip' '!emptydirs')
       optdepends=('rust-nightly: to compile and run the programs you can write using this documentation')
       provides=('rust-doc')
       conflicts=('rust-doc')

       cd rustc-nightly
       _docdir="$pkgdir"/usr/share/doc/rust
       install --directory "$_docdir"
       cp -r doc/* "$_docdir"/ || true

       chmod -R 644 "$_docdir"
       find "$_docdir" -type d -exec chmod 755 {} +
       for ext in aux out log toc; do
               rm -f "$_docdir"/*."$ext"
       done

       install --directory "$pkgdir"/usr/share/licenses/rust-nightly-doc/
       install -m644 COPYRIGHT LICENSE-* "$pkgdir"/usr/share/licenses/rust-nightly-doc/
}
