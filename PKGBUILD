# Generated with gembuild (https://github.com/mfinelli/gembuild)
# Maintainer: Colin Arnott <colin@urandom.co.uk>

pkgname=ruby-bcrypt
pkgver=3.1.11
pkgrel=1
pkgdesc='bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project
    for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling
    passwords.'
arch=('any')
url='https://github.com/codahale/bcrypt-ruby'
license=('MIT')
options=(!emptydirs)
noextract=($_gemname-$pkgver.gem)
depends=('ruby')
makedepends=('rubygems')
source=(https://rubygems.org/downloads/${pkgname#ruby-}-$pkgver.gem)
noextract=(${pkgname#ruby-}-$pkgver.gem)
sha512sums=('bf9ff0d3cdd7044b4ee5796cd04869f21bb3384143b0f336bc2cd9a8f0db3f9562aa23a39601c1d86f153b62f07469ef066616f8a52cfcd840377e331cb22454')

package() {
  cd "$srcdir"
  gem install --no-user-install --ignore-dependencies -i "$pkgdir$(ruby -rubygems -e'puts Gem.default_dir')" -n "$pkgdir/usr/bin" "${pkgname#ruby-}-$pkgver.gem"
}
