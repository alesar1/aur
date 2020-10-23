# Maintainer: Hauke Rehfeld <aur@haukerehfeld.de>

pkgname=trenchbroom-git
pkgver=v2020.1.RC2.r0.g897489bde
pkgrel=1
pkgdesc="TrenchBroom is a modern cross-platform level editor for Quake-engine based games."
arch=("i686" "x86_64")
url="http://kristianduske.com/trenchbroom"
license=("GPLv3")

makedepends=("git" "pandoc" "qt5-base" "cmake" "ninja" "qt5-svg")
depends=("freeimage" "freetype2" "mesa" "libgl" "freeglut" "libxxf86vm" "glew" "glm")
conflicts=("trenchbroom")
provides=("trenchbroom")

source=("trenchbroom::git+https://github.com/kduske/TrenchBroom.git#branch=master"
	trenchbroom.desktop)

sha1sums=('SKIP'
          '34e2e1168624a61358c01cecfad170d435952740')

pkgver() {
  cd "trenchbroom"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd trenchbroom
  git submodule update --init --recursive
}

_BUILDDIR=build

build() {
	mkdir "$_BUILDDIR"
	cd "$_BUILDDIR"
	cmake "$srcdir/trenchbroom" -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_BUILD_TYPE=Release
	QT_QPA_PLATFORM=offscreen cmake --build . --target TrenchBroom
}

package() {
	install -Dm644 trenchbroom.desktop "${pkgdir}/usr/share/applications/trenchbroom.desktop"
	cd "${srcdir}/$_BUILDDIR"
	make DESTDIR="${pkgdir}" install
	install -Dm644 "${srcdir}/trenchbroom/app/resources/linux/icons/icon_256.png" "${pkgdir}/usr/share/pixmaps/trenchbroom.png"
}
