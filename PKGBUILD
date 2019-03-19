# Maintainer: Gautham Velchuru <gvelchuru@gmail.com>
pkgname=kiibohd-configurator-git
_pkgname=kiibohd-configurator
pkgver=1.0.0
pkgrel=1
pkgdesc="Client Side Configuration & Flashing Software for Kiibohd compatible keyboards"
arch=('x86_64')
url="https://github.com/kiibohd/configurator"
license=('GPL3')
depends=('dfu-util')
makedepends=('yarn')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("${pkgname}::git+https://github.com/kiibohd/configurator.git")
sha256sums=('SKIP')
  #_pkg="${srcdir}/${pkgname}"
  #cd "${_pkg}"
  #cp -R * "${pkgdir}/usr/share/${_pkgname}"

build() {
  cd ${pkgname}
  yarn
  yarn dist:dir
}

package() {
  mkdir -p "${pkgdir}/opt"
  mv * "${pkgdir}/opt"
  install -d "${pkgdir}/usr/bin"
  ln -s "${pkgdir}/opt/${pkgname}/output/linux-unpacked/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
}
