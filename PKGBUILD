# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>

_gemname=mpd
pkgname=ruby-$_gemname
pkgver=0.17.0
pkgrel=1
pkgdesc='MPD controller library.'
arch=(any)
url='http://github.com/meh/ruby-mpd'
license=()
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('2255ce43aed5484ae6f62d5e7b0e92011399d6a244d2cc7167d0cef0f51e01042a69ed4903e46cefe37af1b7beb5c106eeb4c7e5179d7a5736ef89c78c4c72b4')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
