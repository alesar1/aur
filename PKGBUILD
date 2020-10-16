# Maintainer: AnoGP <anogp at pm dot me>

pkgname=motionbox
_pkgname=motionbox
pkgver=1.6.0.7
majver=1.6.0
subver=7
pkgrel=2
pkgdesc="MotionBox is a Video Browser for Motion Freedom"
arch=("x86_64")
url="http://omega.gg/MotionBox/"
license=("GPL3")
provides=("motionbox")
conflicts=("motionbox")
depends=(vlc qt5-base libidn11)
source=(
    http://omega.gg/get/MotionBox/MotionBox-$majver-$subver-linux64.tar.gz
    https://github.com/G-P-L/AUR/raw/master/MotionBox/MotionBox.desktop
    https://github.com/G-P-L/AUR/raw/master/MotionBox/MotionBox.png
)
sha256sums=('2c8c3b24faed0c0850dd7a64d7fe2605ea190adf22dd19d5db5a037825c5002b'
            'c531f06e8777a2f6327ead793b6dc16c2b4780fdb16be354f8e68ddbe32138e7'
            '7b0f4fb92e7bc5d23fbef1a0bb9381a63fa979f28a36b2f0b4b4619b13039b72')

package() {
    install -d "$pkgdir/opt/MotionBox"
    install -d "$pkgdir/usr/bin"

    # copy application icon
    install -Dm644 MotionBox.png "$pkgdir/opt/MotionBox/MotionBox.png"

    # copy desktop launcher
    install -Dm644 MotionBox.desktop "$pkgdir/usr/share/applications/MotionBox.desktop"

    # copy folders from the source tarball
    cp -r "$srcdir/MotionBox-$majver-$subver/"{backend,documents,imageformats,platforms,QtQuick.2,xcbglintegrations} "$pkgdir/opt/MotionBox/"

    # copy readme and executables from the source tarball
    cp -r "$srcdir/MotionBox-$majver-$subver/"{Readme.html,start.sh,MotionBox} "$pkgdir/opt/MotionBox/"

    # copy libraries from the source tarball
    cp -r "$srcdir/MotionBox-$majver-$subver/"{libboost_chrono.so.1.71.0,libboost_random.so.1.71.0,libboost_system.so.1.71.0,libcrypto.so.1.1,libdouble-conversion.so.3,libharfbuzz.so.0,libicudata.so.66,libicui18n.so.66,libicuuc.so.66,libpcre2-16.so.0,libpng16.so.16,libQt5Core.so.5,libQt5DBus.so.5,libQt5Gui.so.5,libQt5Network.so.5,libQt5OpenGL.so.5,libQt5Qml.so.5,libQt5Quick.so.5,libQt5Svg.so.5,libQt5Widgets.so.5,libQt5XcbQpa.so.5,libQt5Xml.so.5,libQt5XmlPatterns.so.5,libssl.so.1.1,libtorrent-rasterbar.so.9,libxcb-xinerama.so.0,libz.so.1} "$pkgdir/opt/MotionBox/"

    # link binary to /usr/bin
    ln -s /opt/MotionBox/start.sh $pkgdir/usr/bin/motionbox

    # ln -s /usr/lib/libvlc.so.5 $pkgdir/opt/MotionBox/libvlc.so.5
    # ln -s /usr/lib/vlc $pkgdir/opt/MotionBox/vlc
}
