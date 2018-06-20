# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=solargraph
pkgname=ruby-solargraph
pkgver=0.22.0
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
sha256sums=("f4acc34fe9787a406ba138337b903eb37096d1a14af4d4ba5cbc9eecef0212ce")

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
