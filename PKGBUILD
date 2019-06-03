# Maintainer:   M.Reynolds <blackboxnetworkproject@gmail.com>

pkgname=tastyworks
pkgver=0.35.0
pkgrel=1
pkgdesc="One of the fastest, most reliable, and most secure trading platforms in the world."
arch=('x86_64')
url="https://tastyworks.com/technology.html"
license=('Other')
depends=('java-runtime')
source=("https://download.tastyworks.com/desktop/$pkgver/$pkgname-$pkgver.rpm"
        "tastyworks.png")
sha256sums=('fbc8873a99158ab4ac5b2fb7132fdaeb8a26106140cbeef2e0ab519821ac701d'
            '5875675195bb9156c050976e00c98538a6662740f5359e677d26fe5e21560cea')

# I'm not sure that the all the lib32 stuff is actually needed. The application seemed to be working
# fine without it but the "official" install requested those packages. I'll leave them there for
# now but need to contact tastyworks team for clarification and do some more research.

# I'm removing this list of dependencies because it's clutter and I didn't notice any benefit for
# having them included. I'll leave it here in a comment in case they're necessary to someone.

# 'lib32-glibc'   'lib32-gcc-libs'
# 'lib32-libx11'  'lib32-libxext'    'lib32-libxi'
# 'lib32-libxtst' 'lib32-libxrender' 'lib32-alsa-lib'

package() {

    cd "$srcdir"

    install -d      "$pkgdir/opt/$pkgname"
    cp      -r      "$srcdir/opt/$pkgname/"                                   "$pkgdir/opt/"

    sed     -i      's|Name=tastyworks|Name=TastyWorks|'                      "$srcdir/opt/$pkgname/$pkgname.desktop"
    sed     -i      's|Comment=tastyworks|Comment=Trading Platform|'          "$srcdir/opt/$pkgname/$pkgname.desktop"
    sed     -i      's|Icon=/opt/tastyworks/tastyworks.png|Icon=tastyworks|'  "$srcdir/opt/$pkgname/$pkgname.desktop"
    sed     -i      's|Categories=Unknown|Categories=Internet|'               "$srcdir/opt/$pkgname/$pkgname.desktop"

    install -Dm 644 "$srcdir/opt/$pkgname/$pkgname.desktop"                   "$pkgdir/usr/share/applications/$pkgname.desktop"
    install -Dm 644 "$pkgname.png"                                            "$pkgdir/usr/share/pixmaps/$pkgname.png"
}
