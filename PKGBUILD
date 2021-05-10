# Maintainer: Anatoly Bashmakov <anatoly at posteo dot net>
# Contributor: Matej Grabovsky <matej.grabovsky at gmail>

_gemname=loofah
pkgname=ruby-$_gemname
pkgver=2.9.1
pkgrel=1
pkgdesc='HTML sanitization for Rails applications'
arch=(any)
url='https://github.com/flavorjones/loofah'
license=(MIT)
depends=(ruby ruby-crass ruby-nokogiri)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('273e5acaa8c64a948bf6279112b08fdd3cb1d470e24cd23a12b78482625c35f1')

package() {
    local _gemdir="$(ruby -e 'puts Gem.default_dir')"
    gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" \
        -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
    rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
    install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}

