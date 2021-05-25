# Maintainer: Reik Keutterling <spielkind at gmail dot com>

_gemname=fusuma-plugin-appmatcher
pkgname=ruby-$_gemname
pkgver=0.1.3
pkgrel=1
pkgdesc="Fusuma plugin configure app-specific gestures"
arch=(any)
url="https://github.com/iberianpig/fusuma-plugin-appmatcher"
license=(MIT)
depends=(ruby ruby-fusuma ruby-dbus ruby-rexml)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('7cf030e0f61fde2ca053512677fdf3a570d57aaa')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
