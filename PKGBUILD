# $Id$
# Maintainer: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Contributor: sulaweyo <sledge.sulaweyo@gmail.com>
# Contributor: Francois Menning <f.menning@pm.me>

pkgname=gerbera
pkgver=1.6.1
pkgrel=1
pkgdesc="UPnP Media Server (Based on MediaTomb)"
arch=(i686 x86_64 armv7h)
url="https://github.com/gerbera/gerbera"
license=('GPL2')
depends=('taglib' 'curl' 'sqlite' 'file' 'gcc-libs' 'libupnp1.12' 'duktape' 'libexif' 'fmt' 'pugixml' 'spdlog' 'ffmpeg' 'ffmpegthumbnailer' 'libmatroska')
optdepends=('libmariadbclient')
makedepends=('cmake')
install=gerbera.install
options=('emptydirs')
source=("$pkgname-$pkgver.tar.gz::https://github.com/gerbera/gerbera/archive/v$pkgver.tar.gz"
	gerbera.sysusers
	gerbera.tmpfiles)
sha256sums=('9bb119ee422c8e7a053c309256215a8899dfd6707f6b93496e6facea7978ac7c'
            '0b55a4e1886f7aad0528446658433327815fd3f4d06e260518423f86dbe32dcc'
            '452f5d4b5661e0262cb4a48d62a54f5f26d53c6d3aebf502cde072214a8b30d8')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	sed -i 's/${PC_UPNP_LIBRARIES}//g' cmake/Findpupnp.cmake
	export PKG_CONFIG_PATH="/usr/lib/libupnp-1.12/pkgconfig/:${PKG_CONFIG_PATH}"
	# Gerbera build options can be found here: https://github.com/gerbera/gerbera/blob/master/CMakeLists.txt
	# use sqlite backend
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DWITH_AVCODEC=1 -DWITH_FFMPEGTHUMBNAILER=1 .
	# use mysql backend - requires libmariadbclient
	#cmake -DCMAKE_INSTALL_PREFIX=/usr -DWITH_AVCODEC=1 -DWITH_FFMPEGTHUMBNAILER=1 -DWITH_MYSQL=1 .
	make
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}/" install

	install -dm0755 "${pkgdir}"/var/lib/gerbera
	install -dm0755 "${pkgdir}"/etc/gerbera
	install -Dm0644 "${srcdir}/${pkgname}".tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/${pkgname}.conf
	install -Dm0644 "${srcdir}/${pkgname}".sysusers "${pkgdir}"/usr/lib/sysusers.d/gerbera.conf
}
