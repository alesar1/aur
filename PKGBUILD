# Maintainer: farawayer <farwayer@gmail.com>

_gemname=jwt
pkgname=ruby-$_gemname
pkgver=2.2.1
pkgrel=1
pkgdesc='JSON Web Token implementation in Ruby'
arch=(any)
url='http://github.com/jwt/ruby-jwt'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('383136036dc768c7dcae69f2722ef23c9efbbc15')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
