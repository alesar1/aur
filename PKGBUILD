# Maintainer: Alexandre Bouvier <contact@amb.tf>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Claire Charron <claire@undeterminant.net>
_pkgname=noto-fonts-emoji
pkgname=$_pkgname-git
pkgver=2020.09.16.unicode13_1.r0.gaac7ccaa
pkgrel=1
epoch=1
pkgdesc="Google Noto emoji fonts"
arch=('any')
url="https://github.com/googlefonts/noto-emoji"
license=('Apache')
makedepends=('git' 'zopfli' 'python-fonttools' 'python-nototools' 'pngquant' 'cairo' 'imagemagick')
provides=("$_pkgname" 'emoji-font')
conflicts=("$_pkgname")
source=("$_pkgname::git+$url.git")
md5sums=('SKIP')

pkgver() {
	cd $_pkgname
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	make -C $_pkgname clean
}

build() {
	make -C $_pkgname \
		BYPASS_SEQUENCE_CHECK=1 \
		VIRTUAL_ENV=dummy
}

package() {
	# shellcheck disable=SC2154
	install -Dm644 -t "$pkgdir"/usr/share/fonts/noto $_pkgname/NotoColorEmoji.ttf
}
