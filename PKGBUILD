# Contributor: ordoban <dirk.langer@vvovgonik.de>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname='perl-moosex-enumeration'
pkgver='0.008'
pkgrel='1'
pkgdesc="a native attribute trait for enums"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-module-runtime>=0' 'perl-moose>=1.15' 'perl-match-simple>=0' 'perl>=5.8.1')
makedepends=()
checkdepends=('perl-test-fatal>=0' 'perl-test-requires>=0.006')
url='https://metacpan.org/release/MooseX-Enumeration'
source=('https://cpan.metacpan.org/authors/id/T/TO/TOBYINK/MooseX-Enumeration-0.008.tar.gz')
md5sums=('cbed709ecf12c578d32b7f6492493f1a')
sha512sums=('5682978fb2efd8bdf4105dca92d442ca0c6d3604b48aa42388c57854cfbb36ce40c677cf5340f432b034a267fd581e3df63754b39dc6b8900b1e0b0e360cc29a')
_distdir="MooseX-Enumeration-0.008"

build() {
  export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                      \
         PERL_AUTOINSTALL=--skipdeps                            \
         PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
         PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
         MODULEBUILDRC=/dev/null

  cd "$srcdir/$_distdir"
  /usr/bin/perl Makefile.PL
  make
}

check() {
  cd "$srcdir/$_distdir"
  export PERL_MM_USE_DEFAULT=1 PERL5LIB="."
  make test
}

package() {
  cd "$srcdir/$_distdir"
  make install

  find "$pkgdir" \( -name .packlist -o -name perllocal.pod \) -delete
}

# Local Variables:
# mode: shell-script
# sh-basic-offset: 2
# End:
# vim:set ts=2 sw=2 et:
