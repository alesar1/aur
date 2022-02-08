# Maintainer: Radim Sückr <kontakt@radimsuckr.cz>

pkgname=apple_cursor
pkgver=1.2.3
pkgrel=1
pkgdesc='Opensource macOS cursors'
arch=('any')
url='https://github.com/ful1e5/apple_cursor'
license=('GPL3')
depends=()
makedepends=()
source=("monterey.tar.gz::${url}/releases/download/v${pkgver}/macOSMonterey.tar.gz"
        "monterey-white.tar.gz::${url}/releases/download/v${pkgver}/macOSMonterey-White.tar.gz"
        "bigsur.tar.gz::${url}/releases/download/v${pkgver}/macOSBigSur.tar.gz"
        "bigsur-white.tar.gz::${url}/releases/download/v${pkgver}/macOSBigSur-White.tar.gz")
sha512sums=('60ee95ab79e519775506abc90e4aa727c6f77184cb4741093144bdd81001bc001d5f04806eb6c03e4cb2669a1eff7922918ae801afee192767a84b84bcde82a2'
            '94abd29dd9a995ec769c70330c325f655375dabfc90ce7db33dbc47dab225adc37182b9d17d191bc7f8ffe8b1052e6c38d85e5ab86c778a644f61b12b55ea834'
            '98db793ea9b2f6223717bd94901f45ec8eccba8203372f85b4adc1decd7cacf4ce67dde02d13a89eff9955508d9e48784e675116e791386f2ae37c85aec41c79'
            'df906fab28cb664789f8d8931f7129ddc5be7c31c61eb240269ca61d78b2968a44da0eb96b2ddbde4f839557b63ea28e7645e77621279580dc4aa7497c1d2c24')

package() {
    install -d "${pkgdir}/usr/share/icons"

    cp -r "${srcdir}/macOSMonterey" "${pkgdir}/usr/share/icons"
    cp -r "${srcdir}/macOSMonterey-White" "${pkgdir}/usr/share/icons"
    cp -r "${srcdir}/macOSBigSur" "${pkgdir}/usr/share/icons"
    cp -r "${srcdir}/macOSBigSur-White" "${pkgdir}/usr/share/icons"
}
