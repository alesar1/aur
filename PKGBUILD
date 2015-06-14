# Maintainer: Piotr Rogoża <rogoza dot piotr at gmail dot com>
# Contributor: Jonathas Rodrigues
# vim:set ts=2 sw=2 et ft=sh tw=100: expandtab

_author=A/AD/ADAMK
_perlmod=ORLite
pkgname=perl-orlite
pkgver=1.98
pkgrel=2
pkgdesc='ORLite - Extremely light weight SQLite-specific ORM'
arch=('any')
url="http://search.cpan.org/dist/ORLite"
license=('GPL' 'PerlArtistic')
depends=(
perl-file-remove 
perl-dbd-sqlite 
perl-params-util 
)
makedepends=(
perl-test-script
)
options=(!emptydirs)
source=("http://search.cpan.org/CPAN/authors/id/$_author/$_perlmod-$pkgver.tar.gz")

build(){
  cd "$srcdir"/$_perlmod-$pkgver
  
  # Setting these env variables overwrites any command-line-options we don't want...
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL=--skipdeps \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'" \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    MODULEBUILDRC=/dev/null

  # If using Makefile.PL
  if [ -r Makefile.PL ]; then
    /usr/bin/perl Makefile.PL
    make
  # If using Build.PL
  elif [ -r Build.PL ]; then
    /usr/bin/perl Build.PL
    perl Build
  fi
}
check(){
  cd "$srcdir"/$_perlmod-$pkgver

  # If using Makefile.PL
  if [ -r Makefile.PL ]; then
    make test
  # If using Build.PL
  elif [ -r Build.PL ]; then
    perl Build test
  fi
}
package(){
  cd "$srcdir"/$_perlmod-$pkgver
  
  # If using Makefile.PL
  if [ -r Makefile.PL ]; then
    make install
  # If using Build.PL
  elif [ -r Build.PL ]; then
    perl Build install
  fi

  # remove perllocal.pod and .packlist
  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}
md5sums=('25912f777daf95114e10f4b3e3a3c35a')
