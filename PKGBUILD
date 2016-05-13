# Maintainer: Anna Schumaker <anna@ocarinaproject.net>
pkgname=ocarina
pkgver=6.4.11
pkgrel=1
pkgdesc="A simple GTK+ and gstreamer based music player."
url="http://www.ocarinaproject.net/"
arch=('x86_64' 'i686' 'armv7h')
license=('GPL2')
depends=('gtkmm3>=3.16' 'gstreamer' 'gst-plugins-base' 'taglib')
optdepends=('gst-plugins-good' 'gst-plugins-bad' 'gst-plugins-ugly')
makedepends=('scons')
conflicts=()
replaces=()
backup=()
source=("http://ocarinaproject.net/wp-content/ocarina/${pkgname}-${pkgver}.tar.gz")
sha1sums=('82ed2e3110b5f126b878f5d66be88b4c49c9f409')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	scons $MAKEFLAGS
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	mkdir -p ${pkgdir}/usr
	cp -r bin/ share/ ${pkgdir}/usr/
}
