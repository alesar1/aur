# Maintainer: Trizen <echo dHJpemVueEBnbWFpbC5jb20K | base64 -d>

_pkgname=sidef
pkgname=sidef-git
pkgver=2.26
pkgrel=1
pkgdesc="A modern object-oriented programming language. (-git version)"
arch=('any')
url="https://github.com/trizen/sidef"
license=('GPLv3')

provides=('sidef')
conflicts=('sidef')

makedepends=('git')
depends=('perl>=5.22.0' 'perl-data-dump' 'perl-math-gmpq>=0.39' 'perl-math-gmpz' 'perl-math-mpfr>=3.29' 'perl-math-mpc')

source=('git://github.com/trizen/sidef.git')
md5sums=('SKIP')

pkgver() {
    cd $_pkgname
    git describe --always | sed -e 's|-|.|g'
}

package() {
    cd "$_pkgname"

    #perl Build.PL --destdir "$pkgdir" --installdirs vendor
    #./Build
    #./Build test
    #./Build install --install_path script=/usr/bin

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
