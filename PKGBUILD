# Maintainer: Daniel Cohen <dan@supercore.co.uk>
pkgname=plymouth-kcm
pkgver=5.10.2
pkgrel=1
pkgdesc="A KCM for configuring Plymouth"
arch=('any')
url="https://cgit.kde.org/plymouth-kcm.git/"
license=('GPL')
depends=('plymouth' 'knewstuff' 'kconfig' 'kconfigwidgets' 'ki18n' 'kdeclarative')
makedepends=('cmake' 'kdoctools' 'extra-cmake-modules')
optdepends=()
options=()
source=("https://download.kde.org/stable/plasma/$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('6a0c001a19060cdd0e8ab2f60e4522154ea318f2b8df8d87373120c07c09bfbb')

prepare() {
    mkdir -p $srcdir/${pkgname}-$pkgver/build
}

build() {
	cd "$srcdir/${pkgname}-$pkgver/build"
	cmake .. -DCMAKE_INSTALL_PREFIX=`kf5-config --prefix` \
             -DCMAKE_BUILD_TYPE=Release \
             -DBUILD_TESTING=OFF
	make
}

package() {
	cd "$srcdir/${pkgname}-$pkgver/build"
	make DESTDIR="$pkgdir" install
}
