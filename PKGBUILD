pkgname=xbacklight-auto-git
pkgbase=xbacklight-auto
pkgver=0.1
pkgrel=1
pkgdesc="Automatic brightness utility using the V4L2 camera api and xbacklight"
arch=('i686' 'x86_64')
license=('GPL')
depends=('xorg-xbacklight') # acpilight should work too
makedepends=('git')
provides=('xbacklight-auto')
source=("git+https://github.com/raptor8134/xbacklight-auto.git")
md5sums=('SKIP')

build() {
	cd ${srcdir}/${pkgbase}
	make
}

package() {
	cd ${srcdir}/${pkgbase}
	make DESTDIR="${pkgdir}/" install
}
