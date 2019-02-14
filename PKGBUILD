# Maintainer: François Freitag <mail at franek dot fr>
# Contributor: Victor van den Elzen <victor.vde at gmail dot com>
pkgname=pgbadger
pkgver=10.3
pkgrel=1
pkgdesc="A fast PostgreSQL Log Analyzer"
arch=("any")
url="https://github.com/darold/pgbadger"
license=("custom:PostgreSQL")
depends=('perl>=5.10.0')
optdepends=(
  "perl-text-csv-xs: parse PostgreSQL CSV log files"
  "perl-json-xs: export statistics as JSON file"
)
options=('!emptydirs')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('361ff552b207b0b31108181add98b374ed19aca6f25eed2d217fef070f083917')

build() {
  # Override perl command line options we don't want. Source:
  # https://wiki.archlinux.org/index.php/Perl_Policy#Vendor
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL=--skipdeps \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'" \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    PERL5LIB="" PERL_LOCAL_LIB_ROOT="" \
    MODULEBUILDRC=/dev/null

  cd "${srcdir}/pgbadger-${pkgver}"
  /usr/bin/perl Makefile.PL
  make
}

package() {
  # Override perl command line options we don't want. Source:
  # https://wiki.archlinux.org/index.php/Perl_Policy#Vendor
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL=--skipdeps \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'" \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    PERL5LIB="" PERL_LOCAL_LIB_ROOT="" \
    MODULEBUILDRC=/dev/null

  cd "${srcdir}/pgbadger-${pkgver}"

  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  make pure_vendor_install INSTALLDIRS=vendor DESTDIR="${pkgdir}"

  # Remove perllocal.pod and .packlist
  find "${pkgdir}" \( -name .packlist -o -name perllocal.pod \) -delete
}
