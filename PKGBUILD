# Maintainer: Fredy García <frealgagu at gmail dot com>

pkgname=just
pkgver=0.3.10
pkgrel=2
pkgdesc="A handy way to save and run project-specific commands"
arch=("x86_64" "i686")
url="https://github.com/casey/${pkgname}"
license=("custom:WTFPL" "custom:MIT" "APACHE")
depends=("gcc-libs")
makedepends=("cargo")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/casey/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=("b1b73609799883500bf57060ef48d056cc191662d67e18b300bbcc6e644d1529")

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  cargo build --release
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 "${srcdir}/${pkgname}-${pkgver}/target/release/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
