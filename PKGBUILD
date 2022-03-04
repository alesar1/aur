# Maintainer: Aria Moradi <aria.moradi007 at gmail dot com>
# Maintainer: Mahor Foruzesh <mahorforuzesh at pm dot me>

pkgname=tachidesk
pkgver=0.6.1_r1072
pkgrel=1
__pkgname=tachidesk-server
__PkgName=Tachidesk-Server
__pkgver="${pkgver%_*}"
__revnum="${pkgver#*_}"
pkgdesc='A free and open source manga reader that runs extensions built for Tachiyomi'
arch=('any')
url="https://github.com/Suwayomi/$__PkgName"
license=('MPL2')
depends=('java-runtime>=8')
optdepends=('electron: running in Electron')
provides=("$pkgname" "$__pkgname")
conflicts=("$pkgname-preview")
__jar=$__PkgName-v$__pkgver-$__revnum.jar
source=("$url/releases/download/v$__pkgver/$__jar"
        "$pkgname.desktop"
        "$pkgname.png"
        "$pkgname-browser.sh"
        "$pkgname-debug.sh"
        "$pkgname-electron.sh")
sha256sums=('05b9573e071dcfb9e656fa5ed34c122ea38767e38a23b4a4354737f6439eaf25'
            '22a6a9a8c8198985759f66b35377d87bce82d46dbf7a4a7505b55621a9c5487e'
            '7528715b5b8d8360a9fd7dc096b51fd52bf3da671167e224b6cb637437fc4831'
            'ab6896577aabad86dc1ed38612d926820e1c8c51074d46afda0c280e90b4f1a9'
            'fdf5ed21e7b05a59521005ea618a40c46750a46a6cb1aa7cbd8c09bc9e595b94'
            '56f12c13218ad58e1c9d26338d5d19b6ced92d789b043837be5d2420657ca417')

noextract=("$__jar")

package() {
    install -Dm644 "$srcdir/$__jar"               "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
    install -Dm644 "$srcdir/$pkgname.desktop"  -t "$pkgdir/usr/share/applications/"
    install -Dm644 "$srcdir/$pkgname.png"      -t "$pkgdir/usr/share/pixmaps/"
    install -Dm755 "$srcdir/$pkgname-browser.sh"  "$pkgdir/usr/bin/$pkgname-browser"
    install -Dm755 "$srcdir/$pkgname-debug.sh"    "$pkgdir/usr/bin/$pkgname-debug"
    install -Dm755 "$srcdir/$pkgname-electron.sh" "$pkgdir/usr/bin/$pkgname-electron"
    ln -s  "$srcdir/usr/bin/$pkgname-browser"     "$pkgdir/usr/bin/$pkgname" # keep backwards compatibility
}
