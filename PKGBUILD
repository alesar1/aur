# Maintainer: Gonzalo Exequiel Pedone <hipersayan DOT x AT gmail DOT com>

pkgname=webcamoid
pkgver=6.1.0
pkgrel=1
pkgdesc="Webcamoid is a full featured webcam capture application."
url='https://github.com/hipersayanX/webcamoid'
license=('GPL')
arch=('i686' 'x86_64' 'armv6h')
depends=('qt5-quickcontrols' 'qt5-multimedia' 'qt5-graphicaleffects' 'qt5-svg' 'ffmpeg')
makedepends=('qt5-tools')
provides=('webcamoid')
conflicts=('kdeplasma-applets-webcamoid' 'webcamoid-git')
source=("https://github.com/hipersayanX/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('a27be3f6ebc060454c9b6ec9f85ac174')

build() {
    cd "$srcdir/${pkgname}-${pkgver}"
    qmake-qt5 Webcamoid.pro
    make
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    make INSTALL_ROOT="${pkgdir}" install
}
