# Maintainer: Mario Finelli <mario at finel dot li>
# Contributor: farwayer <farwayer at gmail dot com>
# Contributor: Andy Weidenbaum <archbaum at gmail dot com>

_gemname=parser
pkgname=ruby-${_gemname}
pkgver=3.0.1.0
pkgrel=3
pkgdesc="A Ruby parser written in pure Ruby"
arch=(any)
depends=(ruby ruby-ast)
makedepends=(rubygems ruby-rdoc ragel ruby-racc ruby-cliver ruby-rake ruby-bundler)
url=https://github.com/whitequark/parser
license=(MIT)
source=(https://github.com/whitequark/parser/archive/v$pkgver/$_gemname-$pkgver.tar.gz)
options=(!emptydirs)
sha256sums=('65833965407df4ba8e81b83e2707be1cafd1a7f2a4e88db659ac883d89a3aaed')

prepare() {
  cd $_gemname-$pkgver
  sed -i 's|~>|>=|g' ${_gemname}.gemspec
}

build() {
  cd $_gemname-$pkgver
  rake generate
  gem build ${_gemname}.gemspec
}

package() {
  cd $_gemname-$pkgver
  local _gemdir="$(gem env gemdir)"

  gem install \
    --ignore-dependencies \
    --no-user-install \
    -i "$pkgdir/$_gemdir" \
    -n "$pkgdir/usr/bin" \
    $_gemname-$pkgver.gem

  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"

  install -Dm0644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm0644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}

# vim: set ts=2 sw=2 et:
