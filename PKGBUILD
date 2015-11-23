# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=perl6-shell-command
pkgver=0.0.1
pkgrel=1
pkgdesc="Common shell command replacements"
arch=('any')
depends=('rakudo' 'perl6-file-find')
checkdepends=('perl')
makedepends=('git')
groups=('perl6')
url="https://github.com/tadzik/Shell-Command"
license=('MIT')
source=($pkgname-$pkgver::git+https://github.com/tadzik/Shell-Command)
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
  install -Dm 644 README -t "$pkgdir/usr/share/doc/$pkgname"

  msg2 'Installing...'
  mkdir -p "$pkgdir/usr/share/perl6/vendor/lib"
  find lib -mindepth 1 -maxdepth 1 -exec \
    cp -dpr --no-preserve=ownership '{}' "$pkgdir/usr/share/perl6/vendor/lib" \;
}
