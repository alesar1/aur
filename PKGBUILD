# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=fastimage
pkgname=ruby-$_gemname
pkgver=2.1.0
pkgrel=2
pkgdesc='FastImage - Image info fast'
arch=(any)
url='http://github.com/sdsykes/fastimage'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('8fb1fe90544209cce451e381364ae60fad3b0e9e')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}
