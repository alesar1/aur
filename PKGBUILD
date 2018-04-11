# Maintainer: Francisco Giordano <frangio.1@gmail.com>
pkgname=truffle
pkgver=4.1.5
pkgrel=1
pkgdesc='A development framework for Ethereum'
url='https://github.com/trufflesuite/truffle'
arch=('any')
license=('MIT')
source=("https://registry.npmjs.org/truffle/-/truffle-${pkgver}.tgz")
noextract=("truffle-${pkgver}.tgz")
makedepends=('npm')
depends=('nodejs')
conflicts=('truffle-git')
sha1sums=('763c8175fe5ea1ada92aa7a02eff84b4ab272f72')
provides=('truffle')

package() {
  npm install -g --production --prefix "$pkgdir/usr" "truffle-${pkgver}.tgz"
  tar -xf "truffle-${pkgver}.tgz" package/LICENSE
  install -D -m644 package/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
