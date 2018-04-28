# Maintainer: redfish <redfish at galactica dot pw>
# Co-maintainer: Onishin <onishin at onishin dot org>

pkgbase=('monero-git')
pkgname=('monero-git' 'libmonero-wallet-git')
_gitname='monero'
pkgver=0.12.0.0
pkgrel=1
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url="https://getmonero.org/"
license=('custom:Cryptonote')

depends=('boost-libs>=1.45'  'miniupnpc>=1.6' 'libunwind'
         'readline' 'zeromq'

	 # For OpenSSL v1.1
	 'unbound>=1.4.16'  # depends on OpenSSL v1.1
	 'openssl'

	 # For OpenSSL v1.0
	 # use unbound vendored inside upstream source repo
	 #'openssl-1.0'
	 )
makedepends=('git' 'cmake' 'boost' 'gtest' 'qt5-tools')


pkgdesc="Peer-to-peer anonymous digital currency (daemon, CLI wallet, and wallet API library)"
_upstream=https://github.com/monero-project/monero.git
source=("$_gitname::git+$_upstream")

md5sums=('SKIP')

_builddir=build


pkgver() {
	cd "$srcdir/$_gitname"

	# Release tags might point to commits on a branch different than master,
	# so don't use them.
	#git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
        printf "$(echo $pkgver | sed 's/\.r.*//').r%s.g%s" \
	        "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
       cd "$srcdir/$_gitname"

       git submodule init
       git submodule update

       # To apply PRs
       #git remote add up $_upstream
       #git pull --no-edit up refs/pull/xxxx/head

       cd external/miniupnp
       git fetch origin refs/pull/3/head # cmake: do not install into system
       git merge FETCH_HEAD
}

build() {
	cd "$srcdir/$_gitname"

	if check_option "debug" "y"
	then
		_buildtype="Debug"
	else
		_buildtype+="Release"
	fi

	CMAKE_FLAGS+=" -DCMAKE_BUILD_TYPE=$_buildtype "
	CMAKE_FLAGS+=" -DCMAKE_INSTALL_PREFIX=/usr "
	CMAKE_FLAGS+=" -DBUILD_TESTS=OFF "
	CMAKE_FLAGS+=" -DBUILD_GUI_DEPS=ON "

	# For OpenSSL v1.0
	#CMAKE_FLAGS+=" -DOPENSSL_ROOT_DIR='/usr/include/openssl-1.0;/usr/lib/openssl-1.0 "

	CMAKE_FLAGS+=" -Wno-dev " # silence warnings for devs

	mkdir -p $_builddir && cd $_builddir
	cmake $CMAKE_FLAGS ..
	make
}

check() {
	cd "$srcdir/$_gitname"
	cd $_builddir

	cmake -DBUILD_TESTS=ON ..
	make

	# Run unit_tests test separately to exclude DNS tests which often fail with
	# DNS nameservers configured on some systems (#2172)
	EXCLUDED_UNIT_TESTS+='DNSResolver.IPv4Failure'
	EXCLUDED_UNIT_TESTS+=':DNSResolver.DNSSECSuccess'
	EXCLUDED_UNIT_TESTS+=':AddressFromURL.Failure'
	tests/unit_tests/unit_tests --gtest_filter="-$EXCLUDED_UNIT_TESTS" \
            --data-dir ../tests/data

	# Temporarily disable some a tests:
	#  * coretests takes too long (~25000s)
	#  * libwallet_api_tests fail (Issue #895)
	#  * unit_tests were run separately above
	CTEST_ARGS+="-E 'core_tests|libwallet_api_tests|unit_tests'"
	echo ">>> NOTE: some tests excluded: $CTEST_ARGS"

	make ARGS="$CTEST_ARGS" test
}

package_monero-git() {

	provides=('monero')
	conflicts=('monero')

	backup=('etc/monerod.conf')
	install=monero.install

        # Uncomment for a debug build
        # options=(!strip debug)

	install -D -m755 "$srcdir/$_gitname/build/bin/monerod" "$pkgdir/usr/bin/monerod"
	install -D -m755 "$srcdir/$_gitname/build/bin/monero-wallet-cli" "$pkgdir/usr/bin/monero-wallet-cli"
	install -D -m755 "$srcdir/$_gitname/build/bin/monero-blockchain-import" "$pkgdir/usr/bin/monero-blockchain-import"
	install -D -m755 "$srcdir/$_gitname/build/bin/monero-blockchain-export" "$pkgdir/usr/bin/monero-blockchain-export"

	install -Dm644 $srcdir/$_gitname/utils/systemd/monerod.service "${pkgdir}/usr/lib/systemd/system/monerod.service"
	install -Dm644 "$srcdir/$_gitname/utils/conf/monerod.conf" "$pkgdir/etc/monerod.conf"
	install -D -m644 "$srcdir/$_gitname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_libmonero-wallet-git() {

	provides=('libmonero-wallet')
	conflicts=('libmonero-wallet')

        # NOTE: this is crucial, otherwise stripping breaks the .a archive:
        # monero-core (GUI) fails to link against it (it can't find symbols
        # that are clearly in the library).
        options=(!strip)

        cd $srcdir/$_gitname/$_builddir
        _stagedir=stagedir
        mkdir -p $_stagedir
        make DESTDIR=$_stagedir install

        cd $_stagedir
        find usr/{include,lib} -type f -exec install -D -m 755 {} ${pkgdir}/{} \;
}
