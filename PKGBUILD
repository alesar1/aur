# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Anatoly Bashmakov <anatoly at posteo dot net>

_gemname=pdf-core
pkgname=ruby-$_gemname-0.7
pkgver=0.7.0
pkgrel=1
pkgdesc='PDF::Core is used by Prawn to render PDF documents'
arch=(any)
url='http://prawn.majesticseacreature.com'
license=(PRAWN GPL-2.0 GPL-3.0)
depends=(ruby)
provides=(ruby-pdf-core)
conflicts=(ruby-pdf-core)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('f5c070c4b6b1c0f531997e162e07cf06c904ad8d')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
