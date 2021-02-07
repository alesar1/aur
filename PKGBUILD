# Maintainer: Jeremy Audet <jerebear@protonmail.com>
#
# namcap warns that 'libcups' is an unnecessary dependency. This is untrue.
# Splitter will produce the following exception if libcups is not installed:
#
#     Exception in thread "main" java.lang.UnsatisfiedLinkError:
#     /usr/lib/jvm/java-7-openjdk/jre/lib/amd64/headless/libmawt.so:
#     libcups.so.2: cannot open shared object file: No such file or directory
#
# namcap also warns that 'java-environment' is a dependency. This is untrue:
# java-runtime suffices.

pkgname=splitter
pkgver=598
pkgrel=1
pkgdesc='Utility for splitting OpenStreetMap maps into tiles.'
url='http://www.mkgmap.org.uk/'
license=(GPL)
arch=(any)
depends=(java-runtime=8 sh libcups)
source=("http://www.mkgmap.org.uk/download/${pkgname}-r${pkgver}.zip"
        "${pkgname}")
sha256sums=('34b67793ac3b186ab1622c89c2644fe93e306dcdd3d163f6d3f39889bfab318e'
            '40f984bc54a946678eeb3d554a84fad32d6a41038d42990d5336d4b1bdfbc63d')

package() {
  cd "${srcdir}/${pkgname}-r${pkgver}"

  # Install the executable and jar file.
  install -Dm755 "${srcdir}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${pkgname}.jar" \
    "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"

  # Install libraries. Destination dir created when installing jar file.
  cp -r lib/ "${pkgdir}/usr/share/java/${pkgname}/"
}

# vim:set ts=2 sw=2 et:
