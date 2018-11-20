# Maintainer: Senderman <doletov.fyodor@yandex.ru>
pkgname=sse-file-pc
pkgver=14R2C
pkgrel=2
pkgdesc="Cross-platform java tool for file encryption"
arch=('any')
url="https://paranoiaworks.mobi/"
license=('Apache' 'MIT')
depends=('java-runtime>=8')
source=("https://annimon.com/aur/sse/SSEFilePC.zip"
"https://annimon.com/aur/sse/icon.png"
"https://annimon.com/aur/sse/sse.desktop"
)
md5sums=('SKIP' 'SKIP' 'SKIP')
package() {
	mkdir -p $pkgdir/usr/share/licenses/$pkgname
	mkdir -p $pkgdir/usr/share/applications
	mkdir -p $pkgdir/opt/$pkgname
	install -Dm0644 $srcdir/SSEFilePC/license.txt $pkgdir/usr/share/licenses/$pkgname
	install -Dm0666 $srcdir/SSEFilePC/*.jar icon.png $pkgdir/opt/$pkgname
	install -Dm0755 $srcdir/sse.desktop $pkgdir/usr/share/applications
}
