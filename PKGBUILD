# Maintainer: Gilrain <gilrain+libre.arch A_T castelmo DOT_ re>
# Contributor: Carsten Feuls <archlinux@carstenfeuls.de>

_gemname=sawyer
pkgname=ruby-$_gemname
pkgver=0.9.2
pkgrel=1
pkgdesc="Secret User Agent of HTTP."
arch=(any)
url="https://github.com/lostisland/sawyer"
license=('MIT')
depends=('ruby' 'ruby-addressable>=2.3.5' 'ruby-faraday>=0.17.3')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('fa3a72d62a4525517b18857ddb78926aab3424de0129be6772a8e2ba240e7aca')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install --no-document -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
