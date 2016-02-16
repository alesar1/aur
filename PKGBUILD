# Maintainer: Nicolas Quiénot <niQo @ aur>

pkgname=jmeter-plugins-extraslib
_pkgname=JMeterPlugins-ExtrasLibs
pkgver=1.3.1
pkgrel=1
pkgdesc="Additional plugins that do require additional libs to run."
arch=(any)
url="http://jmeter-plugins.org/"
license=(APACHE)
depends=('jmeter>=2.10')
options=(!strip)
source=(http://jmeter-plugins.org/downloads/file/${_pkgname}-${pkgver}.zip)
md5sums=('061fe56fbc618fb7a869c97a80f03c69')

package() {
  cd ${srcdir}/lib/
  for extralib in *.jar
    do install -Dm644 "${srcdir}/lib/${extralib}" "${pkgdir}/opt/jmeter/lib/${extralib}"
  done
  cd -
  install -Dm644 "${srcdir}/lib/ext/${_pkgname}.jar" "${pkgdir}/opt/jmeter/lib/ext/${_pkgname}.jar"
  install -Dm644 "${srcdir}/README" "${pkgdir}/usr/share/doc/${pkgname}/README"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

}
