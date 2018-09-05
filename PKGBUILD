# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
# Co-Maintainer: Corax
pkgname=nemo-mediainfo-tab
pkgver=0.2
pkgrel=3
pkgdesc="View media information from the properties tab"
arch=('any')
url="https://github.com/linux-man/nemo-mediainfo-tab"
license=('GPL3')
depends=('python2-mediainfodll' 'nemo-python')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=('b0fbb2ac22ef1dec43fa257eae6d4a44')

prepare() {
    sed -i 's,/usr/bin/python,/usr/bin/python2,' ${pkgname}-${pkgver}/nemo-extension/${pkgname}.py
}

package() {
    install -Dm644 ${pkgname}-${pkgver}/nemo-extension/${pkgname}.py ${pkgdir}/usr/share/nemo-python/extensions/${pkgname}.py
}
