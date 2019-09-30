# Maintainer: Erhad Husovic <xdaemonx@protonmail.ch>

pkgname=rclone-browser
pkgver=1.5.2
pkgrel=1
pkgdesc='Simple cross-platform GUI for rclone'
url='https://github.com/kapitainsky/RcloneBrowser'
arch=('i686' 'x86_64')
license=('custom:Public Domain')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/kapitainsky/RcloneBrowser/archive/${pkgver}.tar.gz")
sha256sums=('7d2dffc1e8ddcf2c20117fe880d08ebc246d1067e9a22f02fdcc092e7432eaa8')
makedepends=('cmake')
depends=('qt5-base' 'rclone')

prepare() {
	cd "$srcdir/RcloneBrowser-${pkgver}"
	sed -i 's/ -Werror//g' src/CMakeLists.txt
}

build() {
	cd "${srcdir}/RcloneBrowser-${pkgver}"
	mkdir build && cd build
	cmake .. -DCMAKE_INSTALL_PREFIX="${pkgdir}/usr" -DCMAKE_BUILD_TYPE=Release
}

package() {
	cd "${srcdir}/RcloneBrowser-${pkgver}/build"
	cmake --build . --target install
	install -Dm644 "$srcdir"/RcloneBrowser-${pkgver}/LICENSE \
                "$pkgdir"/usr/share/licenses/${pkgname}/LICENSE
}
