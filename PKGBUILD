# Maintainer: Jonne Haß <me@jhass.eu>
# Contributor: Alexsandr Pavlov <kidoz at mail dot ru>

pkgname=ruby1.9-bundler
_gemname=${pkgname#ruby1.9-}
pkgver=1.16.5
pkgrel=1
pkgdesc="Manages an application's dependencies through its entire life, across many machines, systematically and repeatably."
arch=('any')
url="http://bundler.io"
license=('MIT')
depends=('ruby1.9')
options=('!emptydirs')
source=("https://rubygems.org/downloads/$_gemname-$pkgver.gem")
noextract=("$_gemname-$pkgver.gem")
sha256sums=('413f98ef094008a8528d44167c16b0739449bb605ff670d88014b30759971e1c')

package() {
  cd "$srcdir"

  local _gemdir="$(ruby-1.9 -rubygems -e'puts Gem.default_dir')"
  HOME="/tmp" GEM_HOME="$_gemdir" GEM_PATH="$_gemdir" gem-1.9 install --no-user-install --ignore-dependencies \
    --no-ri --no-rdoc -i "$pkgdir/$_gemdir" "$_gemname-$pkgver.gem"
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"

  install -d "$pkgdir/usr/bin/"
  ln -s "$_gemdir/bin/bundle" "$pkgdir/usr/bin/bundle-1.9"
}
