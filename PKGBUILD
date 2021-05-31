# Generated by Xyne::Arch::CPAN 0.07

pkgname=perl-crypt-argon2
pkgver=0.011
pkgrel=1
pkgdesc="This module implements the Argon2 key derivation function."
arch=('any')
url="https://metacpan.org/pod/Crypt::Argon2"
license=('PerlArtistic')
source=("https://cpan.metacpan.org/authors/id/L/LE/LEONT/Crypt-Argon2-$pkgver.tar.gz")
md5sums=('8cf835676ad6af20a839b9aefd9e3ffc')
sha256sums=('56ee2e3a827c7181e62c0c1d43fb5a3d7119d8a087f23b8adc17626fad47caa4')
depends=('perl')
makedepends=('perl-module-build')
options=(!emptydirs)

build() {
  _dir=$(find $srcdir -maxdepth 2 -type f -name 'Makefile.PL')
  if [ ! -z "$_dir" ]; then
    cd $(dirname "$_dir")
    PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
    make

  else
  _dir=$(find $srcdir -maxdepth 2 -type f -name 'Build.PL')
  if [ ! -z "$_dir" ]; then
    cd $(dirname "$_dir")
    PERL_MM_USE_DEFAULT=1 perl Build.PL INSTALLDIRS=vendor
    ./Build

  else
    echo "error: failed to detect build method for $pkgname"
    echo "you may be able to fix this by editing the PKGBUILD"
    return 1
  fi fi

}

package() {
echo "pkg starts here"
  _dir=$(find $srcdir -maxdepth 2 -type f -name 'Makefile.PL')
  if [ ! -z "$_dir" ]; then
    cd $(dirname "$_dir")
    make install DESTDIR="${pkgdir}"

  else
  _dir=$(find $srcdir -maxdepth 2 -type f -name 'Build.PL')
  if [ ! -z "$_dir" ]; then
    cd $(dirname "$_dir")
    ./Build install destdir=${pkgdir}

  else
    echo "error: failed to detect build method for $pkgname"
    echo "you may be able to fix this by editing the PKGBUILD"
    return 1
  fi fi

  # remove perllocal.pod and .packlist
  find ${pkgdir} -name perllocal.pod -delete
  find ${pkgdir} -name .packlist -delete
}

# vim:set ts=2 sw=2 et:


