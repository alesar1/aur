# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Maintainer: Jonne Haß <me@mrzyx.de>

set -u
_perlmod='Text-Levenshtein'
_modnamespace="${_perlmod%%-*}"
pkgname="perl-${_perlmod,,}"
pkgver='0.13'
pkgrel='1'
pkgdesc="Perl CPAN ${_perlmod//-/::} - An implementation of the Levenshtein edit distance"
arch=('any')
url="https://metacpan.org/release/${_perlmod}"
license=('unknown')
depends=('perl>=5.10.0')
options=('!emptydirs')
_verwatch=("http://www.cpan.org/modules/by-module/${_modnamespace}/" "${_perlmod}-\([0-9\.]*\)\.tar\.gz" 'l')
_srcdir="${_perlmod}-${pkgver}"
source=("${_verwatch[0]}${_perlmod}-${pkgver}.tar.gz")
sha256sums=('3a7cbf0bb79fca33d92618f6d8c2ae4b5e2ee5b43729142a9b8ad9d8a678d11f')

build() {
  set -u
  cd "${_srcdir}"

  # Install module in vendor directories.
  PERL_MM_USE_DEFAULT=1 perl 'Makefile.PL' INSTALLDIRS='vendor'
  make
  set +u
}

check() {
  set -u
  cd "${_srcdir}"
  make test
  set +u
}

package() {
  set -u
  cd "${_srcdir}"
  make install DESTDIR="${pkgdir}"
  set +u
}
set +u
