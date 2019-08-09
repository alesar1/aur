# Maintainer: Manuel Stoeckl <com dоt mstoeckl аt wppkgb>
pkgname=waypipe-git
pkgver=0.5.0.r0.ge66f424
pkgrel=1
pkgdesc='A proxy for Wayland protocol applications. WARNING: unstable'
license=('MIT')
# minimal build: only 'wayland' 'wayland-protocols' 'meson' 'ninja'
depends=('lz4' 'zstd' 'mesa')
optdepends=(
	'openssh: recommended transport'
	'ffmpeg: video compression'
	'libva: hardware video (enc/dec)oding'
	'systemtap: a makedepend, for tracing hooks'
)
makedepends=('git' 'wayland' 'meson' 'ninja' 'scdoc' 'wayland-protocols' 'libdrm')
checkdepends=('weston' 'python-psutil')
url='https://gitlab.freedesktop.org/mstoeckl/waypipe'
source=('git+https://gitlab.freedesktop.org/mstoeckl/waypipe.git')
sha512sums=('SKIP')
options=(debug !strip)
arch=('any')

pkgver() {
	cd waypipe
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

prepare() {
	cd waypipe
	meson --buildtype debugoptimized -Dwerror=false --prefix /usr "$srcdir/build"
}

check() {
	cd "$srcdir/build"
	meson test
}

build() {
	cd waypipe
	ninja -C "$srcdir/build"
}

package() {
	cd waypipe
	DESTDIR="$pkgdir" ninja -C "$srcdir/build" install
}
