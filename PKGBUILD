# Maintainer: Bert Peters <bert@bertptrs.nl>

_gemname=sassc
pkgname=ruby-$_gemname
pkgver=2.2.1
pkgrel=1
pkgdesc='Use libsass with Ruby!'
arch=('x86_64')
url='https://github.com/sass/sassc-ruby'
license=(MIT)
depends=(ruby ruby-ffi)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('3fea2409ee4a890f8c8ebc4fb6163fe2c58ef6be7b7a586c64b0fc924f8b7625')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
