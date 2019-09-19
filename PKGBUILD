# Maintainer: Tatsunori Aoki <ginjiro.135 at gmail dot com>
pkgname=man-pages-ja
pkgver=20190915
pkgrel=1
pkgdesc="Man pages for Japanese"
arch=('any')
url="https://linuxjm.osdn.jp"
license=('custom')
optdepends=('mdocml: makewhatis support')
makedepends=('perl')
conflicts=('man-pages-ja-git')
install="${pkgname}.install"
source=("https://linuxjm.osdn.jp/man-pages-ja-${pkgver}.tar.gz")
md5sums=('38bbaa68b7287bade171fab814f5abd6')


prepare() {
    cd ${srcdir}/${pkgname}-${pkgver}
    cp script/configure.perl script/configure.perl.org

    cat script/configure.perl.org                |
    sed '/until/i$ans = "y";'                    |
    sed "/usr[/]share[/]man[/]/s@/@${pkgdir}/@1" > script/configure.perl
}

build() {
    cd ${srcdir}/${pkgname}-${pkgver}
    yes '' | make config
}

package() {
    mkdir -p ${pkgdir}/usr/share/man/${LANG}
    cd ${srcdir}/${pkgname}-${pkgver}
    make install
}
