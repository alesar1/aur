# Maintainer: AtticFinder65536 <atticventilation-aur at protonmail dot com>

pkgname=('ttf-twemoji-color-git')
_gitname=('twemoji-color-font')
pkgver=v13.1.0.r2.g3239f32
pkgrel=1
pkgdesc="A color and B&W emoji SVG-in-OpenType font by Twitter with support for ZWJ, skin tone modifiers and country flags (git)"
url="https://github.com/eosrei/twemoji-color-font"
license=('custom:CCPL:by-4.0' 'MIT')
source=('git+https://github.com/eosrei/twemoji-color-font.git')
b2sums=('SKIP')
makedepends=('git' 'inkscape' 'imagemagick' 'potrace' 'python-fonttools' 'fontforge' 'svgo' 'nodejs' 'python-yaml')
arch=('any')
replaces=('twemoji-color-font')
provides=('twemoji-color-font' 'ttf-twemoji-color' 'emoji-font')
conflicts=('twemoji-color-font' 'ttf-twemoji-color')

pkgver() {
  cd "$_gitname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare(){
	cd "${_gitname}"
	git clone https://github.com/13rac1/scfbuild.git SCFBuild
	sed -i 's/package: regular-package linux-package deb-package macos-package windows-package/package: linux-package/' Makefile
}

build(){
	cd "${_gitname}"
	make
}

package(){
 	cd "${_gitname}"/build/TwitterColorEmoji-SVGinOT-Linux-13.1.0
	install -Dm644 TwitterColorEmoji-SVGinOT.ttf -t "$pkgdir"/usr/share/fonts/TTF/
	install -Dm644 LICENSE* -t "$pkgdir"/usr/share/licenses/$pkgname/
	install -Dm644 README.md -t "$pkgdir"/usr/share/doc/$pkgname/
}

