# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>

_gemname=cabin
pkgname=ruby-$_gemname
pkgver=0.7.1
pkgrel=1
pkgdesc='Experiments in structured and contextual logging'
arch=(any)
url='https://github.com/jordansissel/ruby-cabin'
license=('Apache License (2.0)')
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('6d99e7bdcaaa30f350e997e663d7f2a992326ed36b29ae7afb125bb135207c538ed2b886191669c34f771da97f95712542105c952ca107e8dae3b9410e654259')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
