# Maintainer: anonimal <anonimal at i2pmail dot org>
# Contributor: redfish <redfish at galactica dot pw>
# Contributor: Onishin <onishin at onishin dot org>

pkgbase=('monero')
pkgname=('monero' 'libmonero-wallet')
pkgver=0.10.0
pkgrel=1
pkgdesc="Monero: the secure, private, untraceable currency - release version (includes deaemon, wallet and miner)"
license=('custom:Cryptonote')
arch=('x86_64' 'i686' 'armv7h')
url="https://getmonero.org/"
depends=('boost-libs>=1.58' 'unbound>=1.4.16' 'miniupnpc>=1.6' 'libunwind' 'openssl')
makedepends=('git' 'cmake' 'boost') #'gtest'  # TODO(anonimal): Uncomment when tests are fixed
provides=('monero' 'libmonero-wallet')
conflicts=('bitmonero-git' 'libmonero-wallet-git')

# TODO(anonimal): Uncomment when tests are fixed
BUILDENV+=('!check')

source=("https://github.com/monero-project/monero/archive/v${pkgver}.tar.gz"
        "monerod.service"
        "monerod.conf")

sha256sums+=('c6c186267b45dae62196e7904c3983adaa4f791784ee11baa13054d5bdfc5d9b'
         '71214c939e0d9b1097d04603caf0294aabcff2a4019d16b44aadfb3af6462a17'
         '829445fe9acc00681f94f7b9ca6ce39713e377970b0a3d6f88c37991e1aa61b2')

_monero="${pkgbase}-${pkgver}"
_build=build

build() {
  cd "${srcdir}/${_monero}"
  if check_option "debug" "y"
  then
    _build_type="Debug"
  else
    _build_type+="Release"
  fi
  CMAKE_FLAGS+=" -DCMAKE_BUILD_TYPE=$_build_type "
  CMAKE_FLAGS+=" -DCMAKE_INSTALL_PREFIX=/usr "
  #CMAKE_FLAGS+=" -DBUILD_TESTS=ON "  # TODO(anonimal): Uncomment when tests are fixed
  CMAKE_FLAGS+=" -DBUILD_GUI_DEPS=ON "
  CMAKE_FLAGS+=" -Wno-dev " # silence warnings for devs
  CMAKE_FLAGS+=" -DCMAKE_LINKER=/usr/bin/ld.gold " # #974 ld segfault on ARM
  mkdir -p $_build && cd $_build
  cmake $CMAKE_FLAGS ../
  make
}

check() {
  cd "$srcdir/$_monero"
  cd build

  # Run unit_tests test separately to exclude DNS tests which often fail with
  # DNS nameservers configured on some systems
  EXCLUDED_UNIT_TESTS+='DNSResolver.IPv4Failure'
  EXCLUDED_UNIT_TESTS+=':DNSResolver.DNSSECSuccess'
  EXCLUDED_UNIT_TESTS+=':AddressFromURL.Failure'
  tests/unit_tests/unit_tests --gtest_filter="-$EXCLUDED_UNIT_TESTS"

  # Temporarily disable some a tests:
  #  * coretests takes too long (~25000s)
  #  * libwallet_api_tests fail (Issue #895)
  #  * unit_tests were run separately above
  CTEST_ARGS+="-E 'coretests|libwallet_api_tests|unit_tests'"
  echo ">>> NOTE: some tests excluded: $CTEST_ARGS"

  make ARGS="$CTEST_ARGS" test
}

package_monero() {
  backup=('etc/monerod.conf')
  install=monero.install

  # Uncomment for a debug build
  # options=(!strip debug)

  install -Dm755 "${srcdir}/${_monero}/build/bin/monerod" "${pkgdir}/usr/bin/monerod"
  install -Dm755 "${srcdir}/${_monero}/build/bin/monero-wallet-cli" "${pkgdir}/usr/bin/monero-wallet-cli"
  install -Dm755 "${srcdir}/${_monero}/build/bin/monero-blockchain-import" "${pkgdir}/usr/bin/monero-blockchain-import"
  install -Dm755 "${srcdir}/${_monero}/build/bin/monero-blockchain-export" "${pkgdir}/usr/bin/monero-blockchain-export"

  install -Dm644 "${srcdir}/${_monero}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  install -Dm644 "${srcdir}/monerod.conf" "${pkgdir}/etc/monerod.conf"
  install -Dm644 "${srcdir}/monerod.service" "${pkgdir}/usr/lib/systemd/system/monerod.service"

}

package_libmonero-wallet() {
  # NOTE: this is crucial, otherwise stripping breaks the .a archive:
  # monero-core (GUI) fails to link against it (it can't find symbols
  # that are clearly in the library).
  options=(!strip)

  _stage_dir=stagedir

  cd "${srcdir}/${_monero}/${_build}"

  mkdir -p $_stage_dir
  make DESTDIR=$_stage_dir install

  cd $_stage_dir
  find usr/{include,lib} -type f -exec install -D -m 755 {} ${pkgdir}/{} \;
}
