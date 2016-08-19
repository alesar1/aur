# Maintainer: Alexandre Iooss <alexandre.iooss@gmail.com>

pkgname=libardiscovery-git
pkgver=r423.cb4f019
pkgrel=1
pkgdesc="ARSDK Discovery and Connection Management Layer"
arch=(x86_64)
url="http://developer.parrot.com/"
license=('custom')
groups=()
depends=(libarsal-git libarnetworkal-git libarnetwork-git json-c avahi)
optdepends=()
makedepends=(git)
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=('libardiscovery::git+https://github.com/Parrot-Developers/libARDiscovery'
        'libardiscovery-Makefile'
        '0001-Fix-json-c.patch'
        'Config-linux-config.h'
        'LICENSE')
sha256sums=('SKIP'
            '0904602bdd8ae1d6b1a5923f2c16512dbdb90acddef0c35b7726831bad533c1c'
            '74300421b1799e0a32dc62eeded41b56a756b9c4ba95ad42402373e9ea9c3c44'
            '5956b54ef47ad26df51991a4aa7002abdcb524a51b455d040f55b4d11a4f44a7'
            '1771e95329e9cb2bed04e023e330af3d558d0f13c0c1c5de0581f2880f149deb')

pkgver() {
	cd "$srcdir/libardiscovery"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cp "$srcdir/libardiscovery-Makefile" "$srcdir/libardiscovery/Makefile"
	cp "$srcdir/Config-linux-config.h" "$srcdir/libardiscovery/Includes/config.h"

	# Patch to use latest json-c
	patch -p1 -i "$srcdir/0001-Fix-json-c.patch"
}

build() {
	cd "$srcdir/libardiscovery"
	make
}

package() {
	# Install headers
	mkdir -p "$pkgdir/usr/include/libARDiscovery"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDiscovery.h" "$pkgdir/usr/include/libARDiscovery/"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDISCOVERY_Connection.h" "$pkgdir/usr/include/libARDiscovery/"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDISCOVERY_Discovery.h" "$pkgdir/usr/include/libARDiscovery/"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDISCOVERY_NetworkConfiguration.h" "$pkgdir/usr/include/libARDiscovery/"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDISCOVERY_Device.h" "$pkgdir/usr/include/libARDiscovery/"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDISCOVERY_Error.h" "$pkgdir/usr/include/libARDiscovery/"
	cp "$srcdir/libardiscovery/Includes/libARDiscovery/ARDISCOVERY_AvahiDiscovery.h" "$pkgdir/usr/include/libARDiscovery/"

	# Install lib
	mkdir -p "$pkgdir/usr/lib"
	cp "$srcdir/libardiscovery/libardiscovery.so" "$pkgdir/usr/lib/"

	# Install license
	mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
	cp "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
