# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Hyacinthe Cartiaux <hyacinthe.cartiaux@free.fr>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Alexsandr Pavlov <kidoz at mail dot ru>

_gemname=bundler
pkgname=ruby-$_gemname
pkgver=1.10.3
pkgrel=1
pkgdesc="Is manages an application's dependencies through its entire life, across many machines, systematically and repeatably"
arch=(any)
url='http://bundler.io/'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('9c2c7093468c763eeadad47dae9de4d7ed2e6f08e80a130d1b0d6db6a46608cc')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
