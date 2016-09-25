# Mantainer: 3ED <krzysztof1987 at gmail dot com>

pkgname=perl-net-mpd
_lastauthor=A/AB/ABERNDT
_pkgname=Net-MPD
pkgver=0.06
pkgrel=1
pkgdesc="a lightweight replacment for Audio::MPD"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl')
makedepends=('perl-module-build-tiny')
checkdepends=('perl-test-harness>=3.29')
url="https://metacpan.org/release/${_pkgname}"
source=(https://cpan.metacpan.org/authors/id/${_lastauthor}/${_pkgname}-${pkgver}.tar.gz)
sha256sums=('6c5caab6547b9b35bb196ba44ae78dc2dc56ea085f36268e58af5bcab2f27dc2')

build() {
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL="--skipdeps" \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'" \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    MODULEBUILDRC=/dev/null

  cd "${srcdir}/${_pkgname}-${pkgver}"
  perl Build.PL
  perl Build
}
check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  perl Build test
}
package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  perl Build install
}
