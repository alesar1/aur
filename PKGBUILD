# Maintainer: Anatoly Bashmakov <anatoly at posteo dot net>

_gemname=rugged
pkgname=ruby-$_gemname-0
pkgver=0.99.0
pkgrel=5
pkgdesc='Rugged is a Ruby binding to the libgit2 linkable library'
arch=(any)
url='https://github.com/libgit2/rugged'
license=(MIT)
depends=(ruby)
makedepends=(ruby-rdoc cmake libgit2.so)
options=(!emptydirs)
provides=('ruby-rugged=0.99.0')
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
sha1sums=('24c9a732fded03ec3c87ec42102f57147454fa4d')
noextract=($_gemname-$pkgver.gem)

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
