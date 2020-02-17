# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=solargraph
pkgname=ruby-solargraph
pkgver=0.38.5
pkgrel=1
pkgdesc="A Ruby language server"
arch=("any")
depends=(
  ruby-maruku
  ruby
  ruby-ast
  ruby-backport
  ruby-e2mmap
  ruby-htmlentities
  ruby-jaro_winkler
  ruby-nokogiri
  ruby-mini_portile2
  ruby-parser
  ruby-progressbar
  ruby-reverse_markdown
  ruby-rubocop
  ruby-thor
  ruby-tilt
  ruby-unicode-display_width
  ruby-yard
)
makedepends=(rubygems)
url="http://solargraph.org/"
noextract=($_gemname-$pkgver.gem)
license=("MIT")
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
sha256sums=("2a7929f70483ca551bfb6b305be022f89c1d0835510abacef36b109870252247")

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
