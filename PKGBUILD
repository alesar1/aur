# Maintainer: Matt Mathis <aur@cloudninja.pw>
pkgname=jaybar
pkgver=1.0
pkgrel=1
epoch=
pkgdesc="Status bar for the Sway Compositor"
arch=('x86_64')
url="https://bitbucket.org/Scoopta/jaybar/src/default/"
license=('GPL3')
groups=()
depends=('jgtk+' 'wlroots' 'native-proxy' 'jwl' 'jlibc' 'wayland' 'jdk-openjdk>=11')
makedepends=('mercurial')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
noextract=()
validpgpkeys=()


prepare() {
	mkdir -p "${pkgname}-${pkgver}"
	hg clone ${url} "${pkgname}-${pkgver}"
}

build() {
	cd "${pkgname}-${pkgver}"
        ./gradlew build
        cd ..
}

check() {
	echo "Checking"
}

package() {
	echo "Packaging"
	mkdir -p "../pkg/${pkgname}/usr/share/java"
        cp ${pkgname}-${pkgver}/build/libs/*.jar "../pkg/${pkgname}/usr/share/java/"
}
