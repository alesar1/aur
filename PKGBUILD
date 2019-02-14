# Maintainer: Adrian Perez de Castro <aperez@igalia.com>
pkgname=wf-config
pkgver=0.1
pkgrel=1
pkgdesc="A library for managing configuration files, written for wayfire"
arch=(x86_64)
url=https://wayfire.org
license=(custom:MIT)
depends=(libevdev wlroots)
makedepends=(meson ninja pkg-config)
conflicts=("${pkgname}-git")
source=("https://github.com/WayfireWM/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.xz")
sha512sums=('813be7b802f0cc8e22644f0ac9d017882ba5f769150b720dcdf99e4b3788f65021b7dd77f81435dd257fccc01405e9f789c9311928ec205313909b87dea695bb')

build() {
	rm -rf build
	arch-meson "${pkgname}-${pkgver}" build
	ninja -C build
}


package() {
	DESTDIR="${pkgdir}" ninja -C build install
}
