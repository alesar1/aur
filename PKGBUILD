# Maintainer: Michael Riegert <michael at eowyn net>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=panwriter
pkgver=0.8.4
pkgrel=1
pkgdesc="Markdown editor with pandoc integration and paginated preview"
arch=('x86_64')
url='https://panwriter.com'
license=('GPL3')
depends=(
    'gtk3'
    'dbus-glib'
    'libindicator-gtk2'
    'libdbusmenu-gtk2'
    'nss'
)
makedepends=('gendesk')
noextract=("${pkgname}-${pkgver}.AppImage")
source=("${pkgname}-${pkgver}.AppImage::https://github.com/mb21/panwriter/releases/download/v${pkgver}/PanWriter-${pkgver}.AppImage")
sha256sums=('f48129bb07488e7c09c1f1450dbd476219e0bf51ceb7cb7c780412df042a202b')

package() {
  chmod 755 ./${pkgname}-${pkgver}.AppImage
  ./${pkgname}-${pkgver}.AppImage --appimage-extract
  install -Dm644 squashfs-root/usr/share/icons/hicolor/0x0/apps/panwriter.png "${pkgdir}/usr/share/pixmaps/panwriter.png"
  gendesk -f -n --pkgname "${pkgname}" \
          --pkgdesc "$pkgdesc" \
          --name "PanWriter" \
          --comment "$pkgdesc" \
          --exec "${pkgname}" \
          --categories 'Utility;Office;Application' \
          --icon "${pkgname}"
  install -Dm644 "${pkgname}.desktop" -t "${pkgdir}/usr/share/applications"
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/opt"
  cp -avR squashfs-root/ "${pkgdir}/opt/${pkgname}"
  ln -s /opt/${pkgname}/AppRun "${pkgdir}/usr/bin/panwriter"
  find "${pkgdir}/opt/${pkgname}" -type d -exec chmod 755 {} +
}
