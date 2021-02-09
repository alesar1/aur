# Contributor: Patrick Northon <northon_patrick3@yahoo.ca>
# Contributor: Dennis Fink <metalgamer@c3l.lu>
# Contributor: Oleg Rakhmanov <orakhmanov [at] gmail [dot] com>
# Contributor: Anntoin Wilkinson <anntoin gmail com>
# Contributor: Vladimir Ermakov <vooon341@gmail.com>
# Contributor: Peter A. Shevtsov <pshevtsov at severusweb dot ru>

pkgname=yuicompressor
pkgver=2.4.8
pkgrel=3
pkgdesc="CSS and Javascript compressor"
arch=("any")
url="http://yui.github.io/yuicompressor/"
license=("BSD")
depends=("java-runtime-headless")
source=("https://github.com/yui/yuicompressor/releases/download/v${pkgver}/yuicompressor-${pkgver}.zip"
        "yuicompressor.sh"
	'https://raw.github.com/yui/yuicompressor/master/LICENSE.TXT')

sha1sums=('178e265570c8161e8074c7ca19896abb05e76c1f'
          '1d261a0365c2d15f1be1c1f06bb1df83f965d091'
          '93278e24065a4595d1804eb6ed537258ff94c08c')

package() {
  sed -i "s|x\.y\.z|${pkgver}|" "${pkgname}.sh"


  install -D -m644  "${srcdir}/${pkgname}-${pkgver}.jar" \
                    "${pkgdir}/usr/share/java/${pkgname}-${pkgver}.jar"
  install -D -m755  "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/yuicompressor"

  install -D -m644  "${srcdir}/LICENSE.TXT" \
                   "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.TXT"
  ln -s "yuicompressor" "${pkgdir}/usr/bin/yui-compressor"
  ln -s "${pkgname}-${pkgver}.jar" "${pkgdir}/usr/share/java/${pkgname}.jar"
}

# vim:set ts=2 sw=2 et:
