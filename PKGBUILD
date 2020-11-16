# Maintainer: D. Can Celasun <can[at]dcc[dot]im>

pkgname=visual-studio-code-insiders
pkgver=1605526631
pkgrel=1
pkgdesc="Editor for building and debugging modern web and cloud applications (insiders version)"
arch=('x86_64' 'i686' 'aarch64' 'armv7h')
url="https://code.visualstudio.com/"
license=('custom: commercial')
# lsof: need for terminal splitting, see https://github.com/Microsoft/vscode/issues/62991
depends=(libxkbfile gnupg gtk3 libsecret nss gcc-libs libnotify libxss glibc lsof)
optdepends=('glib2: Needed for move to trash functionality'
            'libdbusmenu-glib: Needed for KDE global menu')

pkgver() {
    if [ "${CARCH}" = "x86_64" ]; then
        IFS='/' read -ra ADDR <<< $(curl -ILs -o /dev/null -w %{url_effective} https://vscode-update.azurewebsites.net/latest/linux-x64/insider); echo "${ADDR[5]}" | sed 's/code-insider-x64-//g' | sed 's/.tar.gz//g' | sed 's/-/./g'
    elif [ "${CARCH}" = "aarch64" ]; then
        IFS='/' read -ra ADDR <<< $(curl -ILs -o /dev/null -w %{url_effective} https://vscode-update.azurewebsites.net/latest/linux-arm64/insider); echo "${ADDR[5]}" | sed 's/code-insider-arm64-//g' | sed 's/.tar.gz//g' | sed 's/-/./g'
    elif [ "${CARCH}" = "armv7h" ]; then
        IFS='/' read -ra ADDR <<< $(curl -ILs -o /dev/null -w %{url_effective} https://vscode-update.azurewebsites.net/latest/linux-armhf/insider); echo "${ADDR[5]}" | sed 's/code-insider-armhf-//g' | sed 's/.tar.gz//g' | sed 's/-/./g'
    else
        IFS='/' read -ra ADDR <<< $(curl -ILs -o /dev/null -w %{url_effective} https://vscode-update.azurewebsites.net/latest/linux-ia32/insider); echo "${ADDR[5]}" | sed 's/code-insider-//g' | sed 's/.tar.gz//g' | sed 's/-/./g'
    fi
}
source=(${pkgname}.desktop ${pkgname}-url-handler.desktop)
source_x86_64=(code_x64_${pkgver}.tar.gz::https://vscode-update.azurewebsites.net/latest/linux-x64/insider)
source_aarch64=(code_arm64_${pkgver}.tar.gz::https://vscode-update.azurewebsites.net/latest/linux-arm64/insider)
source_armv7h=(code_armhf_${pkgver}.tar.gz::https://vscode-update.azurewebsites.net/latest/linux-armhf/insider)
source_i686=(code_ia32_${pkgver}.tar.gz::https://vscode-update.azurewebsites.net/latest/linux-ia32/insider)

sha256sums=('edfeb13aa50d35fbae748ff545b5bd126be916dbfeda682157e3d5ce81574db2'
            'd06d9d057b507d1747a8ed8ae304beb5e20c7bf887c362c941d85b02c893069e')
sha256sums_x86_64=('SKIP')
sha256sums_aarch64=('SKIP')
sha256sums_armv7h=('SKIP')
sha256sums_i686=('SKIP')
package() {
  _pkg=VSCode-linux-x64
  if [ "${CARCH}" = "aarch64" ]; then
    _pkg=VSCode-linux-arm64
  fi
  if [ "${CARCH}" = "armv7h" ]; then
    _pkg=VSCode-linux-armhf
  fi
  if [ "${CARCH}" = "i686" ]; then
    _pkg=VSCode-linux-ia32
  fi

  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -d "${pkgdir}/opt/${pkgname}"
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/share/applications"
  install -d "${pkgdir}/usr/share/icons" 

  install -m644 "${srcdir}/${_pkg}/resources/app/LICENSE.rtf" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.rtf"
  install -m644 "${srcdir}/${_pkg}/resources/app/resources/linux/code.png" "${pkgdir}/usr/share/icons/${pkgname}.png"
  install -m644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -m644 "${srcdir}/${pkgname}-url-handler.desktop" "${pkgdir}/usr/share/applications/${pkgname}-url-handler.desktop"

  cp -r "${srcdir}/${_pkg}/"* "${pkgdir}/opt/${pkgname}" -R
  ln -s /opt/${pkgname}/bin/code-insiders "${pkgdir}"/usr/bin/code-insiders
}
