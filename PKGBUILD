# Maintainer: Jimmy Xu <me at jimmyxu dot org>

_perlmod='Prometheus-Tiny-Shared'
_modnamespace=Prometheus
pkgname=perl-prometheus-tiny-shared
pkgver=0.001
pkgrel=1
pkgdesc="A tiny Prometheus client backed by a shared memory region"
arch=("any")
url="http://search.cpan.org/dist/$_perlmod"
license=('GPL' 'PerlArtistic')
depends=('perl' 'perl-cache-fastmmap' 'perl-prometheus-tiny')
options=('!emptydirs')
source=("http://cpan.perl.org/modules/by-module/$_modnamespace/$_perlmod-$pkgver.tar.gz")
sha256sums=('ed4b2a9e5b044cf214874bd7c24dcd695e31c0f8cf8f0fe9a4de0ce4dc656d2c')

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
  make test
}

package() {
  cd "$srcdir/$_perlmod-$pkgver"
  make install DESTDIR="$pkgdir/"
}

# vim:set ts=2 sw=2 et:
