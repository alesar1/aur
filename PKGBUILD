# Maintainer: Ganymede < ganymede _AT_ analogon _DOT_ eu>

pkgname=perl-file-libmagic
pkgver=1.22
pkgrel=1
pkgdesc="Determine MIME types of data or files using libmagic"
arch=('any')
url="https://metacpan.org/release/File-LibMagic"
license=('GPL' 'PerlArtistic')
depends=('perl' 'file')
makedepends=('perl-config-autoconf' 'perl-test-fatal')
options=('!emptydirs')
source=(https://cpan.metacpan.org/authors/id/D/DR/DROLSKY/File-LibMagic-$pkgver.tar.gz)
sha256sums=('93639bd076849e93a020fea1507f0a2b3467b8792eb5c306f2aacbbfb4d080d6')

build() {
  cd "$srcdir/File-LibMagic-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1
  /usr/bin/perl Makefile.PL
  make
}

check() {
  cd "$srcdir/File-LibMagic-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1
  make test
}

package() {
  cd "$srcdir/File-LibMagic-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  make install INSTALLDIRS=vendor DESTDIR="$pkgdir"
  find "$pkgdir" -name '.packlist' -delete
  find "$pkgdir" -name '*.pod' -delete
}
