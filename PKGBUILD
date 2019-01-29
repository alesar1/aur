# Maintainer: D. Can Celasun <can[at]dcc[dot]im>

pkgname=jet
pkgver=2.10.0
pkgrel=1
pkgdesc="A CLI tool designed to make working with Codeship Pro faster and easier"
arch=('x86_64')
url="https://codeship.com"
license=('custom: commercial')
source_x86_64=(https://s3.amazonaws.com/codeship-jet-releases/${pkgver}/jet-linux_amd64_${pkgver}.tar.gz)
md5sums_x86_64=('d3d7657a34104680ffab6456195923b0')
package() {
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -d "${pkgdir}/opt/${pkgname}"
  install -d "${pkgdir}/usr/bin"

  install -m755 "${srcdir}/jet" "${pkgdir}/opt/${pkgname}"
  ln -s /opt/${pkgname}/jet "${pkgdir}"/usr/bin/jet
}
