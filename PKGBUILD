# Maintainer: Daniel M. Capella <polyzen@archlinux.org>
# Contributor: Yufan You <ouuansteve at gmail>

_name=volar
pkgname=volar-server
pkgver=0.31.0
pkgrel=1
pkgdesc='Fast Vue Language Support Extension'
arch=('any')
url=https://github.com/johnsoncodehk/volar/tree/master/packages/server
license=('MIT')
depends=('nodejs')
makedepends=('npm' 'typescript' 'yarn')
optdepends=('typescript: for use in typescript.serverPath')
source=("https://github.com/johnsoncodehk/volar/archive/v$pkgver/$_name-$pkgver.tar.gz")
b2sums=('09fe18b25946c3d933888f88195823ec6aedf4c938bc1d2ce4c6abd487ef8ff83a25ebebd08ddb7800e590f2c09c3d075836dd31a8d9059e3924495410584e55')

prepare() {
  cd $_name-$pkgver
  yarn --frozen-lockfile

  # Emulate `npm prune --production` for server workspace
  mv package.json{,.bak}
  pushd packages/server
  yarn --prefer-offline --ignore-scripts --no-bin-links --production \
    --frozen-lockfile
  popd
  mv package.json{.bak,}
}

build() {
  cd $_name-$pkgver
  yarn build
}

package() {
  cd $_name-$pkgver
  local _npmdir=/usr/lib/node_modules/@volar/server
  install -d "$pkgdir"{/usr/bin,"$_npmdir"}
  ln -s "$_npmdir"/bin/volar-server.js "$pkgdir"/usr/bin/$pkgname
  install -Dm644 -t "$pkgdir"/usr/share/licenses/$pkgname LICENSE
  cd packages/server
  cp -r bin node.js node_modules out package.json "$pkgdir/$_npmdir"
}

# vim:set ts=2 sw=2 et:
