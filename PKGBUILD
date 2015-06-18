# Maintainer: Levente Polyak <levente[at]leventepolyak[dot]net>
# Contributor: Steven Allen <steven@stebalien.com>
# Contributor: Magnus Woldrich <magnus@trapd00r.se>

pkgname='perl-term-extendedcolor'
_cpanname='Term-ExtendedColor'
pkgver=0.224
pkgrel=2
pkgdesc="Like Term::ANSIColor, but for the extended colorset"
arch=('any')
url='http://search.cpan.org/dist/Term-ExtendedColor'
license=('PerlArtistic' 'GPL')
depends=('perl>=5.10.0')
options=('!emptydirs')
source=(http://search.cpan.org/CPAN/authors/id/W/WO/WOLDRICH/Term-ExtendedColor-${pkgver}.tar.gz)
sha512sums=('d4d5ccd3b1a8ffd4a15fa360bbcda0167fcce1fcc128da5fc23e05f891e3e1e403250c43d358ce16f6cab7034a67d76cc3bd8ed2926185f75208cd6d3b9d4547')

build() {
  cd ${_cpanname}-${pkgver}
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  make
}

check() {
  cd ${_cpanname}-${pkgver}
  make test
}

package() {
  cd ${_cpanname}-${pkgver}

  make DESTDIR="${pkgdir}" install

  install -Dm 644 README "${pkgdir}/usr/share/doc/${pkgname}/README"
  install -d "${pkgdir}/usr/share/doc/${pkgname}/examples"
  install -m 644 examples/* "${pkgdir}/usr/share/doc/${pkgname}/examples/"
}

# vim: ts=2 sw=2 et:
