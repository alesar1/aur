# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: courk <courk at courk dot fr>

_gemname=kaitai-struct
pkgname=ruby-$_gemname
pkgver=0.6
pkgrel=1
pkgdesc='Kaitai Struct: runtime library for Ruby'
arch=(any)
url='http://kaitai.io'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('1fa114752e87ed25230022d4e696656bd210f56d')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
