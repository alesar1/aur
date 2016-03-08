# Maintainer: Raimar Bühmann <raimar _at_ buehmann _dot_ de>
# This PKGBUILD is based on poco to provide also the basic version of
# https://aur.archlinux.org/packages/poco/

pkgname=libpoco-basic
pkgver=1.7.0
pkgrel=1
pkgdesc="C++ class libraries for network-centric, portable applications, basic edition"
arch=('i686' 'x86_64')
url="http://www.pocoproject.org"
license=('custom:boost')
depends=('pcre' 'expat')
conflicts=('poco' 'poco-devel' 'poco-git')
makedepends=('gcc' 'make')
source=(
	${url}/releases/poco-${pkgver}/poco-${pkgver}.tar.gz
#	RegularExpression.h.patch
)
sha256sums=('583b00117a3cba8842c10a04675cabe5c3e0abc0a02a52c3d6431ea03a93320d')
prepare() {
	# apply patch for static build
	cd poco-$pkgver
#	patch Foundation/include/Poco/RegularExpression.h < ../RegularExpression.h.patch
}

build() {
	cd poco-${pkgver}
	./configure --prefix=/usr --no-samples --no-tests --unbundled --static --shared
	make
}

package() {
	cd poco-${pkgver}
	make DESTDIR="${pkgdir}" install
	install -Dm644 'LICENSE' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	# remove debug libraries
	rm "${pkgdir}/usr/lib/libPoco"*"d.so"*
	rm "${pkgdir}/usr/lib/libPoco"*"d.a"
}
