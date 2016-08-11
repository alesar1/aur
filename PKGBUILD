# Maintainer: generated by script at https://github.com/zasdfgbnm/aurcran

_pkgname=digest
_pkgnamelower=digest
_repo='http://cran.stat.ucla.edu/'
_cran="https://cran.r-project.org/web/packages/$_pkgname/index.html"
pkgname=r-$_pkgnamelower
pkgver=0.6.10
pkgrel=1
pkgdesc='create compact hash digests of r objects'
arch=(any)
url="http://dirk.eddelbuettel.com/code/digest.html"
license=('GPL2')
depends=('r>=2.4.1')
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