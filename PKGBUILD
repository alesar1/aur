# Maintainer: DDoSolitary <DDoSolitary@gmail.com>

_gemname=activesupport
pkgname=ruby-$_gemname-5
pkgver=5.2.7
pkgrel=1
pkgdesc='A toolkit of support libraries and Ruby core extensions extracted from the Rails framework.'
arch=(any)
url='http://rubyonrails.org'
license=(MIT)
depends=(ruby ruby-i18n ruby-tzinfo-1 ruby-minitest ruby-concurrent)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('dde769b17edc4c2402c940a4cb1b6efc3eb046ffef42da606452d36e6a9bde14')
provides=('ruby-activesupport')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}
