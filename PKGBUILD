# Maintainer: Jake <aur@ja-ke.tech>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributor: Josia Roßkopf <josia-login@rosskopfs.de>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Yen Chi Hsuan <yan12125 at gmail.com>
pkgname=nwjs-bin
pkgver=0.70.1
pkgrel=1
pkgdesc="An app runtime based on Chromium and node.js."
arch=("x86_64")
url="https://nwjs.io/"
license=("MIT")
depends=("gtk3" "nss" "libxss")
optdepends=(
  "nodejs: npm package support"
  "nw-gyp: native add-on build tool for node-webkit"
)
provides=("nwjs" "node-webkit")
replaces=("node-webkit")
conflicts=("nwjs" "node-webkit")
source=("${pkgname}-${pkgver}.tar.gz::http://dl.nwjs.io/v${pkgver}/${pkgname%-bin}-v${pkgver}-linux-x64.tar.gz")
sha256sums=('d09c25a7e87ac64d02966e15d1776e775871da1aff64fec0a24cbc28501ff06b')

package() {
  cd "${pkgname%-bin}-v${pkgver}-linux-x64"

  install -d "${pkgdir}/opt/${pkgname%-bin}"
  cp -dr * "${pkgdir}/opt/${pkgname%-bin}/"
  chmod -R 644 "${pkgdir}/opt/${pkgname%-bin}/"
  chmod 755 "${pkgdir}/opt/${pkgname%-bin}/"{,swiftshader,lib,locales,nw,chrome_crashpad_handler}

  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname%-bin}/nw" "${pkgdir}/usr/bin/nw"
}
# vim:set ts=2 sw=2 et:
