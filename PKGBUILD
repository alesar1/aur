# Maintainer: Midov <midov@midov.pl>

pkgname=matrix-mirage-git
_name=mirage
pkgver=r1811.0ddeacb1
pkgrel=1
pkgdesc='A fancy, customizable, keyboard-operable Matrix chat client for encrypted and decentralized communication.'
arch=('any')
url='https://github.com/mirukana/mirage'
license=('LGPL3')
depends=('qt5-base' 'qt5-declarative' 'qt5-quickcontrols2' 'qt5-svg' 'qt5-graphicaleffects' 'qt5-imageformats' 'python' 'python-pyotherside' 'libolm' 'libjpeg-turbo' 'zlib' 'libtiff' 'libwebp' 'openjpeg2' 'libmediainfo' 'python-pillow' 'python-pymediainfo' 'python-cairosvg' 'python-aiofiles' 'python-appdirs' 'python-filetype' 'python-html-sanitizer' 'python-lxml' 'python-mistune' 'python-blist' 'python-matrix-nio>=0.13.0')
makedepends=('cmake')
conflits=('mirage' 'mirage-matrix' 'matrix-mirage')
source=("git://github.com/mirukana/${_name}.git")
sha256sums=('SKIP')

pkgver() {
        cd ${srcdir}/"${_name}"
	printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git describe --always)"
}
prepare() {
        cd ${srcdir}/"${_name}"
	git submodule update --init --recursive
}
build() {
        cd ${srcdir}/"${_name}"
	qmake mirage.pro
	make
}
package() {
        cd ${srcdir}/"${_name}"
	make INSTALL_ROOT="${pkgdir}" install 
}
