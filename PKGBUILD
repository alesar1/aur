# Maintainer: Nina <nina@l1f.de>
pkgname=viddy
pkgver=0.1.7
pkgrel=1
pkgdesc="A modern watch command"
arch=('x86_64')
url="https://github.com/sachaos/viddy"
license=('MIT')
makedepends=('go')
updpkgsums=('34f36cd352b217579e3a65804a62b93b')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/sachaos/viddy/archive/v${pkgver}.tar.gz")
md5sums=('4879828aeab243136ac5b6ec81894359')

build() {
	cd "$pkgname-$pkgver"
	go build -o "$pkgname" -ldflags '-s -w -X main.version="$pkgver"'
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 "$pkgname" -t "$pkgdir/usr/bin"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}
