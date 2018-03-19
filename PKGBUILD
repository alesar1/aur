# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
pkgname=skribilo
pkgver=0.9.3
pkgrel=5
pkgdesc="The Ultimate Document Programming Framework"
url="http://www.nongnu.org/skribilo/"
arch=('any')
license=('GPL')
depends=('bash')
makedepends=('guile2.0' 'guile-reader' 'ploticus')
optdepends=('texlive-core: for postscript or pdf output' 
	    'lout: for postscript or pdf output'
	    'ploticus: for pie-charts'
	    'guile-lib: to be able to use the RSS-2-reader')
source=("http://download.savannah.gnu.org/releases/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=('e7623d5a7adbaf302bb7e63b7ab5101a')
options=('!makeflags')

build() {
  cd $pkgname-$pkgver
  GUILE_EFFECTIVE_VERSION=2.0 GUILE=/usr/bin/guile2.0 ./configure --prefix=/usr
  make 
}
package() {
  cd /$pkgname-$pkgver
  make DESTDIR="$pkgdir" install
  rm "$pkgdir"/usr/share/info/*.png
  install -d "$pkgdir"/usr/share/doc/$pkgname
  find $srcdir/ -name "*.png" -exec install -m644 {} "$pkgdir"/usr/share/doc/$pkgname \;
}
