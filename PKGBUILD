# Maintainer: Martin Trigaux <me@mart-e.be>
pkgname=ardor
pkgver=2.0.10
pkgrel=1
pkgdesc="The Ardor Reference Software Client for use with the Ardor Blockchain Platform."
arch=()
url="https://www.ardorplatform.org"
license=('MIT/GPL')
arch=(any)
makedepends=(unzip)
depends=('jre8-openjdk')
install=$pkgname.install
source=(
	https://bitbucket.org/Jelurida/ardor/downloads/ardor-client-$pkgver.zip
	ardor.service
)
sha256sums=(
	'c7190aa9575c13205f18a206ad62528135a5efecfee7eccf9968e7844e8946d4'
	'7b044d914d07f31d97746d9e5438dbcfedcd2e81e8acadb4c96dd315f2ce4862'
)

package() {
	mkdir -p $pkgdir/opt/$pkgname
	mkdir -p $pkgdir/usr/bin
	cp -rf $pkgname $pkgdir/opt

	echo "#!/bin/sh" > $pkgdir/usr/bin/ardor
	echo "cd /opt/ardor && bash run.sh" >> $pkgdir/usr/bin/ardor
	echo "#!/bin/sh" > $pkgdir/usr/bin/ardor-tor
	echo "cd /opt/ardor && bash run-tor.sh" >> $pkgdir/usr/bin/ardor-tor

	install -Dm644 "${srcdir}"/ardor.service "${pkgdir}"/usr/lib/systemd/system/ardor.service

	chmod 755 $pkgdir/usr/bin/ardor
	chmod 755 $pkgdir/usr/bin/ardor-tor
	mkdir nxt_db
	chmod 777 -R $pkgdir/opt/ardor
}
