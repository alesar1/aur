# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: a-wing <1@233.email>

_gemname=bacon
pkgname=ruby-$_gemname
pkgver=1.2.0
pkgrel=1
pkgdesc='a small RSpec clone'
arch=(any)
url='http://github.com/chneukirchen/bacon'
license=()
depends=(ruby)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('85b19b68a33f1dc0e147ff08bad66f7cfc52de36')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
