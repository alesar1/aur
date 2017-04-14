# Maintainer: Frederic Bezies < fredbezies at gmail dot com>
# Contributor: Ian Brunelli (brunelli) <ian@brunelli.me>

pkgname=lollypop-git
_gitname=lollypop
pkgver=0.9.231.r3.g0e447a26
pkgrel=1
pkgdesc='Music player for GNOME'
arch=('i686' 'x86_64')
license=('GPL3')
url="https://github.com/gnumdk/${_gitname}"
depends=('desktop-file-utils' 'gobject-introspection' 'gtk3' 'python-dbus' 'python-gobject' 'python-cairo' 'totem-plparser' 'libsecret' 'python-pylast')
makedepends=('git' 'gnome-common' 'intltool' 'itstool' 'python' 'yelp-tools')
optdepends=('python-wikipedia: display advanced artist information')
options=('!emptydirs')
source=("git://github.com/gnumdk/${_gitname}.git")
sha1sums=('SKIP')
conflicts=('lollypop')
provides=("lollypop=$pkgver")

pkgver() {
	cd "${_gitname}"
	git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$srcdir/${_gitname}"
	./autogen.sh --prefix=/usr --disable-schemas-compile
	make
}

package() {
	cd "$srcdir/${_gitname}"
	make DESTDIR="${pkgdir}" install
	#chmod +x $pkgdir/usr/share/lollypop/lollypop-sp
}
