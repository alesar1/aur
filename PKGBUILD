# Maintainer: Shengyu Zhang <la@archlinuxcn.org>

_gemname=em-websocket
pkgname=ruby-$_gemname
pkgver=0.5.1
pkgrel=2
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
source=("https://rubygems.org/downloads/$_gemname-$pkgver.gem"
        'LICENCE'
        )
noextract=($_gemname-$pkgver.gem)
sha512sums=('ca67da805a67ca7ff840cf58836e6abe5e7a965d50de529cc624b214a1cd8bd4b48ee469ab2266bd80040c94315d59f8fb5903bbf543240fbbe90e80bede0702'
            '70d165a57fd28a316027c97da6dc73cb2ca26e8c58f14414d7e109247abd5c9af435ecfe482e2b007764497471327b33d39ce13c86eb1d8a93ed5f62db96cee6'
)

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$srcdir/LICENCE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
