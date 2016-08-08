# Maintainer: Oleksandr Natalenko <oleksandr@natalenko.name>
pkgname=rmilter
pkgver=1.9.1
pkgrel=1
epoch=
pkgdesc="Another sendmail milter for different mail checks."
arch=('x86_64' 'i686')
url="http://rspamd.com"
license=('BSD')
depends=('openssl' 'pcre' 'libmilter' 'opendkim')
makedepends=('cmake' 'pkgconfig' 'bison' 'flex')

backup=('etc/rmilter/rmilter-grey.conf')

install=rmilter.install

source=("${pkgname}-${pkgver}.tar.gz::https://codeload.github.com/vstakhov/${pkgname}/tar.gz/${pkgver}")

sha256sums=('5f707a198c80af32333d2648be3c4cbee54e0197abdce65bd7a6c50e18287455')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	cmake \
		-DENABLE_DEBUG=OFF \
		-DCMAKE_BUILD_TYPE=Release \
		-DRMILTER_USER=_rmilter \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DSBINDIR=/usr/bin \
		-DENABLE_MEMCACHED=OFF \
		-DWANT_SYSTEMD_UNITS=ON \
		.

	make -j$(nproc)
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}/" install

	install -Dm0644 "${pkgname}.conf.sample" "${pkgdir}/etc/${pkgname}/${pkgname}.conf.sample"
	install -Dm0644 "${pkgname}-grey.conf" "${pkgdir}/etc/${pkgname}/${pkgname}-grey.conf"
}
