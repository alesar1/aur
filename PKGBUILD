pkgname=subtitleedit
pkgver=3.5.16
pkgrel=2
pkgdesc="A subtitle editor"
arch=('any')
url="http://www.nikse.dk/subtitleedit/"
license=('GPL3')
depends=('mono')
optdepends=(
    'vlc: Video support'
    'mpv: Video support'
    'tesseract: OCR support'
)
makedepends=('unzip' 'imagemagick')
_pkgver_nz="${pkgver%.0}"
source=(
    "https://github.com/SubtitleEdit/subtitleedit/releases/download/$pkgver/SE${_pkgver_nz//./}.zip"
    "https://raw.githubusercontent.com/SubtitleEdit/subtitleedit/$pkgver/src/Icons/SE.ico"
    "subtitleedit"
    "subtitleedit.desktop"
)
sha256sums=(
    'bc7c218b55d7df4fbad66966ea2f8d46c927f05105a63a886049de65cddab227'
    'a2d211e7ce3597b25db9f921590169c89d0b47dad48669dfffb6795a7ba534cd'
    'f1e7b1ef8116afaaac61a6ddd871fb6ec349ab729d068f1c3195d0fbabafc2bc'
    '32977a0b82619f04e1ce904ac9c02ced410aa6cb563e86e90ce46225dc63adee'
)
noextract=("SE${_pkgver_nz//./}.zip")

package() {
    install -d "$pkgdir/usr/share/subtitleedit"
    unzip "$srcdir/SE${_pkgver_nz//./}.zip" -d "$pkgdir/usr/share/subtitleedit"
    touch "$pkgdir/usr/share/subtitleedit/.PACKAGE-MANAGER"

    install -Dm755 "$srcdir/subtitleedit" "$pkgdir/usr/bin/subtitleedit"
    install -Dm644 "$srcdir/subtitleedit.desktop" "$pkgdir/usr/share/applications/subtitleedit.desktop"

    install -d "$pkgdir/usr/share/pixmaps"
    convert "$srcdir/SE.ico[6]" "$pkgdir/usr/share/pixmaps/subtitleedit.png"
}
