# Maintainer: Lubomir 'Kuci' Kucera <kuci24-at-gmail-dot-com>

_rev=r03
_sdkver=6.0
_sdkint=23
pkgname=android-x86-system-image-${_sdkint}
pkgver=${_sdkver}_${_rev}
pkgrel=1
pkgdesc="Android x86 Atom System Image, API-${_sdkint}"
arch=('any')
url="http://developer.android.com/sdk/index.html"
license=('custom')
depends=("android-platform-${_sdkint}")
options=('!strip')
source=("http://dl.google.com/android/repository/sys-img/android/sysimg_x86-${_sdkint}_${_rev}.zip")
sha1sums=('3cb2e8efb575c35a558b091eac7e1bc5843f5f12')

package() {
  mkdir -p "${pkgdir}/opt/android-sdk/system-images/android-${_sdkint}/default"
  cp -dpr --no-preserve=ownership "${srcdir}/x86" "${pkgdir}/opt/android-sdk/system-images/android-${_sdkint}/default/x86"

  chmod -R ugo+rX "${pkgdir}/opt"
}
