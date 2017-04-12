# Maintainer: Yardena Cohen <yardenack at gmail dot com>

cpaname=Math-NumSeq
cpanauthor=KRYDE
pkgname='perl-math-numseq'
pkgver='71'
pkgrel='1'
pkgdesc="number sequences"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-file-homedir>=0' 'perl-math-factor-xs>=0.40' 'perl-math-libm>=0' 'perl-math-prime-xs>=0.23' 'perl-module-pluggable>=0' 'perl-module-util>=0' 'perl-constant-defer>=1' 'perl>=5.004')
makedepends=()
url=http://search.cpan.org/dist/${cpaname}
source=("http://search.cpan.org/CPAN/authors/id/${cpanauthor::1}/${cpanauthor::2}/${cpanauthor}/${cpaname}-${pkgver}.tar.gz")
md5sums=('c3d6104e4ce98cbb2b46239ed258c2cf')
sha512sums=('2679d6b28523b172e1ac4b48b018e896c083d1d45227fd0bd4d156c6dc2862edb234888701ce4019234a7cff888cf84bf72b4e8ebd2f5d78fb5ae12c8374ce2d')

build() {
  cd "${srcdir}/${cpaname}-${pkgver}"
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                 \
      PERL_AUTOINSTALL=--skipdeps                            \
      PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
      PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
      MODULEBUILDRC=/dev/null
    /usr/bin/perl Makefile.PL
    make
  )
}

check() {
  cd "${srcdir}/${cpaname}-${pkgver}"
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""
    make test
  )
}

package() {
  cd "${srcdir}/${cpaname}-${pkgver}"
  make install

  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}
