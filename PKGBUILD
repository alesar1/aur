# Maintainer: Joel Goguen <contact+aur@jgoguen.ca>

_gemname=rubocop
pkgname=ruby-${_gemname}
pkgver=0.43.0
pkgrel=1
pkgdesc="Automatic Ruby code style checking tool."
arch=('any')
depends=('ruby' 'ruby-parser' 'ruby-rainbow' 'ruby-progressbar' 'ruby-unicode-display_width')
url="https://rubygems.org/gems/${_gemname}"
noextract=($_gemname-$pkgver.gem)
license=('MIT')
source=(
	"https://rubygems.org/downloads/${_gemname}-${pkgver}.gem"
)
sha256sums=(
	'125e352d5ad65cae73f33572fde0f4793ca8ef7823263935e93ff0c2cd265764'
)

package() {
	local _gemdir="$(ruby -e'puts Gem.default_dir')"
	gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
	rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
	install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
