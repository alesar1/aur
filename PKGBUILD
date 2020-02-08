# Maintainer: Lennard Hofmann <lennard.hofmann@web.de>
pkgname=('otf-yrsa-font' 'ttf-yrsa-font')
pkgbase=yrsa-font
pkgver=1.002
pkgrel=1
pkgdesc='Serif font for continuous reading on the web (Latin-only)'
arch=(any)
url="https://github.com/rosettatype/yrsa-rasa"
license=('custom:OFL')
groups=('yrsa-rasa-fonts')
depends=('fontconfig' 'xorg-font-utils') # needed for pacman hooks
provides=('ttf-font')
source=("$pkgbase-$pkgver.zip::$url/releases/download/v$pkgver/Yrsa-fonts-v$pkgver.zip")
sha256sums=('60bfb3b29b050aecea66afdacb7f49b8d78001a3973b0d5faf4d0c438ae806d7')

_package() {
	cd Yrsa
	install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"

	# txt file is actually a Markdown file:
	install -Dm644 README.txt "$pkgdir/usr/share/doc/$pkgname/README.md"
}

package_otf-yrsa-font() {
	conflicts=('ttf-yrsa-font')
	_package
	install -Dm644 -t "$pkgdir/usr/share/fonts/${pkgbase%-font}" otf/*.otf
}

package_ttf-yrsa-font() {
	conflicts=('otf-yrsa-font')
	_package
	install -Dm644 -t "$pkgdir/usr/share/fonts/${pkgbase%-font}" ttf/*.ttf
}
