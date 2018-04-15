# Maintainer: j605

_npmname=triton
pkgname=nodejs-$_npmname
pkgver=6.0.0
pkgrel=1
pkgdesc="triton is a CLI tool for working with the CloudAPI for Joyent's Triton Public Cloud and Private Cloud"
arch=('any')
url="https://github.com/joyent/node-triton"
license=('MPL')
depends=('nodejs')
makedepends=('npm')
source=($pkgname-$pkgver.tar.gz::"https://github.com/joyent/node-triton/archive/$pkgver.tar.gz")
md5sums=('40c9aa230b88281f625a3b26f41b7e04')

build() {
  cd node-$_npmname-$pkgver
  npm install --no-optional
}

package() {
  cd node-$_npmname-$pkgver

  mkdir -p "${pkgdir}"/usr/{bin,lib/node_modules/triton/}
  cp -r * "${pkgdir}"/usr/lib/node_modules/triton/

  mkdir -p "${pkgdir}"/etc/bash_completion.d
  ./bin/triton completion > "${pkgdir}"/etc/bash_completion.d/triton

  # security issue (see wiki)
  find "${pkgdir}"/usr -type d -exec chmod 755 {} +

  ln -s ../lib/node_modules/triton/bin/triton "${pkgdir}"/usr/bin/triton
}
