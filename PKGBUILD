# Mantainer: Fabrizio Pietrucci <bamlessnty5@gmail.com>

pkgname=jstar
pkgver=1.3.1
pkgrel=2
pkgdesc="A Lightweight Embeddable Scripting Language"
arch=('i686' 'x86_64')
url="https://github.com/jstar-lang/jstar"
license=('MIT')
makedepends=('cmake>=3.9' 'python>=2.7')

source=("${pkgname}-${pkgver}::https://github.com/jstar-lang/jstar/archive/v${pkgver}.tar.gz"
        "https://raw.githubusercontent.com/jstar-lang/jstar/master/LICENSE")

sha256sums=("2c23487f416a7203c381c1d5662915b4fcaab8510ea2bc30c08964b524000c0a"
            "SKIP")

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	mkdir -p build && cd build
	
	cmake -DCMAKE_INSTALL_PREFIX=${pkgdir}/usr ../
	make -j
}

package() {
	install -Dm644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
	
	cd "${srcdir}/${pkgname}-${pkgver}/build"
	make install
}
