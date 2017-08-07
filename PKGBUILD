# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=perl6-terminal-wcwidth
pkgver=0.1.0
pkgrel=3
pkgdesc="Returns what the character width should be on the terminal"
arch=('any')
depends=('perl6')
checkdepends=('perl')
makedepends=('git')
groups=('perl6')
url="https://github.com/bluebear94/Terminal-WCWidth"
license=('MIT')
source=($pkgname-$pkgver::git+https://github.com/bluebear94/Terminal-WCWidth)
sha256sums=('SKIP')

check() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Running tests...'
  PERL6LIB=lib prove -r -e perl6
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

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
