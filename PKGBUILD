# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Carsten Feuls <archlinux@carstenfeuls.de>

_gemname=net-http-persistent
pkgname=ruby-$_gemname
pkgver=3.0.0
pkgrel=1
pkgdesc='Manages persistent connections using Net::HTTP plus a speed fix for Ruby 1.8'
arch=(any)
url='http://docs.seattlerb.org/net-http-persistent'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('239d6a0be13c68b171301b146d0c8e0390e28903')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
