# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=imagemagick-full-doc-git
pkgver=7.0.0.0.r10577.g0ff89d1
pkgrel=1
pkgdesc="The ImageMagick documentation (utilities manuals and libraries API)"
arch=('i686' 'x86_64')
url="http://www.imagemagick.org/"
license=('custom')
provides=('imagemagick-doc' 'imagemagick-full-doc' 'imagemagick-git-doc')
conflicts=('imagemagick-doc' 'imagemagick-full-doc' 'imagemagick-git-doc')
source=("$pkgname"::'git+http://git.imagemagick.org/repos/ImageMagick.git')
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"
	
	# Git, no tags available
	
	local _version="$(grep "PACKAGE_VERSION=" version.sh | grep -o '[0-9.]*')"
	local _release="$(grep "PACKAGE_RELEASE=" version.sh | grep -o '[0-9]')"
	local _revision="$(printf "r%s.g%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")"
	
	printf "%s.%s.%s" "$_version" "$_release" "$_revision"
}

build() {
	cd "${srcdir}/${pkgname}"
	
	./configure --prefix=/usr
}

package() {
	cd "${srcdir}/${pkgname}"
	
	make DESTDIR="$pkgdir/" install-data-html
	
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -D -m644 NOTICE "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
}
