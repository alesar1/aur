# Maintainer: Holger Schramm <dev@strace.it>
# Contributor: Austin Haedicke <austin.haedicke@gmail.com>
# Contributor: Jonathon Fernyhough <jonathon@manjaro.org>

pkgname=zef
pkgver=0.11.5
pkgrel=1
pkgdesc="Rakudo (Perl6) Module Management"
arch=('any')
depends=('perl6')
checkdepends=('perl')
makedepends=('git')
groups=('perl6')
url="https://github.com/ugexe/zef"
license=('PerlArtistic')
options=('!purge')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/ugexe/$pkgname/tar.gz/v$pkgver)
sha256sums=('3aa71a781e5cbcf3389aef786da447071d3b11edb0faba5bdd45e0acc30401c8')

check() {
  cd "$srcdir/$pkgname-$pkgver"

  printf 'Running tests...\n'
  PERL6LIB=lib prove -r -e perl6
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  printf 'Installing documentation...\n'
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"

  printf 'Installing...\n'
  export RAKUDO_LOG_PRECOMP=1
  export RAKUDO_RERESOLVE_DEPENDENCIES=0
  perl6-install-dist \
    --to="$pkgdir/usr/share/perl6/vendor" \
    --for=vendor \
    --from=.
}
