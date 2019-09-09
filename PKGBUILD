# Maintainer: vagnum08 <vagnum08@gmail.com>

pkgname=cpupower-gui
pkgver=0.6.2
pkgrel=3
pkgdesc="A GUI utility to set CPU frequency limits"
arch=(any)
url="https://gitlab.com/vagnum08/cpupower-gui"
license=('GPL')
depends=('python' 'gtk3' 'hicolor-icon-theme' 'polkit' 'python-dbus' 'python-gobject')
optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome'
                      'lxsession: needed for authentification in Xfce, LXDE etc.')
makedepends=('autoconf-archive')
provides=("${pkgname}")
conflicts=("${pkgname}")
_upload_id=211f0fdb09c1e3fed1a2465484137d0d
source=("${pkgname}_${pkgver}.orig.tar.xz"::"https://gitlab.com/vagnum08/cpupower-gui/uploads/${_upload_id}/${pkgname}-${pkgver}.tar.xz")

sha256sums=('b4a852415f60002415692ff202e682d323664cbf424c426add3d3ce068ac0243')

build() {
	cd "$srcdir/${pkgname}-${pkgver}"
	./configure --prefix=/usr
	make
}

check() {
	cd "$srcdir/${pkgname}-${pkgver}"
	make -k check
}

package() {
	cd "$srcdir/${pkgname}-${pkgver}"
	make DESTDIR="$pkgdir/" install
}
