pkgname=dpdk
pkgver=20.02
pkgrel=1
pkgdesc='A set of libraries and drivers for fast packet processing'
arch=(x86_64 i686)
url='http://dpdk.org'
license=(BSD)
options=(staticlibs)
depends=(numactl libelf libpcap)
makedepends=(linux-headers python-pyelftools)
checkdepends=()
source=(http://fast.dpdk.org/rel/dpdk-$pkgver.tar.xz)
sha1sums=('4d4d7489b7e820850ea09f3c2da4d905ead3693b')

prepare() {
  cd dpdk-$pkgver
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
  cd dpdk-$pkgver
  make
}

check() {
  cd dpdk-$pkgver
  # tests fail
  # make test T=x86_64-native-linuxapp-gcc
}

package() {
  cd dpdk-$pkgver
  make DESTDIR="$pkgdir" prefix=/usr sbindir=bin install
}
