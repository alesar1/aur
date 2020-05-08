# Maintainer: DDoSolitary <DDoSolitary@gmail.com>

_gemname=tzinfo
pkgname=ruby-$_gemname-1
pkgver=1.2.7
pkgrel=1
pkgdesc='Daylight savings aware timezone library'
arch=(any)
url='http://tzinfo.github.io'
license=(MIT)
depends=(ruby ruby-thread_safe)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('3945d8a57c62a59e691d527ae4daaf562d6e07a3c0d032876c6b066e108072c4')
provides=('ruby-tzinfo')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
