# Maintainer: Anatoly Bashmakov <anatoly at posteo dot net>
# Contributor: Matej Grabovsky <matej.grabovsky at gmail>

_gemname=loofah
pkgname=ruby-$_gemname
pkgver=2.3.1
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
sha256sums=('6d75e1fa7a569fde7b10e4da15cefb4d5cd66de909b7d830c9a77d23c056f85a')

package() {
    local _gemdir="$(ruby -e 'puts Gem.default_dir')"
    gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" \
        -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
    rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
    install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}

