# Maintainer: grufo <madmurphy333 AT gmail DOT com>
# Contributor: PedroHLC <root AT pedrohlc DOT com>

pkgname='notejot-git'
_appname='notejot'
pkgver='r288.812c678'
pkgrel=1
pkgdesc='A stupidly-simple sticky notes application for any type of short term notes or ideas'
arch=('i686' 'x86_64')
url='https://github.com/lainsce/notejot'
license=('GPL')
depends=('granite' 'gtk3' 'gtksourceview3' 'json-glib' 'libgee')
makedepends=('meson' 'vala')
provides=('notejot')
conflicts=('notejot-git')
source=("git+https://github.com/lainsce/${_appname}.git")
md5sums=('SKIP')

pkgver() {

	cd "${_appname}"
	printf "'r%s.%s'" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

build() {

	cd "${srcdir}/${_appname}"
	meson build
	cd build
	meson configure -Dprefix=/usr

}

package() {

	cd "${srcdir}/${_appname}/build"
	DESTDIR="${pkgdir}" ninja install

}


