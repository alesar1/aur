# Contributor: John D Jones III <j[nospace]n[nospace]b[nospace]e[nospace]k[nospace]1972 -_AT_- the domain name google offers a mail service at ending in dot com>
# Generator  : CPANPLUS::Dist::Arch 1.25

pkgname='perl-net-packet-target'
pkgver='1.01'
pkgrel='1'
pkgdesc="an object for all network related stuff"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-class-gomor>=1.00' 'perl-net-packet>=3.00')
makedepends=()
url='http://search.cpan.org/dist/Net-Packet-Target'
source=('http://search.cpan.org/CPAN/authors/id/G/GO/GOMOR/Net-Packet-Target-1.01.tar.gz')
md5sums=('7165c14c0cd02ec082c27b05a9ba5874')
sha512sums=('18c12913b43f697e3851a3283f485a82ca88fe6caa7524c8047e17ae832e90b5cd7fd98b387c43f3244ec8797c16b88699b24596b58cdb2b8d0f9e46d5a66d2d')
_distdir="Net-Packet-Target-1.01"

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
