# Contributor: Brian F.G. <bidulock@openss7.org>
# Maintainer: Alexandr Boiko <brdcom@ya.ru>
pkgname=accel-ppp
pkgver=1.10.2
pkgrel=6
pkgdesc="High performance PPTP/L2TP/PPPoE/IPoE server"
arch=('i686' 'x86_64')
url="http://sourceforge.net/apps/trac/accel-ppp/"
license=('GPL')
depends=('openssl>=1.0.0' 'pcre>=8.30' 'libnl')
makedepends=('cmake>=2.6' 'libnl1' 'net-snmp>=5.x' 'lua51')
optdepends=('accel-ppp-ipoe-dkms' 'logrotate')
conflicts=('accel-ppp-git')
install='accel-ppp.install'
options=('docs')
backup=('etc/accel-ppp.conf' 'etc/accel-ppp.lua' 'etc/snmp/accel-ppp.conf')
source=(http://sourceforge.net/projects/$pkgname/files/$pkgname-$pkgver.tar.bz2
	accel-ppp.logrotate
	accel-ppp.lua
	accel-ppp.tmpfiles
	accel-pppd.service
	dictionary.abills
	dictionary.accel_ipoe)

md5sums=('31f8408691b67e1504e31b6773d2d9d1'
         '0536dd60960e76cf5a6cdbf0518782d8'
         '816dd5ea9534a077dfd63b6cd529738a'
         '312fd63b9688a05b71a6b33ddd3a9f4b'
         'a171d28760bf411be85dc4a964df2c0a'
         '4e0d4fc5975ea8794ea286e8fbfa56cd'
         '7e58716f1249f924ce218bd348d4c03a')

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
	sed -i 's|RUNTIME DESTINATION sbin|RUNTIME DESTINATION bin|' \
		"accel-pppd/CMakeLists.txt"
	if [ -d "build" ]; then
		rm -fr "build"
		mkdir "build"
	else
		mkdir "build"
	fi
}

build() {
	cd "$srcdir/$pkgname-$pkgver/build"
	cmake \
		-DCMAKE_SYSTEM_NAME=Linux \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_BUILD_TYPE=Release \
		-DLOG_FILE=TRUE \
		-DLOG_PGSQL=FALSE \
		-DSHAPER=TRUE \
		-DRADIUS=TRUE \
		-DNETSNMP=FALSE \
		-DLUA=TRUE \
		-DLUA_INCLUDE_DIR="/usr/include/lua5.1" \
		"$srcdir/$pkgname-$pkgver"
	make || return 1
}
package() {
	cd "$srcdir/$pkgname-$pkgver/build"
	make DESTDIR="$pkgdir" install || return 1

	[ -d "$pkgdir/usr/lib64" ] && mv "$pkgdir/usr/lib64" "$pkgdir/usr/lib"
	install -dm0755 "$pkgdir/etc/logrotate.d/"
	install -dm0755 "$pkgdir/etc/snmp/"
	touch "$pkgdir/etc/snmp/$pkgname.conf"
	install -Dm0644 "$srcdir/$pkgname-$pkgver/README" "$pkgdir/usr/share/doc/$pkgname/README"
	install -Dm0644 "$srcdir/accel-pppd.service" "$pkgdir/usr/lib/systemd/system/accel-pppd.service"
	install -Dm0644 "$srcdir/$pkgname.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
	install -Dm0644 "$srcdir/$pkgname.lua" "$pkgdir/etc/$pkgname.lua"
	install -Dm0644 "$srcdir/$pkgname.logrotate" "$pkgdir/etc/logrotate.d/$pkgname"
	install -Dm0644 "$srcdir/dictionary.accel_ipoe" "$pkgdir/usr/share/accel-ppp/radius/dictionary.accel_ipoe"
	install -Dm0644 "$srcdir/dictionary.abills" "$pkgdir/usr/share/accel-ppp/radius/dictionary.abills"
	install -Dm0644 "$pkgdir/etc/$pkgname.conf.dist" "$pkgdir/etc/$pkgname.conf"
	install -Dm0644 "$srcdir/$pkgname-$pkgver/accel-pppd/extra/net-snmp/ACCEL-PPP-MIB.txt" "$pkgdir/usr/share/snmp/mibs/ACCEL-PPP-MIB.txt"
	install -Dm0644 "$srcdir/$pkgname-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

