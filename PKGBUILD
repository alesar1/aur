# Maintainer: Kewl <xrjy@nygb.rh.bet(rot13)>

pkgname="python-ftx-git"
pkgver=0.0.3.r11.g9004e27
pkgrel=2
pkgdesc="Unofficial Python wrapper for FTX API"
arch=('any')
url="https://github.com/wanth1997/${pkgname%-git}"
license=('MIT')
depends=('python-requests' 'python-aiohttp' 'python-websockets' 'python-loguru')
makedepends=('git' 'python-setuptools')
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}"/${pkgname%-git}
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/v//'
}

build() {
    cd "${srcdir}"/${pkgname%-git}
    python setup.py build
}

package() {
    cd "${srcdir}"/${pkgname%-git}
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
