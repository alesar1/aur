# Contributor: Trizen <trizenx@gmail.com>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname='perl-math-mpfr'
pkgver='3.32'
pkgrel='1'
pkgdesc="perl interface to the MPFR (floating point) library."
arch=('i686' 'x86_64')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl>=0' 'gmp>=6.1.0' 'mpfr>=3.1.3.p4')
makedepends=()
url='https://metacpan.org/release/Math-MPFR'
source=("http://search.cpan.org/CPAN/authors/id/S/SI/SISYPHUS/Math-MPFR-$pkgver.tar.gz")
md5sums=('1de355afd95eb38c099a66cf484eedc7')
sha512sums=('fab46416cf07180fe6bc8ea71aed7674738a202adb5d48bbc75ed5cbd3eb2356a3dc8f6cd839eeb6a053fd42d2c90e76d716311a4595321af9c2d545ddf69bd9')
_distdir="Math-MPFR-$pkgver"

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
