# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=xcpretty-travis-formatter
pkgname=ruby-$_gemname
pkgver=0.0.4
pkgrel=1
pkgdesc='xcpretty custom formatter for TravisCI'
arch=(any)
url='https://github.com/kattrali/xcpretty-travis-formatter'
license=(MIT)
depends=(ruby ruby-xcpretty)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('09f4c460dc60e98207c480b90be50408ee69c96c')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
