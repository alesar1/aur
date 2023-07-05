# Maintainer: Guilhelm Savin <aur@gsav.in>
# Maintainer: Jake <aur@ja-ke.tech>
#
# Upstream URL: https://github.com/platformio/platformio
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/gsavin/arch
#

pkgname=('platformio' 'platformio-udev-rules')
pkgver=6.1.8
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
sha256sums=('1c5020782192016114f48da3efbf86871c086184fabb47ea172e7fbc15665e9e')

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
