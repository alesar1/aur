# Maintainer: dag.robole at gmail dot com

pkgname=fluxbox-style-zukitwo
pkgver=20150818
pkgrel=1
pkgdesc="Zukitwo style for Fluxbox"
url="https://github.com/corebob/fluxbox-style-zukitwo"
license=('CCPL')
arch=('any')
source=("https://github.com/corebob/fluxbox-style-zukitwo/archive/master.zip")
md5sums=('8991ae2a40d05522ba737520a1017480')

package() {
  mkdir -p "${pkgdir}/usr/share/fluxbox/styles/zukitwo"
  cp -r ${srcdir}/fluxbox-style-zukitwo-master/zukitwo "${pkgdir}/usr/share/fluxbox/styles/"
}
