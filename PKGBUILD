# CPAN Name  : URI-Find
# Maintainer: jason ryan <jasonwryan@gmail.com>
# Contributor: Caleb Cushing <xenoterracide@gmail.com>

pkgname='perl-uri-find'
_cpanname='URI-Find'
pkgver='20140709'
pkgrel='2'
pkgdesc="Find URIs in plain text"
arch=('any')
url='http://search.cpan.org/dist/URI-Find'
license=('PerlArtistic' 'GPL')
depends=('perl' 'perl-uri>=1.00')
options=('!emptydirs')
md5sums=('a32b1b2e6467b92ee1629f0d4da3c24c')
validpgpkeys=('7817E3FF578EEEE19F64D40C445E52EAB1BD4E40')  # jason ryan
source=("http://search.cpan.org/CPAN/authors/id/M/MS/MSCHWERN/${_cpanname}-${pkgver}.tar.gz")

build() {
    cd "${_cpanname}-${pkgver}"
    export PERL_MM_USE_DEFAULT=1 PERL5LIB=""               \
    PERL_AUTOINSTALL=--skipdeps                            \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    MODULEBUILDRC=/dev/null
    /usr/bin/perl Build.PL
    /usr/bin/perl Build 
}

check(){
    cd "${_cpanname}-${pkgver}"
    /usr/bin/perl Build test
}

package() {
    cd "${_cpanname}-${pkgver}"
    /usr/bin/perl Build install
    find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}

