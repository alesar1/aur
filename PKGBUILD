# Maintainer: Kevin Velickovic <kevin dot velickovic at gmail dot com>
# Maintainer: Reik Keutterling <spielkind at gmail dot com>

_gemname=fusuma
pkgname=ruby-$_gemname
pkgver=0.10.2
pkgrel=1
pkgdesc="Fusuma is multitouch gesture recognizer."
arch=(any)
url="https://github.com/iberianpig/fusuma"
license=(MIT)
depends=(ruby xdotool)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('5d32daf9391a0e3a8aa167399e868457be269e14')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
