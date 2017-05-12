#Maintainer: Plague-doctor <plague at privacyrequired dot com >

pkgver=0.3.0
pkgrel=2
PN="pcloud"
pkgname="pcloud-drive"
pkgdesc="pCloud drive. Electron edition.
         Please note: The electron edition is a very early beta. Black magic and voo-doo might happen. YOU'VE BEEN WARNED!"

source_x86_64=("https://www.pcloud.com/pcloud") # Placeholder
arch=('x86_64')
url="https://www.pcloud.com"
_api_url="https://api.pcloud.com/getpublinkdownload?code="
_api_code=XZ1jUNZR8AFxiHSUYh7RVvI7p4dwYFYCCqV
makedepends=('jq' 'sed')
conflicts=('pcloud-git' 'pcloud')

md5sums_x86_64=('026e4206f7ed309de5dfc9fac962b672')
validpgpkeys=('A8F7858263C1E39480B731DCEAD4F103068DF8E5')

package() {
  install -d "$pkgdir"/{/usr/bin,opt}
  cp -r "${srcdir}/usr" "${pkgdir}/opt/${PN}"
  ln -s "/opt/${PN}/bin/${PN}" "${pkgdir}/usr/bin/${PN}"
  install -Dm644 "${pkgdir}/opt/${PN}/share/icons/default/128x128/apps/pcloud.png" \
                 "${pkgdir}/usr/share/pixmaps/${PN}.png"
  install -Dm644 "${PN}.desktop" "${pkgdir}/usr/share/applications/${PN}.desktop"
  sed -i 's/AppRun/pcloud/' "${pkgdir}/usr/share/applications/${PN}.desktop"
  sed -i 's/Name=pcloud/Name=pCloud/' "${pkgdir}/usr/share/applications/${PN}.desktop"
}

_get_source() {
  source_x86_64=("${pkgname}-${pkgver}-${pkgrel}::http://$(curl "${_api_url}${_api_code}" 2> /dev/null | jq -r '.hosts[0] + .path')")
}

jq --version &>/dev/null && _get_source || true
