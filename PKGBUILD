# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>

_gemname=jekyll-sass-converter
pkgname=ruby-$_gemname
pkgver=1.3.0
pkgrel=2
pkgdesc='A basic Sass converter for Jekyll.'
arch=(any)
url='https://github.com/jekyll/jekyll-sass-converter'
license=(MIT)
depends=(ruby-sass ruby-jekyll-sass)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('2bb7f5bd42126fb1b9ef7f67d9af7d86cc25a546')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
