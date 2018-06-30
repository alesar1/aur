# Maintainer: Christopher Davis <brainblastedmods@gmail.com>
# Submitter: Falk Alexander Seidl <fa@terminal.run>

pkgname=fractal-git
_gitname=fractal
pkgver=r840.d1dba64
pkgrel=1
pkgdesc="Matrix.org gtk+ client"
arch=('i686' 'x86_64')
license=('GPL3')
url="https://gitlab.gnome.org/World/fractal"
depends=('gtk3' 'gstreamer' 'gst-plugins-base' 'gst-plugins-good'
        'gst-plugins-bad' 'gst-plugins-ugly' 'gst-libav' 'gspell')
conflics=('fractal')
provides=('fractal')
makedepends=('gtk3' 'rust' 'pkg-config' 'git' 'meson')
source=("git+https://gitlab.gnome.org/World/fractal.git")
md5sums=('SKIP')
 
pkgver() {
	cd "${srcdir}/${_gitname}/"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${srcdir}/${_gitname}/"
	meson . _build --prefix=/usr
	ninja -C _build
}

package() {
	cd "${srcdir}/${_gitname}/"
	DESTDIR="${pkgdir}" ninja -C _build install
}
