# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Maintainer: Edgar Luque <git@edgarluque.com>

pkgname=ddnet
pkgver=15.8.1
pkgrel=7
pkgdesc="A Teeworlds modification with a unique cooperative gameplay."
arch=('x86_64')
url="https://ddnet.tw"
license=('custom:BSD' 'CCPL:by-nc-sa')
depends=('freetype2' 'opusfile' 'curl' 'glew' 'wavpack' 'pnglite' 'ffmpeg' 'libnotify' 'miniupnpc' 'sqlite' 'mariadb-libs')
makedepends=('cmake' 'ninja' 'python')
checkdepends=('gmock')
optdepends=('ddnet-skins: A collection with more than 500 custom tee skins.'
            'ddnet-maps-git: All the maps used on the official DDNet Servers.')
backup=('usr/share/ddnet/data/autoexec_server.cfg')
source=("https://ddnet.tw/downloads/DDNet-$pkgver.tar.xz"
        "ddnet-server.service" "ddnet-sysusers.conf" "ddnet-tmpfiles.conf"
        "dont-expect-moments-ago-string-in-tests-use-regex-matcher.patch"
        "fix-timestamp-in-record_maps-in-test.patch")
sha256sums=('bc354c2db9b0dee094ac3ce1ca95e5399d8282c91cfb878ebd3060345aa0c76d'
            '9377a9d7c87abae166c8fa98cd79a61c74482f80f80bc930ae043349e9a84965'
            '70034f237270b38bf312238a26cfd322e212ca5714bfea4ae91e80c639ce8738'
            '043452f4de3c86d903973009bb3e59b3492a6669b86d0b1410e59a1476a87369'
            '5d90ac84ee91556f676ab04006079fb0ad5399b4adde90cfd1b53374da62782a'
            '60cceac4c1caaec8899ffa691860690a2f2f95897c4525e7c51450849f21f62c')

prepare() {
    cd DDNet-$pkgver
    # https://github.com/ddnet/ddnet/issues/4631
    patch -p1 -i ../dont-expect-moments-ago-string-in-tests-use-regex-matcher.patch
    patch -p1 -i ../fix-timestamp-in-record_maps-in-test.patch
}

build() {
    mkdir -p build
    cd build
    cmake ../DDNet-$pkgver          \
        -DCMAKE_BUILD_TYPE=Release  \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DAUTOUPDATE=OFF            \
        -DANTIBOT=ON                \
        -DVIDEORECORDER=ON          \
        -DUPNP=ON                   \
        -DMYSQL=ON                  \
        -DTEST_MYSQL=OFF            \
        -GNinja
    ninja
}

check() {
    ninja run_tests -C build
}

package() {
    DESTDIR="$pkgdir" ninja install -C build
    install -vDm644 DDNet-$pkgver/license.txt      "$pkgdir/usr/share/licenses/$pkgname/license.txt"
    install -vDm644 "$srcdir/ddnet-server.service" "$pkgdir/usr/lib/systemd/system/ddnet-server.service"
    install -vDm644 "$srcdir/ddnet-sysusers.conf"  "$pkgdir/usr/lib/sysusers.d/ddnet.conf"
    install -vDm644 "$srcdir/ddnet-tmpfiles.conf"  "$pkgdir/usr/lib/tmpfiles.d/ddnet.conf"
    sed -i "$pkgdir/usr/share/ddnet/data/autoexec_server.cfg" \
        -e '/sv_test_cmds/s/1/0/' \
        -e 's/myServerconfig.cfg/autoexec_server_maps.cfg/'
}
