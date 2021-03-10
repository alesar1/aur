# Maintainer: Mark Wagie <mark dot wagie at tutantota dot com>
# Contributor: Federico Di Pierro <nierro92@gmail.com>
pkgname=clight-git
pkgver=4.4.r4.g05e27e7
pkgrel=1
pkgdesc="A C daemon that turns your webcam into a light sensor. It can also change display
         gamma temperature, dim your screen and set your dpms."
arch=('i686' 'x86_64' 'aarch64')
url="https://github.com/FedeDP/Clight"
license=('GPL')
depends=('clightd-git' 'gsl' 'hicolor-icon-theme' 'libconfig' 'popt')
makedepends=('git' 'cmake' 'bash-completion')
optdepends=('geoclue: to retrieve user location through geoclue.'
            'upower: to save energy by increasing timeouts between captures while on battery
             and to autocalibrate keyboard backlight.'
            'bash-completion: to add support for bash automatic completion.'
            'clight-gui: Clight GUI written in Qt.')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
backup=("etc/default/${pkgname%-git}.conf")
install="${pkgname%-git}.install"
source=("${pkgname%-git}::git+https://github.com/FedeDP/Clight.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cmake -B build -S "${pkgname%-git}" \
		-G "Unix Makefiles" \
		-DCMAKE_BUILD_TYPE=None \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-Wno-dev
	make -C build
}

package() {
	make -C build DESTDIR="$pkgdir" install
}
