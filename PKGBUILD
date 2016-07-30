# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: Tianjiao Yin <ytj000+aur@gmail.com>

_dver=8051
pkgname=firefox-extension-unmht
pkgver=8.2.0
pkgrel=1
pkgdesc="view MHT (MHTML) web archive format files, and save complete web pages, including text and graphics, into a single MHT file"
url='https://addons.mozilla.org/firefox/addon/unmht/'
depends=("firefox")
makedepends=('unzip')
license=('MPL2')
arch=('any')
source=("https://addons.mozilla.org/firefox/downloads/latest/${_dver}/addon-${_dver}-latest.xpi")
sha256sums=('e3b5b401abf122d1de2cd531e350f6d38c5f9fd5b371a1303a944baac7883b66')
noextract=(addon-${_dver}-latest.xpi)

pkgver() {
    sed -n '/.*<em:version>\(.*\)<\/em:version>.*/{s//\1/p;q}' install.rdf | cut -f 1 -d-
}

prepare(){
    unzip -qqo addon-${_dver}-latest.xpi
}

package() {
    cd "$srcdir"
    emid=$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' install.rdf)
    local dstdir="$pkgdir/usr/lib/firefox/browser/extensions/${emid}"
    install -d "$dstdir"
    rm *.xpi
    cp -dpr --no-preserve=ownership * "$dstdir"
    chmod -R 755 "$dstdir"
}
