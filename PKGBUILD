pkgname=diylc
pkgver=4.18.0
pkgrel=1
pkgdesc="Multi platform circuit layout and schematic drawing tool"
arch=('any')
url="https://bancika.github.io/diy-layout-creator/"
license=('GPL3')
depends=('jre11-openjdk' 'sh' 'hicolor-icon-theme')
optdepends=()
makedepends=('unzip')
source=(
    "https://github.com/bancika/diy-layout-creator/releases/download/v${pkgver}/diylc-${pkgver}.zip"
    "https://raw.githubusercontent.com/bancika/diy-layout-creator/v$pkgver/diylc/diylc-core/src/org/diylc/core/images/icon_small.png"
    "https://raw.githubusercontent.com/bancika/diy-layout-creator/v$pkgver/diylc/diylc-core/src/org/diylc/core/images/icon_medium.png"
    "https://raw.githubusercontent.com/bancika/diy-layout-creator/v$pkgver/diylc/diylc-core/src/org/diylc/core/images/icon_large.png"
    "diylc"
    "diylc.desktop"
)
sha256sums=(
    '0d90dcabfc9ab3aafeb0a9cfbeab915bda55a023d2972feda3cc2060dbb8d725'
    'a4a3c6059cb8cd3e129deb9ccb826025830e3914fa948df977fc73d7a20245c7'
    '6d586133cba43fae2871038ff717fc78d748a5097eec3f9a0dbf136451b88528'
    '66b616f47f907354fc1f7aaf3f077af5640475b025e692bfad0e22cf1af8b319'
    'SKIP'
    'SKIP'
)
noextract=("diylc-$pkgver.zip")

package() {
    install -d "$pkgdir/usr/share/diylc"
    unzip "$srcdir/diylc-${pkgver/a/}.zip" -d "$pkgdir/usr/share/diylc"

    install -Dm755 "$srcdir/diylc" "$pkgdir/usr/bin/diylc"
    install -Dm644 "$srcdir/diylc.desktop" "$pkgdir/usr/share/applications/diylc.desktop"

    install -Dm644 "$srcdir/icon_small.png" "$pkgdir/usr/share/icons/hicolor/16x16/apps/diylc.png"
    install -Dm644 "$srcdir/icon_medium.png" "$pkgdir/usr/share/icons/hicolor/32x32/apps/diylc.png"
    install -Dm644 "$srcdir/icon_large.png" "$pkgdir/usr/share/icons/hicolor/48x48/apps/diylc.png"
}
