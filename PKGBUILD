# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=slack-notifier
pkgname=ruby-$_gemname-1
pkgver=1.5.1
pkgrel=1
pkgdesc='A slim ruby wrapper for posting to slack webhooks'
arch=(any)
url='http://github.com/stevenosloan/slack-notifier'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('d4bdc9601bfde9bcb943e54fd40d92a2fa9fea87')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
