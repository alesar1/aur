# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Colin Arnott <colin@urandom.co.uk>

_gemname=forgiva
pkgname=$_gemname
pkgver=1.0.1.2
pkgrel=1
pkgdesc='Forgiva'
arch=(any)
url='https://github.com/sceptive/Forgiva'
license=('CC NC-SA 4.0')
depends=(ruby ruby-highline)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('deda7f2b8dcf41822ac88b6c6231cc296a280987')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
