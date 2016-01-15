# Maintainer: Konstantin Gribov <grossws at gmail dot com>

pkgname=sjk
pkgver=0.3.9
pkgrel=1
pkgdesc="Swiss Java Knife is CLI tool for JVM diagnostic, troubleshooting and profiling"
arch=('any')
url='https://github.com/aragozin/jvm-tools'
license=('APACHE')
depends=('java-environment')
source=("sjk.jar::https://bintray.com/artifact/download/aragozin/generic/${pkgname}-${pkgver}.jar"
        "sjk")
sha256sums=('39f654527a1fffbceaa4db88b7b31c794559954e2b7401e5de008386c1b25c61'
            '62d6e80ec8d66bd2b68760599d5b2320910d961405d85560de09481bbfb0d7c0')

package() {
  install -m644 -D "${pkgname}.jar" "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
  install -m755 -D "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}

# vim:set ts=2 sw=2 et:

