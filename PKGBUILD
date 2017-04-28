# Contributor: Isak Karlsson <isak.karlsson@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgbase=rust-nightly
pkgname=('rust-nightly' 'rust-nightly-doc')
pkgver=1.18.0.2017.04.27
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc='A safe, concurrent, practical language'
url='http://www.rust-lang.org/'
license=('MIT' 'Apache')
makedepends=('libffi' 'perl' 'python2' 'curl' 'llvm')
source=("http://static.rust-lang.org/dist/rustc-nightly-src.tar.gz")
options=('!makeflags' 'staticlibs' '!strip' '!emptydirs')
conflicts=('rust')
provides=('rust')
md5sums=('734498847d1808777ae8f1b69e45484e')

build() {
  cd rustc-nightly-src
 ./configure \
    --prefix=/usr \
    --release-channel=stable \
    --llvm-root=/usr \
    --disable-codegen-tests \
    --jemalloc-root=/usr/lib \
    --disable-rpath \
    --enable-compiler-docs 

  export RUSTFLAGS="$RUSTFLAGS -C link-args=-lffi"

  python2 ./x.py build --verbose 
}

package_rust-nightly() {
	depends=('shared-mime-info')
	optdepends=('rust-doc-git: language and API documentation')
	provides=('rust')
	conflicts=('rust')
	cd rustc-nightly-src

	make DESTDIR="$pkgdir" install
	rm -fr "$pkgdir"/usr/share/doc/rust/html
	rm "$pkgdir"/usr/share/doc/rust/README.md
	rm -f "$pkgdir"/usr/lib/rustlib/{components,manifest-rustc,manifest-rust-docs,rust-installer-version,install.log,uninstall.sh}

	install -d "$pkgdir"/usr/share/licenses/rust-nightly/
        install -m644 COPYRIGHT LICENSE-* "$pkgdir"/usr/share/licenses/rust-nightly/
}

package_rust-nightly-doc() {
       pkgdesc="A safe, concurrent, practical language from Mozilla. (Language and API documentation)"
       arch=('any')
       optdepends=('rust-nightly: to compile and run the programs you can write using this documentation')
       provides=('rust-doc')
       conflicts=('rust-doc')

       cd rustc-nightly-src/src
       _docdir="$pkgdir"/usr/share/doc/rust
       install -d "$_docdir"
       cp -r doc/* "$_docdir"/ || true

       chmod -R 644 "$_docdir"
       find "$_docdir" -type d -exec chmod 755 {} +
       for ext in aux out log toc; do
               rm -f "$_docdir"/*."$ext"
       done
       cd ..
       install -d "$pkgdir"/usr/share/licenses/rust-nightly-doc/
       install -m644 COPYRIGHT LICENSE-* "$pkgdir"/usr/share/licenses/rust-nightly-doc/
}
