# Maintainer: fengkx <liangkx8237 [At] gmail.com>
pkgname=webarchiver
pkgver=0.1.1
pkgrel=0
pkgdesc=""
arch=("x86_64")
url="https://github.com/fengkx/webarchiver/"
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/fengkx/$pkgname/releases/download/v$pkgver/${pkgname}-v$pkgver-$arch-unknown-linux-gnu.tar.gz")
sha1sums=("8877651056e0aef3a4023234a13e9a3f7eebecc2")

prepare() {
	mv -f "webarchiver-v$pkgver-$arch-unknown-linux-gnu" "$pkgname-$pkgver"
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
	install -Dm +x "$pkgname" ${pkgdir}/usr/bin/${pkgname}

}
