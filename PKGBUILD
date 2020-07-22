# Maintainer: Miguel Revilla <yo at miguelrevilla dot com>

pkgname=libodb-pgsql
pkgver=2.5.0b19
pkgrel=1
pkgdesc="The ODB PostreSQL runtime library"
url="https://www.codesynthesis.com/products/odb/"
arch=('i686' 'x86_64')
depends=('build2' 'postgresql-libs')
options=('!libtool')
license=('GPL3')

build() {
	cd "${srcdir}"
	mkdir -p "${srcdir}/${pkgname}-${pkgver}"
	cd "${srcdir}/${pkgname}-${pkgver}"

	GPPVER="$(g++ --version | grep 'g++ (GCC)' | sed 's/g++ (GCC) //')"

	bpkg create -d gcc-${GPPVER} cc \
	config.cxx=g++ \
	config.cc.coptions=-O3 \
	config.bin.lib=shared \
	config.install.root=${pkgdir}/usr

	cd gcc-${GPPVER}
	bpkg add https://pkg.cppget.org/1/beta
	bpkg fetch --trust-yes
	bpkg build --trust-yes ${pkgname} ?sys:libpq ?sys:libodb
}

package() {

	GPPVER="$(g++ --version | grep 'g++ (GCC)' | sed 's/g++ (GCC) //')"
	cd "${srcdir}/${pkgname}-${pkgver}/gcc-${GPPVER}"

	bpkg install libodb-pgsql

	for f in ${pkgdir}/usr/lib/pkgconfig/*.pc; do sed -i "s|${pkgdir}||" ${f}; done

	mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}/
	mv ${pkgdir}/usr/share/doc/${pkgname}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/
}
