# Contributor: Noel Kuntze <noel.kuntze@thermi.consulting>
# Maintainer: Noel Kuntze <noel.kuntze@thermi.consulting>
pkgname=libmdbx
pkgver=0.9.3
pkgrel=1
pkgdesc="Extremely fast, compact, powerful, embedded, transactional key-value database, with permissive license."
url="https://github.com/erthink/libmdbx"
arch=(x86_64)
license=(OLDAP-2.8)
makedepends=(linux-headers bash)
subpackages="$pkgname-dev $pkgname-doc $pkgname-dbg"
source=($pkgname-$pkgver.tar.gz::https://github.com/erthink/libmdbx/archive/v$pkgver.tar.gz
	0001-Make-MDBX_-vars-specifyable-via-args.patch
	)

_make_args="SHELL=bash MDBX_GIT_TREE=160b2d1d503c72a1fc92e62ad4e7d349e0d84ccd \
	MDBX_GIT_COMMIT=d78150de79c5bce274bb2020702224fe9479b1d2 MDBX_GIT_DESCRIBE=v0.9.3-0-gd78150d MDBX_GIT_REVISION=0 \
	MDBX_GIT_VERSION=$pkgver MDBX_GIT_TIMESTAMP=2021-02-02T22:34:42+03:00"

prepare()
{
	cd "$srcdir/$pkgname-$pkgver/"
	for i in "$srcdir/"*.patch
	do
		patch -p1 -i $i
	done
}
build() {
	export CFLAGS="$CFLAGS -fPIC"
	cd "$srcdir/$pkgname-$pkgver/"
	make all prefix=/ $_make_args
}

check() {
	cd "$srcdir/$pkgname-$pkgver/"
	make test TEST_DB=/tmp/mdbx-test.db TEST_LOG=/tmp/mdbx-test.log.gz $_make_args
	rm /tmp/mdbx-test.*
}

package() {
	# Replace with proper package command(s)
	cd "$srcdir/$pkgname-$pkgver/"
	make install "DESTDIR=$pkgdir" prefix=/usr mandir=/usr/share/man $_make_args
}

sha512sums=('d69b24a304071edc13ceb41de44c7bd6cf1a18e8c462bb3147cf6809b4db92c41586cc65b1c242581c54c7e3ab2787c4773156657baea4aa9995fc6479c36306'
            'a7504757ac9f555d6b4f214ba2a3e0565b48a9c0be95b891c9b2d95684f66a4d1483a7383679f0533604aa67f2063d21a78f3fc020616b234d40a2c2f5792dd9')
