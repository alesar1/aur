# Maintainer: grufo <madmurphy333 AT gmail DOT com>

pkgname='gnunet-fuse-git'
_appname='gnunet-fuse'
pkgver='r106.3503aef'
pkgrel=1
pkgdesc='Mounting directories published on GNUnet as read-only file-systems'
arch=('i686' 'x86_64')
url='https://gnunet.org/'
license=('GPL')
depends=('gnunet' 'fuse2')
provides=('gnunet-fuse')
conflicts=('gnunet-fuse')
makedepends=('autoconf')
source=("git+https://gnunet.org/git/${_appname}.git")

md5sums=('SKIP')

pkgver() {

	cd "${_appname}"
	printf "'r%s.%s'" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

prepare() {

	cd "${srcdir}/${_appname}"
	autoreconf -fi
	./configure --prefix=/usr

}

build() {

	cd "${srcdir}/${_appname}"
	make

}

check() {

	cd "${srcdir}/${_appname}"
	make check

}

package() {

	cd "${srcdir}/${_appname}"
	make DESTDIR="${pkgdir}" install

}

