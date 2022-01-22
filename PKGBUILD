# Maintainer: jose <jose1711 [at] gmail (dot) com>

pkgname=yass-karaoke
pkgver=2.3.0
pkgrel=1
pkgdesc="editor for creating, finetuning, organizing and printing Ultrastar karaoke songs"
arch=('i686' 'x86_64')
url="http://yass-along.com/"
license=('GPL')
depends=('java-runtime' 'bash')
makedepends=('unzip')
source=("http://yass-along.com/data/downloads/yass-${pkgver}.jar"
	"yass.desktop")
md5sums=('ddc7da431f404c77b7bf00c499d2d5b8'
         '0a20b92cab193f5054ce8c5047d8804b')
options=(!strip)
noextract=("yass-${pkgver}.jar")

package() {
  cd "${srcdir}"
  install -Dm644 "${srcdir}/yass-${pkgver}.jar" "${pkgdir}/usr/share/java/yass-${pkgver}.jar"
  unzip -o "yass-${pkgver}.jar" yass/resources/icons/yass-icon.png 
  install -dm755 "${pkgdir}/usr/bin"
  install -Dm644 "${srcdir}/yass.desktop" $pkgdir/usr/share/applications/yass.desktop
  install -Dm644 "$srcdir/yass/resources/icons/yass-icon.png" "${pkgdir}/usr/share/pixmaps/yass.png"
  (echo "#!/bin/bash
  java -jar \"/usr/share/java/yass-${pkgver}.jar\" \"\$@\"" ; )  > "${pkgdir}/usr/bin/yass.sh"
  chmod 755 "${pkgdir}/usr/bin/yass.sh"
}
