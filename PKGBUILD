# Maintainer: Bennett Piater <bennett at piater dot name>
pkgname='yousician'
pkgver='0.1.145'
pkgrel=1
pkgdesc='Singstar-like teacher for guitar, piano, bass and ukulele'
arch=('x86_64')
url='http://yousician.com/'
license=('unknown')
depends=(libc++ libc++abi)
source=("https://d3mzlbmn9ukddk.cloudfront.net/Builds/Yousician.tar.gz" "$pkgname.desktop")
sha512sums=('6e7da43e865f9e6701959078b903dff167adb21c25000778edcc4abf62a4918cf7daa3fadd9900550a7225841f272b311b762bac83e672752e88474634e13245'
            '48f6f4b195bcb4cd5e350290ac1fd98dcd4bf35842b11804fae44840f7b1fb374544e37601f2675b1fdf4c9cce8fc0ab53aa1d004d5e8c86d4a92faec916aa1e')


package() {
    mkdir -p "$pkgdir"/opt/yousician
    chmod 777 "$pkgdir"/opt/yousician

    install -Dm644 -t "$pkgdir"/usr/share/applications/ *.desktop

    cd "Yousician Launcher"
    cp "Yousician Launcher" version.txt "$pkgdir"/opt/yousician
}
