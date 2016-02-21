# Maintainer: Severen Redwood <severen@shrike.me>
# Report all package issues to `https://github.com/SShrike/pkgbuilds`

_gemname='thor'
pkgname='ruby-thor'
pkgver='0.19.1'
pkgrel=1
pkgdesc='Thor is a toolkit for building powerful command-line interfaces.'
arch=('any')
license=('MIT')
makedepends=('ruby')
url='http://whatisthor.com/'
source=("http://rubygems.org/downloads/thor-$pkgver.gem")
md5sums=('d775969c49fec36377b918725aa33019')
noextract=("thor-$pkgver.gem")

package() {
  cd "$srcdir"
  local _gemdir=$(ruby -e 'puts Gem.default_dir')
  gem install --ignore-dependencies --no-user-install -i "$pkgdir$_gemdir" -n "$pkgdir/usr/bin" "$_gemname-$pkgver.gem"
}

# vim:set ts=2 sw=2 et:
