# Maintainer: grimi <grimi at poczta dot fm>

_pkgname=fs-uae-arcade
pkgname=fs-uae-arcade-devel
pkgver=2.9.5dev
pkgrel=1
pkgdesc="Full-screen game browser for FS-UAE (development version)."
arch=("any")
url="http://fs-uae.net/download-devel"
license=("GPL2")
depends=("fs-uae-devel" "python-pyqt5" "python-setuptools" "python-opengl>=3.1.0"
         "python-lhafile" "hicolor-icon-theme")
source=("http://fs-uae.net/devel/${pkgver}/${_pkgname}-${pkgver}.tar.gz")
#source=("http://ppa.launchpad.net/fengestad/devel/ubuntu/pool/main/f/${_pkgname}/${_pkgname}_${pkgver}.orig.tar.gz")
provides=("fs-uae-game-center")
conflicts=("fs-uae-game-center" "fs-uae-game-center-devel")
replaces=("fs-uae-game-center-devel")
sha256sums=('30cefa70b4714839ae0fa7c9e36827502e982f5cb987404fb41fc60ba06a2cf6')



prepare() {
   cd ${_pkgname}-${pkgver}
   # disable included OpenGL
   sed '/OpenGL/d' -i setup.py
}

build() {
   cd ${_pkgname}-${pkgver}
   make
}

package() {
   cd ${_pkgname}-${pkgver}
   make install DESTDIR="${pkgdir}" prefix=/usr
}


# vim:set ts=3 sw=3 et:

