# Maintainer: nl6720 <nl6720@gmail.com>
# Contributor: Andreas B. Wagner <AndreasBWagner@pointfree.net>
# Contributor: Eric Belanger <eric@archlinux.org>
# Contributor: Jeff Mickey <jeff@archlinux.org>

pkgname=yodl
pkgver=3.08.02
pkgrel=1
pkgdesc='Implements a pre-document language and tools to process it.'
arch=('i686' 'x86_64')
url='https://fbb-git.github.io/yodl/'
license=('GPL3')
depends=('bash')
makedepends=('icmake>=8.00.00')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/fbb-git/${pkgname}/archive/${pkgver}.tar.gz")
sha512sums=('adad9f6235288f0ae6990c0dbba3cd7c8461172ae83231ca8fa113275d04ad20d3722e70f6f0ffcf072a19b4816e556b9b09227123516fc4a0170bc053b48b8e')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}/${pkgname}"
	./build programs
	./build macros
	./build man
	./build html
}
package() {
	cd "${srcdir}/${pkgname}-${pkgver}/${pkgname}"
	./build install programs "${pkgdir}"
	./build install macros "${pkgdir}"
	./build install man "${pkgdir}"
	./build install manual "${pkgdir}"
}
