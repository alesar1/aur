# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=solargraph
pkgname=ruby-solargraph
pkgver=0.39.15
pkgrel=1
pkgdesc="A Ruby language server"
arch=("any")
depends=(
  ruby
  ruby-ast
  ruby-backport
  ruby-e2mmap
  ruby-jaro_winkler
  ruby-maruku
  ruby-mini_portile2
  ruby-nokogiri
  ruby-parser
  ruby-reverse_markdown
  ruby-rubocop
  ruby-thor
  ruby-tilt
  ruby-yard
)
makedepends=(rubygems)
url="http://solargraph.org/"
noextract=($_gemname-$pkgver.gem)
license=("MIT")
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
sha256sums=("6ff56ff4cf8fc8dd35d8d953ab78fa2e6b624083f363c32e270b88faa2f88168")

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
