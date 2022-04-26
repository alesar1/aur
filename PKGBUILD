# Maintainer: yjun <jerrysteve1101 at gmail dot com>

pkgname=apipost-bin
_pkgname=${pkgname%-bin}
pkgver=6.1.0
pkgrel=2
pkgdesc="An API debugging and management tool that supports team collaboration and can generate documents directly."
arch=('x86_64')
url="https://www.apipost.cn/"
license=('unknown')
source=("${_pkgname}.desktop"
        "https://img.cdn.apipost.cn/dl/linux/${_pkgname}_linuxgz_x64_$pkgver.tar.gz")
md5sums=("74c20618584d247486311abf144089ea"
        "6ed3a632d2838ca14f93194953feda24")

package() {
  install -dm755 "${pkgdir}/opt/${_pkgname}"

  cp -rp linux-unpacked/* "${pkgdir}/opt/${_pkgname}"

  install -dm755 "${pkgdir}/usr/bin"

  ln -sf "/opt/${_pkgname}/${_pkgname}6" "${pkgdir}/usr/bin/${_pkgname}6"

  install -dm755  "${pkgdir}/usr/share/icons/"

  ln -sf "/opt/${_pkgname}/resources/app/icon/1024x1024_apt.icns" "${pkgdir}/usr/share/icons/${_pkgname}6.png"

  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}6.desktop"
}
