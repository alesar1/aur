# Maintainer: Michael Lass <bevan@bi-co.net>
# Contributor: Sebastian Wolf < sebastian at melonkru dot de >
# Contributor: gost < gostrc at gmail dot com >
# Contributor: Mikolaj Pastuszko <deluminathor@gmail.com>
# Contributor: Stefan Seemayer < mail at semicolonsoftware dot de >
# Contributor: Gordin < 9ordin @t gmail dot com >
# Contributor: David Davis < davisd<a@t>davisd.com >

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=yed
pkgver=3.17.2
pkgrel=1
pkgdesc='Very powerful graph editor written in java'
arch=('any')
url='http://www.yworks.com/en/products_yed_about.html'
license=('custom')
depends=('archlinux-java-run' 'java-runtime>=8')
source=("https://www.yworks.com/resources/yed/demo/yEd-${pkgver}.zip"
        'yed.desktop'
        'yed')
sha256sums=('e2e1130763ec10a22d7632ebb373bd808399cfa3bbaa89fb98f2752c47dbee72'
            '342dba6defac88d035253b22e6377d9570858f59367cd486dba4a4dba1621f91'
            'cbdd6e1bdda01a91e58ea01427db15e4bb573a33ec896c68c40ec91fd46a274b')

install=${pkgname}.install

package() {
  # Install jars
  install -Dm644 ${srcdir}/yed-${pkgver}/yed.jar ${pkgdir}/usr/share/java/yed/yed.jar
  install -dm755 ${pkgdir}/usr/share/java/yed/lib
  install -m644 ${srcdir}/yed-${pkgver}/lib/* ${pkgdir}/usr/share/java/yed/lib/

  # Install license
  install -Dm644 ${srcdir}/yed-${pkgver}/license.html ${pkgdir}/usr/share/licenses/yed/license.html

  # Install icon
  install -Dm644 ${srcdir}/yed-${pkgver}/icons/yicon32.png ${pkgdir}/usr/share/pixmaps/yed.png

  # Install .desktop file
  install -Dm644 ${srcdir}/yed.desktop ${pkgdir}/usr/share/applications/yed.desktop

  # Install run script
  install -Dm755 ${srcdir}/yed ${pkgdir}/usr/bin/yed
}
