# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Marco Pompili <marcs.pompili@gmail.com>

_gemname=breakpoint
pkgname=ruby-$_gemname
pkgver=2.7.0
pkgrel=1
pkgdesc='An easy to use system for writing and managing media queries.'
arch=(any)
url='https://github.com/Team-Sass/breakpoint'
license=(MIT GPL-2.0)
depends=(ruby ruby-sass ruby-sassy-maps)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('d3f2187ef3b67f869026989f5dd050fffded427b')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
