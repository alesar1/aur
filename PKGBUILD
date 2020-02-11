pkgname=python-gpapi
pkgver=0.4.4
pkgrel=1
pkgdesc="Google Play Unofficial Python API "
url="https://github.com/NoMore201/googleplay-api"
arch=('any')
license=('GPL3')
depends=("python" "python-cryptography" "python-protobuf" "python-requests")
makedepends=("python-setuptools")
source=("$pkgname-$pkgver.tar.gz::https://github.com/NoMore201/googleplay-api/archive/v${pkgver}.tar.gz")
md5sums=('2c9c35fbcba7ba61a9c3f7a6621e1d65')
 
package() {
    cd googleplay-api-$pkgver
    # fix for malformed setup.py in 0.4.3
    sed -i "s/0.4.3/${pkgver}/g" setup.py
    python setup.py install --root="${pkgdir}/" --optimize=1
}
