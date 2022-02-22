# Maintainer: Autumn Boyhan <autumn@crisismodel.com>

pkgname=naikari
pkgver=0.1.2
pkgrel=1
pkgdesc="Naikari is a 2-D space trading and mercenary game forked from the Naev project."
arch=('x86_64')
url="https://naikari.github.io/"
license=('GPL3')
depends=('sdl2_image' 'sdl2_mixer' 'libxml2' 'freetype2' 'libpng' 'openal' 'libvorbis' 'binutils' 'libgl' 'libzip' 'luajit' 'suitesparse')
makedepends=('meson' 'ninja')
provides=('naikari')
conflicts=('naikari' 'naikari-git')
source=("https://github.com/naikari/naikari/releases/download/v${pkgver}/${pkgname}-${pkgver}-source.tar.xz")
md5sums=('cec1eef926ab52e5a338e455d36de3c7')

prepare() {
	# tar -xf ${srcdir}/${pkgname}-${pkgver}-source.tar.xz
	mv ${srcdir}/${pkgname}-${pkgver} ${srcdir}/${pkgname}
	cd ${srcdir}/${pkgname}
	meson build --prefix=/usr
	meson compile -C build
}

package() {
	cd ${srcdir}/${pkgname}
	DESTDIR=${pkgdir} meson install -C build
}