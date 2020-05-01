# Maintainer  : Christian Rebischke <chris.rebischke@archlinux.org>
# Maintainer  : Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor : Daniel Micay <danielmicay@gmail.com>
# Contributor : loqs

pkgname=openvas
pkgver=6.0.1
pkgrel=2
pkgdesc='Vulnerability scanning Daemon'
arch=('x86_64')
url="https://github.com/greenbone/openvas"
license=('GPL')
depends=('gvm-libs' 'redis')
makedepends=('cmake' 'doxygen')
groups=('greenbone-vulnerability-manager')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/greenbone/openvas/archive/v${pkgver}.tar.gz"
        "https://github.com/greenbone/openvas-scanner/releases/download/v${pkgver}/openvas-${pkgver}.tar.gz.sig"
        "${pkgname}.service")
sha512sums=('db4087fffe1d50e232fa1e51325cf7f142237e2bd3cc5dcaa1e7058a4871300f352f2c0e700eae72ea9412c347b072e9d1f2eca508b27cb30f36c6895ec95147'
            'SKIP'
            '574a9125928e672a9a22a00cab9c635897eedad0eaae550295c21d45cabd52d1d1cd376f441665d37fd1bb9fa48360039f553c300eb15dd9b83cf14df7f37de5')
validpgpkeys=(
              '8AE4BE429B60A59B311C2E739823FAA60ED1E580' # GVM Transfer Integrity
)
changelog=CHANGELOG.md

build() {
  cd "${pkgname}-${pkgver}"
  cmake -DCMAKE_BUILD_TYPE=Release -DSBINDIR=/usr/bin \
    -DCMAKE_INSTALL_PREFIX=/usr -DSYSCONFDIR=/etc -DLOCALSTATEDIR=/var -DLIBDIR=/usr/lib .
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}/" install
  install -Dm644 ../"${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}
