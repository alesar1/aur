pkgname=eolie-stable-git
_gitname=eolie
pkgver=0.9.99.r11.g52990e46
pkgrel=1
pkgdesc="Simple web browser for GNOME (stable branch: last release + fixes)"
arch=('x86_64' 'i686')
url="https://wiki.gnome.org/Apps/Eolie"
license=('GPL3')
depends=('gtkspell3' 'python-cairo' 'python-dateutil' 'python-gobject' 'webkit2gtk')
makedepends=('git' 'gobject-introspection' 'meson')
optdepends=('python-beautifulsoup4: Import html bookmarks'
            'python-crypto: Firefox Sync support' 
            'python-fxa: Firefox Sync support'
            'python-pyopenssl: Show SSL certificates'
            'python-requests-hawk: Firefox Sync support')
source=("git+https://gitlab.gnome.org/World/eolie")
sha256sums=('SKIP')
conflicts=('eolie' 'eolie-git' 'eolie-next-git')
provides=("eolie=$pkgver")

pkgver() {
	cd "${_gitname}"
	git describe --tags | sed 's/-/+/g'
}

build() {
	arch-meson "${_gitname}" build
	ninja -C build
}

package() {
	DESTDIR="$pkgdir" meson install -C build
}
