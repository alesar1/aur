# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=solargraph
pkgname=ruby-solargraph
pkgver=0.39.7
pkgrel=3
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
sha256sums=("e860868bd42283f0f5da6899f1e9da0ec02bb2527c29fcebb3e4144bf0fc30d7")

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
