# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=perl6-pdf
pkgver=0.0.3
pkgrel=1
pkgdesc="Low level tools for reading, writing and manipulation of PDF files"
arch=('any')
depends=('perl6'
         'perl6-compress-zlib'
         'perl6-crypt-rc4'
         'perl6-digest-md5'
         'perl6-json-fast'
         'perl6-pdf-grammar')
checkdepends=('perl')
makedepends=('alacryd' 'git')
groups=('perl6')
url="https://github.com/p6-pdf/perl6-PDF-Tools"
license=('PerlArtistic')
source=($pkgname-$pkgver::git+https://github.com/p6-pdf/perl6-PDF-Tools)
sha256sums=('SKIP')

check() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Running tests...'
  PERL6LIB=lib prove -r -e perl6
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing documentation...'
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"

  msg2 'Installing...'
  install -dm 755 "$pkgdir/usr/share/perl6/vendor"
  export RAKUDO_LOG_PRECOMP=1
  export PERL6LIB="inst#$pkgdir/usr/share/perl6/vendor"
  alacryd install

  msg2 'Removing redundant precomp file dependencies...'
  _precomp=($(pacman -Qqg perl6 | pacman -Qql - | grep -E 'dist|precomp|short' || true))
  for _pc in "${_precomp[@]}"; do
    [[ -f "$pkgdir/$_pc" ]] && rm -f "$pkgdir/$_pc"
  done

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type f -name "*.lock" -exec rm '{}' \;
  find "$pkgdir" -type f -print0 | xargs -0 sed -i "s,$pkgdir,,g"
}
