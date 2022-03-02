# Maintainer: Yuuta Liang <yuuta@yuuta.moe>
pkgname=modmanager
pkgver=1.1.0
pkgrel=1
pkgdesc="A Qt-based mod manager for minecraft."
arch=(x86_64)
url="https://github.com/kaniol-lck/modmanager"
license=('GPL')
groups=()
depends=(qt5-base aria2 quazip hicolor-icon-theme)
makedepends=('qt5-tools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=("modmanager-$pkgver.zip::https://github.com/kaniol-lck/modmanager/archive/refs/tags/v$pkgver.zip")
noextract=()
md5sums=('150e18a3fa90154893904affc16cbfb2')

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
}

build() {
	cd "$srcdir/$pkgname-$pkgver"
	qmake
	make
}

check() {
	cd "$srcdir/$pkgname-$pkgver"
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make INSTALL_ROOT="$pkgdir/" install
}
