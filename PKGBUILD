# Maintainer: sloppybench <sloppybench@eml.cc>
# Contributor: der_FeniX <derfenix@gmail.com>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Gordin <9ordin @t gmail dot com>
# Contributor: Simon Lipp <aur@simon.lipp.name>
# Contributor: Chris Bolton <http://scr.im/chris-kun>
# Contributor: Sergei Lebedev <superbobry at gmail dot com>
# Contributor: flying sheep <flying-sheep@web.de>

pkgname=coffee-script
_pkgname=coffeescript
pkgver=1.10.0
pkgrel=1
pkgdesc='CoffeeScript is a little language that compiles into JavaScript.'
arch=(any)
url='http://coffeescript.org'
license=(MIT)
makedepends=()
depends=(nodejs 'nodejs-mkdirp' underscorejs)
optdepends=('nodejs-profile: to load coffee-script in node')
source=(https://github.com/jashkenas/coffeescript/archive/$pkgver.tar.gz)
sha256sums=('1747a315002e69c2d459c2e618ac51d13b383a37792f05bdab155b3c943d2ef2')

check() {
  export NODE_PATH=/usr/share/underscorejs:$NODE_PATH
  cd $_pkgname-$pkgver
  bin/cake test:browser || return 1
}

package() {
  cd $_pkgname-$pkgver
  export NODE_PATH=/usr/share/underscorejs:$NODE_PATH
  # cake writes bullshit to ~/.noode-libraries, so set HOME to local dir
  HOME="$PWD" bin/cake --prefix "$pkgdir/usr/" install
  install -d "$pkgdir/usr/lib/node_modules"
  mv "$pkgdir/usr/lib/coffee-script" "$pkgdir/usr/lib/node_modules/"
  ln -sf /usr/lib/node_modules/coffee-script/bin/{cake,coffee} "$pkgdir/usr/bin/"

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}

