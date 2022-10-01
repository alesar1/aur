# Maintainer: Michał Wojdyła < micwoj9292 at gmail dot com >

_gemname=google-apis-monitoring_v3
pkgname=ruby-$_gemname
pkgver=0.34.0
pkgrel=1
pkgdesc='simple REST client for Cloud Monitoring API V3'
arch=(any)
url='https://rubygems.org/gems/google-apis-monitoring_v3'
license=(Apache-2.0)
depends=(ruby-google-apis-core)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('bd99770c1d2912deab8e63a6dbc72f58a933864a2cc54f3703b0062beb327e95')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}

