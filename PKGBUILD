# Maintainer: Trizen <echo dHJpemVueEBnbWFpbC5jb20K | base64 -d>

_pkgname=sidef
pkgname=sidef-git
pkgver=2.10.7.g2956aed
pkgrel=1
pkgdesc="A modern object-oriented programming language. (-git version)"
arch=('any')
url="https://github.com/trizen/sidef"
license=('GPLv3')

provides=('sidef')
conflicts=('sidef')

makedepends=('git' 'perl-module-build')

depends=('perl>=5.16.1' 'perl-data-dump')
optdepends=('perl-math-bigint-gmp: for faster numerical calculations')

source=('git://github.com/trizen/sidef.git')
md5sums=('SKIP')

pkgver() {
    cd $_pkgname
    git describe --always | sed -e 's|-|.|g'
}

package() {
    cd "$_pkgname"
    perl Build.PL --destdir "$pkgdir" --installdirs vendor
    ./Build
    ./Build test
    ./Build install --install_path script=/usr/bin

    cd "share/sidef"
    for i in *
    do
        install -Dm644 "$i" "$pkgdir/usr/share/$_pkgname/$i"
    done
}
