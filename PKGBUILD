# Maintainer: Cosku Bas <cosku.bas@gmail.com>

pkgname=trenchbroom-git
pkgver=r5067.769b7e04d
pkgrel=3
pkgdesc="TrenchBroom is a modern cross-platform level editor for Quake-engine based games."
arch=('i686' 'x86_64')
url="http://kristianduske.com/trenchbroom"
license=('GPLv3')

makedepends=('git' 'pandoc')
depends=('freeimage' 'freetype2' 'wxgtk-trenchbroom' 'mesa' 'libgl' 'freeglut' 'libxxf86vm' 'glew' 'glm')
conflicts=('trenchbroom')

source=(git://github.com/kduske/TrenchBroom.git)
sha1sums=('SKIP')

build() {
	mkdir TrenchBroom/build
	cd TrenchBroom/build
	cmake .. -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_BUILD_TYPE=Release -DwxWidgets_PREFIX=/opt/wxgtk-trenchbroom
	cmake --build . --target TrenchBroom
}

pkgver() {
	cd TrenchBroom
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd TrenchBroom/build
	make DESTDIR=${pkgdir} install
	install -Dm644 "${srcdir}/TrenchBroom/app/resources/linux/trenchbroom.desktop" "${pkgdir}/usr/share/applications/trenchbroom.desktop"
	install -Dm644 "${srcdir}/TrenchBroom/app/resources/linux/icons/icon_256.png" "${pkgdir}/usr/share/pixmaps/trenchbroom.png"
}
