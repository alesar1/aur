# Maintainer: grimi <grimi at poczta dot fm>

_pkgname=fs-uae-launcher
pkgname=fs-uae-launcher-devel
pkgver=2.7.16dev
pkgrel=1
pkgdesc="Launcher and configuration program for FS-UAE (development version)."
arch=("any")
url="http://fs-uae.net/download-devel"
license=("GPL2")
depends=("fs-uae-devel" "python-pyqt5" "python-setuptools" "python-opengl>=3.1.0"
        "python-lhafile" "hicolor-icon-theme")
optdepends=("p7zip: for .7z zip support")
source=("http://fs-uae.net/devel/${pkgver}/${_pkgname}-${pkgver}.tar.gz")
#source=("http://ppa.launchpad.net/fengestad/devel/ubuntu/pool/main/f/${_pkgname}/${_pkgname}_${pkgver}.orig.tar.gz")
provides=("fs-uae-launcher")
conflicts=("fs-uae-launcher")
md5sums=('e478af248ac649d9fefc478039b66d1d')



prepare() {
   cd ${_pkgname}-${pkgver}
   # disable included six, OpenGL
   sed '/OpenGL/d; /six/d' -i setup.py
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

