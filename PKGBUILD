# Maintainer: Hans-Nikolai Viessmann <hand AT viess.mn>

pkgname='xmrig-proxy'
pkgver=5.0.0
pkgrel=1
pkgdesc='Stratum protocol proxy for Monero; HTTP API disabled, donation percentage is 0.'
arch=('x86_64')
url='https://github.com/xmrig/xmrig-proxy'
depends=('libuv')
makedepends=('cmake' 'libuv')
optdepends=('monero: XMR wallet'
            'xmrig-bin: XMR CPU miner - binary'
            'xmrig: XMR CPU miner')
license=('GPL')
install="${pkgname}.install"
changelog=CHANGELOG.md
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('3c4d3e2eda9ccaad9c790a55e8b60d56697de6d990cb25ef8b548afd2140652e')

prepare() {
  cd "${pkgname}-${pkgver}"

  # create build dir
  [ -d build ] || mkdir build

  # reset default donate level
  msg2 "Resetting donation level to zero"
  sed -i -e 's/constexpr const int kDefaultDonateLevel = 2;/constexpr const int kDefaultDonateLevel = 0;/g' src/donate.h

  # fix build problem relating to https://github.com/xmrig/xmrig-proxy/issues/295
  msg2 "Fix CMakeLists.txt"
  sed -i -e 's/set(EXTRA_LIBS pthread uuid\.a rt dl)/set(EXTRA_LIBS pthread uuid rt dl)/' CMakeLists.txt
}

build() {
  cd "${pkgname}-${pkgver}/build"

  cmake -DWITH_HTTP=OFF ..
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm775 "build/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 src/config.json "${pkgdir}/usr/share/doc/${pkgname}/config.json.example"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 CHANGELOG.md "${pkgdir}/usr/share/doc/${pkgname}/CHANGELOG.md"
}
