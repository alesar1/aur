# Maintainer: Jens Adam <jra@byte.cx>

_perlmod=Travel-Status-DE-IRIS
pkgname=perl-travel-status-de-iris
pkgver=1.04
pkgrel=1
pkgdesc='Interface to IRIS-based web departure monitors (as used by DeutscheBahn)'
url='http://finalrewind.org/projects/Travel-Status-DE-IRIS/'
license=('PerlArtistic')
arch=('any')
depends=('perl-class-accessor' 'perl-datetime' 'perl-datetime-format-strptime'
         'perl-list-compare' 'perl-list-moreutils' 'perl-list-utilsby' 'perl-libwww'
         'perl-text-levenshtein' 'perl-xml-libxml')
makedepends=('perl-module-build' 'perl-test-compile' 'perl-test-fatal' 'perl-test-pod')
options=('!emptydirs')
validpgpkeys=('781BB7071C6BF648EAEB08A1100D5BFB5166E005')
source=("http://finalrewind.org/projects/${_perlmod}/${_perlmod}-${pkgver}.tar.gz"{,.asc})
md5sums=('ce040885c265f8ffef8be106294db1ef' '237b482ee675ffb3cae39255b8d441d7')

build() {
  cd "${srcdir}"/${_perlmod}-${pkgver}
  sed -i 's/Text::LevenshteinXS/Text::Levenshtein/' Build.PL lib/Travel/Status/DE/IRIS/Stations.pm
  perl Build.PL installdirs=vendor destdir="${pkgdir}"
  ./Build
}

check() {
  cd "${srcdir}"/${_perlmod}-${pkgver}
  ./Build test
}

package() {
  cd "${srcdir}"/${_perlmod}-${pkgver}
  ./Build install
}
