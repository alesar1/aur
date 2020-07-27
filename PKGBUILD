# Maintainer: Kevin Velickovic <kevin dot velickovic at gmail dot com>
# Maintainer: Reik Keutterling <spielkind at gmail dot com>

_gemname=fusuma
pkgname=ruby-$_gemname
pkgver=1.11.1
pkgrel=1
pkgdesc="Fusuma is multitouch gesture recognizer."
arch=(any)
url="https://github.com/iberianpig/fusuma"
license=(MIT)
depends=(ruby)
optdepends=('xdotool: Used to send shortcuts on Xorg'
            'ruby-fusuma-plugin-sendkey: Fusuma plugin that sending virtual keyboard events'
            'ruby-fusuma-plugin-keypress: Keypress combination plugin for Fusuma'
            'ruby-fusuma-plugin-tap: Window Manager plugin for Fusuma'
            'ruby-fusuma-plugin-wmctrl: Tap and Hold gestures plugin for Fusuma')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('6f839f073d64af2573e9264c561fd1ae675b9f8f')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
