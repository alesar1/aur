# Maintainer: Trizen <echo dHJpemVueEBnbWFpbC5jb20K | base64 -d>

pkgname=sidef
pkgver=2.31
pkgrel=1
pkgdesc="A modern object-oriented programming language."
arch=('any')
url="https://github.com/trizen/${pkgname}"
license=('GPLv3')

makedepends=()
depends=('perl>=5.22.0' 'perl-data-dump' 'perl-math-gmpq>=0.41' 'perl-math-gmpz>=0.39' 'perl-math-mpfr>=3.29' 'perl-math-mpc')

source=("https://github.com/trizen/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('a99c84e679f56e8540654c558e9401c873963feee903acf90987f90c04b54a94')

package() {
    cd "$pkgname-$pkgver"

    perl Makefile.PL DESTDIR="$pkgdir" INSTALLDIRS=vendor
    make &&
    make test &&
    make install

    #cd "share/sidef"
    #for i in *
    #do
    #    install -Dm644 "$i" "$pkgdir/usr/share/$pkgname/$i"
    #done
}
