# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>

_gemname=journey
pkgname=ruby-$_gemname
pkgver=1.0.4
pkgrel=1
pkgdesc='Journey is a router'
arch=(any)
url='http://github.com/rails/journey'
license=()
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('9e6a06da8b77f6efb9941c58f53254e8cf3a1ebb6f8261a66ef3fed9c21ff4e4a90567fee88507b8e2c1fecc0fbdf204a9d3c8473b671bbb4b8c6b9faa6f2a07')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
