# $Id$
# Maintainer: Sean V Kelley <seanvk@posteo.de>

pkgname=clr-power-tweaks
pkgver=207
pkgrel=1
pkgdesc="Power Tweaks -- adjusts runtime kernel options for optimal power and performance"
arch=('i686' 'x86_64')
url="https://github.com/clearlinux/clr-power-tweaks"
license=('GPL3')
depends=('glibc')
options=('!emptydirs')
changelog=
source=($url/archive/$pkgname-$pkgver.tar.gz)
sha256sums=('146bb374083f27c15edea6e0ccde006482d4c6397a079718d42fe1d0482ceb28')
build() {
	export LD_RUN_PATH='$ORIGIN/lib/'
	cd $pkgname-$pkgver
	libtoolize --force
	aclocal
	autoheader
	automake --force-missing --add-missing
	autoconf
	./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
    	--with-package-name="Clear Power Tweaks (Arch Linux)" \
    	--with-package-origin="http://www.archlinux.org/"
	make
	unset LD_RUN_PATH
}

check() {
	cd "$pkgname-$pkgver"
	make check
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
