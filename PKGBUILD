# Maintainer: Johannes Wienke <languitar@semipol.de>

pkgname=mopidy-internetarchive
pkgver=3.0.0
pkgrel=1
pkgdesc="Mopidy extension for playing audio from the Internet Archive"

arch=('any')
url="https://github.com/tkem/mopidy-internetarchive"
license=('APACHE')
depends=('mopidy>=3.0' 'python-pykka' 'python-requests' 'python-cachetools' 'python-uritools')
makedepends=('python' 'python-setuptools')

source=("$pkgname-$pkgver.tar.gz::https://github.com/tkem/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('ce5095e98475ed0cbbb1a9c52d9f429a')

package() {
    cd "${pkgname}-${pkgver}"
    python3 setup.py install --root="$pkgdir/" --optimize=1
}
