pkgname=subtitleedit
pkgver=3.4.13
pkgrel=2
pkgdesc="A subtitle editor"
arch=('i686' 'x86_64')
url="http://www.nikse.dk/subtitleedit/"
license=('GPL3')
depends=('mono')
optdepends=('vlc: Video support')
makedepends=('unzip' 'imagemagick')
source=(
    "https://github.com/SubtitleEdit/subtitleedit/releases/download/$pkgver/SE${pkgver//./}.zip"
    "https://raw.githubusercontent.com/SubtitleEdit/subtitleedit/$pkgver/src/Icons/SE.ico"
    "subtitleedit"
    "subtitleedit.desktop"
)
sha256sums=(
    'f2d412fe04ae1fc1df0bb19ae67522a6ac270be3e3831933852ec3380e68c674'
    'a2d211e7ce3597b25db9f921590169c89d0b47dad48669dfffb6795a7ba534cd'
    'f1e7b1ef8116afaaac61a6ddd871fb6ec349ab729d068f1c3195d0fbabafc2bc'
    '5423868ec98b14cf2f46fe07f48f69477ad45409be90d1e8e58aaa2d1120faa1'
)
noextract=("SE${pkgver//./}.zip")

package() {
    install -d "$pkgdir/usr/share/subtitleedit"
    unzip "$srcdir/SE${pkgver//./}.zip" -d "$pkgdir/usr/share/subtitleedit"
    touch "$pkgdir/usr/share/subtitleedit/.PACKAGE-MANAGER"
    
    install -Dm755 "$srcdir/subtitleedit" "$pkgdir/usr/bin/subtitleedit"
    install -Dm644 "$srcdir/subtitleedit.desktop" "$pkgdir/usr/share/applications/subtitleedit.desktop"
    
    install -d "$pkgdir/usr/share/pixmaps"
    convert "$srcdir/SE.ico[6]" "$pkgdir/usr/share/pixmaps/subtitleedit.png"
}
