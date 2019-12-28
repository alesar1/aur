# Maintainer: Hurstel Alexandre <a.hurstel at unistra dot fr>
pkgname=xp-pen-tablet-beta-driver
pkgver=20191212
pkgrel=1
pkgdesc="XP-Pen (Official) Linux (Beta) driver"
arch=('x86_64')
url='https://www.xp-pen.fr/download-292.html'
license=('GPL')
depends=('qt5-base' 'gcc-libs' 'libusb' 'icu' 'polkit')
source=("https://download01.xp-pen.com/file/2019/12/Linux%20Beta%20Driver(20191212).zip"
        "Pentablet_Driver.sh.patch"
        "Pentablet-Driver.desktop"
        "https://66.media.tumblr.com/avatar_df104055a5e0_128.pnj"
        "Pentablet-Driver.policy")
sha256sums=('0a8070c71d2b47e9ded9c5bb917e868d316b1c5895fef65a82df9d0c4de91ad8'
            'ca3111e8500d5b38c45a903c57dbd841c26a43b0f8d1fc2e8e653f59e4714d10'
            'd5315a3bd32eefe14234f3fc32815b0e04c46709a3a56fa9014af42704d24ba0'
            'af868161c23ad2df4780ab2220d1bce078587d4b9912a1d61722a18d37e36a74'
            'dbd471f5d87d73c1e331912457f7d3efe7e19aedaa7ca48b2492797690afc841')

prepare() {
	cd "$srcdir/Linux Beta Driver(20191212)"
    tar -xvf Linux_Pentablet_V1.2.11.tar.gz

    cd "Linux_Pentablet_V1.2.11"

    patch < "$srcdir/Pentablet_Driver.sh.patch"
}

package() {
	cd "$srcdir/Linux Beta Driver(20191212)"

    mkdir -p "$pkgdir/usr/bin"
    mkdir -p "$pkgdir/usr/share/$pkgname"
    mkdir -p "$pkgdir/usr/share/$pkgname/images"
    mkdir -p "$pkgdir/usr/share/applications"
    mkdir -p "$pkgdir/usr/share/polkit-1/actions"

    install -Dm755 "$srcdir/Pentablet-Driver.desktop" "$pkgdir/usr/share/applications"
    install -Dm755 "$srcdir/Linux Beta Driver(20191212)/Linux_Pentablet_V1.2.11/Pentablet_Driver" \
                    "$srcdir/Linux Beta Driver(20191212)/Linux_Pentablet_V1.2.11/Pentablet_Driver.sh" \
                    "$srcdir/Linux Beta Driver(20191212)/Linux_Pentablet_V1.2.11/config.xml" \
                        "$pkgdir/usr/share/$pkgname"
    install "$srcdir/avatar_df104055a5e0_128.pnj" "$pkgdir/usr/share/$pkgname/images/XP-Pen_logo.jpg"
    install "$srcdir/Pentablet-Driver.policy" "$pkgdir/usr/share/polkit-1/actions"

    ln -s "/usr/share/$pkgname/Pentablet_Driver.sh" "$pkgdir/usr/bin/$pkgname"
}
