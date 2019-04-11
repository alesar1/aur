# Maintainer: Frederik “Freso” S. Olesen <freso.dk@gmail.com>
# Contributor: CubeTheThird <cubethethird@gmail.com>

pkgname=amidst
_version='4.1'
pkgver=${_version//_/-}
_jarver="v${_version}"
_jarfile="${pkgname}-${_jarver/./-}.jar"
pkgrel=3
pkgdesc='Advanced Minecraft Interface and Data/Structure Tracking'
arch=('any')
license=('GPL3')
url='https://github.com/toolbox4minecraft/amidst'
depends=('java-runtime=8' 'sh')
optdepends=('minecraft: the game itself')
noextract=("$_jarfile")
changelog=ChangeLog
source=("https://github.com/toolbox4minecraft/amidst/releases/download/$_jarver/$_jarfile"
        amidst.desktop
        icon.png)
md5sums=('1f3d6157e4d0339ad4f2d7996a0f88a6'
         '3c6900ac68e3175768322e684f9f1bcb'
         '0d90c979cbd12aa7d08d05f5f3299ce7')

build() {
    cd "$srcdir"

    #Create shell script to launch the application
    echo "#!/bin/sh" > amidst.sh
    echo "java -noverify -jar /usr/share/java/$pkgname/AMIDST.jar" >> amidst.sh
}

package() {
    cd "$srcdir"

    install -Dm755 'amidst.sh'                 "$pkgdir/usr/bin/amidst"
    install -Dm644 'icon.png'                  "$pkgdir/usr/share/icons/hicolor/128x128/apps/amidst.png"
    install -Dm644 'amidst.desktop'            "$pkgdir/usr/share/applications/amidst.desktop"
    install -Dm644 "$_jarfile"                 "$pkgdir/usr/share/java/$pkgname/AMIDST.jar"
}

# vim:set ts=4 sw=4 et:
