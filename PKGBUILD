# Maintainer: Joel Goguen <contact+aur@jgoguen.ca>

_gemname=unicode-display_width
pkgname=ruby-${_gemname}
pkgver=1.2.1
pkgrel=1
pkgdesc="Determines the monospace display width of a string"
arch=('any')
depends=('ruby')
makedepends=('ruby-rspec')
url="https://rubygems.org/gems/${_gemname}"
noextract=($_gemname-$pkgver.gem)
license=('MIT')
source=(
	"https://rubygems.org/downloads/${_gemname}-${pkgver}.gem"
)
sha256sums=(
	'1f44ff6554e067e2ff46183c89b62bba685a2903dd8eab3127887ecbad1c66c2'
)

package() {
	local _gemdir="$(ruby -e'puts Gem.default_dir')"
	gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
	rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
	install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
