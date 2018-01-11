# Maintainer: Mario Finelli <mario at finel dot li>
# Contributor: Artem Vorotnikov <artem at vorotnikov dot me>

_gemname=pry
pkgname=ruby-$_gemname
pkgver=0.11.3
pkgrel=1
pkgdesc='An IRB alternative and runtime developer console.'
arch=(any)
url='http://pryrepl.org'
license=(MIT)
depends=(ruby ruby-coderay ruby-slop-3 ruby-method_source)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('0f8c7d6073d6f3bd4c2ca0d4fdeb240ee90b54bc1c98102f909a243fa60803d6')

package() {
  cd "$srcdir"
  local _gemdir="$(ruby -e'puts Gem.default_dir')"

  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
}
