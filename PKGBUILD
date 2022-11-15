# Contributor: farawayer <farwayer@gmail.com>

_gemname=nanaimo
pkgname=ruby-$_gemname
pkgver=0.3.0
pkgrel=1
pkgdesc='A library for (de)serialization of ASCII Plists.'
arch=(any)
url='https://github.com/CocoaPods/Nanaimo'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('1543ca5035afd854121ed9a99201c8acfba8f416')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
