#
# Maintainer: Guilhelm Savin <aur@gsav.in>
# Upstream URL: https://github.com/platformio/platformio
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/gsavin/arch
#

pkgname=platformio
pkgver=2.9.0
pkgrel=1
pkgdesc="A cross-platform code builder and library manager"
arch=('any')
url="https://github.com/platformio/platformio/"
license=('Apache')
depends=('python2'
	 'python2-setuptools'
         'python2-click'
         'python2-bottle'
         'python2-lockfile'
         'python2-requests'
         'python2-colorama'
         'python2-pyserial')
optdepends=('energia: For MSP430 based projects'
            'arduino: For Arduino based projects')
conflicts=('platformio-git')
source=("https://github.com/platformio/platformio/archive/v${pkgver}.tar.gz"
	"setup.patch")
sha256sums=('e6c593b65e98e767e3763eac409a1580c9e1c3f39517f304cb6cc04fdf9be09b'
	    '536217552b06ef562469268a8f0115a31bf052308f891a228adf94e314ce3730')

prepare() {
	cd "platformio-$pkgver"
	patch -Np0 -i ${srcdir}/setup.patch
}

package() {
    cd "$srcdir/platformio-$pkgver"
    python2 setup.py install --root="$pkgdir/" --optimize=1
}
