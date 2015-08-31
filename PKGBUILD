# $Id: PKGBUILD 233413 2015-03-12 21:33:59Z andyrtr $
# Maintainer: Jan de Groot <jgc@archlinux.org>
# Contributor: Brice Carpentier <brice@daknet.org>

pkgname=cairo
pkgver=1.14.2
pkgrel=1
pkgdesc="Cairo vector graphics library"
arch=(i686 x86_64)
license=('LGPL' 'MPL')
url="http://cairographics.org/"
depends=('libpng' 'libxrender' 'libxext' 'fontconfig' 'pixman>=0.28.0' 'glib2' 'mesa' 'libgl' 'lzo')
makedepends=('libgl' 'librsvg' 'gtk2' 'poppler-glib' 'libspectre' 'gtk-doc' 'valgrind' 'git')
             # for the test suite:
             #'ttf-dejavu' 'gsfonts' 'xorg-server-xvfb' ) # 'libdrm')
#optdepends=('xcb-util: for XCB backend') # really needed?
provides=('cairo-xcb')
replaces=('cairo-xcb')
source=(
	"http://cairographics.org/releases/cairo-$pkgver.tar.xz"
	"cairo-respect-fontconfig_pb.patch"
	"cairo-server-side-gradients.patch"
	"cairo-webkit-html5-fix.patch")
sha1sums=('c8da68aa66ca0855b5d0ff552766d3e8679e1d24'
          'd8ffcb4c4745f7e61671109362a80a872ac989d3'
          '72ecf2dda8462e1588512de257ccbe18642d507f'
          '5bff494f52a16114f4cf6d04bfb0b9d7c4e9da23')

build() {
	cd $pkgname-$pkgver

	patch -Np1 -i ../cairo-respect-fontconfig_pb.patch
	patch -Np1 -i ../cairo-server-side-gradients.patch
	patch -Np1 -i ../cairo-webkit-html5-fix.patch

	./configure --prefix=/usr \
	--sysconfdir=/etc \
	--localstatedir=/var \
	--disable-static \
	--enable-tee \
	--enable-gl \
	--enable-egl \
	--enable-svg \
	--enable-ps \
	--enable-pdf \
	--enable-gobject \
	--enable-gtk-doc
	
	#--disable-xlib-xcb \
	#--enable-test-surfaces \ takes ages
	#--enable-drm # breaks build

	make
}

check() {
	cd $pkgname-$pkgver
	#make -j1 -k test || /bin/true
}

package() {
	cd $pkgname-$pkgver
	make DESTDIR="$pkgdir" install
}
