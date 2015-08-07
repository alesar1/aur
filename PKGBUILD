# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: Egon Geerardyn < egon DOT geerardyn AT gmail DOT com >
# Contributor: TDY <tdy@gmx.com>

pkgname=cb2bib
pkgver=1.9.1
pkgrel=1
pkgdesc="A tool for parsing clipboard data into BibTeX bibliographic database files"
arch=('i686' 'x86_64')
url="http://www.molspaces.com/cb2bib/"
license=('GPL3')
depends=('desktop-file-utils' 'lzo2' 'qt5-base')
optdepends=('openssl: network reference query support'
            'perl-image-exiftool: meta data support'
            'texlive-core: file correctness checking; bib2pdf printing'
            'xpdf: pdftotext support')
install=cb2bib.install
source=(http://www.molspaces.com/dl/progs/$pkgname-$pkgver.tar.gz)
sha256sums=('0e0217518f9d27ae96e1d199a65ccc226e4acd077f0833da39ca317c13ecf406')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix /usr --qmakepath /usr/bin/qmake-qt5
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make INSTALL_ROOT="$pkgdir" install
}
