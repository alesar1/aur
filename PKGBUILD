pkgname=reaper-bin
pkgver=5.976
pkgrel=1
conflicts=(reaper)

pkgdesc="Digital Audio Workstation"
url="http://www.reaper.fm"
arch=('x86_64')
license=('custom')

depends=('gtk3' 'desktop-file-utils' 'xdg-utils')
optdepends=('jack' 'pulseaudio')

source=("http://reaper.fm/files/5.x/reaper${pkgver//.}_linux_x86_64.tar.xz")
sha256sums=('8d50aed820ee99fbcd35fd987b7f95d50af4d14850e6934072ac46b3ce661baa')

package() {
  XDG_DATA_HOME="${srcdir}/desktop" sh "${srcdir}/reaper_linux_x86_64/install-reaper.sh" --install "${pkgdir}/opt" --integrate-user-desktop

  sed -i 's#^Exec.*#Exec="/opt/REAPER/reaper" %F#g' "${srcdir}/desktop/applications/cockos-reaper.desktop"
  install -D -m644 "${srcdir}/desktop/applications/cockos-reaper.desktop" "${pkgdir}/usr/share/applications/cockos-reaper.desktop"
  install -d "${pkgdir}/usr/share/icons/hicolor/256x256/apps"
  install -m644 "${srcdir}/desktop/icons/hicolor/256x256/apps/"*.png "${pkgdir}/usr/share/icons/hicolor/256x256/apps"
  install -D -m644 "${srcdir}/desktop/mime/packages/application-x-reaper.xml" "${pkgdir}/usr/share/mime/packages/application-x-reaper.xml"

  rm "${pkgdir}/opt/REAPER/uninstall-reaper.sh"
  mkdir -p "${pkgdir}/usr/bin"
  ln -s /opt/REAPER/reaper "${pkgdir}/usr/bin/reaper"
  mkdir -p "${pkgdir}/usr/share/licenses/reaper"
  ln -s /opt/REAPER/license.txt "${pkgdir}/usr/share/licenses/reaper/LICENSE"
}

