# Maintainer: nekgem2 <nekgem2@firemail.cc>
pkgname=lokinet
pkgver=0.9.5
pkgrel=3
pkgdesc="Anonymous, decentralized and IP based overlay network for the internet."
arch=('x86_64' 'aarch64')
url="https://lokinet.org"
license=('GPL3')
depends=('libuv' 'libsodium' 'curl' 'zeromq' 'unbound' 'sqlite' 'ngtcp2' 'jemalloc')
makedepends=('git' 'cmake')
install='lokinet.install'
backup=('etc/conf.d/lokinet')
source=("https://github.com/oxen-io/lokinet/releases/download/v$pkgver/lokinet-v$pkgver.tar.xz"{,.sig}
        'lokinet.conf'
        'lokinet.service'
        'lokinet-vpn.service'
        'lokinet-bootstrap.service'
        'lokinet-default-config.service'
        'lokinet-resume.service'
        'lokinet.sysusers'
        'lokinet.tmpfiles'
        'lokinet.pkla'
        'lokinet.rules'
        'fix-stl-oob.patch')
sha256sums=('456d4e6baf2357c98a46c3453f98bb7b5f906620d4fb07984df1bad46faed307'
            'SKIP'
            'ff5e7db4e65463e50978da0185487bd4a7f213f04bdb6256e221089f833c6ab6'
            '41f02f6ca693cd596165a7431795f36a2559504361857063278d31f833b3b7b1'
            'cb31c1783998ec11d3d6eb4e5e4e138a8d423ee1aeb0ae2ebe66a52b0f87b642'
            '21c9bc83f8466ab17fa927561d7f24f930f97c996a8aa0fbbbbb2b65cb97b342'
            '6ef779170b72856bbb8df40c34a808acffddd156684bdb66a55e71d50cf95841'
            'bcf4bd7b38d2f054e25cc243353d3c9a56d1948b42ad07ee5c0260de06e8dd6c'
            '137cf7eeebc8737d62f3ccfad2398fb1c442a91cb9db7d650429b218dd949a00'
            '53837c9cfc90b93d55558045108a5d1d7a8b8a75a266af264d7f9101363d043f'
            'e37178d0edaca5b764ed2381e4c670cb4a8c3565c6ab59533f2a783155fe1efc'
            '6ea4d917ce2e46b2c31af31b8c8c28054c5f977bab5b050c44e2029ab3248713'
            'b0a9e5500f225d103737b7525f824bfca58034623e8bc93ff355d857170932cd')
validpgpkeys=('67EF6BA68E7B0B0D6EB4F7D4F357B3B42F6F9B05') # Jeff Becker (probably not evil) <jeff@i2p.rocks>

prepare() {
    cd "$pkgname-v$pkgver"
    patch --forward --strip=1 --input="${srcdir}/fix-stl-oob.patch"
}

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
		-DUSE_NETNS=OFF \
		-DUSE_AVX2=OFF \
		-DXSAN=OFF \
		-DWITH_TESTS=OFF \
		-DDOWNLOAD_SODIUM=OFF \
		-DSUBMODULE_CHECK=OFF \
		-DWITH_SYSTEMD=ON \
		-DFORCE_OXENMQ_SUBMODULE=ON \
		-DBUILD_SHARED_LIBS=ON \
		-Wno-dev \
		..
	make
}

package() {
	cd "lokinet-v$pkgver"
	install -D -m 644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	cd build
	make DESTDIR="$pkgdir" install

	install -D -m 644 "$srcdir/lokinet.conf"                   "$pkgdir/etc/conf.d/lokinet"
	install -D -m 644 "$srcdir/lokinet.service"                "$pkgdir/usr/lib/systemd/system/lokinet.service"
	install -D -m 644 "$srcdir/lokinet-vpn.service"            "$pkgdir/usr/lib/systemd/system/lokinet-vpn.service"
	install -D -m 644 "$srcdir/lokinet-bootstrap.service"      "$pkgdir/usr/lib/systemd/system/lokinet-bootstrap.service"
	install -D -m 644 "$srcdir/lokinet-default-config.service" "$pkgdir/usr/lib/systemd/system/lokinet-default-config.service"
	install -D -m 644 "$srcdir/lokinet-resume.service"         "$pkgdir/usr/lib/systemd/system/lokinet-resume.service"
	install -D -m 644 "$srcdir/lokinet.sysusers"               "$pkgdir/usr/lib/sysusers.d/lokinet.conf"
	install -D -m 644 "$srcdir/lokinet.tmpfiles"               "$pkgdir/usr/lib/tmpfiles.d/lokinet.conf"
	install -D -m 644 "$srcdir/lokinet.pkla"                   "$pkgdir/var/lib/polkit-1/localauthority/10-vendor.d/lokinet.pkla"
	install -D -m 750 -d "$pkgdir/usr/share/polkit-1/rules.d"
	install -D -m 644 "$srcdir/lokinet.rules"                  "$pkgdir/usr/share/polkit-1/rules.d/lokinet.rules"
}
