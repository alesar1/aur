# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Max Pray a.k.a. Synthead <synthead@gmail.com>
# Contributor: Ruben Kelevra <ruben@vfn-nrw.de>

pkgname="perl-dbix-searchbuilder"
_cpanname="DBIx-SearchBuilder"
pkgver="1.68"
pkgrel="1"
pkgdesc="Encapsulate SQL queries and rows in simple perl objects."
arch=("any")
url="https://cpan.metacpan.org/authors/id/B/BP/BPS/${_cpanname}-${pkgver}.tar.gz"
license=("GPL" "PerlArtistic")
depends=(
  "perl-cache-simple-timedexpiry"
  "perl-capitalization"
  "perl-class-accessor"
  "perl-class-returnvalue"
  "perl-clone"
  "perl-dbd-sqlite"
  "perl-dbix-dbschema"
  "perl-devel-stacktrace>=1.30"
  "perl-want"
  "perl>=5.5.0"
)
options=("!emptydirs")
source=("https://cpan.metacpan.org/authors/id/B/BP/BPS/${_cpanname}-${pkgver}.tar.gz")
sha256sums=('be197c0f83c426996f77d22126f3103f958fc4bd1791c6962b793cc2779601f8')

# Function to change to the working directory and set
# environment variables to override undesired options.
prepareEnvironment() {
  cd "$srcdir/$_cpanname-$pkgver"
  export \
    PERL_MM_USE_DEFAULT=1 \
    PERL_AUTOINSTALL=--skipdeps \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'" \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    MODULEBUILDRC=/dev/null
}

build() {
  prepareEnvironment
  /usr/bin/perl Makefile.PL
  make
}

check() {
  prepareEnvironment
  make test
}

package() {
  prepareEnvironment
  make install

  # Remove "perllocal.pod" and ".packlist".
  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}
