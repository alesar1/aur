# Maintainer: Anna Schumaker <anna@ocarinaproject.net>
pkgname=ocarina
pkgver=6.4.15
pkgrel=2
pkgdesc="A simple GTK+ and gstreamer based music player."
url="http://www.ocarinaproject.net/"
arch=('x86_64' 'i686' 'armv7h')
license=('GPL2')
depends=('gtkmm3>=3.16' 'gstreamer' 'gst-plugins-base' 'taglib' 'libmusicbrainz5' 'libcoverart')
optdepends=('gst-plugins-good' 'gst-plugins-bad' 'gst-plugins-ugly')
makedepends=('scons')
conflicts=()
replaces=()
backup=()
source=("http://ocarinaproject.net/wp-content/ocarina/${pkgname}-${pkgver}.tar.gz")
sha1sums=('0488e25096e4b7006189a2baf774cf2b014b9596')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	scons $MAKEFLAGS
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	mkdir -p ${pkgdir}/usr
	cp -r bin/ share/ ${pkgdir}/usr/
}
