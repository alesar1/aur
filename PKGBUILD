# Maintainer: sixpindin <sixpindin@gmail.com>
pkgname=omnisharp-roslyn
pkgver=1.16.1
pkgrel=1
pkgdesc=".NET development platform based on on Roslyn workspaces."
arch=('x86_64')
url="https://github.com/OmniSharp/omnisharp-roslyn"
license=('MIT')
depends=('mono')
noextract=('$pkgname-$pkgver.tar.gz')
source=("$pkgname-$pkgver.tar.gz::https://github.com/OmniSharp/omnisharp-roslyn/releases/download/v$pkgver/omnisharp-mono.tar.gz"
	"LICENSE::https://raw.githubusercontent.com/OmniSharp/omnisharp-roslyn/dev/license.md")



package() {

#binaries
	  mkdir -p $pkgdir/opt/$pkgname
	  tar -xf $srcdir/$pkgname-$pkgver.tar.gz -C $pkgdir/opt/$pkgname
#license
	  install -D -m644 $srcdir/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
md5sums=('10beeba3ae2f462570f8f1964d2cc8a8'
         '19a620e118d664537fb9dac578810f8d')
