# Maintainer: Xunhua Guo <xunhua.guo@gmail.com>

pkgname=mariadb-jdbc
pkgver=2.1.0
pkgrel=1
pkgdesc="The official JDBC driver (Java library) for MariaDB"
arch=('any')
url="https://downloads.mariadb.org/client-java/"
license=('LGPL2.1')
depends=('java-runtime')
provides=('mysql-jdbc')
replaces=('mysql-jdbc')
source=("https://downloads.mariadb.com/enterprise/x18t-d36g/connectors/java/connector-java-${pkgver}/mariadb-java-client-${pkgver}.jar")

md5sums=("4935627c539ea79061683b29c4904387")

package() {
    install -D -m755 \
	"${srcdir}/mariadb-java-client-${pkgver}.jar" \
	"${pkgdir}/usr/share/java/${pkgname}/mariadb-java-client-${pkgver}.jar"
    ln -s "/usr/share/java/${pkgname}/mariadb-java-client-${pkgver}.jar" \
	"${pkgdir}/usr/share/java/${pkgname}/mariadb-java-client.jar"
}
