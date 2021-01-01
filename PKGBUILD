# Maintainer: Oliver Rümpelein <arch@pheerai.de>; Siegfried Krug <siegfried nospamat fg4f nospamdot de>
# Contributor: Evan Anderson <evananderson@thelinuxman.us>
pkgname=x32edit
pkgver=4.2
pkgrel=1
pkgdesc="Remote control and programm Behringer X32 consoles"
arch=('x86_64')
url="http://www.behringer.com/EN/products/X32.aspx"
license=('custom:MUSIC Group End User License Agreement')
depends=('libxext' 'alsa-lib' 'freetype2' 'mesa' 'mesa-libgl' 'hicolor-icon-theme' 'ttf-liberation')
source=("https://mediadl.musictribe.com/download/software/behringer/X32/X32-Edit_LINUX_$pkgver.tar.gz"
        "x32edit.desktop"
        "x32edit.png")
sha512sums=(''eef82645dae9dda7062ff645de3a1c1090e8e27516beeb95494d7fe4ee545a9ff7534fec8cc2ac64ab67091b20dfaa3818f2c15656e16454180777f6e204c061
            'dd9abb69c1345ef98ac2cdefd0afe6ce1a46a2482b674421c68af0b6a4dd87ea5ae6e1c490d7a236a17f18a8bbcb30dfae64f41c502b7f15a02189b8029baa17'
            '49507db6cd4a45b4fba977a4c7f2f475cfd8f5a6b7c2336d861ae88c30f16282f3380ef820541460809e8ea318c515c063134307a9a14db84946d2595314d625')

package()
{
    cd "$srcdir"

    strip X32-Edit
    install -Dm755 X32-Edit ${pkgdir}/usr/bin/x32edit

    # freedesktop.org compatibility
    install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
    install -Dm644 x32edit.png ${pkgdir}/usr/share/icons/hicolor/256x256/apps/x32edit.png
}
