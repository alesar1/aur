pkgname=librepo
pkgver=1.9.6
pkgrel=2
pkgdesc="Repodata downloading library"
arch=('i686' 'x86_64')
url="https://github.com/rpm-software-management/$pkgname"
license=('LGPL2.1')
depends=('curl' 'glib2' 'gpgme' 'libxml2' 'openssl' 'zchunk>=0.9.11')
makedepends=('cmake' 'python')
checkdepends=('check' 'python-flask' 'python-nose' 'python-gpgme' 'python-pyxattr')
optdepends=('python: for python bindings')
source=("$url/archive/$pkgver/$pkgname-$pkgver.tar.gz"
        "$pkgname-1.9.6-fix-segfault-with-zck-repodata.patch::$url/commit/0b15c58.patch")
md5sums=('99a0584d040975cf9ead08df62d399a4'
         '75feff80c0fb7aa8e882d5551e8ff745')

prepare() {
	cd "$pkgname-$pkgver"
	rm -rf build
	mkdir build

	# Fix segfault when downloading zck repodata files
	# (i.e: with Fedora >= 30 repositories)
	patch -p1 -i "$srcdir/$pkgname-$pkgver-fix-segfault-with-zck-repodata.patch"
}

build() {
	cd "$pkgname-$pkgver"/build

	cmake -DCMAKE_BUILD_TYPE=Release \
	      -DCMAKE_C_FLAGS="$CFLAGS $CPPFLAGS" \
	      -DCMAKE_INSTALL_PREFIX=/usr \
	      -DPYTHON_DESIRED=3 \
	      -DENABLE_DOCS=OFF \
	      -DENABLE_PYTHON_TESTS=ON \
	      -DWITH_ZCHUNK=ON \
	      ..

	make
}

check() {
	cd "$pkgname-$pkgver"/build
	make ARGS="-V" test
}

package() {
	cd "$pkgname-$pkgver"/build
	make DESTDIR="$pkgdir/" install
	if [[ "$CARCH" == "x86_64" ]]; then
		mv "$pkgdir/"usr/lib64/* "$pkgdir/"usr/lib
		rmdir "$pkgdir/"usr/lib64
	fi

	install -Dp -m644 ../README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}

# vim: set ft=sh ts=4 sw=4 noet:
