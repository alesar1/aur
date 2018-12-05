# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=solargraph
pkgname=ruby-solargraph
pkgver=0.29.1
pkgrel=0
pkgdesc="A Ruby language server"
arch=("any")
depends=(
  ruby
  ruby-ast
  ruby-coderay
  ruby-eventmachine
  ruby-htmlentities
  ruby-kramdown
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
sha256sums=("a4e05271ad361768daf53fd26c0447b58322c2c5019c41d452633af15b0e5e8b")

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
