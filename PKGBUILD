# Maintainer: Kevin Brodsky <corax26 'at' gmail 'dot' com>

pkgname=xnviewmp-system-libs
_pkgname=xnviewmp
pkgver=0.85
srcrel=1 # Incremented when there is a new release for the same version number
pkgrel=1
pkgdesc="An efficient multimedia viewer, browser and converter (using system libraries)."
url="http://www.xnview.com/en/xnviewmp/"

arch=('x86_64' 'i686')
license=('custom')
depends=('qt5-multimedia' 'qt5-svg' 'qt5-webkit' 'qt5-x11extras' 'desktop-file-utils')
optdepends=('gvfs: support for moving files to trash')
conflicts=('xnviewmp')

source=('xnviewmp.desktop')
source_x86_64=("XnViewMP-linux-x64_${pkgver}-rel${srcrel}.tgz::http://download.xnview.com/XnViewMP-linux-x64.tgz")
source_i686=("XnViewMP-linux_${pkgver}-rel${srcrel}.tgz::http://download.xnview.com/XnViewMP-linux.tgz")
md5sums=('24f44d5a881b94daf48775213a57e4ec')
md5sums_x86_64=('d38f9c051714342713750cbe818c4d93')
md5sums_i686=('1681b4d2597895bf50a3c12c63fc0a38')

package() {
  install -d -m755 "${pkgdir}/opt/${_pkgname}"
  install -d -m755 "${pkgdir}/usr/bin"
  install -d -m755 "${pkgdir}/usr/share/applications"

  cp -a "${srcdir}/XnView"/* "${pkgdir}/opt/${_pkgname}"
  ln -s "/opt/${_pkgname}/xnview.sh" "${pkgdir}/usr/bin/${_pkgname}"

  install -m644 "${srcdir}/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -D -m644 "${srcdir}/XnView/license.txt" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"

  # Clean up
  rm "${pkgdir}/opt/${_pkgname}/XnView.desktop"{,~}
  chmod -x "${pkgdir}/opt/${_pkgname}/xnview.png"

  # Remove the bundled framework libs (Qt and icu).
  rm "${pkgdir}/opt/${_pkgname}/lib/"lib*
  # Since we are using system Qt libraries, we should also use the system Qt
  # plugins. Remove the provided platform plugins and symlink the system ones
  # instead.
  rm -r "${pkgdir}/opt/${_pkgname}/lib/"platform{s,themes}
  ln -s /usr/lib/qt/plugins/platform{s,themes} "${pkgdir}/opt/${_pkgname}/lib"
  # XnView MP does a weird font lookup with random results under certain
  # circumstances, when not using the bundled libs. It seems that forcing
  # QT_QPA_PLATFORMTHEME to be the shipped platform theme solves the issue.
  sed -i 's/^exec/export QT_QPA_PLATFORMTHEME=gtk2\n\0/' "${pkgdir}/opt/${_pkgname}/xnview.sh"
}

# vim:set ts=2 sw=2 et:
