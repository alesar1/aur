# Maintainer: jfperini <@jfperini>
# Contributor: jfperini <@jfperini>

pkgname=vocal
pkgver=1.0+r301
pkgrel=1
pkgdesc="Vocal Podcast Manager. Simple Podcast Client for the Modern Desktop."
arch=('any')
url="http://www.vocalproject.net"
license=('GPLv3')
depends=('libnotify' 'libunity' 'libxml2' 'granite' 'gtk3' 'gstreamer' 'sqlite3' 'clutter-gtk' 'icu')
makedepends=('bzr' 'vala' 'cmake')
# provides=('')
# conflicts=('')
install="$pkgname.install"
source=("$pkgname"::'bzr+https://code.launchpad.net/~nathandyer/vocal/trunk')
md5sums=('SKIP')

#_bzrtrunk=lp:vocal
#_bzrmod=vocal

pkgver() {

	cd "$pkgname"
    	# bzr revno
    	printf "1.0+r%s" "$(bzr revno)"
    
}


build() {

    	cd "$pkgname"

    	msg2 "  -> Build program..."
    	if [[ -d build ]]; then
    	rm -rf build
    	fi
    	mkdir build && cd build
    	cmake .. -DCMAKE_INSTALL_PREFIX=/usr
    	make
    
}

package() {

    	cd "$pkgname/build"
    
    	msg2 "  -> Installing program..."
    	make DESTDIR="$pkgdir" install
    
}

# vim: ts=2 sw=2 et:
