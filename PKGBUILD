# Maintainer: bgme <i@bgme.me>
# Contributor: navigaid <navigaid@gmail.com>

pkgname=naiveproxy
pkgdesc="A Proxy using Chrome's network stack to camouflage traffic with strong censorship resistence and low detectablility."
pkgver=99.0.4844.51_1
pkgrel=1
_pkgver=99.0.4844.51
_pkgrel=1
arch=('x86_64')
url='https://github.com/klzgrad/naiveproxy'
license=('BSD')
depends=("gcc-libs" "glibc")
makedepends=("ninja" "gn" "llvm" "lld" "clang" "ccache" "python" "unzip")

_PGO_PATH='chrome-linux-4844-1645865283-f109af6d624d1eac542865359a5743a7256bac10.profdata'
source=(
  "naiveproxy.service"
  "naiveproxy@.service"
  "naiveproxy.sysusers"
  "${pkgname}-${_pkgver}-${_pkgrel}.tar.gz::https://github.com/klzgrad/naiveproxy/archive/refs/tags/v${_pkgver}-${_pkgrel}.tar.gz"
  "${_PGO_PATH}::https://storage.googleapis.com/chromium-optimization-profiles/pgo_profiles/${_PGO_PATH}"
)

sha1sums=(
  "4c18f44ba51d40bfd7e6ae8ecb30b8e812acb8e8"
  "013b31ae43e309bc6560b61e8b4196f8f14f738f"
  "3727d7da81b1480d60e593a7d6878d981b35c4f6"
  "926dce34339a555648a80b36598a1c32ca349c1b"
  "f109af6d624d1eac542865359a5743a7256bac10"
)
sha256sums=(
  "c05026423ca08e2c712745b717c23395e344f2c99b2dad30beed8e26922d268f"
  "daa0f591233625730168f3ea006f1d5a7e439e26b35a1051d957e394aa8a4440"
  "5bc9ef361e6303e151b6e63deb31b47e24a4f34ade4d8f092a04bc98e89a2edb"
  "e216eb250e921f2fed3445fbaf6677412637f73ed920010b6b75af39490ce438"
  "1ab36777082237f59b2b1be2f66279cd58767539393059644c0ec2968373c619"
)

backup=(etc/naiveproxy/config.json)
provides=('naiveproxy')
conflicts=('naiveproxy-git' 'naiveproxy-bin')

prepare() {
  SRC_DIR="${srcdir}/${pkgname}-${_pkgver}-${_pkgrel}/src"

  mkdir -p ${SRC_DIR}/chrome/build/pgo_profiles
  cp ${_PGO_PATH} ${SRC_DIR}/chrome/build/pgo_profiles
}

build(){
  SRC_DIR="${srcdir}/${pkgname}-${_pkgver}-${_pkgrel}/src"
  pushd ${SRC_DIR}

  export TMPDIR="$PWD/tmp"
  rm -rf "$TMPDIR"
  mkdir -p "$TMPDIR"

  out=out/Release
  flags="
    is_official_build=true
    exclude_unwind_tables=true
    enable_resource_allowlist_generation=false
    symbol_level=0"

  PYTHON=$(which python3 2>/dev/null)
  if which ccache >/dev/null 2>&1; then
    export CCACHE_SLOPPINESS=time_macros
    export CCACHE_BASEDIR="$PWD"
    export CCACHE_CPP2=yes
    CCACHE=ccache
  fi
  WITH_CLANG=Linux_x64
  WITH_PGO=linux
  WITH_GN=linux

  PGO_PATH=$(cat chrome/build/$WITH_PGO.pgo.txt)

  if [ "$CCACHE" ]; then
    flags="$flags
      cc_wrapper=\"$CCACHE\""
  fi

  flags="$flags"'
    is_clang=true
    use_sysroot=false

    fatal_linker_warnings=false
    treat_warnings_as_errors=false

    enable_base_tracing=false
    use_udev=false
    use_aura=false
    use_ozone=false
    use_gio=false
    use_gtk=false
    use_platform_icu_alternatives=true
    use_glib=false

    disable_file_support=true
    enable_websockets=false
    use_kerberos=false
    enable_mdns=false
    enable_reporting=false
    include_transport_security_state_preload_list=false
    use_nss_certs=false
  '

  # use system clang
  # disable clang plugins
  # build without afdo.prof
  flags="$flags"'
    clang_base_path=""
    clang_use_chrome_plugins=false
    clang_use_default_sample_profile=false'

  rm -rf "./$out"
  mkdir -p out

  export DEPOT_TOOLS_WIN_TOOLCHAIN=0

  gn gen "$out" --args="$flags $EXTRA_FLAGS" --script-executable=$PYTHON

  ninja -C "$out" naive

  popd
}

package(){
  pushd ${srcdir}
  install -Dm644 naiveproxy.service ${pkgdir}/usr/lib/systemd/system/naiveproxy.service
  install -Dm644 naiveproxy@.service ${pkgdir}/usr/lib/systemd/system/naiveproxy@.service
  install -Dm644 naiveproxy.sysusers ${pkgdir}/usr/lib/sysusers.d/naiveproxy.conf
  popd

  pushd ${srcdir}/${pkgname}-${_pkgver}-${_pkgrel}
  install -d -m750 -o 0 -g 287 ${pkgdir}/etc/naiveproxy
  install -Dm644 src/config.json ${pkgdir}/etc/naiveproxy/config.json
  install -Dm755 src/out/Release/naive ${pkgdir}/usr/bin/naiveproxy
  install -Dm644 README.md ${pkgdir}/usr/share/doc/naiveproxy/README.md
  install -Dm644 USAGE.txt ${pkgdir}/usr/share/doc/naiveproxy/USAGE.txt
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/naiveproxy/LICENSE
  popd
}
