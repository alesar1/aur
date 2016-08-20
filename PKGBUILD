# Maintainer: William Gathoye <william at gathoye dot be>
# Contributor: Tetsumaki <http://goo.gl/YMBdA>
# Contributor: rws <elisp dot vim at google mail> (@xd1le on twitter)

pkgname=sfnt2woff
pkgver=20091003
pkgrel=2
pkgdesc="Tools to convert existing TrueType/OpenType fonts to WOFF and inversely (sfnt2woff and woff2sfnt)"
arch=('i686' 'x86_64' 'armv6h')

url="https://people.mozilla.org/~jkew/woff/"
license=('MPL' 'GPL' 'LGPL')

# http://superuser.com/a/429625/456258
# Source from https://people.mozilla.org/~jkew/woff/
source=("https://people.mozilla.org/~jkew/woff/woff-code-latest.zip")
sha512sums=('3a2d5c0f495f8dda2b311d80b6a1e4ad5b98fd098cc5573e92e5e7193d0f0746f8e3e90f7b1dddbaad8c336a68874a32c028ac650c067cfb2cce2f540411e2f9')

build () {
    make
}

package() {
    install -D sfnt2woff "$pkgdir/usr/bin/sfnt2woff"
    install -D woff2sfnt "$pkgdir/usr/bin/woff2sfn"
}
