# Contributor: Grey Christoforo <first name at last name dot net>
pkgname=r-shortread
_bc_name=ShortRead
pkgver=1.40.0
pkgrel=1
pkgdesc="FASTQ input and manipulation"
url="https://bioconductor.org/packages/release/bioc/html/${_bc_name}.html"
arch=("x86_64")
license=('Artistic-2.0')
depends=('r' 'r-biocgenerics' 'r-biocparallel' 'r-biostrings' 'r-rsamtools' 'r-genomicalignments' 'r-biobase' 'r-s4vectors' 'r-iranges' 'r-genomeinfodb' 'r-genomicranges' 'r-hwriter' 'r-zlibbioc' 'r-latticeextra')
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_bc_name}_${pkgver}.tar.gz")
sha1sums=('2bf569ce7b65710a90da3688086a056cf68f9e9e')

package() {
 mkdir -p $pkgdir/usr/lib/R/library
 cd $srcdir

 R CMD INSTALL -l $pkgdir/usr/lib/R/library ./${_bc_name}
}
