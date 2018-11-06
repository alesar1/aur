# Maintainer: NamedKitten <kitteh@namedkitten.pw>
pkgname=kittehplayer
pkgver=r255.9ee2b94
pkgrel=1
pkgdesc="A YouTube-like video player based on Qt, QML and libmpv."
arch=('x86_64')
url="https://github.com/NamedKitten/KittehPlayer"
license=('MPL2')
depends=('qt5-svg' 'qt5-declarative' 'qt5-quickcontrols' 'qt5-quickcontrols2' 'mpv' 'qt5-graphicaleffects')
optdepends=(
	'mpv-vapoursynth: for vapoursynth support.'
	'youtube-dl: for remote video streaming'
	'ttf-roboto: default font recommended for a youtube-like UI'
)
makedepends=('git' 'cmake')
provides=("$pkgname")
conflicts=("$pkgname")
source=('git+https://github.com/NamedKitten/kittehplayer')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/$pkgname"
	mkdir -p build
	cd build
	cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
	make $MAKEFLAGS
}

package() {
	cd "$srcdir/$pkgname/build"
	make DESTDIR="$pkgdir/" install
}
