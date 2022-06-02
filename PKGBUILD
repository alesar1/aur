# Maintainer: Francisco Giordano <fg@frang.io>

pkgname=volta-bin
pkgver=1.0.8
pkgrel=1
pkgdesc="JavaScript Launcher"
arch=('x86_64')
url="https://volta.sh/"
license=('BSD')
depends=('openssl')
source=("$pkgname-$pkgver.tar.gz::https://github.com/volta-cli/volta/releases/download/v$pkgver/volta-$pkgver-linux-openssl-1.1.tar.gz"
        "https://raw.githubusercontent.com/volta-cli/volta/v$pkgver/LICENSE")
md5sums=('45629633133929705410c0a8c6c8d57b'
         'a8a025d12adc6bd305a7402166baefef')

package() {
        install -Dm755 -t "$pkgdir/usr/bin" volta volta-shim volta-migrate
        install -Dm755 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

# vim: et sw=8 ft=PKGBUILD
