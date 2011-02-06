# Author: Thomas Vander Stichele <thomas at apestaart dot org>
# Maintainer: Mantas Mikulėnas <grawity@gmail.com>
pkgname=morituri
pkgver=0.1.1
pkgrel=5
pkgdesc="a CD ripper aiming for accuracy over speed, modelled after Exact Audio Copy"
arch=(i686 x86_64)
url="https://thomas.apestaart.org/morituri/trac/"
license=("GPL3")
depends=("cdparanoia" "cdrdao" "gstreamer0.10" "gstreamer0.10-python"
	"python-musicbrainz2")
optdepends=("python2-pycdio: for 'rip drive list'")
source=("http://thomas.apestaart.org/download/morituri/$pkgname-$pkgver.tar.bz2")
md5sums=('c201e8d14a7b809503ac1a767722daee')

build() {
	cd "$srcdir/$pkgname-$pkgver"

	sed -i '27s/\<python\>/&2/' doc/Makefile.am
	automake

	sed -i '1s/\<python\>/&2/' bin/rip.in etc/bash_completion.d/bash-compgen

	export PYTHON="python2"
	./configure --prefix=/usr --sysconfdir=/etc 
	make
}
package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install || return 1
	install -Dm 0644 "README" "$pkgdir/usr/share/doc/morituri/README"
}
# vim: set ft=sh
