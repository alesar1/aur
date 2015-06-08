# Maintainer: Gonzalo Exequiel Pedone <hipersayan DOT x AT gmail DOT com>

pkgname=webcamoid
pkgver=6.0.0
pkgrel=3
pkgdesc="Webcamoid is a full featured webcam capture application."
url='https://github.com/hipersayanX/webcamoid'
license=('GPL')
arch=('i686' 'x86_64')
depends=('qt5-quickcontrols' 'qt5-multimedia' 'qt5-graphicaleffects' 'qt5-svg' 'ffmpeg' 'opencv')
makedepends=('qt5-tools')
provides=('webcamoid')
conflicts=('kdeplasma-applets-webcamoid' 'webcamoid-git')
source=("https://github.com/hipersayanX/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('866ac8f0243ee54c30e997448eb44e8a')

build() {
    cd "$srcdir/${pkgname}-${pkgver}"
    qmake-qt5 Webcamoid.pro
    make
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    make INSTALL_ROOT="${pkgdir}" install
}
