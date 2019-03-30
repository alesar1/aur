# Maintainer: Aidan Coward <aidan -dot- coward -at- gmail -dot- com>

pkgname=xmage
pkgver=1.4.34V0
pkgrel=0

pkgdesc="Java-based program for playing Magic:The Gathering, including client and server"

arch=('any')
url="http://xmage.de"
license=('MIT')

makedepends=('detox')
depends=('jre8-openjdk')
optdepends=('wmname: change window manager name for compatibility with certain WMs')

source=("http://xmage.de/files/xmage_${pkgver}.zip"
	'https://raw.githubusercontent.com/magefree/mage/master/LICENSE.txt')

sha256sums=("747713468a56dbdee8c02f43baad72e6dee3f60f1f5b8656fe8036a9b21110aa" 
	"SKIP")

package() {

	cd "${srcdir}"
	
	# clean up filenames
	detox -r -v ./*

	msg2 "changing file format of included scripts..."
	awk '{ sub("\r$", ""); print }' mage-client/startClient.sh > mage-client/startClient-unix.sh
	awk '{ sub("\r$", ""); print }' mage-server/startServer.sh > mage-server/startServer-unix.sh

	msg2 "changing default locations of scripts..."
	awk '{ sub("\.\/lib", "/usr/share/xmage/mage-client/lib"); print }' mage-client/startClient-unix.sh > mage-client/startClient-unix-lib.sh
	awk '{ sub("\.\/lib", "/usr/share/xmage/mage-server/lib"); print }' mage-server/startServer-unix.sh > mage-server/startServer-unix-lib.sh

	msg2 "final editing of scripts..."
	sed -i '2i cd /usr/share/xmage/mage-client' mage-client/startClient-unix-lib.sh
	sed -i '2i cd /usr/share/xmage/mage-server' mage-server/startServer-unix-lib.sh

	msg2 "moving files..."
	install -Dm755 mage-client/startClient-unix-lib.sh ${pkgdir}/usr/bin/mage-client
	install -Dm755 mage-server/startServer-unix-lib.sh ${pkgdir}/usr/bin/mage-server

	msg2 "creating /usr/share/xmage..."
	install -dm777 ${pkgdir}/usr/share/xmage

	msg2 "copying files to /usr/share/xmage..."
	cp -ra ./* ${pkgdir}/usr/share/xmage/
	
	msg2 "setting permissions of /usr/share/xmage..."
	chmod -R a+rwx ${pkgdir}/usr/share/xmage

	msg2 "installing license: ${license}..."
	install -Dm644 LICENSE.txt "${pkgdir}"/usr/share/licences/"${pkgname}"/LICENSE.txt
}

