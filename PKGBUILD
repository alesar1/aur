# Maintainer: Guillaume Meunier <guillaume.meunier@centraliens.net>
pkgname=entt
pkgbase=entt
pkgver=3.3.0
pkgrel=1
epoch=
pkgdesc="A header-only, tiny and easy to use entity-component system (and much more) written in modern C++"
arch=('any')
url="https://skypjack.github.io/entt/"
license=('MIT')
groups=()
makedepends=(cmake)
checkdepends=()
optdepends=()
conflicts=()
backup=()
options=()
install=
changelog=

source=("https://github.com/skypjack/entt/archive/v$pkgver.tar.gz")
noextract=()
sha256sums=('d21a45df4960adc86a8f23a8c3c0cea6d2cecc4ef6946a8040e336d8e5266ab3')
validpgpkeys=()

build() {
	mkdir -p build
	cd build

	cmake ../$pkgname-$pkgver -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DUSE_LIBCPP=OFF -DBUILD_TESTING=OFF -DCMAKE_INSTALL_LIBDIR=lib
	make
}

package() {

	pushd build
	DESTDIR="$pkgdir"/ make install
	popd > /dev/null

	mkdir -p "$pkgdir"/usr/share/licenses/$pkgbase
	install $pkgname-$pkgver/LICENSE $pkgdir/usr/share/licenses/$pkgbase/
}
