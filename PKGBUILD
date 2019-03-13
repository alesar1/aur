# Maintainer: farawayer <farwayer@gmail.com>

_gemname=naturally
pkgname=ruby-$_gemname
pkgver=2.2.0
pkgrel=2
pkgdesc='Natural Sorting with support for legal numbering, course numbers, and other number/letter mixes.'
arch=(any)
url='https://github.com/public-law/naturally'
license=()
depends=(ruby)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('0a3ea72dac5b8e11c1ccd54f9de1f05a45d358c7')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
