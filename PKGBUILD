# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: a-wing <1@233.email>

_gemname=websocket-driver
pkgname=ruby-$_gemname
pkgver=0.7.0
pkgrel=3
pkgdesc='WebSocket protocol handler with pluggable I/O'
arch=(i686 x86_64)
url='https://github.com/faye/websocket-driver-ruby'
license=(MIT)
depends=(ruby ruby-websocket-extensions)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('393ca8cdfafc63e4ec27053fb1ed4548c6539e78')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
