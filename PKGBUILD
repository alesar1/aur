# Maintainer: James An <james@jamesan.ca>
# Contributor: anatol's gem2arch (https://github.com/anatol/gem2arch)

_pkgname=tuple
pkgname=ruby-$_pkgname
pkgver=0.1.2
pkgrel=2
pkgdesc='Tuple serialization functions.'
arch=(i686 x86_64)
url="http://github.com/topac/$_pkgname"
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=("$_pkgname"::"git+https://github.com/topac/$_pkgname.git"
        ruby-2.3.x.patch)
md5sums=('SKIP'
         '02ccd33d02bedc16612ef5be9aec4c44')

prepare() {
    cd "$_pkgname"

    patch -p1 -i ../ruby-2.3.x.patch
}

build () {
  cd $_pkgname
  gem build $_pkgname.gemspec
}

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_pkgname/$_pkgname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_pkgname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
