# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=solargraph
pkgname=ruby-solargraph
pkgver=0.31.1
pkgrel=2
pkgdesc="A Ruby language server"
arch=("any")
depends=(
  ruby
  ruby-ast
  ruby-backport
  ruby-coderay
  ruby-htmlentities
  ruby-jaro_winkler
  ruby-kramdown-1
  ruby-nokogiri
  ruby-mini_portile2
  ruby-parallel
  ruby-parser
  ruby-powerpack
  ruby-ruby-progressbar
  ruby-rainbow
  ruby-reverse_markdown
  ruby-rubocop
  ruby-thor
  ruby-unicode-display_width
  ruby-tilt
  ruby-yard
)
makedepends=(rubygems)
url="http://solargraph.org/"
noextract=($_gemname-$pkgver.gem)
license=("MIT")
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
sha256sums=("1692e56933605bbda61ccf4bed7aa46b9111c745fdff547a2735ef95b1ef0195")

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"

  gem install \
    --ignore-dependencies \
    --no-user-install \
    -i "$pkgdir/$_gemdir" \
    -n "$pkgdir/usr/bin" \
    $_gemname-$pkgver.gem

  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
