# Maintainer: David McInnis<davidm@eagles.ewu.edu>

pkgname=texlive-ewuthesis
pkgver=2015.11.10
pkgrel=1
pkgdesc="Style for Master's Thesis at Eastern Washington University"
license=('LPPL')
arch=(any)
depends=('texlive-core' 'texlive-htmlxml' 'texlive-plainextra' 'texlive-langextra')
url='https://github.com/oraac/texlive-ewuthesis'
source=("https://github.com/oraac/texlive-ewuthesis/blob/master/packaged/ewuthesis-${pkgver}.tgz")
install=texlive-ewuthesis.install
sha256sums=('7415fa4748a5bfac4344b5c378dd5ade4994eb15a881b359f121f05a672f2d35'
            '242e3c1287823f1debe4479c70fa09acbc6883adb26c8726882e892384831a13')

build() {
    cd "$srcdir/$pkgname"
    make clean
    make all
}

package() {
    cd "$srcdir/$pkgname"
    install -d -m775 "$pkgdir/usr/share/texmf/doc/latex/${pkgname}"
    install -d -m775 "$pkgdir/usr/share/texmf/tex/latex/${pkgname}"
    cp -R README.md \
          example.pdf \
          example \
          ewu-forms "$pkgdir/usr/share/texmf/doc/latex/${pkgname}"
    cp ewuthesis.cls "$pkgdir/usr/share/texmf/tex/latex/${pkgname}"
    
}
