
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Maintainer: Yegorius <yegorius@domic.us>

pkgname=jetty
pkgver=9.3.11
_timestamp=v20160721
pkgrel=1
pkgdesc="Jetty is a pure Java-based HTTP server and Java Servlet container"
arch=('any')
url="http://www.eclipse.org/jetty/"
license=('Apache' 'EPL')
depends=('java-environment')
options=('!strip')
_distname=jetty-distribution-$pkgver.$_timestamp
_dluri="http://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/9.3.11.v20160721/$_distname.tar.gz"
source=("$_distname.tar.gz::$_dluri"
	jetty.default
	jetty.logrotate
	jetty.service
	rundir.patch)
sha256sums=('6f720a39324ba02491c5dd598039f9cda1746d45c26594f8189692058f9f4264'
            'e5b425043a379bde57fd37c498ff8efb822325b7606b149cc09a53737ab4297d'
            'da0402440e0a3b66e55387700b2c178c294dc65cc4a7bd079c622343845adecb'
            '36266b7f4daf20871f4bf5636686e37fa5ffd173fd51303f2569fc8d453fa17a'
            '596bb12d69ec25eba94b911619597786b246c6c867e9ce1e75f1585cd93663bf')
install=$pkgname.install

package() {
	cd "$srcdir/$_distname"

	install -dm755 "$pkgdir/etc/jetty"
	install -dm755 "$pkgdir/usr/bin"
	install -dm755 "$pkgdir/var/log/jetty"
	install -dm755 "$pkgdir/var/lib/jetty/webapps"

	install -Dm755 bin/jetty.sh "$pkgdir/usr/share/jetty/bin/jetty.sh"
	cp -r etc/* "$pkgdir/etc/jetty"
	cp -r {resources,start.ini} "$pkgdir/etc/jetty/"
	cp -r {lib,modules,start.jar,README.TXT} "$pkgdir/usr/share/jetty/"
	cp -r webapps/README.TXT "$pkgdir/var/lib/jetty/webapps"

	ln -s /etc/jetty "$pkgdir/usr/share/jetty/etc"
	ln -s etc/start.d "$pkgdir/usr/share/jetty/start.d"
	ln -s etc/start.ini "$pkgdir/usr/share/jetty/start.ini"
	ln -s etc/resources "$pkgdir/usr/share/jetty/resources"
	ln -s /usr/share/jetty/bin/jetty.sh "$pkgdir/usr/bin/jetty"
	ln -s /var/lib/jetty/webapps "$pkgdir/usr/share/jetty/webapps"

	install -Dm644 "$srcdir/jetty.default" "$pkgdir/etc/default/jetty"
	install -Dm644 "$srcdir/jetty.logrotate" "$pkgdir/etc/logrotate.d/jetty"
	install -Dm644 "$srcdir/jetty.service" "$pkgdir/usr/lib/systemd/system/jetty.service"

	patch -Np1 -i "$srcdir/rundir.patch" "$pkgdir/usr/share/jetty/bin/jetty.sh"
	sed -i 's|su - |su -s /bin/sh - |' "$pkgdir/usr/share/jetty/bin/jetty.sh"

	rm "$pkgdir/usr/share/jetty/lib/setuid/libsetuid-osx.so"
}

