# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=orion-git
pkgver=1.6.6.r18.gbaeaf01
pkgrel=1
pkgdesc="QML/C++-written desktop client for Twitch.tv"
arch=('x86_64')
url="https://github.com/alamminsalo/orion/"
license=('GPL3')
depends=('mpv' 'qt5-svg' 'qt5-quickcontrols2' 'qt5-quickcontrols' 'qt5-graphicaleffects')
provides=('orion')
conflicts=('orion')
install=orion.install
source=("${pkgname}::git+https://github.com/alamminsalo/orion.git"
        "hidpi-autoscale-fix.patch")
sha256sums=('SKIP'
            '8aca3e719e4d95ae0d970472b809d93ee117b7f6e8e08ae15a0a924715ab2220')

pkgver() {
	cd "${pkgname}"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${srcdir}/${pkgname}"

    patch -Np0 -i "$srcdir/hidpi-autoscale-fix.patch"
}

build() {
	cd "${srcdir}/${pkgname}"

	qmake CONFIG+=mpv
	make
}

package() {
	cd "${srcdir}/${pkgname}"

	install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 distfiles/orion.svg "${pkgdir}/usr/share/icons/hicolor/scalable/apps/orion.svg"
	install -Dm644 distfiles/Orion.desktop "${pkgdir}/usr/share/applications/Orion.desktop"
	install -Dm755 orion "${pkgdir}/usr/bin/orion"
}
