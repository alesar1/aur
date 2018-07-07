# Maintainer: Eragon <sam.vzh@gmail.com>
pkgname=bide
pkgver=4.3.1
pkgrel=1
pkgdesc="BIDE, Basic IDE by Zezombye"
arch=("any")
url="https://www.planet-casio.com/Fr/logiciels/voir_un_logiciel_casio.php?showid=118"
license=('GPL')
depends=("jre8-openjdk")
provides=("bide")
source=("https://www.planet-casio.com/Fr/logiciels/dl_logiciel.php?id=118&file=1" "bide.desktop")
md5sums=('8f1fa1e609db852b59caa29c3411f237'
         '286c8e2e0edd5acd78cc4c3e10b04d1d')

build() {
    unzip 'dl_logiciel.php?id=118&file=1'
    unzip BIDE.jar
}

package() {
    mkdir -p $pkgdir/opt/bide
    cp BIDE.jar $pkgdir/opt/bide/bide.jar
    cp images/BIDEicon.png $pkgdir/opt/bide/bide_icon.png
    mkdir -p $pkgdir/usr/share/applications/
    cp bide.desktop $pkgdir/usr/share/applications/bide.desktop
}

