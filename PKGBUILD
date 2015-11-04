# Contributor: Filip Brcic <brcha@gna.org>
pkgname=mingw-w64-libdbus
pkgver=1.10.2
pkgrel=1
arch=(any)
pkgdesc="DBus library (mingw-w64)"
depends=(mingw-w64-expat)
makedepends=(mingw-w64-configure docbook-xsl)
options=(!strip !buildflags staticlibs)
conflicts=(mingw-w64-dbus)
provides=(mingw-w64-dbus)
replaces=(mingw-w64-dbus)
license=("custom" "GPL")
url="http://www.freedesktop.org/wiki/Software/dbus"
source=("http://dbus.freedesktop.org/releases/dbus/dbus-$pkgver.tar.gz"{,.asc})
md5sums=('2428919cc77b8d0028d65ee4d5dbef31'
         'SKIP')
validpgpkeys=('DA98F25C0871C49A59EAFF2C4DE8FF2A63C7CC90') # Simon McVittie <simon.mcvittie@collabora.co.uk>

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
	cd "${srcdir}/dbus-${pkgver}"
	sed -i 's,THREAD_LIBS="$THREAD_LIBS -lrt",THREAD_LIBS="$THREAD_LIBS",' configure
}

build() {
	cd "${srcdir}/dbus-${pkgver}"
	unset LDFLAGS
	for _arch in ${_architectures}; do
		mkdir -p build-${_arch} && pushd build-${_arch}
		${_arch}-configure \
			--target=${_arch} \
			--with-xml=expat \
			--disable-systemd \
			--disable-tests \
			--disable-Werror \
			--disable-asserts \
			--disable-verbose-mode
		make
		popd
	done
}

package() {
	for _arch in ${_architectures}; do
		cd "${srcdir}/dbus-${pkgver}/build-${_arch}"
		make DESTDIR="${pkgdir}" install
		find "${pkgdir}/usr/${_arch}" -name "*.exe" -exec rm {} \;
		find "${pkgdir}/usr/${_arch}" -name "*.dll" -exec ${_arch}-strip --strip-unneeded {} \;
		find "${pkgdir}/usr/${_arch}" -name "*.a" -o -name "*.dll" | xargs ${_arch}-strip -g
		rm -rf "${pkgdir}/usr/${_arch}/"{etc,var,libexec,share}
	done
}
