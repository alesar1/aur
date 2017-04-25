# Maintainer: Andreas Born <futur[DOT]andy[AT]gmail[DOT]com>

pkgname=lrz-syncshare
pkgver=11.3.417
pkgrel=1
pkgdesc="Sync client for the LRZ Sync+Share service"
url='https://syncandshare.lrz.de/'
arch=('any')
license=('custom')
depends=('desktop-file-utils' 'hicolor-icon-theme' 'java-runtime=8' 'xdg-utils')
source=("https://syncandshare.lrz.de/client_deployment/LRZ_Sync_Share_Latest_Linux.tar.gz")
md5sums=('b3a451629b5779822264394849046385')

pkgver() {
  cat "${srcdir}/LRZ_Sync_Share/VERSION"
}

prepare() {
  cd "${srcdir}/LRZ_Sync_Share"

  # seems to work now with openjdk and not just Oracle's JRE
  #    -e 's;^RUN_CMD="$CLIENT_INSTALL/jre/bin/java ;RUN_CMD="/usr/lib/jvm/java-8-jre/jre/bin/java ;' \
  sed -e "s;^CLIENT_INSTALL=.*\$;CLIENT_INSTALL=/usr/share/${pkgname};" \
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

