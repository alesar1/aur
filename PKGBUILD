# Maintainer: Gaetan Bisson <bisson@archlinux.org>
# Contributor:  Daenyth <Daenyth [at] gmail [dot] com>
# Contributor: Jeff Mickey <jeff@archlinux.org>
# Contributor: sh__

_pkgname=rtorrent
pkgname=rtorrent-ipv6
pkgver=0.9.4
pkgrel=1
pkgdesc='Ncurses BitTorrent client based on libTorrent, with IPv6 patch'
url='http://rakshasa.github.io/rtorrent/'
license=('GPL')
arch=('i686' 'x86_64')
depends=('libtorrent=0.13.4' 'curl' 'xmlrpc-c' 'libsigc++')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("https://github.com/rakshasa/${_pkgname}/archive/${pkgver}.tar.gz"
        "rtorrent-0.9.4_ipv6.patch")
sha1sums=('c1f0b27425f6b025db550cf5ce1997a16af6ff7b'
          'aba9a7edf277924ec3e45317122d5a84c646ac36')

build() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
    patch -uNp1 -i "${srcdir}/${_pkgname}-${pkgver}_ipv6.patch"
	sed '/AM_PATH_CPPUNIT/d' -i configure.ac
	./autogen.sh

	export CXXFLAGS="${CXXFLAGS} -fno-strict-aliasing"
	./configure \
		--prefix=/usr \
		--disable-debug \
		--with-xmlrpc-c \

	make
}

package() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	install -D doc/rtorrent.rc "${pkgdir}"/usr/share/doc/rtorrent/rtorrent.rc
}
