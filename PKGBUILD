# Maintainer: Spider.007 <aur@spider007.net>
pkgname=graylog
replaces=(graylog2-server graylog-web-interface)
conflicts=(${replaces[*]})
pkgver=2.1.3
pkgrel=1
pkgdesc="Graylog is an open source syslog implementation that stores your logs in ElasticSearch and MongoDB"
arch=('any')
url="https://www.graylog.org/"
license=(GPL)
depends=(java-runtime-headless)
optdepends=('elasticsearch<5.0' mongodb)
install=graylog.install
backup=(
	etc/graylog/server/server.conf
)
source=(
	https://packages.graylog2.org/releases/$pkgname/$pkgname-${pkgver/_/-}.tgz
	graylog-tmpfiles.conf
	graylog.service
)
sha256sums=('eb66106d609d00c55e6d914d14b7ea881f8db9317fb443a8bbc66c55f924f94c'
            '4d3c0bb83c7a02a5a902670b060d045068f5201728194a4473b2c2ba99bbd43d'
            'f9f3d3bd670d7889eb6053b016d365f37eaa9b736c9076ae101b3efeab7f428f')

package() {
	cd "$srcdir/$pkgname-${pkgver/_/-}"

	mkdir -p $pkgdir/var/lib/graylog/{spool,data/journal,log}
	chown nobody: -R $pkgdir/var/lib/graylog/

	mkdir -p $pkgdir/usr/lib/graylog/data/
	for d in spool data/journal log; do
		ln -s /var/lib/graylog/$d $pkgdir/usr/lib/graylog/$d
	done

	mkdir -p $pkgdir/usr/lib/graylog/{data/contentpacks,plugin}
	cp data/contentpacks/* $pkgdir/usr/lib/graylog/data/contentpacks/
	cp plugin/* $pkgdir/usr/lib/graylog/plugin/

	install -Dm644 lib/sigar/sigar.jar "$pkgdir/usr/lib/graylog/lib/sigar/sigar.jar"
	cp -p lib/sigar/libsigar-{amd64,x86}-linux.so "$pkgdir/usr/lib/graylog/lib/sigar/"
	install -Dm644 graylog.jar "$pkgdir/usr/lib/graylog/server.jar"
	install -Dm644 "$srcdir/graylog-tmpfiles.conf" "$pkgdir/usr/lib/tmpfiles.d/graylog-server.conf"
	install -Dm644 "$srcdir/graylog.service" "$pkgdir/usr/lib/systemd/system/graylog.service"

	install -dm755 "$pkgdir/usr/share/doc/$pkgname"
	cp README.markdown COPYING "$pkgdir/usr/share/doc/$pkgname"

	install -Dm644 graylog.conf.example $pkgdir/etc/graylog/server/server.conf
	sed -i 's/_dir = /_dir = \/usr\/lib\/graylog\//g' $pkgdir/etc/graylog/server/server.conf
}
