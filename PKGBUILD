# Maintainer: Jonas Witschel <diabonas@archlinux.org>
pkgname=lib3mf
pkgver=2.0.0
pkgrel=2
pkgdesc='Implementation of the 3D Manufacturing Format file standard'
arch=('x86_64')
url='https://3mf.io/'
license=('BSD')
depends=('libzip' 'zlib')
makedepends=('cmake')
checkdepends=('gtest>=1.10.0')
source=("$pkgname-$pkgver.tar.gz::https://github.com/3MFConsortium/lib3mf/archive/v$pkgver.tar.gz"
        'lib3mf_use-system-gtest.patch'
        'lib3mf_link-libzip-and-zlib.patch::https://github.com/3MFConsortium/lib3mf/commit/6cd7b5cb64cbf8a81c24ae4c84fee8534a652a43.patch')
sha512sums=('79683cab67640c1f6b4653ae705e13a39a322dfab72d82fe1f162cb01745f629f3df58819eb15edf4fca44794170277b5c996b5c829364387fd7bb0fddc8ba57'
            'a4cc5827c8ab0f43b81786056ce31a157bb34b1e87b8b3f24a229792b52bd6513c4ed3b1b50fe59f37ad3899a1678ffee99fbbd474414d5183921d38b660fa41'
            '52159d57995f4c1439b171c088d25c81f4ac297628c0d0c459024d0cb826c423a5badb8b07c97e5dfccd68699eda11251175a76a9d44c2f52537e13aacdeed66')
BUILDENV+=('!check') # TODO re-enable tests once gtest 1.10.0 is in the official repositories

prepare() {
	mkdir build
	cd "$pkgname-$pkgver"
	patch --strip=1 --input="$srcdir/lib3mf_use-system-gtest.patch"
	patch --strip=1 --input="$srcdir/lib3mf_link-libzip-and-zlib.patch"
}

build() {
	cd build
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_INCLUDEDIR="include/$pkgname" \
	      -DUSE_INCLUDED_LIBZIP=OFF -DUSE_INCLUDED_ZLIB=OFF \
	      $( ((CHECKFUNC)) || echo -DLIB3MF_TESTS=OFF) \
	      "$srcdir/$pkgname-$pkgver"
	make
}

check() {
	cd build
	ctest
}

package() {
	cd build
	make DESTDIR="$pkgdir" install
	install -Dm644 "$srcdir/$pkgname-$pkgver/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
