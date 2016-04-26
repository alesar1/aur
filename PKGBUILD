# Maintainer: Szilveszter Székely <szekelyszilv at gmail dot com>
pkgname=jutoh
pkgver=2.43
pkgrel=1
pkgdesc="An ebook creation tool"
arch=('i686' 'x86_64')
url="http://www.jutoh.com"
license=('custom: Jutoh')
depends=('gtk2' 'libpng12'
         'shared-mime-info' 'desktop-file-utils' 'xdg-utils'
         'hicolor-icon-theme')
optdepends=('libjpeg6: jpeg support'
            'java-runtime: epubcheck support')
replaces=('jutoh-bin')
install=jutoh.install

source=('jutoh.sh')
source_i686=(http://www.jutoh.com/Jutoh-${pkgver}-i386.tar.gz)
source_x86_64=(http://www.jutoh.com/Jutoh-${pkgver}-x86_64.tar.gz)

md5sums=('9a66a3e0a4fbafe827aa52b4d8353aa9')
md5sums_i686=('07ca8c1b7f6afe3e6186fa53bafa5e61')
md5sums_x86_64=('7338d72a5eae914e896d382d9860b59d')

prepare() {
  mkdir ${srcdir}/jutoh-data
  cd ${srcdir}/jutoh-data
  tar -xzf ${srcdir}/JutohData.tar.gz
}

package() {
  msg2 "Copying executable"
  install -Dm755 ${srcdir}/jutoh.sh ${pkgdir}/usr/bin/jutoh
  install -Dm755 ${srcdir}/jutoh.sh ${pkgdir}/usr/bin/jutoh2

  msg2 "Copying desktop file"
  install -Dm644 ${srcdir}/jutoh-data/jutoh2.desktop \
                 ${pkgdir}/usr/share/applications/jutoh2.desktop
  install -Dm644 ${srcdir}/jutoh-data/x-jutoh2.desktop \
                 ${pkgdir}/usr/share/mimelnk/application/x-jutoh2.desktop

  msg2 "Copying icons"
  for res in '16x16' '22x22' '32x32' '48x48' '128x128'; do
    install -Dm644 ${srcdir}/jutoh-data/appicons/jutoh${res}.png \
                   ${pkgdir}/usr/share/icons/hicolor/${res}/apps/jutoh2.png
  done
  for res in '16x16' '24x24' '32x32' '48x48' '128x128'; do
    install -Dm644 ${srcdir}/jutoh-data/appicons/jutoh_document${res}.png \
                   ${pkgdir}/usr/share/icons/hicolor/${res}/mimetypes/application-x-jutohproject.png
    install -Dm644 ${srcdir}/jutoh-data/appicons/jutoh_document_script${res}.png \
                   ${pkgdir}/usr/share/icons/hicolor/${res}/mimetypes/application-x-jutohscript.png
  done
  install -Dm644 ${srcdir}/jutoh-data/appicons/jutoh128x128.png \
                 ${pkgdir}/usr/share/pixmaps/jutoh2.png

  msg2 "Copying mimetypes"
  install -Dm644 ${srcdir}/jutoh-data/jutoh2.mime \
                 ${pkgdir}/usr/share/mime-info/jutoh2.mime
  install -Dm644 ${srcdir}/jutoh-data/jutoh2.keys \
                 ${pkgdir}/usr/share/mime-info/jutoh2.keys
  install -Dm644 ${srcdir}/jutoh-data/jutoh2.xml \
                 ${pkgdir}/usr/share/mime/packages/jutoh2.xml
  install -Dm644 ${srcdir}/jutoh-data/jutoh2.applications \
                 ${pkgdir}/usr/share/application-registry/jutoh2.applications

  msg2 "Copying licence"
  install -Dm644 ${srcdir}/jutoh-data/license.txt \
                 ${pkgdir}/usr/share/licenses/jutoh-bin/LICENSE

  msg2 "Copying files"
  install -dm755 ${pkgdir}/usr/share/jutoh
  cp -R ${srcdir}/jutoh-data/. $pkgdir/usr/share/jutoh

  msg2 "Cleaning up files"
  rm -r ${pkgdir}/usr/share/jutoh/{jutoh2.{applications,desktop,keys,mime,xml},jutoh_eeepc.xml,license.txt,x-jutoh2.desktop,appicons}
}
