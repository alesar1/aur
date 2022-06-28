# Maintainer:  Yigit Dallilar <yigit.dallilar at gmail dot com>

pkgname=ds9
pkgver=8.3
pkgrel=5
pkgdesc="SAOImage DS9: Astronomical Data Visualization Application"
url="http://hea-www.harvard.edu/RD/ds9/"
arch=('x86_64')
license=('GPL2')
conflicts=(ds9-bin)
depends=()
options=(!strip)
makedepends=(libx11 libxslt libxml2 libxft tcl zip)
replaces=()
backup=()
source=("https://github.com/SAOImageDS9/SAOImageDS9/archive/v${pkgver}.tar.gz"
        "ds9.desktop"
        "ds9.png"
        "format-security.patch")
md5sums=('1c3784c93d63ee1c194b0480f17d3f93'
         'f1738e4ec665ae9afd1b65b86e6a07f1'
         '9297d5738f5f462831075c483dc785d5'
         '64ebd4c1e03b45fc682b692046028f1d')


prepare() {
    cd ${srcdir}/SAOImageDS9-${pkgver}
    patch --strip=1 < ../format-security.patch
}

build() {
    LDFLAGS="-lm $LDFLAGS"
    echo $LDFLAGS
    cd ${srcdir}/SAOImageDS9-${pkgver}
    unix/configure
    make
}

package() {
    
    install -Dm644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
    install -Dm644 ${pkgname}.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png

    cd ${srcdir}/SAOImageDS9-${pkgver}
    install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    install -Dm755 bin/ds9 ${pkgdir}/usr/bin/${pkgname}

}

# vim:set ts=4 sw=4 et:

