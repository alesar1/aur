# Maintainer: nekgem2 <nekgem2@firemail.cc>
pkgname=lokinet
pkgver=0.8.1
pkgrel=1
pkgdesc="Anonymous, decentralized and IP based overlay network for the internet."
arch=('x86_64' 'aarch64')
url="https://lokinet.org"
license=('GPL3')
depends=('libuv' 'libsodium' 'curl' 'zeromq' 'unbound' 'sqlite')
makedepends=('git' 'cmake')
conflicts=('lokimq')
install='lokinet.install'
source=("https://github.com/loki-project/loki-network/releases/download/v$pkgver/lokinet-v$pkgver.tar.xz"{,.sig}
        'lokinet.service'
        'lokinet-vpn.service'
        'lokinet-bootstrap.service'
        'lokinet-default-config.service'
        'lokinet-resume.service'
        'lokinet.sysusers'
        'lokinet.tmpfiles')
sha256sums=('08f76a119141e15aa12fbce20e05e01b70782c7917aa80347d8677c7d0ab6ba1'
            'SKIP'
            '3c2fcd2be74a989bdb19383dd3421f7654584b53e4b7e0692b752bfbe60903f4'
            '66adce25edd3323a3a6d07691bb886800f506944bf4fa0918eb42a033e344384'
            '21c9bc83f8466ab17fa927561d7f24f930f97c996a8aa0fbbbbb2b65cb97b342'
            '6ef779170b72856bbb8df40c34a808acffddd156684bdb66a55e71d50cf95841'
            'bcf4bd7b38d2f054e25cc243353d3c9a56d1948b42ad07ee5c0260de06e8dd6c'
            '137cf7eeebc8737d62f3ccfad2398fb1c442a91cb9db7d650429b218dd949a00'
            '53837c9cfc90b93d55558045108a5d1d7a8b8a75a266af264d7f9101363d043f')
validpgpkeys=('67EF6BA68E7B0B0D6EB4F7D4F357B3B42F6F9B05') # Jeff Becker (probably not evil) <jeff@i2p.rocks>

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
		-DSTATIC_LINK_RUNTIME=OFF \
		-DUSE_NETNS=OFF \
		-DUSE_AVX2=OFF \
		-DXSAN=OFF \
		-DWITH_TESTS=OFF \
		-DDOWNLOAD_SODIUM=OFF \
		-DSUBMODULE_CHECK=OFF \
		-DWITH_SYSTEMD=ON \
		-DFORCE_LOKIMQ_SUBMODULE=ON \
		-DBUILD_SHARED_LIBS=ON \
		-Wno-dev \
		..
	make
}

package() {
	cd "lokinet-v$pkgver"
	install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm755 contrib/systemd-resolved/lokinet.conf "$pkgdir/usr/lib/systemd/resolved.conf.d/00-lokinet.conf"
	cd build
	make DESTDIR="$pkgdir" install
	# remove lokimq header stuff as it's confusing and currently pointless
	rm -r "$pkgdir/usr/include"

	install -D -m 644 "$srcdir/lokinet.service"                "$pkgdir/usr/lib/systemd/system/lokinet.service"
	install -D -m 644 "$srcdir/lokinet-vpn.service"            "$pkgdir/usr/lib/systemd/system/lokinet-vpn.service"
	install -D -m 644 "$srcdir/lokinet-bootstrap.service"      "$pkgdir/usr/lib/systemd/system/lokinet-bootstrap.service"
	install -D -m 644 "$srcdir/lokinet-default-config.service" "$pkgdir/usr/lib/systemd/system/lokinet-default-config.service"
	install -D -m 644 "$srcdir/lokinet-resume.service"         "$pkgdir/usr/lib/systemd/system/lokinet-resume.service"
	install -D -m 644 "$srcdir/lokinet.sysusers"               "$pkgdir/usr/lib/sysusers.d/lokinet.conf"
	install -D -m 644 "$srcdir/lokinet.tmpfiles"               "$pkgdir/usr/lib/tmpfiles.d/lokinet.conf"
}
