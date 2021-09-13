# Maintainer: Hans-Nikolai Viessmann <hand AT viess DOT mn>

pkgname='xmrig-proxy'
pkgver=6.15.0
pkgrel=2
pkgdesc='Stratum protocol proxy for Monero; HTTP API disabled, donation percentage is 0.'
arch=('x86_64')
url='https://github.com/xmrig/xmrig-proxy'
depends=('libuv')
makedepends=('cmake' 'libuv')
optdepends=('monero: XMR wallet'
            'xmrig: XMR CPU miner')
license=('GPL')
install="${pkgname}.install"
source=("${url}/archive/v${pkgver}.tar.gz"
        'gcc-11-stddef.patch')
sha256sums=('30d731cda40fa0339d46da52947d6a3eaab35d104c6f43e0f6d01d56151b0f5e'
            'df1b23ecabb54b1f71bc7869c2b17103a87308aa5521828b0b775adbb557face')

prepare() {
  cd "${pkgname}-${pkgver}"

  # create build dir
  [ -d build ] || mkdir build

  # reset default donate level
  echo "==> Resetting donation level to zero"
  sed -i -e 's/constexpr const int kDefaultDonateLevel = 2;/constexpr const int kDefaultDonateLevel = 0;/g' src/donate.h

  # fix GCC11 size_t def missing
  patch -p1 < ${srcdir}/gcc-11-stddef.patch
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
}
