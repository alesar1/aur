# Maintainer: grimi <grimi at poczta dot fm>

_pkgname=fs-uae-arcade
pkgname=fs-uae-arcade-devel
pkgver=2.7.14dev
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
md5sums=('1c3911787a916857f5e1e350b02d01d9')



build() {
   cd ${_pkgname}-${pkgver}
   # argument needed
   sed 's/__()/__(parent)/' -i fsui/qt/adapter.py
   make
}


package() {
   cd ${_pkgname}-${pkgver}
   make install DESTDIR="${pkgdir}" prefix=/usr
   # remove included six, OpenGL
   rm -rf "${pkgdir}"/usr/share/${_pkgname}/six
   rm -rf "${pkgdir}"/usr/share/${_pkgname}/OpenGL
}


# vim:set ts=3 sw=3 et:

