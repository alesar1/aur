# Maintainer: Damien Molinier <damien-43\N{COMMERCIAL AT}gmx.fr>

_distname='CBOR-XS'

pkgname=perl-cbor-xs
pkgver=1.82
pkgrel=1
pkgdesc='Concise Binary Object Representation'
arch=('x86_64' 'i686')
license=('GPL')
options=('!emptydirs')
depends=('perl' 'perl-types-serialiser' 'perl-common-sense')
url="https://metacpan.org/release/${_distname}"
source=("https://cpan.metacpan.org/authors/id/M/ML/MLEHMANN/${_distname}-${pkgver}.tar.gz"
        "kill-canary.patch")
sha512sums=('ec73ae208c92b22d8938c70748e6a3d4ba0d279ac515598b6d363f4c91b0c6353f4b0df3581b31d8c1c255d37ef5e6c779a04b58abc189d0e93eee21fc44bac6'
            '930bea1d5cfad6bfdf09db9a6532ce4eb584adda3182d34d00f547bc918a0c9eb7cefbd2ace5a8eb7acda9275f4143961b0581747d6cc795988891e99c638ead')

prepare() {
  cd "${srcdir}/${_distname}-${pkgver}"
  patch -p1 < "${srcdir}/kill-canary.patch"
}

build() {
  cd "${srcdir}/${_distname}-${pkgver}"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT='1' PERL_AUTOINSTALL='--skipdeps'
  perl Makefile.PL INSTALLDIRS='vendor'
  make
}

check() {
  cd "${srcdir}/${_distname}-${pkgver}"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1
  make test
}

package() {
  cd "${srcdir}/${_distname}-${pkgver}"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  make install DESTDIR="${pkgdir}"
  find "${pkgdir}" \( -name .packlist -or -name perllocal.pod \) -delete
}

# vim:set ts=2 sw=2 et:
