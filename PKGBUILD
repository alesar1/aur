# Maintainer: Guilhelm Savin <aur@gsav.in>
# Maintainer: Jake <aur@ja-ke.tech>
#
# Upstream URL: https://github.com/platformio/platformio
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/gsavin/arch
#

pkgname=('platformio' 'platformio-udev-rules')
pkgver=6.1.7
pkgrel=1
pkgdesc="A cross-platform code builder and library manager"
arch=('any')
url="https://github.com/platformio/platformio-core/"
license=('Apache')
depends=('python-setuptools'
         'python-bottle'
         'python-click'
         'python-colorama'
         'python-pyserial>=3.4'
         'python-requests'
         'python-semantic-version'
         'python-tabulate'
         'python-pyelftools'
         'python-marshmallow'
         'python-zeroconf'
         'python-aiofiles'
         'python-ajsonrpc'
         'python-starlette'
         'python-wsproto'
         'uvicorn')
optdepends=('python-click-completion: for shell completions'
           'python-shellingham: for shell completions')
conflicts=('platformio-git')
source=("https://github.com/platformio/platformio-core/archive/v${pkgver}.tar.gz")
sha256sums=('36132e0522f3fe926da6a10460adc5b14bce9fa2bb6281ac82a09dbfa18c6f12')

package_platformio() {
    cd "$srcdir/platformio-core-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
}

package_platformio-udev-rules() {
    depends=('udev')
    optdepends=()
    pkgdesc="udev rules for PlatformIO supported boards/devices"
    url="https://docs.platformio.org/en/latest/faq.html#platformio-udev-rules"

    cd "$srcdir/platformio-core-$pkgver"
    install -m644 -Dt "$pkgdir/usr/lib/udev/rules.d" "platformio/assets/system/99-platformio-udev.rules"
}
