# Maintainer: Jonathan Chasteen <jonathan.chasteen@live.com> 

pkgname=ltfs
pkgver=2.4.0.2
_pkgver2=5-00732-10
_pkgver3=2.4
pkgrel=2
pkgdesc='Linear Tape File System'
arch=('x86_64' 'i686')
url='https://www.quantum.com/ServiceandSupport/OpenSource/LTFS/Index.aspx'
license=('custom:ltfs')
depends=('fuse' 'icu' 'libxml2')
makedepends=('patch' 'gcc' 'pkg-config' 'make' 'fakeroot' 'net-snmp')
backup=('etc/ltfs.conf.local')
source=("http://downloads.quantum.com/open_source/LTFS/${pkgver}/${_pkgver2}.zip"
        'LICENSE')
sha512sums=('97f6870773f4d8558184ceb8c2e9a437ee35ef3062b1a6c5cb6113fcfb2eeda743e369b65717e0f697c4caf0a215e0883b1118678b2c720647fd47ff6e654314'
            '865c4a581d32d94537ba8d19f2494ba9da54328cd94cf0cffac25b8f446cdeb062172d7598c45ac85477a239b5e5a9b7342a9a4711c54efa7f47b79d89c9d893')

prepare() {
	tar xf `find "${srcdir}" -name '*.tar.gz'`
}

build() {
	cd "${srcdir}/qtmltfs${_pkgver3}"
	./autogen.sh
	./configure \
		--prefix=/usr \
		--sbindir=/usr/bin \
		--sysconfdir=/etc \
		--localstatedir=/var

	make
}

package() {
	cd "${srcdir}/qtmltfs${_pkgver3}"

	# Not sure if using the makefile wrong
	# sed -i 's:$(sysconfdir)/ltfs.conf.local:$(DESTDIR)$(sysconfdir)/ltfs.conf.local:g' "conf/Makefile"
	sed -i 's:${datarootdir}/ltfs:$(DESTDIR)${datarootdir}/ltfs:g' "init.d/Makefile"
	make DESTDIR="${pkgdir}" install

	install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/ltfs"
	# This sysvinit service is not needed because systemd will umount everything on poweroff.
	# rm -r "${pkgdir}/usr/share/ltfs"
}
