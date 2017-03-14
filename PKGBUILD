# Maintainer: Gavin Lloyd <gavinhungry@gmail.com>

pkgname=intel-xdk
pkgver=3900
pkgrel=1
pkgdesc='Cross-platform mobile and IoT development environment'
arch=('i686' 'x86_64')
url='https://software.intel.com/en-us/intel-xdk'
license=('custom')
depends=('libudev0' 'libnotify' 'gconf')

source=('intel-xdk'
        'intel-xdk.desktop')
sha256sums=('f091a3a84380b9bcd2d5daf402e3f73cc071b0f01205e773a32af6651bdce4d3'
            '8e6551d803e6c604e823d2589987c7a85973de69f59ce72660b107d82474dd9b')

if [ "${CARCH}" == 'i686' ]; then
  _arch='32'
  sha256sums+=('15e3d5aed608f331b725e249b9dca9efb658e45702edab8b41228ffd69eb272e')
elif [ "${CARCH}" == 'x86_64' ]; then
  _arch='64'
  sha256sums+=('2ca131793364e131c9a9a4738630fb29f2753931d41fae2ebd58b3c4a8305a9c')
fi

_base="xdk_web_linux${_arch:-64}"
source+=("https://appcenter.html5tools-software.intel.com/api/v3.0/redirect/updates/xdk/${_base}_master_${pkgver}.tgz")

package() {
  mkdir -p "${pkgdir}/opt/intel/XDK" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/applications" "${pkgdir}/usr/share/licenses/${pkgname}"

  cd "${srcdir}/${_base}_${pkgver}/rpm"
  tar xf "${pkgname}-${pkgver}.0.0.tgz" -C "${pkgdir}/opt/intel/XDK"

  rm -f "${pkgdir}/opt/intel/XDK/libudev.so.0"
  install -m755 "${srcdir}/intel-xdk" "${pkgdir}/usr/bin/"
  install -m644 "${srcdir}/intel-xdk.desktop" "${pkgdir}/usr/share/applications/"
  install -m644 "${pkgdir}/opt/intel/XDK/xdk/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
