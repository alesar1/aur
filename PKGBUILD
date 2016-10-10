# Maintainer: HabarNam <habarnam@gmail.com>
# Improvements by: hamzadis <adis@hamzadis.com>
pkgname=orion-git 
pkgver=r245.98c9217
pkgrel=1
pkgdesc="QML/C++-written desktop client for Twitch.tv"
arch=('x86_64' 'x86')
url="https://github.com/alamminsalo/orion"
license=('GPL')
groups=()
depends=('qt5-base' 'qt5-quickcontrols' 'qt5-webengine' 'qt5-svg' 'libcommuni-git')
optdepends=('mpv: video output' 'qtav: alternate video output', 'qt5-multimedia: alternate video output')
makedepends=('git' 'mpv' 'qt5-webengine' 'qt5-svg' 'libcommuni-git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/alamminsalo/orion.git'
    'Orion.desktop'
)

noextract=()
sha256sums=('SKIP'
            '18d7d2da72a83e5228fa210961fe78d28eda65e680b5887d13ae369e3fed503c')

pkgver() {
	cd "$srcdir/${pkgname%-git}"

# Git, no tags available
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	qmake 
	make
}

package() {
    mkdir -p "$pkgdir/usr/share/icons/hicolor/scalable/apps/"
    mkdir -p "$pkgdir/usr/share/applications"
    mkdir -p "$pkgdir/usr/bin"

	cp "$srcdir/${pkgname%-git}/orion.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/"
	cp "./Orion.desktop" "$pkgdir/usr/share/applications/"
	cp "$srcdir/${pkgname%-git}/orion" "$pkgdir/usr/bin/" 
}
