# Maintainer: Jerome Leclanche <jerome@leclan.ch>

_pkgname=sass
pkgname=ruby-$_pkgname
pkgver=3.4.20
pkgrel=1
pkgdesc="Tools and Ruby libraries for the CSS3 extension languages: Sass and SCSS."
arch=("any")
url="http://sass-lang.com/"
license=("MIT")
depends=("ruby-yard" "ruby-maruku")
makedepends=("rubygems")
source=("http://gems.rubyforge.org/gems/$_pkgname-$pkgver.gem")
noextract=("$_pkgname-$pkgver.gem")
sha256sums=("ced77e1f57c82f0e548a978f78d75accb46ff1823acdf6b88059a1222e6b3713")


package() {
	local _gemdir="$(ruby -rubygems -e"puts Gem.default_dir")"
	gem install --no-user-install --ignore-dependencies -i "$pkgdir$_gemdir" -n "$pkgdir/usr/bin" "$_pkgname-$pkgver.gem"
	install -D "$pkgdir$_gemdir/gems/$_pkgname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
