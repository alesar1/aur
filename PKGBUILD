# Maintainer: Raimar Bühmann <raimar _at_ buehmann _dot_ de>
# This PKGBUILD is based on poco to provide also the basic version of
# https://aur.archlinux.org/packages/poco/

pkgname=libpoco-basic
pkgver=1.9.2
_subrel=
pkgrel=1
pkgdesc="C++ class libraries for network-centric, portable applications, basic edition"
arch=('i686' 'x86_64')
url="http://www.pocoproject.org"
license=('custom:boost')
depends=('pcre' 'expat')
conflicts=('poco' 'poco-devel' 'poco-git')
makedepends=('gcc' 'make')
source=(
	${url}/releases/poco-${pkgver}/poco-${pkgver}${_subrel}.tar.gz
#	RegularExpression.h.patch
)
sha256sums=('528c99b3f19a63b141065aa11d91e6311ab004589d307f2416fe0523844d8578')
prepare() {
	# apply patch for static build
	cd poco-${pkgver}${_subrel}
#	patch Foundation/include/Poco/RegularExpression.h < ../RegularExpression.h.patch
}

build() {
	cd poco-${pkgver}${_subrel}
	./configure --prefix=/usr --no-samples --no-tests --unbundled --static --shared
	make
}

package() {
	cd poco-${pkgver}${_subrel}
	make DESTDIR="${pkgdir}" install
	install -Dm644 'LICENSE' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	# remove debug libraries
	rm "${pkgdir}/usr/lib/libPoco"*"d.so"*
	rm "${pkgdir}/usr/lib/libPoco"*"d.a"
}
