# Contributor: Tomas Kopecny aka Georgo10 <georgo10@gmail.com>
# Contributor: scorpfa
# Contributor: fi-dschi <fi-dschi_archlinux - at - arcor - dot - de>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>


pkgname=mucommander
pkgver=0.9.1
pkgrel=1
pkgdesc="A lightweight, cross-platform file manager with a dual-pane interface written in Java"
url="http://www.mucommander.com"
depends=('java-runtime')
arch=('any')
license=('GPL')
source=(https://github.com/mucommander/mucommander/releases/download/${pkgver}/${pkgname}_${pkgver}_all.deb)
sha256sums=('4c719e9c95d465f71651f0c0ca94ab14a9977ff4ab252c6867a6f6221483cc9d')


prepare() {
  cd $srcdir

  # Extracting files
  tar -xf data.tar.gz
  sed -i 's|MUCOMMANDER_JAR=$CURRENT_DIR/mucommander.jar|MUCOMMANDER_JAR=/usr/share/mucommander/mucommander.jar|' $srcdir/usr/share/$pkgname/mucommander.sh
}



package() {
  cd $srcdir


  # Install jars
  install -Dm644 ${srcdir}/usr/share/${pkgname}/${pkgname}.jar ${pkgdir}/usr/share/${pkgname}/${pkgname}.jar

  # Install license
  install -Dm644 ${srcdir}/usr/share/${pkgname}/license.txt ${pkgdir}/usr/share/licenses/${pkgname}/license.txt

  # Install icon
  install -Dm644 ${srcdir}/usr/share/pixmaps/${pkgname}.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png

  # Install desktop file
  install -Dm644 ${srcdir}/usr/share/applications/${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop

  # Install run script
  install -Dm755 ${srcdir}/usr/share/${pkgname}/${pkgname}.sh ${pkgdir}/usr/bin/${pkgname}

}
