# Maintainer: Reik Keutterling <spielkind at gmail dot com>

_gemname=fusuma-plugin-wmctrl
pkgname=ruby-$_gemname
pkgver=1.0.1
pkgrel=1
pkgdesc="Window Manager plugin for Fusuma"
arch=(any)
url="https://github.com/iberianpig/fusuma-plugin-wmctrl"
license=(MIT)
depends=(ruby ruby-fusuma wmctrl)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('ce8465f808dc4da84eadaa76bf54060dce13ce56')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
