# Maintainer: Moses Miller <Majora320@gmail.com>

pkgname=olympus-bin
pkgver=1903
pkgrel=1
pkgdesc='A mod manager for Celeste'
arch=('x86_64')
url='https://github.com/EverestAPI/Olympus'
license=('MIT')
depends=('love' 'lua51-lsqlite3')
makedepends=('unzip')
source=("$pkgname-$pkgver.zip::https://dev.azure.com/EverestAPI/Olympus/_apis/build/builds/$pkgver/artifacts?artifactName=linux.main&\$format=zip")
noextract=("$pkgname-$pkgver.zip")
sha256sums=('4f096eff02e94d3232004183fc910627256244e3d94fdda037487f38a0928fd5')

prepare() {
    unzip "$pkgname-$pkgver.zip"
    cd linux.main
    unzip dist.zip
}

package() {
    cd linux.main

    install -Dm755 subprocess.so "$pkgdir/usr/lib/olympus/subprocess.so"
    install -Dm755 nfd.so "$pkgdir/usr/lib/olympus/nfd.so"
    install -Dm755 olympus.love "$pkgdir/usr/lib/olympus/olympus.love"
    install -Dm644 olympus.desktop "$pkgdir/usr/share/applications/olympus.desktop"
    install -Dm644 olympus.png "$pkgdir/usr/share/icons/hicolor/128x128/apps/olympus.png"
    install -Dm755 olympus "$pkgdir/usr/lib/olympus/olympus"
    mkdir -p "$pkgdir/usr/bin"
    ln -s "/usr/lib/olympus/olympus" "$pkgdir/usr/bin/olympus"
    
    cp -r sharp "$pkgdir/usr/lib/olympus/sharp"
    rm "$pkgdir/usr/lib/olympus/sharp/Olympus.Sharp.bin.osx"
}
