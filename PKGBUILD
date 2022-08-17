# Maintainer: Rhys Perry <rhysperry111 AT gmail DOT com>
pkgname=wava-git
provides=('wava')
conflicts=('wava')
pkgver=r36.6399908
pkgrel=1
license=('GPL3')
pkgdesc='Weird Audio Visualizer for ALSA '
makedepends=("git")
depends=("fftw" "alsa-lib" "pulseaudio" "libconfig")
arch=("any")
url='https://github.com/fusionhuh/wava'
install="wava.install"
source=("git+https://github.com/fusionhuh/wava.git")
md5sums=('SKIP')

pkgver() {
	cd "wava"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "wava"
	make
}

package() {
	cd "wava"
	make install DESTDIR="${pkgdir}/" PREFIX="/usr" 
	install -Dm644 "${srcdir}/wava/config/wava.cfg" "${pkgdir}/usr/share/wava/wava.cfg"
}
