# Maintainer: Tobias Borgert <tobias.borgert@gmail.com>

pkgname=ecal
pkgver=5.5.0
pkgrel=3
pkgdesc="enhanced Communication Abstraction Layer"
arch=('x86_64' 'armv7h')
url="https://github.com/continental/ecal"
license=('Apache')
depends=('protobuf' 'qt5-base' 'hdf5')
makedepends=('asio' 'cmake' 'doxygen' 'graphviz' 'simpleini' 'spdlog' 'tclap')
optdepends=()
source=(https://github.com/continental/ecal/archive/v$pkgver.tar.gz
        arch-linux-compat.diff)
sha256sums=('43c73a56202bd8b6924b37fc9265b30639841803f66c7ce1f3b4b78d3c0a2942'
            'c01b56b234f3e2b105e10e3850ee568dc33f728efebedc768a3b0dc0e4b6e835')
backup=('etc/ecal/ecal.ini' 'etc/ecal/ecaltime.ini')

prepare() {
    cd $pkgname-$pkgver
    patch --forward --strip=1 --input="../arch-linux-compat.diff"
}

build() {
	cd $pkgname-$pkgver
	sed -i /set\(eCAL_VERSION_MAJOR\ /s/\$\{GIT_REVISION_MAYOR\}/"5"/g CMakeLists.txt
	sed -i /set\(eCAL_VERSION_MINOR\ /s/\$\{GIT_REVISION_MINOR\}/"5"/g CMakeLists.txt
	sed -i /set\(eCAL_VERSION_PATCH\ /s/\$\{GIT_REVISION_PATCH\}/"0"/g CMakeLists.txt
	mkdir -p _build
	cd _build
	cmake .. -DCMAKE_INSTALL_PREFIX=/usr \
		 -DCMAKE_BUILD_TYPE=Release \
		 -DECAL_THIRDPARTY_BUILD_PROTOBUF=OFF \
		 -DECAL_THIRDPARTY_BUILD_SPDLOG=OFF
	make
}

package() {
	cd $pkgname-$pkgver
	cd _build
	DESTDIR="$pkgdir" make install
        mv "$pkgdir/usr/etc" "$pkgdir/etc"	
}
