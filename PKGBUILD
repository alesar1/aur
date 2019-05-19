# Maintainer: Aidan Coward <aidan -dot- coward -at- gmail -dot- com>

pkgname=xmage
pkgver=1.4.35V6
pkgrel=0
_java_version=8u201
_java_dir=jre1.8.0_201

pkgdesc="Java-based program for playing Magic:The Gathering, including client and server"

arch=('any')
url="http://xmage.de"
license=('MIT')

makedepends=('detox')
optdepends=('wmname: change window manager name for compatibility with certain WMs')

# Due to compatibility issues with the current version of java in the repositories,
# xmage now installs a dedicated version of java to /usr/share/xmage/java
# and therefore currently does not depend on the jre8-openjdk package
# depends=('jre8-openjdk')

source=("http://xmage.de/files/xmage_${pkgver}.zip"
	"http://xmage.today/java/jre-8u201-linux-x64.tar.gz"
	'https://raw.githubusercontent.com/magefree/mage/master/LICENSE.txt')

sha256sums=("3a4337ea67234d77fc82344e8f723ce6884d4822ffd2d9742e82239f241ce51f" 
	"12c745fbb8735bf450b8c6ba6f649bebe19915f05742975e443bdc8566170352"
	"SKIP")

package() {

	cd "${srcdir}"

	# clean up filenames
	detox -r -v ./* &> /dev/null

	msg2 "changing file format of included scripts..."
	awk '{ sub("\r$", ""); print }' mage-client/startClient.sh > mage-client/startClient-unix.sh
	awk '{ sub("\r$", ""); print }' mage-server/startServer.sh > mage-server/startServer-unix.sh

	msg2 "changing default locations of scripts..."
	awk '{ sub("\.\/lib", "/usr/share/xmage/mage-client/lib"); print }' mage-client/startClient-unix.sh > mage-client/startClient-unix-lib.sh
	awk '{ sub("\.\/lib", "/usr/share/xmage/mage-server/lib"); print }' mage-server/startServer-unix.sh > mage-server/startServer-unix-lib.sh

	msg2 "adding cd to relevant /usr/share/xmage/ directory..."
	sed -i '2i cd /usr/share/xmage/mage-client' mage-client/startClient-unix-lib.sh
	sed -i '2i cd /usr/share/xmage/mage-server' mage-server/startServer-unix-lib.sh

	msg2 "changing location of java binary..."
	sed -i "s|java|/usr/share/xmage/${_java_dir}/bin/java|g" mage-client/startClient-unix-lib.sh
	sed -i "s|java|/usr/share/xmage/${_java_dir}/bin/java|g" mage-server/startServer-unix-lib.sh

	msg2 "increasing default memory limit of client and server"
	sed -i 's|-Xmx512m|-Xmx1024m|g' mage-client/startClient-unix-lib.sh
	sed -i 's|-Xmx512m|-Xmx1024m|g' mage-server/startServer-unix-lib.sh

	msg2 "moving files..."
	install -Dm755 mage-client/startClient-unix-lib.sh ${pkgdir}/usr/bin/mage-client
	install -Dm755 mage-server/startServer-unix-lib.sh ${pkgdir}/usr/bin/mage-server

	msg2 "creating /usr/share/xmage..."
	install -dm755 ${pkgdir}/usr/share/xmage

	msg2 "copying files to /usr/share/xmage..."
	cp -ra ./* ${pkgdir}/usr/share/xmage/
	
	msg2 "setting permissions of /usr/share/xmage..."
	chmod -R a+rwx ${pkgdir}/usr/share/xmage

	msg2 "installing license: ${license}..."
	install -Dm644 LICENSE.txt "${pkgdir}"/usr/share/licences/"${pkgname}"/LICENSE.txt
}
