# Maintainer: Cody Schafer <aur at codyps com>
# Maintainer: dequis <dx@dxzone.com.ar>
# Previous maintainer: Joel Teichroeb <joel@teichroeb.net>

pkgname=rr
pkgver=5.2.0
pkgrel=5
pkgdesc='Record and Replay framework: lightweight recording and deterministic debugging'
arch=(i686 x86_64)
url='http://rr-project.org/'
license=('custom')
depends=('gdb' 'capnproto')
makedepends=('git' 'cmake' 'gdb' 'ninja')
options=(!strip)

source=(
	$pkgname-$pkgver.tar.gz::https://github.com/mozilla/${pkgname}/archive/${pkgver}.tar.gz
	https://github.com/mozilla/rr/commit/53c5bd72bae089616a3ca626b8af240481d70e6f.patch
	file://0001-avoid-overriding-external-opt-debug-flags.patch
)
sha1sums=('55040be15a87dd93012d7cdbeb8a3fc428ea4b6b'
          '9fcafcc3f4474b4352402b39002869a51e77f6df'
          'SKIP')

prepare() {
	cd $pkgname-$pkgver
	mkdir -p build
	patch -Np1 -i "$srcdir/53c5bd72bae089616a3ca626b8af240481d70e6f.patch"
	patch -Np1 -i "$srcdir/0001-avoid-overriding-external-opt-debug-flags.patch"
}

build() {
	cd $pkgname-$pkgver/build
	cmake \
		-GNinja \
		-Ddisable32bit=true \
		-DCMAKE_BUILD_TYPE=plain \
		-DCMAKE_INSTALL_PREFIX:PATH=/usr \
		-DBUILD_TESTS=OFF \
		-DWILL_RUN_TESTS=OFF \
		-DCMAKE_INSTALL_LIBDIR=lib \
		-DCMAKE_CXX_STANDARD=14 \
		..

	cmake --build .	 -- -v
}

package() {
	cd $pkgname-$pkgver/build
	DESTDIR="${pkgdir}" cmake --build . -- -v install
	if check_option 'debug' n; then
		find "${pkgdir}/usr/bin" -type f -executable -exec strip $STRIP_BINARIES {} + || :
	fi
	cd ..
	install -D LICENSE "${pkgdir}/usr/share/licenses/rr/LICENSE"
}
