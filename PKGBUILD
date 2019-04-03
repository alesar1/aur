# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>

pkgname=ddnet
pkgver=12.0.1
pkgrel=2
pkgdesc="DDraceNetwork, a cooperative racing mod of Teeworlds"
arch=('x86_64')
url="https://ddnet.tw"
license=('custom:BSD' 'CCPL:by-nc-sa')
depends=('sdl2' 'freetype2' 'opusfile' 'curl' 'glew' 'wavpack' 'libwebsockets' 'pnglite')
makedepends=('cmake' 'python' 'imagemagick' 'gendesk')
checkdepends=('gtest')
optdepends=('ddnet-skins: more skins for your tee'
            'ddnet-maps-git: have all DDNet maps available offline')
source=("https://ddnet.tw/downloads/DDNet-$pkgver.tar.xz")
sha256sums=('4c5937b6d32074194a8b23ea5bc81db78ebafd533cf9fe8003eadc611dfc534a')

prepare() {
    [ -d build ] && rm -rf build
    mkdir -p build/prep
    cd build/prep

      # Extract icons in .png from .ico (name must be lowercase)
    convert ../../DDNet-$pkgver/other/icons/DDNet-Server.ico ddnet-server.png
    convert ../../DDNet-$pkgver/other/icons/DDNet.ico        ddnet.png

      # Generate .desktop files
    gendesk --pkgname="DDNet" --pkgdesc="DDNet" \
            --icon="ddnet" --categories="Game;ArcadeGame"
    gendesk --pkgname="DDNet-Server" --name="DDNet Server"          \
            --pkgdesc="DDNet Server" --terminal=true                \
            --icon="ddnet-server"    --categories="Game;ArcadeGame" \
            --exec='sh -c "cd /usr/share/ddnet/data && DDNet-Server"'

      # Create icon files' structure, for installing in package(). How:
      # For each png file, check its dimensions (e.g. 128 x 128) using
      # the output of 'file' command. Then double-check the 's' as a
      # number, then install it into  a "size/filename.png" notation
    for f in ddnet-?.png ddnet-server-?.png; do
        s=$(file $f | cut -d' ' -f5)
        if [ ! -z "${s##*[!0-9]*}" ]; then
            install -Dm644 $f ${s}x${s}/apps/${f/-[0-9]/}
            rm $f
        fi
    done
}

build() {
    cd build
    cmake ../DDNet-$pkgver          \
        -DCMAKE_BUILD_TYPE=Release  \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DWEBSOCKETS=ON             \
        -DAUTOUPDATE=OFF
    make all tools
}

check() {
    make -k run_tests -C build
}

package() {
    cd build
    make install DESTDIR="$pkgdir"

      # Install desktop files and folder
    install -dvm755 "$pkgdir/usr/share/applications/"
    install -vm644 prep/DDNet.desktop        "$pkgdir/usr/share/applications/"
    install -vm644 prep/DDNet-Server.desktop "$pkgdir/usr/share/applications/"

      # Install icon files and folders
    for f in $(find prep -type f -name '*.png'); do
        install -Dvm644 $f "$pkgdir/usr/share/icons/hicolor"/${f/prep\/}
    done

      # Install license file
    install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
    install -vm644 ../DDNet-$pkgver/license.txt  "$pkgdir/usr/share/licenses/$pkgname/"
}
