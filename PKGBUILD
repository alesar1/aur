# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Benjamin Chretien <chretien at lirmm dot fr>

_gemname=coveralls-lcov
pkgname=$_gemname
pkgver=1.1.2
pkgrel=1
pkgdesc='Post coverage information to coveralls.io'
arch=(any)
url='https://github.com/okkez/coveralls-lcov'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('dab12d297cbf9464eb93ff59d72ca27cc3ae66f0')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
