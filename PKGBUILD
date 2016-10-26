# $Id$
# Maintainer: Andreas Born <futur[DOT]andy[AT]goooglemail[DOT]com>
# Contributor: Andreas Born <futur[DOT]andy[AT]goooglemail[DOT]com>
pkgname=lrz-syncshare
pkgver=10.6.450
pkgrel=2
pkgdesc="Sync client for the LRZ Sync+Share service"
url='https://syncandshare.lrz.de/'
arch=('any')
license=('custom')
depends=('desktop-file-utils' 'hicolor-icon-theme' 'jre>8u' 'jre<9' 'xdg-utils')
source=("https://syncandshare.lrz.de/client_deployment/LRZ_Sync_Share_Latest_Linux.tar.gz")
md5sums=('05b842a4776319c812ea9147015f423d')

pkgver() {
  cat "${srcdir}/LRZ_Sync_Share/VERSION"
}

prepare() {
  cd "${srcdir}/LRZ_Sync_Share"

  sed -e "s;^CLIENT_INSTALL=.*\$;CLIENT_INSTALL=/usr/share/${pkgname};" \
      -e 's;^RUN_CMD="$CLIENT_INSTALL/jre/bin/java ;RUN_CMD="/usr/lib/jvm/java-8-jre/jre/bin/java ;' \
      -i LRZ_Sync_Share-Client.sh
  sed -e "s;^Icon=.*;Icon=${pkgname};" \
      -e "s;^Exec=.*;Exec=${pkgname};" -i install-files/LRZ_Sync_Share.desktop
}

package() {
  cd "${srcdir}/LRZ_Sync_Share"

  install -Dm755 LRZ_Sync_Share-Client.sh "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 LRZ_Sync_Share.jar -t "${pkgdir}/usr/share/${pkgname}/"

  install -Dm644 install-files/LRZ_Sync_Share.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 install-files/LRZ_Sync_Share.png "${pkgdir}/usr/share/icons/hicolor/128x128/apps/${pkgname}.png"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

