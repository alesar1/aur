# Maintainer: Victor Dmitriyev <mrvvitek@gmail.com>
# Contributor: Alucryd <alucryd at gmail dot com>

pkgname='java-qdox'
pkgver='1.12.1'
pkgrel='2'
pkgdesc='A high speed, small footprint parser for extracting class/interface/method definitions from source files complete with JavaDoc @tags'
arch=('any')
url="http://qdox.codehaus.org/index.html"
license=('APACHE')
depends=('java-runtime')
source=("https://repo.maven.apache.org/maven2/com/thoughtworks/qdox/qdox/${pkgver}/qdox-${pkgver}.jar")
md5sums=('9fb6970f934f8d836ae8e6d133316ab4')
sha512sums=('50557e884bd963f405e25319036a278cfe10ed2bf886d05ccf61f98db90ed78d7a587b07379e120323a4ba7a707cbab612b40da78598a3ce3e86adc53a6a189b')
noextract=("qdox-${pkgver}.jar")

package() {
  install -Dm644 "${srcdir}/qdox-${pkgver}.jar" "${pkgdir}/usr/share/java/qdox/qdox.jar"
}
