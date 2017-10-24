# Maintainer: Monika Schrenk <moni@random-access.org>

pkgname=studio-3t
pkgver=5.6.1
pkgrel=1
pkgdesc="The world's favorite IDE for working with MongoDB, formerly known as MongoChef."
arch=('i686' 'x86_64')
url="https://studio3t.com"
license=("custom")
depends=('java-runtime-openjdk=8' 'java-openjfx' 'gtk2')
makedepends=('unzip')
provides=('studio-3t')
replaces=('mongochef')

source=("${pkgname}.desktop" "${pkgname}")
source_i686=("$pkgname-$pkgver-x86.tar.gz::https://download.studio3t.com/studio-3t/linux/${pkgver}/${pkgname}-linux-x86.tar.gz")
source_x86_64=("$pkgname-$pkgver-x64.tar.gz::https://download.studio3t.com/studio-3t/linux/${pkgver}/${pkgname}-linux-x64.tar.gz")

sha256sums=('b51ed1a6897541f52d60aa2b6e5add005cba31dabf7992e2177cfea6ab8fc070' 
'c84a8462407ac2d300c34477c05c9545b7359cd1842879c2c321c88343b754f5')
sha256sums_i686=('3eb938b97ee1fd950dc2c7584a248ae3c32017963526c376b68cf89d888b43e8')
sha256sums_x86_64=('704f70633b4ddf8883bd4c998bd6bf37d8c4eda6209de5469f2393ddd479d36c')

prepare() {
  unzip -j ${srcdir}/${pkgname}-${pkgver}-linux-*/lib/data-man-mongodb-ent-${pkgver}.jar "t3/dataman/icons/mac/512.png" -d "./"
  unzip -j ${srcdir}/${pkgname}-${pkgver}-linux-*/lib/data-man-mongodb-ent-${pkgver}.jar "t3/utils/gui/3T-EULA.txt" -d "./"
}

package() {
  cd ${pkgdir}
  mkdir -p opt/

  cp -r ${srcdir}/${pkgname}-${pkgver}-linux-*/lib opt/${pkgname}

  ## add startup script 
  install -D -m 755 $srcdir/${pkgname} usr/bin/${pkgname}

  ## add desktop entry
  install -D -m 644 ${srcdir}/${pkgname}.desktop usr/share/applications/${pkgname}.desktop
  
  ## add application icon
  install -D -m 644 ${srcdir}/512.png usr/share/pixmaps/${pkgname}.png

  ## add license
  install -D -m 644 ${srcdir}/3T-EULA.txt usr/share/licenses/${pkgname}/3T-EULA.txt
}
