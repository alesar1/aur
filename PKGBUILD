# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=xcpretty
pkgname=ruby-$_gemname
pkgver=0.2.4
pkgrel=2
pkgdesc='xcodebuild formatter done right'
arch=(any)
url='https://github.com/supermarin/xcpretty'
license=(MIT)
depends=(
  ruby
  'ruby-rouge<2' 'ruby-rogue>=1.8'
)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('82bcc329bf3092a1f4fb4684d725c6bf401f7038')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
