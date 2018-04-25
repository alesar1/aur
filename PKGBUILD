# Maintainer: Vladimir Tsanev <tsachev@gmail.com>
pkgname=jcov
_version=3.0
_build=b04
pkgver=${_version}_${_build}
pkgrel=1
pkgdesc="The JCov open source project is used to gather quality metrics associated with the production of test suites."
arch=('any')
url="https://wiki.openjdk.java.net/display/CodeTools/jcov"
license=('GPL2')
groups=()
depends=('java-runtime>=7')
makedepends=('mercurial' 'apache-ant' 'java-environment-openjdk=7' 'java-asm' 'jtharness')
optdepends=('jtharness')
checkdepends=()
provides=()
conflicts=()
install=
_tag=${pkgname}${_version}-${_build}
source=("http://hg.openjdk.java.net/code-tools/jcov/archive/${_tag}.tar.gz")
sha256sums=('1e299a8e6789b772ae0ba3b76b66a04b3239f41fa9d8fff20e7f28fb8cd64107')

_jcovdir=${pkgname}-${_tag}

prepare() {
  cd ${srcdir}/${_jcovdir}
  ln -sf /usr/share/java/asm/asm.jar build/asm-6.0.jar
  ln -sf /usr/share/java/asm/asm-tree.jar build/asm-tree-6.0.jar
  ln -sf /usr/share/java/asm/asm-util.jar build/asm-util-6.0.jar
  ln -sf /usr/share/java/jtharness/javatest.jar build/javatest.jar
  JAVA_HOME=/usr/lib/jvm/java-7-openjdk ant -f build/build.xml clean
  JAVA_HOME=/usr/lib/jvm/java-7-openjdk ant -f plugins/coberturaXML/build/build.xml clean
}

build() {
  cd ${srcdir}/${_jcovdir}/build
  JAVA_HOME=/usr/lib/jvm/java-7-openjdk ant 
  cd ${srcdir}/${_jcovdir}/plugins/coberturaXML
  JAVA_HOME=/usr/lib/jvm/java-7-openjdk ant -f build/build.xml
}

package() {
  cd ${srcdir}/${_jcovdir}
  dist=JCOV_BUILD/${pkgname}_${_version}
  install -D -m 644 ${dist}/jcov.jar ${pkgdir}/usr/share/java/${pkgname}/jcov.jar
  install -D -m 644 ${dist}/jtobserver.jar ${pkgdir}/usr/share/java/${pkgname}/jtobserver.jar
  install -D -m 644 ${dist}/jcov_file_saver.jar ${pkgdir}/usr/share/java/${pkgname}/jcov_file_saver.jar
  install -D -m 644 ${dist}/jcov_network_saver.jar ${pkgdir}/usr/share/java/${pkgname}/jcov_network_saver.jar
  install -D -m 644 plugins/coberturaXML/plugin/dist/coberturaXML.jar ${pkgdir}/usr/share/java/${pkgname}/coberturaXML.jar
  install -D -m 644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
  mkdir -p ${pkgdir}/usr/share/${pkgname}
  ln -sf /usr/share/java/${pkgname}             ${pkgdir}/usr/share/${pkgname}/lib
  ln -sf /usr/share/licenses/${pkgname}/LICENSE ${pkgdir}/usr/share/${pkgname}/LICENSE
}

# vim:set ts=2 sw=2 et:
