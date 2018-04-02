# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=perl6-cro-zeromq
pkgver=0.7.4
pkgrel=1
pkgdesc="ZeroMQ support for the Cro library for building distributed systems in Perl 6"
arch=('any')
depends=('cro'
         'perl6'
         'perl6-cro-core'
         'perl6-net-zmq')
checkdepends=('perl')
makedepends=('git')
groups=('croservices' 'perl6')
url="https://github.com/croservices/cro-zeromq"
license=('PerlArtistic')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/croservices/${pkgname##perl6-}/tar.gz/release-$pkgver)
sha256sums=('ddc081773bc1d0f9bc39f511138db4b1ab6fe2e7f4241b01eadf89bb8ee0c96c')

check() {
  cd "$srcdir/${pkgname##perl6-}-release-$pkgver"

  msg2 'Running tests...'
  PERL6LIB=lib prove -r -e perl6
}

package() {
  cd "$srcdir/${pkgname##perl6-}-release-$pkgver"

  msg2 'Installing license...'
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"

  msg2 'Installing documentation...'
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"

  msg2 'Installing...'
  export RAKUDO_LOG_PRECOMP=1
  export RAKUDO_RERESOLVE_DEPENDENCIES=0
  perl6-install-dist \
    --to="$pkgdir/usr/share/perl6/vendor" \
    --for=vendor \
    --from=.
}
