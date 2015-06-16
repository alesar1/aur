# Contributor: John D Jones III <j[nospace]n[nospace]b[nospace]e[nospace]k[nospace]1972 -_AT_- the domain name google offers a mail service at ending in dot com>
# Generator  : CPANPLUS::Dist::Arch 1.25

pkgname='perl-text-trim'
pkgver='1.02'
pkgrel='1'
pkgdesc="remove leading and/or trailing whitespace from strings"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl>=5')
makedepends=()
url='http://search.cpan.org/dist/Text-Trim'
source=('http://search.cpan.org/CPAN/authors/id/M/MA/MATTLAW/Text-Trim-1.02.tar.gz')
md5sums=('91506dcbef8201fd4645e885b631c0fa')
sha512sums=('d45981f5ab69276a713cf7e8c7229e00b322786bb6e0b8d06b3f303532bc2994582763a384a010954c4460eefaf80351d30c8a4f846b8f5337db6cef57b2b994')
_distdir="Text-Trim-1.02"

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
