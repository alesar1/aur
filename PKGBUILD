# Maintainer: Spider.007 <aur@spider007.net>
pkgname=graylog
pkgver=4.1.3
pkgrel=1
pkgdesc="Graylog is an open source syslog implementation that stores your logs in ElasticSearch and MongoDB"
arch=('any')
url="https://www.graylog.org/"
license=(SSPL)
depends=('java-runtime-headless=11')
optdepends=('elasticsearch' mongodb)
install=graylog.install
changelog=UPGRADING.rst
backup=(
	etc/graylog/server/server.conf
)
source=(
	https://packages.graylog2.org/releases/$pkgname/$pkgname-${pkgver/_/-}.tgz
	graylog-tmpfiles.conf
	graylog.service
)

sha256sums=('516b32cc3f6888bbbdedfa1c3d722a5413da658257de6be7eb9adf2fb404ac83'
            'SKIP'
            'SKIP')

prepare() {
	curl -O https://raw.githubusercontent.com/Graylog2/graylog2-server/4.0/UPGRADING.rst
}

package() {
	cd "$pkgdir"

	for p in "$srcdir/$pkgname-${pkgver/_/-}"/plugin/*; do
		install -Dm644 $p usr/lib/graylog/plugin/${p##*/}
	done
	install -Dm644 "$srcdir/$pkgname-${pkgver/_/-}"/graylog.jar usr/lib/graylog/server.jar
	install -Dm644 "$srcdir/graylog-tmpfiles.conf" usr/lib/tmpfiles.d/graylog-server.conf
	install -Dm644 "$srcdir/graylog.service" usr/lib/systemd/system/graylog.service

	for f in README.markdown LICENSE; do
		install -Dm644 "$srcdir/$pkgname-${pkgver/_/-}/$f" usr/share/doc/$pkgname/${f##*/}
	done

	install -Dm644 "$srcdir/$pkgname-${pkgver/_/-}"/graylog.conf.example $pkgdir/etc/graylog/server/server.conf

	# make absolute just in case
	sed -i 's~^\(plugin_dir =\) plugin$~\1 /usr/lib/graylog/plugin~g' $pkgdir/etc/graylog/server/server.conf
	sed -i 's~^\(message_journal_dir =\) data/journal$~\1 /var/lib/graylog/data/journal~g' $pkgdir/etc/graylog/server/server.conf
	sed -i 's~^\(content_packs_dir =\) data/contentpacks$~\1 /usr/lib/graylog/data/contentpacks~g' $pkgdir/etc/graylog/server/server.conf
}
