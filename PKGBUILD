# Maintainer: Francisco Giordano <fg@frang.io>

pkgname=volta
pkgver=0.8.0
pkgrel=1
pkgdesc="JavaScript Launcher"
arch=('x86_64')
url="https://volta.sh/"
license=('BSD')
depends=('openssl')
source=("$pkgname-$pkgver.tar.gz::https://github.com/volta-cli/volta/releases/download/v$pkgver/volta-$pkgver-linux-openssl-1.1.tar.gz"
        "https://raw.githubusercontent.com/volta-cli/volta/master/LICENSE")
md5sums=('b8546a5f5e48777ec0283f63c0a7fd24'
         'a8a025d12adc6bd305a7402166baefef')

package() {
        install -Dm755 -t "$pkgdir/usr/bin" volta volta-shim volta-migrate
        install -Dm755 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

# vim: et sw=8 ft=PKGBUILD
