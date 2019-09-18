pkgname=dpdk-lts
pkgver=18.11.2
pkgrel=1
pkgdesc='A set of libraries and drivers for fast packet processing'
arch=(x86_64 i686)
url='http://dpdk.org'
license=(BSD)
options=(staticlibs)
depends=(numactl)
makedepends=(linux-headers libpcap)
checkdepends=()
source=(
    "http://fast.dpdk.org/rel/dpdk-$pkgver.tar.xz"
)
sha256sums=(
    '266bb2d149b16252335b106c7ca394434ecaa1fbfd59fc3789375e556746761a'
)

prepare() {
  cd dpdk-stable-$pkgver
  make T=x86_64-native-linuxapp-gcc config

  sed -ri 's,(RTE_MACHINE=).*,\1default,'    build/.config
  sed -ri 's,(RTE_APP_TEST=).*,\1n,'         build/.config
  sed -ri 's,(RTE_BUILD_SHARED_LIB=).*,\1y,' build/.config
  sed -ri 's,(RTE_NEXT_ABI=).*,\1n,'         build/.config
  sed -ri 's,(LIBRTE_VHOST=).*,\1y,'         build/.config
  sed -ri 's,(LIBRTE_PMD_PCAP=).*,\1y,'      build/.config
  #sed -ri 's,(LIBRTE_PMD_XENVIRT=).*,\1y,'   build/.config

  sed 's|\bpython\b|python2|' -i mk/rte.sdktest.mk
}

build() {
  cd dpdk-stable-$pkgver
  make T=x86_64-native-linuxapp-gcc
}

check() {
  cd dpdk-stable-$pkgver
  # tests fail
  make test T=x86_64-native-linuxapp-gcc
}

package() {
  cd dpdk-stable-$pkgver
  make DESTDIR="$pkgdir" prefix=/usr sbindir=bin install T=x86_64-native-linuxapp-gcc
  cp -a "$pkgdir"/lib/ "$pkgdir"/usr/ && rm -rf "$pkgdir"/lib/
}
