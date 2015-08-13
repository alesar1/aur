# Contributor: Diogo Leal <estranho@diogoleal.com>

pkgname=arc
pkgver=5.21p
pkgrel=2
pkgdesc="Arc file archiver and compressor. Long since superceeded by zip/unzip but useful if have old .arc files need to unpack."
arch=('i686' 'x86_64')
url='http://sourceforge.net/projects/arc'
license=('GPL')
source=("http://download.sourceforge.net/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha1sums=('902ce24b23422880d474df6f1d9eba5e')

build() {
  make -C "${pkgname}-${pkgver}"
}

package() {
  make -C "${pkgname}-${pkgver}" PREFIX=/usr DESTDIR="${pkgdir}" install
}
