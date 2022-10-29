pkgname=hode-git
pkgver=0.2.9f+r4.26bcf11
pkgrel=1
pkgdesc="Heart of Darkness engine rewrite"
arch=(x86_64 aarch64)
url=http://cyxdown.free.fr/hode/
license=(unknown)
makedepends=(sdl2)
optdepends=('heart-of-darkness: provides game data for hode engine')
install=hode.install
source=(
    git+https://github.com/cyxx/hode.git
    hode.{ini,sh,desktop}
    amazing{,32}.png)
md5sums=(
    SKIP
    874bc298ab565d2d5141101781ef1082
    dd04ae21e99c973deec654186543da3d
    bfdd04e5fdc88f9dfcc2664bbb7578d6
    6d414f0a121fc4bd36f37cb12b8d34d6
    bccc68e0d4e909f147a424dd8fc2e1dd)
pkgver(){
    cd hode
    git describe --tags|sed 's/-\(.*\)-g/+r\1./'
}
build(){
    cd hode
    sed -i 's/kFrameDuration)/128)/' paf.cpp    # fix treehouse frame rate
    make
}
package(){
    install hode/hode hode.sh -Dt $pkgdir/usr/bin
    install hode.ini -Dt $pkgdir/usr/share/hode
    install amazing.png -Dt $pkgdir/usr/share/icons/hicolor/512x512/apps
    install -D {amazing32,$pkgdir/usr/share/icons/hicolor/32x32/apps/amazing}.png
    install hode.desktop -Dt $pkgdir/usr/share/applications
    install hode/*.{txt,yaml} -Dt $pkgdir/usr/share/doc/hode
}
