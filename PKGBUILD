# Contributor: Kibouo <csonka.mihaly@hotmail.com>
# Contributor: Alex Branham <alex.branham@gmail.com>
_cranver=1.7
pkgname=r-commonmark
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc='High Performance CommonMark and Github Markdown Rendering in R'
arch=('x86_64')
url='https://cran.r-project.org/package=commonmark'
license=('BSD_2_clause + file LICENSE')
depends=('r' )
optdepends=('r-curl')
source=("https://cran.r-project.org/src/contrib/Archive/${_cranname}/${_pkgtar}")
md5sums=('48bf2251862a494d8ee3acde02dce385')

build(){
    R CMD INSTALL commonmark_"$_cranver".tar.gz -l "$srcdir"
}
package() {
    install -dm0755 "$pkgdir"/usr/lib/R/library
    cp -a --no-preserve=ownership commonmark "$pkgdir"/usr/lib/R/library
}

