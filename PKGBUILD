# Maintainer: Jonathan Duck <duckbrain30@gmail.com>
pkgname=typora
pkgver=0.9.75
pkgrel=1
pkgdesc="Typora will give you a seamless experience as both a reader and a writer."
arch=('x86_64')
filename="${pkgname}_${pkgver}_amd64.deb"
license=('custom:"Copyright (c) 2015 Abner Lee All Rights Reserved."')
url="https://typora.io/"
depends=('gconf' 'libxss')
optdepends=('noto-fonts-emoji: Or some other emoji font to see emojis')
source=("https://typora.io/./linux/$filename")
md5sums=('15eb07a1f5e56ec381e712c23d3d776b')

package() {
	bsdtar -xf data.tar.xz -C "$pkgdir/"
	rm -rf "$pkgdir/usr/share/lintian/"
	chmod 4755 "$pkgdir/usr/share/typora/chrome-sandbox"
	sed -i '/Change Log/d' "$pkgdir/usr/share/applications/typora.desktop"
	find "$pkgdir" -type d -exec chmod 755 {} \;
}
