# Maintainer: Michael Lass <bevan@bi-co.net>
# Contributor: Sebastian Wolf < sebastian at melonkru dot de >
# Contributor: gost < gostrc at gmail dot com >
# Contributor: Mikolaj Pastuszko <deluminathor@gmail.com>
# Contributor: Stefan Seemayer < mail at semicolonsoftware dot de >
# Contributor: Gordin < 9ordin @t gmail dot com >

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=yed
pkgver=3.15.0.2
pkgrel=1
pkgdesc='Very powerful graph editor written in java'
arch=('any')
url='http://www.yworks.com/en/products_yed_about.html'
license=('custom')
depends=('java-runtime')
source=("http://www.yworks.com/products/yed/demo/yEd-${pkgver}.zip"
        'yed.desktop'
        'yed')
sha256sums=('c60e4868f267303ee8b6fc2587beb4cc846f32bd8a6a557b77e01f0d8039aa4d'
            '342dba6defac88d035253b22e6377d9570858f59367cd486dba4a4dba1621f91'
            'fee9aff48421fb51f623a371a9aa12c70f388a05f3015b6a3b7c9798312e8e8a')

install=${pkgname}.install

package() {
  # Install jars
  install -Dm644 ${srcdir}/yed-${pkgver}/yed.jar ${pkgdir}/usr/share/yed/yed.jar
  install -dm755 ${pkgdir}/usr/share/yed/lib
  install -m644 ${srcdir}/yed-${pkgver}/lib/* ${pkgdir}/usr/share/yed/lib/

  # Install license
  install -Dm644 ${srcdir}/yed-${pkgver}/license.html ${pkgdir}/usr/share/licenses/yed/license.html

  # Install icon
  install -Dm644 ${srcdir}/yed-${pkgver}/icons/yicon32.png ${pkgdir}/usr/share/pixmaps/yed.png

  # Install .desktop file
  install -Dm644 ${srcdir}/yed.desktop ${pkgdir}/usr/share/applications/yed.desktop

  # Install run script
  install -Dm755 ${srcdir}/yed ${pkgdir}/usr/bin/yed
}
