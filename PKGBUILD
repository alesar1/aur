# Maintainer: Mads Kjeldgaard <mail@madskjeldgaard.dk>
pkgname=linvst3-bin
pkgver=2.15
pkgrel=2
pkgdesc="Linux Windows vst3 wrapper/bridge"
arch=('x86_64')
url="https://github.com/osxmidi/LinVst3"
license=('GPL')
groups=('pro-audio')
depends=('wine' 'gtk3')
conflicts=('linvst3')
optdepends=('jack')
source=("https://github.com/osxmidi/LinVst3/releases/download/$pkgver/LinVst3-$pkgver.zip")
md5sums=('33cd93896177daeb833735a59e7fda60')

package() {

	# Shared library
	install -Dm755 "$srcdir/LinVst3-$pkgver/embedded/linvst3.so" "$pkgdir/usr/share/LinVst/linvst3.so"

	# Embedded
	install -Dm755 "$srcdir/LinVst3-$pkgver/embedded/lin-vst3-servertrack.exe" "$pkgdir/usr/bin/lin-vst3-servertrack.exe"
	install -Dm755 "$srcdir/LinVst3-$pkgver/embedded/lin-vst3-servertrack.exe.so" "$pkgdir/usr/bin/lin-vst3-servertrack.exe.so"

	# Converter
	install -Dm755 "$srcdir/LinVst3-$pkgver/convert/linvst3convert" "$pkgdir/usr/bin/linvst3convert"
	install -Dm755 "$srcdir/LinVst3-$pkgver/convert/linvst3converttree" "$pkgdir/usr/bin/linvst3converttree"

}
