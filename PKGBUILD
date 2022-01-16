# Maintainer: Jimmy Xu <me at jimmyxu dot org>
# Contributor: xRemaLx <anton dot komolov at gmail dot com>
# Contributor: Caleb Cushing <xenoterracide at gmail dot com>

_perlmod='Cache-FastMmap'
_modnamespace=Cache
pkgname=perl-cache-fastmmap
pkgver=1.57
pkgrel=1
pkgdesc="Uses an mmap'ed file to act as a shared memory interprocess cache"
arch=("x86_64" "i686")
url="http://search.cpan.org/dist/$_perlmod"
license=('GPL' 'PerlArtistic')
depends=('perl')
options=('!emptydirs')
source=("http://cpan.perl.org/modules/by-module/$_modnamespace/$_perlmod-$pkgver.tar.gz")
sha256sums=('e04b3a28d989edb8fb96eafacdc2b87f9eccb84f047eb2e27cb26aa7d08cc7b8')

build() {
  cd "$srcdir/$_perlmod-$pkgver"

  # Install module in vendor directories.
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  make
}

check() {
  cd "$srcdir/$_perlmod-$pkgver"

  # Install module in vendor directories.
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  #make test
}

package() {
  cd "$srcdir/$_perlmod-$pkgver"
  make install DESTDIR="$pkgdir/"
}

# vim:set ts=2 sw=2 et:
