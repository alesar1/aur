# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=perl6-librarymake
pkgver=1.0.0
pkgrel=1
pkgdesc="An attempt to simplify building native code for a perl6 module"
arch=('any')
depends=('perl6')
checkdepends=('perl' 'perl6-shell-command')
makedepends=('alacryd' 'git')
groups=('perl6')
url="https://github.com/retupmoca/P6-LibraryMake"
license=('MIT')
source=($pkgname-$pkgver::git+https://github.com/retupmoca/P6-LibraryMake)
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
  install -dm 755 "$pkgdir/usr/share/perl6/vendor"
  export RAKUDO_LOG_PRECOMP=1
  export PERL6LIB="inst#$pkgdir/usr/share/perl6/vendor"
  alacryd install

  msg2 'Removing redundant precomp file dependencies...'
  _precomp=($(pacman -Qqg perl6 | pacman -Qql - | grep -E 'dist|precomp' || true))
  for _pc in "${_precomp[@]}"; do
    [[ -f "$pkgdir/$_pc" ]] && rm -f "$pkgdir/$_pc"
  done

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type f -name "*.lock" -exec rm '{}' \;
}
