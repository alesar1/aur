# Maintainer: E-Hern Lee <ehern.lee@gmail.com>
# Contributor: Jake <aur@ja-ke.tech>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributor: Josia Roßkopf <josia-login@rosskopfs.de>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Yen Chi Hsuan <yan12125 at gmail.com>
pkgname=nwjs-sdk-bin
pkgver=0.71.0
pkgrel=1
pkgdesc="node-webkit is an app runtime based on Chromium and node.js. SDK release with DevTools"
arch=("x86_64")
url="https://nwjs.io/"
license=("MIT")
depends=("gtk3" "nss" "libxss")
optdepends=(
  "nodejs: npm package support"
  "nw-gyp: native add-on build tool for node-webkit"
)
provides=("nwjs-sdk")
conflicts=("nwjs-sdk")
source=("${pkgname}-${pkgver}.tar.gz::http://dl.nwjs.io/v${pkgver}/${pkgname%-bin}-v${pkgver}-linux-x64.tar.gz")
sha512sums=('6339157af6c2200802ee8c9368e2115dbd88b84a199b6d183162d2aaad320d7a254f46727e8f831d4037c6e1273a55f451bbbb4d3af83ad6d113fb80c3f9a52a')

package() {
  cd "${pkgname%-bin}-v${pkgver}-linux-x64"

  install -d "${pkgdir}/opt/${pkgname%-bin}"
  cp -dr * "${pkgdir}/opt/${pkgname%-bin}/"
  chmod -R 644 "${pkgdir}/opt/${pkgname%-bin}/"
  chmod 755 "${pkgdir}/opt/${pkgname%-bin}/"{,swiftshader,lib,locales,nw,chrome_crashpad_handler,nacl_helper}

  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname%-bin}/nw" "${pkgdir}/usr/bin/nw-sdk"
}
