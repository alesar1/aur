# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: tuftedocelot@fastmail.fm
# Maintainer: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: oliparcol <oliparcol AT gmail DOT com>

_gemname=posix-spawn
pkgname=ruby-$_gemname
pkgver=0.3.10
pkgrel=1
pkgdesc='posix_spawnp(2) for ruby'
arch=(i686 x86_64)
url='http://github.com/rtomayko/posix-spawn'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('a06bdc90f21771cf44e900cdc28e6e1f7e9a525b')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
