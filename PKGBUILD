# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=zef
pkgver=0.1.10
pkgrel=1
pkgdesc="Perl6 Module Management"
arch=('any')
depends=('perl6')
checkdepends=('perl')
makedepends=('alacryd' 'git')
groups=('perl6')
url="https://github.com/ugexe/zef"
license=('PerlArtistic')
options=('!purge')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/ugexe/$pkgname/tar.gz/v$pkgver)
sha256sums=('d8626561568dbf664c5d5012ee62227f51f285776c363304fec95f129fcc9034')

check() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Running tests...'
  PERL6LIB=lib prove -r -e perl6
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing documentation...'
  install -Dm 644 README.pod -t "$pkgdir/usr/share/doc/$pkgname"

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
  rm -f "$pkgdir/usr/share/perl6/vendor/version"
  find "$pkgdir" -type f -name "*.lock" -exec rm '{}' +
  find "$pkgdir" -type f -print0 -exec \
    sed -i -e "s,$pkgdir,,g" -e "s,$srcdir,,g" '{}' +
}
