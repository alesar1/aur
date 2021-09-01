# Maintainer: aulonsal <aulonsal at gmail dot com>
pkgname=hck-bin
pkgver=0.6.1
pkgrel=1
pkgdesc='A sharp cut(1) clone'
arch=('x86_64')
url="https://github.com/sstadick/${pkgname%-bin}"
license=('Unlicense' 'MIT')
depends=('gcc-libs')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("$pkgname-$pkgver-LICENSE-MIT::${url/github/raw.githubusercontent}/v$pkgver/LICENSE-MIT")
source_x86_64=("$pkgname-$pkgver-x86_64::$url/releases/download/v$pkgver/${pkgname%-bin}-linux-amd64")

b2sums=('57222a9fc85c83c7c2b05e76fe7db55003ee78727fd0361e4b5fbfc81fdb53eed69bd3b0259dcfa055f2bb57628aaf9246fa5cf2a4fc29b6cc1b524c225ceefa')
b2sums_x86_64=('b2eb31713d0350f48fdb11b15c738324071ba9e9f4d54ad686cbbc05ea9f507c41a7c90b0c430120213823a6aa363c1082edfe5a3972e3b41c54f145920e377b')

package() {
	install -Dm755 "$pkgname-$pkgver-$CARCH" "$pkgdir/usr/bin/${pkgname%-bin}"
	install -Dm644 "$pkgname-$pkgver-LICENSE-MIT" "$pkgdir/usr/share/licenses/$pkgname/LICENSE-MIT"
}
