# Maintainer:  Marcell Meszaros < marcell.meszaros AT runbox.eu >
# Contributor: Vojtech Aschenbrenner <v@asch.cz>

_gemname=xapian-ruby
pkgname=ruby-$_gemname
pkgver=1.4.18
pkgrel=1
pkgdesc='Xapian libraries and Ruby bindings'
arch=('i686' 'x86_64')
url="https://rubygems.org/gems/$_gemname"
license=('MIT')
depends=(
  'ruby'
  'xapian-core>=1:1.4.18'
)
makedepends=('ruby-rake' 'ruby-rdoc')
options=('!emptydirs')
source=("https://rubygems.org/downloads/$_gemname-$pkgver.gem")
noextract=("$_gemname-$pkgver.gem")
sha256sums=('f776cfb494e09f18b93d5b5310d4096d5dbe2a8c5ad898f637925ad0a6cc0afd')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" "$_gemname-$pkgver.gem"
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
