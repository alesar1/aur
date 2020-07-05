# Maintainer: Sebastian Krebs <sebastian[at]krebs[dot]one>

pkgname=phive
pkgver=0.14.4
pkgrel=1
pkgdesc="The Phar Installation and Verification Environment (PHIVE)"
arch=('any')
url="https://phar.io/"
license=('BSD')
depends=('php')
source=("https://github.com/phar-io/phive/releases/download/${pkgver}/phive-${pkgver}.phar"
        "https://raw.githubusercontent.com/phar-io/phive/${pkgver}/LICENSE")
sha256sums=('b6f95e2791a17531f6ba652ce6e4288f35fb73883c472af1d3758f148fc4ed3a'
            '28317aef20f67b09587c89df373ba45e5975312e490fa2606d3c59eae4af0733')


package() {
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m 755 "${srcdir}/${pkgname}-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/${pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${pkgname}.phar" "${pkgdir}/usr/bin/${pkgname}"
}
