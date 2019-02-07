# Maintainer: Matej Grabovsky <matej.grabovsky at gmail>

_gemname=rails-html-sanitizer
pkgname=ruby-$_gemname
pkgver=1.0.4
pkgrel=1
pkgdesc='HTML sanitization for Rails applications'
arch=(any)
url='https://github.com/rails/rails-html-sanitizer'
license=(MIT)
depends=(ruby ruby-loofah)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('99cbc3d267856f6731663e654140be298393b1ee966027efab5dbcd44ade67bf')

package() {
    local _gemdir="$(ruby -e'puts Gem.default_dir')"
    gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" \
        -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
    rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

