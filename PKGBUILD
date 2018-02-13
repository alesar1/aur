# Maintainer: fenuks

pkgname=ttf-librebaskerville
pkgver=1.0
pkgrel=3
pkgdesc="Libre Baskerville is webfont optimized for web body text (typically 16px). It's based on 1941 ATF Specimens, but it has a taller x height, wider counters and minor contrast that allow it to work on small sizes in any screen."
arch=("any")
# https://github.com/impallari/Libre-Baskerville
url="http://www.impallari.com/projects/overview/libre-baskerville"
license=("custom:OFL")
depends=("fontconfig" "xorg-font-utils")
optdepends=()
makedepends=()  
conflicts=()
# install=$pkgname.install
source=("https://github.com/impallari/Libre-Baskerville/archive/master.zip")
sha256sums=('2771a5cfb2801d92093ac51cacf7f088dffa11afbe9fea4e47b4396d1719a143')


package() {
    cd "${srcdir}/Libre-Baskerville-master"
    install -d "$pkgdir/usr/share/fonts/TTF"
    install -m644 LibreBaskerville-{Bold,Italic,Regular}.ttf "$pkgdir/usr/share/fonts/TTF"

    # Licence installation
    # install -d "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "OFL.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
