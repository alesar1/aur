# Maintainer:  Marcell Meszaros < marcell.meszaros AT runbox.eu >
# Contributor: farawayer <farwayer@gmail.com>

_gemname=representable
pkgname=ruby-$_gemname
pkgver=3.2.0
pkgrel=1
pkgdesc='Converts between JSON/XML/YAML documents and Ruby objects. Has properties, collections, nesting, coercion etc.'
arch=('any')
url="https://rubygems.org/gems/$_gemname"
license=('MIT')
depends=(
  'ruby'
  'ruby-declarative<0.1'
  'ruby-trailblazer-option>=0.1.1' 'ruby-trailblazer-option<0.2'
  'ruby-uber<0.2'
)
options=('!emptydirs')
source=("https://rubygems.org/downloads/$_gemname-$pkgver.gem")
noextract=("$_gemname-$pkgver.gem")
sha256sums=('cc29bf7eebc31653586849371a43ffe36c60b54b0a6365b5f7d95ec34d1ebace')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" "$_gemname-$pkgver.gem"
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname/"
}
