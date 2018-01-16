# Co-Maintainer: Shengyu Zhang <la@archlinuxcn.org>
# Maintainer: Carsten Feuls <archlinux@carstenfeuls.de>

_gemname=jekyll-watch
pkgname=ruby-$_gemname
pkgver=2.0.0
pkgrel=1
pkgdesc='Rebuild your Jekyll site when a file changes with the `--watch` switch.'
arch=('any')
url='https://github.com/jekyll/jekyll-watch'
license=('MIT')
depends=('ruby-listen>=3.0' 'ruby-listen<4.0')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('b4057980e41253bf6a91633da5cd23afb34c83d9d01c95cd495ea8a1d389c8e09a464388198c1ba72bd35ed3470a37587787d7bbb3f48f9e60ca9718a9b2b938')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
