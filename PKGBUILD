# Maintainer: Shengyu Zhang <la@archlinuxcn.org>

_gemname=em-websocket
pkgname=ruby-$_gemname
pkgver=0.5.1
pkgrel=1
pkgdesc='EventMachine based WebSocket server'
arch=('any')
url='https://github.com/igrigorik/em-websocket'
license=('MIT')
depends=('ruby'
    'ruby-eventmachine>=0.12.9'
    'ruby-http_parser.rb>=0.6.0' 'ruby-http_parser.rb<0.7'
    )
provides=("$pkgname=$pkgver")
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('SKIP')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
