# Maintainer: Clemens Brunner <clemens dot brunner at gmail dot com>
pkgname=edfbrowser
pkgver=1.61
pkgrel=1
pkgdesc="A free, opensource, multiplatform, universal viewer and toolbox intended for, but
not limited to, timeseries storage files like EEG, EMG, ECG, BioImpedance, etc."
arch=('i686' 'x86_64')
url="http://www.teuniz.net/edfbrowser/"
license=('GPL')
groups=()
depends=('qt4')
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(https://www.teuniz.net/edfbrowser/edfbrowser_161_source.tar.gz
        edfbrowser.desktop)
noextract=()
sha1sums=('d41133483d2e98342b783c49122e194dae8f44b2'
          '3076f5b8ab0313edb7b20ca13214382914725f52')

build() {
  cd "$srcdir/edfbrowser_161_source"
  qmake-qt4
  make
}

package() {
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/applications"
  mkdir -p "$pkgdir/usr/share/icons"
  cp "$srcdir/edfbrowser_161_source/edfbrowser" "$pkgdir/usr/bin"
  cp edfbrowser.desktop "$pkgdir/usr/share/applications"
  cp "$srcdir/edfbrowser_161_source/images/edf.png" "$pkgdir/usr/share/icons/edfbrowser.png"
}
