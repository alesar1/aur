# Maintainer: nekgem2 <nekgem2@firemail.cc>
pkgname=lokinet
pkgver=0.9.9
pkgrel=1
pkgdesc="Anonymous, decentralized and IP based overlay network for the internet."
arch=('x86_64' 'aarch64')
url="https://lokinet.org"
license=('GPL3')
depends=('libuv' 'libsodium' 'curl' 'zeromq' 'unbound' 'sqlite' 'jemalloc')
makedepends=('cmake' 'git')
install='lokinet.install'
source=("https://github.com/oxen-io/lokinet/releases/download/v$pkgver/lokinet-v$pkgver.tar.xz"{,.sig}
        'lokinet.conf'
        'lokinet.service'
        'lokinet-vpn@.service'
        'lokinet-bootstrap.service'
        'lokinet-default-config.service'
        'lokinet-resume.service'
        'lokinet.sysusers'
        'lokinet.tmpfiles'
        'lokinet.pkla'
        'lokinet.rules')
sha256sums=('084a515103f32d8dcb519837054348b04e35157dd062e87bbee38b214973b72c'
            'SKIP'
            'ff5e7db4e65463e50978da0185487bd4a7f213f04bdb6256e221089f833c6ab6'
            '3394974bee43a920e2c5bc6363b50cb7de85cce1c189b727edc43f5b8fcee9ea'
            '1c90e7e362bf33d824af70fcf7da509dcc166f9d1f9c90111d25c28905b81857'
            '21c9bc83f8466ab17fa927561d7f24f930f97c996a8aa0fbbbbb2b65cb97b342'
            '6ef779170b72856bbb8df40c34a808acffddd156684bdb66a55e71d50cf95841'
            'bcf4bd7b38d2f054e25cc243353d3c9a56d1948b42ad07ee5c0260de06e8dd6c'
            '137cf7eeebc8737d62f3ccfad2398fb1c442a91cb9db7d650429b218dd949a00'
            '53837c9cfc90b93d55558045108a5d1d7a8b8a75a266af264d7f9101363d043f'
            'e37178d0edaca5b764ed2381e4c670cb4a8c3565c6ab59533f2a783155fe1efc'
            '6ea4d917ce2e46b2c31af31b8c8c28054c5f977bab5b050c44e2029ab3248713')
validpgpkeys=('2CE6F2743138825B7A7E521D025C02EE3A092F2D') # Jeff Becker (probably not evil) <jeff@lokinet.io> https://lokinet.io/jeff.asc

build() {
	cd "lokinet-v$pkgver"

	rm -rf build && mkdir build && cd build

	# XXX cmake stuff overrides CFLAGS
	cmake \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_C_FLAGS="$CFLAGS" \
		-DCMAKE_CXX_FLAGS="$CXXFLAGS" \
		-DNATIVE_BUILD=OFF \
		-DUSE_AVX2=OFF \
		-DWITH_TESTS=OFF \
		-DDOWNLOAD_SODIUM=OFF \
		-DSUBMODULE_CHECK=OFF \
		-DWITH_SYSTEMD=ON \
		-DWITH_SETCAP=OFF \
		-DBUILD_LIBLOKINET=OFF \
		-DFORCE_OXENMQ_SUBMODULE=ON \
		-DFORCE_OXENC_SUBMODULE=ON \
		-Wno-dev \
		..
	make
}

package() {
	cd "lokinet-v$pkgver"
	install -D -m 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	cd build
	make DESTDIR="$pkgdir" install

	install -D -m 644 "$srcdir/lokinet.service"                "$pkgdir/usr/lib/systemd/system/lokinet.service"
	install -D -m 644 "$srcdir/lokinet-vpn@.service"           "$pkgdir/usr/lib/systemd/system/lokinet-vpn@.service"
	install -D -m 644 "$srcdir/lokinet-bootstrap.service"      "$pkgdir/usr/lib/systemd/system/lokinet-bootstrap.service"
	install -D -m 644 "$srcdir/lokinet-default-config.service" "$pkgdir/usr/lib/systemd/system/lokinet-default-config.service"
	install -D -m 644 "$srcdir/lokinet-resume.service"         "$pkgdir/usr/lib/systemd/system/lokinet-resume.service"
	install -D -m 644 "$srcdir/lokinet.sysusers"               "$pkgdir/usr/lib/sysusers.d/lokinet.conf"
	install -D -m 644 "$srcdir/lokinet.tmpfiles"               "$pkgdir/usr/lib/tmpfiles.d/lokinet.conf"
	install -D -m 644 "$srcdir/lokinet.pkla"                   "$pkgdir/var/lib/polkit-1/localauthority/10-vendor.d/lokinet.pkla"
	install -D -m 750 -d "$pkgdir/usr/share/polkit-1/rules.d"
	install -D -m 644 "$srcdir/lokinet.rules"                  "$pkgdir/usr/share/polkit-1/rules.d/lokinet.rules"
}
