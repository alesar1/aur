# Maintainer: timescam <rex.ky.ng at gmail dot com>

pkgname=playerctl-git
_pkgname=playerctl
pkgver=2.0.1.r4.g20b3b82
pkgrel=1
pkgdesc="mpris media player controller and lib for spotify, vlc, audacious, bmp, xmms2, and others."
arch=('i686' 'x86_64')
url="https://github.com/acrisci/playerctl"
license=('LGPL3')
depends=('glib2' 'gobject-introspection')
optdepends=('python-gobject: python bindings')
makedepends=('git' 'gtk-doc' 'meson' 'ninja')
provides=('playerctl')
conflicts=('playerctl')
source=("$_pkgname::git+https://github.com/acrisci/playerctl.git")
sha256sums=("SKIP")

pkgver() {
    cd "$srcdir/$_pkgname"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/$_pkgname"
    meson --prefix=/usr --libdir=/usr/lib mesonbuild
	DESTDIR="$pkgdir/" ninja -C mesonbuild
}

package() {
    cd "$srcdir/$_pkgname"
	DESTDIR="$pkgdir/" ninja -C mesonbuild install
}
