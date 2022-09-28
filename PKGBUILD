# Maintainer: marzeq <marzeqmarzeq at gmail dot com>

pkgname="xbox-cloud-gaming"
pkgver="1.0.16"
pkgrel="1"
pkgdesc="An Electron Linux desktop app for Xbox Cloud Gaming"
arch=("x86_64")
url="https://github.com/marzeq/xbox-cloud-gaming-electron/"
license=("GPL3")
depends=("http-parser" "minizip" "re2")
_filename="${pkgname}-electron_${pkgver}.pacman"
source=("$url/releases/download/${pkgver}/${_filename}")
noextract=("${_filename}")
md5sums=("014fc2c1471be64e3b0ba93630278eb1")
options=(!strip)

package() {
  tar -xJv -C "${pkgdir}" -f "${srcdir}/${_filename}" usr opt
  mkdir "$pkgdir/usr/bin"
  ln -s "/opt/Xbox Cloud Gaming/xbox-cloud-gaming-electron" "$pkgdir/usr/bin/xbox-cloud-gaming"
}

# vim:set ts=4 sw=4 et: syntax=sh
