# Maintainer: Reik Keutterling <spielkind at gmail dot com>

_gemname=fusuma-plugin-tap
pkgname=ruby-$_gemname
pkgver=0.3.0
pkgrel=0
pkgdesc="Tap and Hold gestures plugin for Fusuma"
arch=(any)
url="https://github.com/iberianpig/fusuma-plugin-tap"
license=(MIT)
depends=(ruby ruby-fusuma)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('a7a20bf8d9664a30153654db360959c10dff9879')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
