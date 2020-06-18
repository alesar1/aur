# Maintainer: Alexandre Bouvier <contact@amb.tf>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Claire Charron <claire@undeterminant.net>
# shellcheck shell=bash disable=SC2034,SC2164
_pkgname=noto-fonts-emoji
pkgname=$_pkgname-git
pkgver=2020.04.08.unicode12_1.r23.g8990ed0f
pkgrel=1
epoch=1
pkgdesc="Noto Emoji fonts"
arch=('any')
url="https://github.com/googlefonts/noto-emoji"
license=('Apache')
makedepends=('git' 'zopfli' 'python-fonttools' 'python-nototools' 'pngquant' 'cairo' 'imagemagick')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+$url.git")
md5sums=('SKIP')

pkgver() {
	cd $_pkgname
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd $_pkgname
	make clean
}

build() {
	cd $_pkgname
	make VIRTUAL_ENV=dummy
}

package() {
	cd $_pkgname
	# shellcheck disable=SC2154
	install -Dm644 -t "$pkgdir"/usr/share/fonts/noto NotoColorEmoji.ttf
}
