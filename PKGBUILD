# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Simon Kohlmeyer <simon.kohlmeyer@gmail.com>

_gemname=activesupport
pkgname=ruby-$_gemname
pkgver=5.0.1
pkgrel=1
pkgdesc='A toolkit of support libraries and Ruby core extensions extracted from the Rails framework.'
arch=(any)
url='https://rubygems.org/gems/activesupport/'
license=(MIT)
depends=(ruby
    ruby-concurrent-ruby
    ruby-i18n
    ruby-minitest
    ruby-tzinfo
)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('5c546eca785ea25624b5a80f0304fbac9f2efe44')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}
