# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Anatoly Bashmakov <anatoly at posteo dot net>

_gemname=asciidoctor-diagram-ditaamini
pkgname=ruby-$_gemname
pkgver=0.13.1
pkgrel=1
pkgdesc='Ditaa JAR files wrapped in a Ruby gem'
arch=(any)
url='https://github.com/asciidoctor/asciidoctor-diagram'
license=(MIT)
depends=(ruby)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('5b3ba18ef1aedec98a49ba4961ae86c81bd3b176')

package() {
  local _gemdir="$(ruby -e 'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/ditaamini-license.txt" "$pkgdir/usr/share/licenses/$pkgname/ditaamini-license.txt"
}
