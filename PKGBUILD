# Contributor: Patrick McCarty <pnorcks at gmail dot com>

pkgname=createrepo_c
pkgver=0.14.4
pkgrel=1
pkgdesc="A C implementation of createrepo, a tool to create yum repositories"
arch=('i686' 'x86_64')
license=('GPL2')
url="https://github.com/rpm-software-management/$pkgname"
depends=('curl' 'drpm' 'expat' 'glib2' 'libmodulemd>=2.3.0'
         'libxml2' 'rpm-org' 'sqlite' 'zchunk' 'zlib')
makedepends=('bash-completion' 'cmake' 'doxygen'
             'python' 'python-sphinx')
checkdepends=('python-nose')
optdepends=('python: for python bindings')
source=("$url/archive/$pkgver/$pkgname-$pkgver.tar.gz")
md5sums=('48fadcc3de3d4d8d20cbcb821f8171bf')

prepare() {
	cd "$pkgname-$pkgver"
	rm -rf build
	mkdir build
}

build() {
	cd "$pkgname-$pkgver"/build

	cmake -DCMAKE_BUILD_TYPE=Release \
	      -DCMAKE_C_FLAGS="$CFLAGS $CPPFLAGS" \
	      -DCMAKE_INSTALL_PREFIX=/usr \
	      -DCMAKE_INSTALL_LIBDIR=lib \
	      -DPYTHON_DESIRED=3 \
	      -DWITH_LIBMODULEMD=ON \
	      -DWITH_ZCHUNK=ON \
	      ..

	make
	make doc
}

check() {
	cd "$pkgname-$pkgver"/build

	make tests
	make ARGS="-V" test
}

package() {
	cd "$pkgname-$pkgver"/build

	make DESTDIR="$pkgdir/" install

	install -Dp -m644 ../README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}

# vim: set ft=sh ts=4 sw=4 noet:
