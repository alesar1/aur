# Maintainer: Trizen <echo dHJpemVueEBnbWFpbC5jb20K | base64 -d>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname='perl-math-bignum'
pkgver='0.08'
pkgrel='1'
pkgdesc="Arbitrary size precision for integers, rationals and floating-point numbers"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-class-multimethods' 'perl-math-gmpq>=0.39' 'perl-math-gmpz' 'perl-math-mpfr>=3.29')
makedepends=()
url='https://metacpan.org/release/Math-BigNum'
source=("http://search.cpan.org/CPAN/authors/id/T/TR/TRIZEN/Math-BigNum-${pkgver}.tar.gz")
md5sums=('4409acd672e14b7555b8bf71e45064d0')
sha512sums=('e6329d3ec19b64b93fa49d68c243b7706f156d3a772c322dc3da5e0590d388283643deffaab4beb7aba79a4787d013f1429bbb7004113635542e7ed9fb693460')
_distdir="Math-BigNum-${pkgver}"

build() {
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                 \
      PERL_AUTOINSTALL=--skipdeps                            \
      PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
      PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
      MODULEBUILDRC=/dev/null

    cd "$srcdir/$_distdir"
    /usr/bin/perl Makefile.PL
    make
  )
}

check() {
  cd "$srcdir/$_distdir"
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""
    make test
  )
}

package() {
  cd "$srcdir/$_distdir"
  make install

  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}

# Local Variables:
# mode: shell-script
# sh-basic-offset: 2
# End:
# vim:set ts=2 sw=2 et:
