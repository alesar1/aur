# Maintainer: Chad Harp <chad.harp@mac.com>
# Contributor: FadeMind <fademind@gmail.com>
# Contributor: TDY <tdy@archlinux.info>
# Contributor: Sven Salzwedel <sven_salzwedel@web.de>
# Contributor: Olaf Leidinger <leidola@newcon.de>

pkgname=perl-pdf-api2
pkgver=2.027
pkgrel=1
pkgdesc="A module chain to faciliate the creation and modification of high-quality PDF files"
_dist=PDF-API2
arch=('any')
url="https://metacpan.org/release/PDF-API2"
license=('LGPL')
depends=('perl>=5.8.5' 'perl-font-ttf')
options=('!emptydirs' 'purge')
source=("$_dist-$pkgver.tar.gz::http://cpan.metacpan.org/authors/id/S/SS/SSIMMS/$_dist-$pkgver.tar.gz")
sha256sums=('d24db02d902198406270551857830633b289ad39f5a9ba5431246f8cd60e7599')

build() {
  cd "$srcdir/$_dist-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL=--skipdeps
  /usr/bin/perl Makefile.PL
  make
}

check() {
  cd "$srcdir/$_dist-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1
  make test
}

package() {
  cd "$srcdir/$_dist-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_LOCAL_LIB_ROOT
  make install INSTALLDIRS=vendor DESTDIR="$pkgdir"
}

# vim:set ts=2 sw=2 et:
