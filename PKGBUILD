# Maintainer: Hans-Nikolai Viessmann <hv15 AT hw.ac.uk>

pkgname='xmrig-proxy'
pkgver=2.6.3
pkgrel=1
pkgdesc='Stratum protocol proxy for Monero, Electroneum, Sumokoin and AEON pools; HTTP API disabled, donation percentage is 0.'
arch=('x86_64')
url='https://github.com/xmrig/xmrig-proxy'
depends=('libuv')
optdepends=('monero: wallet')
makedepends=('cmake' 'libuv')
license=('GPL')
install="${pkgname}.install"
changelog=CHANGELOG.md
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('01a075c855b11d5ecd0371357f11e8f79066080175a5c90cded57b3542172d07')

prepare() {
  cd "${pkgname}-${pkgver}"

  # create build dir
  [ -d build ] || mkdir build

  # reset default donate level
  msg2 "Resetting donation level to zero"
  sed -i -e 's/constexpr const int kDonateLevel = 2;/constexpr const int kDonateLevel = 0;/g' src/donate.h
}

build() {
  cd "${pkgname}-${pkgver}/build"

  cmake -DWITH_HTTPD=OFF ..
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm775 "build/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 src/config.json "${pkgdir}/usr/share/doc/${pkgname}/config.json.example"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 CHANGELOG.md "${pkgdir}/usr/share/doc/${pkgname}/CHANGELOG.md"
}
