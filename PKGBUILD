# Maintainer: Steven Seifried <gitlab@canox.net>
# Contributor: Steven Seifried <gitlab@canox.net>
pkgname=tuxedo-cc-wmi
pkgver=0.1.7
pkgrel=3
pkgdesc="An interface to the WMI methods on TUXEDO laptops. "
arch=(x86_64)
url="https://github.com/tuxedocomputers/tuxedo-cc-wmi"
license=('GPL3')
depends=('dkms')
optdepends=('linux-headers: build modules against Arch kernel'
            'linux-lts-headers: build modules against LTS kernel'
            'linux-zen-headers: build modules against ZEN kernel'
            'linux-hardened-headers: build modules against the HARDENED kernel')
install="${pkgname}.install"
source=(https://github.com/tuxedocomputers/tuxedo-cc-wmi/archive/v${pkgver}.tar.gz ${pkgname}.install)
sha256sums=('76ed0d90a827dd98bdc02cde6c5292eebd5e8db295f6434ddff37feab9dcf7ff'
            'e0187538b36ac464c982c65cd2a7cf0f5dd39242e7eca24bb519aaa0e1f16336')
sha512sums=('442d59ed794aed0265bc8664abc3110accd347e2ce5234a0507adfa8699236d0216b2a8cfd577b14110a40ef08db66bd70213e94b208d8c39cf1a75be5f87984'
            '3997f6cd17fd2df91f3f1994cf7845f0f30334b542af9ee39183a5f6baa99b215d373ad82ea5f40130c0845e7c446b322c658879dd9cf5df63fcd22fa03940f2')

package() {
  tar -vxzf "v${pkgver}.tar.gz" 
  mkdir -p "${pkgdir}/usr/src/${pkgname}-${pkgver}"
  cp -r "${srcdir}/${pkgname}-${pkgver}"/* "${pkgdir}/usr/src/${pkgname}-${pkgver}"
  install -D "${srcdir}/${pkgname}-${pkgver}/dkms.conf" "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"
}
