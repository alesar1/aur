# Maintainer: Mario Finelli <mario dot finelli at yahoo dot com>
# Contributor: Artem Vorotnikov <artem at vorotnikov dot me>

_gemname=pry
pkgname=ruby-$_gemname
pkgver=0.10.1
pkgrel=2
pkgdesc='An IRB alternative and runtime developer console.'
arch=(any)
url='http://pryrepl.org'
license=(MIT)
depends=(ruby ruby-coderay ruby-slop-3 ruby-method_source)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('b2ac36ed41f32f069230394ed9295790dccb2424bef30fddff7fdc02a10f5c8ea7bbc46641201671103f20d006be8cfaed8f2ed45ed19e171bdd0d66b74df5b9')

package() {
  cd "$srcdir"
  local _gemdir="$(ruby -e'puts Gem.default_dir')"

  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
}
