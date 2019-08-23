# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Maintainer: Ryozuki <ryo@ryozuki.xyz>

pkgname=ddnet
pkgver=12.6.1
pkgrel=2
pkgdesc="A Teeworlds modification with a unique cooperative gameplay."
arch=('x86_64')
url="https://ddnet.tw"
license=('custom:BSD' 'CCPL:by-nc-sa')
depends=('sdl2' 'freetype2' 'opusfile' 'curl' 'glew' 'wavpack' 'pnglite')
makedepends=('cmake' 'ninja' 'python')
checkdepends=('gtest')
optdepends=('ddnet-skins: A collection with more than 700 custom tee skins.'
            'ddnet-maps-git: All the maps used on the official DDNet Servers.')
source=("https://ddnet.tw/downloads/DDNet-$pkgver.tar.xz"
        "ddnet-server.service" "ddnet-sysusers.conf" "ddnet-tmpfiles.conf")
sha256sums=('2f3d25855874c5f2f54bf441d6acb23a0d06de573b7c0d34549c21eac51d057c'
            '9377a9d7c87abae166c8fa98cd79a61c74482f80f80bc930ae043349e9a84965'
            '70034f237270b38bf312238a26cfd322e212ca5714bfea4ae91e80c639ce8738'
            '043452f4de3c86d903973009bb3e59b3492a6669b86d0b1410e59a1476a87369')

# Set 1 to enable MySQL support and add dependencies
_enable_mysql=0

if [ $_enable_mysql -eq 1 ]; then
    depends+=('mysql-connector-c++')
    makedepends+=('boost')
    _mysql_opt="-DMYSQL=ON"
fi

build() {
    [ -d build ] && rm -rf build; mkdir build
    cd build
    cmake ../DDNet-$pkgver          \
        -DCMAKE_BUILD_TYPE=Release  \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DAUTOUPDATE=OFF            \
        -GNinja                     \
        $_mysql_opt
    ninja
}

check() {
    ninja run_tests -C build
}

package() {
    DESTDIR="$pkgdir" ninja install -C build
    install -vDm644 DDNet-$pkgver/license.txt     "$pkgdir/usr/share/licenses/$pkgname/license.txt"
    install -vDm644 ddnet-server.service          "$pkgdir/usr/lib/systemd/system/ddnet-server.service"
    install -vDm644 "$srcdir/ddnet-sysusers.conf" "$pkgdir/usr/lib/sysusers.d/ddnet.conf"
    install -vDm644 "$srcdir/ddnet-tmpfiles.conf" "$pkgdir/usr/lib/tmpfiles.d/ddnet.conf"
}
