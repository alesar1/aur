# Maintainer: generated by script at https://github.com/zasdfgbnm/aurcran

_pkgname=Rcpp
_pkgnamelower=rcpp
_repo='http://cran.stat.ucla.edu/'
_cran="https://cran.r-project.org/web/packages/$_pkgname/index.html"
pkgname=r-$_pkgnamelower
pkgver=0.12.6
pkgrel=1
pkgdesc='seamless r and c++ integration'
arch=(any)
url="http://www.rcpp.org, http://dirk.eddelbuettel.com/code/rcpp.html,
https://github.com/RcppCore/Rcpp"
license=('GPL')
depends=('r>=3.0.0')
makedepends=('curl' 'grep' 'python-html2text')

pkgver() {
    curl "$_cran" 2>/dev/null|html2text|grep -oP '(?<=Version:).*'|tr '-' '.'|grep -o '[0-9\.]*'
}

build() {
    Rscript -e "install.packages(\"$_pkgname\", lib=\"$srcdir\", repos=\"$_repo\")"
}

package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_pkgname" "$pkgdir/usr/lib/R/library"
}