# Maintainer: Matt Frichtl <frichtlm@gmail.com>
# Contributor: Kibouo <csonka.mihaly@hotmail.com>
# Contributor: Ward Segers <w@rdsegers.be>
# Contributor: Alex Branham <alex.branham@gmail.com>
_cranver=2.3.0
_cranname=testthat
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-testthat
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc='Unit Testing for R'
arch=('x86_64')
url='https://cran.r-project.org/package=testthat'
license=('MIT')
depends=('r>=3.1' 'r-cli' 'r-crayon>=1.3.4' 'r-digest' 'r-ellipsis' 'r-evaluate' 'r-magrittr' 'r-pkgload' 'r-praise' 'r-r6>=2.2.0' 'r-rlang>=0.4.1' 'r-withr>=2.0.0')
optdepends=('r-covr' 'r-curl' 'r-devtools' 'r-knitr' 'r-rmarkdown' 'r-usethis' 'r-vctrs' 'r-xml2')
source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
#source=("https://cran.r-project.org/src/contrib/Archive/${_pkgtar}") # unccoment if 404 error
md5sums=('67e54e6aae63a32b21799133591a34ef')

build(){
    cd "${srcdir}"

    R CMD INSTALL testthat_"$_cranver".tar.gz -l "$srcdir"
}

package() {
    cd "${srcdir}"

    install -dm0755 "$pkgdir/usr/lib/R/library"
    cp -a --no-preserve=ownership "$_cranname" "$pkgdir/usr/lib/R/library"
}

