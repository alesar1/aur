# Maintainer: lestb <tkhdlstfl dot l plus aur at gmail dot com>
# Package Repository: https://github.com/mij-aur-packages/android-x86-64-system-image

_rev=r08
_apilevel=23
pkgname=android-x86-64-system-image
pkgver=${_apilevel}_${_rev}
pkgrel=1
pkgdesc="Android x86-64 System Image, latest API"
arch=('any')
url='https://software.intel.com/en-us/android/tools'
license=('custom')
depends=("android-platform")
optdepends=('qemu' 'libvirt')
provides=("${pkgname}-${_apilevel}" "${pkgname/x86-64/x86_64}-${_apilevel}")
conflicts=("${pkgname}-${_apilevel}" "${pkgname/x86-64/x86_64}-${_apilevel}")
options=('!strip')
source=("http://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86_64-23_r08.zip"
        "source.properties")
sha1sums=('8be549a1dc8cb6c0c901426cf2b737d9c6402d93'
          '15a76e74cf65b144fe45663ac7f0a73d9d34d090')

package() {
  _destdir="${pkgdir}/opt/android-sdk/system-images/android-${_apilevel}/default"
  mkdir -p "${_destdir}"
  mv "${srcdir}/x86_64" "${_destdir}"
  install -Dm644 "${srcdir}/source.properties" "${_destdir}/x86_64"

  chmod -R ugo+rX "${pkgdir}/opt"
}
