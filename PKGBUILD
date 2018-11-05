# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
# Co-Maintainer: Corax
pkgname=nemo-mediainfo-tab
pkgver=0.3
_pkgver=${pkgver}-python3
pkgrel=6
pkgdesc="View media information from the properties tab"
arch=('any')
url="https://github.com/linux-man/nemo-mediainfo-tab"
license=('GPL3')
depends=('python-mediainfodll' 'nemo-python')
source=("$pkgname-$_pkgver.tar.gz::$url/archive/v$_pkgver.tar.gz")
md5sums=('20840b51231033c903c779e8f4b39ddd')

package() {
    install -Dm644 "${pkgname}-${pkgver}/nemo-extension/${pkgname}.py" "${pkgdir}/usr/share/nemo-python/extensions/${pkgname}.py"
    mkdir "${pkgdir}/usr/share/nemo-python/extensions/${pkgname}"
    cp -a "${pkgname}-${pkgver}/nemo-extension/${pkgname}/locale" "${pkgdir}/usr/share/nemo-python/extensions/${pkgname}/locale"
}
