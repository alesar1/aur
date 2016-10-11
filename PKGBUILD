# Original Author: xgdgsc<xgdgsc@gmail.com>
# Maintainer: chendaniely<chendaniely@gmail.com>
# Contributor: Brenton Horne <brentonhorne77@gmail.com>

pkgname=rodeo
pkgver=2.4.2
pkgrel=2
pkgdesc="A data science IDE for Python"
url='https://www.yhat.com/products/rodeo'
arch=('x86_64')
depends=('jupyter' 'gconf')
license=('AGPL3')
install=rodeo.install
md5sums_x86_64=('38aa083fbcdc50a7476b8e903ce17c78')
source_x86_64=("https://github.com/yhat/rodeo/releases/download/v$pkgver/rodeo-$pkgver.deb")

build() {
    cd "${srcdir}"
    # bsdtar should be used, instead of tar, as makepkg uses it to decompress
    # archives, so it's automatically available
    bsdtar -xf data.tar.gz
}

package() {
    mv "$srcdir/usr" "$pkgdir"
    mv "$srcdir/opt" "$pkgdir"
}
