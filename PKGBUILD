# Contributor: Grey Christoforo <first name at last name dot net>
pkgname=r-cli
_cran_name=cli
pkgver=1.1.0
pkgrel=1
pkgdesc="Create Compact Hash Digests of R Objects"
arch=('x86_64')
url="http://cran.r-project.org/web/packages/${_cran_name}/index.html"
license=('GPL3')
depends=('r' 'r-crayon' 'r-assertthat')
source=("http://cran.r-project.org/src/contrib/${_cran_name}_${pkgver}.tar.gz")
md5sums=('cc16412dbe255fdd7beae222d2753132')

package() {
 mkdir -p $pkgdir/usr/lib/R/library
 cd $srcdir

 R CMD INSTALL -l $pkgdir/usr/lib/R/library ./${_cran_name}
}
