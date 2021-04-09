# Maintainer: yjun <jerrysteve1101@gmail.com>

pkgname=stm32cubemonitor
pkgver=1.2.0
pkgrel=1
pkgdesc="graphical software for helping debug and diagnose STM32 applications while they are running by reading and displaying their variables in real-time"
arch=('x86_64')
url="https://www.st.com/en/development-tools/stm32cubemonitor.html"
license=('custom')
depends=('gtk3' 'nss' 'libxss' 'libnotify' 'libxtst' 'xdg-utils' 'at-spi2-core' 'util-linux-libs')
optdepends=('stlink: stlink udev files provide')
provides=("${pkgname}-bin")
conflicts=("${pkgname}-bin")
options=('!strip')
_pkg_file_name=en.STM32CubeMonitor_lin_v${pkgver//./-}.zip
source=("local://${_pkg_file_name}")
sha256sums=('89ca4051cea2e0dd115f9e5e1cb1344560fd408471d7a5caae1ca15cb736aa35')

_DOWNLOADS_DIR=`xdg-user-dir DOWNLOAD`
if [ ! -f ${PWD}/${_pkg_file_name} ]; then
	if [ -f $_DOWNLOADS_DIR/${_pkg_file_name} ]; then
		ln -sfn $_DOWNLOADS_DIR/${_pkg_file_name} ${PWD}
	else
		echo ""
		echo "The package can be downloaded here: "
		echo "Please remember to put a downloaded package ${_pkg_file_name} into the build directory ${PWD} or $_DOWNLOADS_DIR"
		echo ""
	fi
fi

#    Extracted Files from ${_pkg_file_name}
#    ├── driver
#    │   └── st-stlink-udev-rules-1.0.2-3-linux-all.deb
#    ├── licenses
#    │   ├── Gnu Arm Embedded Toolchain EULA.txt
#    │   ├── LICENSES.chromium.html
#    │   ├── licenses_list_STM32CubeMonitor.txt
#    │   └── SLA0048 rev4.pdf
#    ├── snapshot_embedded_SW.zip
#    └── stm32cubemonitor_${pkgver}_amd64.deb

prepare() {
  install -dm755 build
  bsdtar -xf ${pkgname}_${pkgver}_amd64.deb -C build
}

package() {
  tar -xf build/data.tar.xz -C ${pkgdir}
  
  install -dm755 ${pkgdir}/opt
  mv ${pkgdir}/usr/lib/${pkgname} ${pkgdir}/opt
  rm -rf ${pkgdir}/usr/lib
  rm -rf ${pkgdir}/usr/share/lintian

  # soft link
  ln -fs /opt/${pkgname}/${pkgname} ${pkgdir}/usr/bin/${pkgname}

  # license
  for license in ${srcdir}/licenses/*
  do
    install -Dm644 "${license}" -t ${pkgdir}/usr/share/licenses/${pkgname}/
  done 
}

# vim: set sw=2 ts=2 et:
