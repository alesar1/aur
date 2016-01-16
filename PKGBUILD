# Maintainer: codestation <codestation404@gmail.com>

pkgname=qcma
pkgver=0.3.10
pkgrel=1
pkgdesc="Content Manager Assistant for the PS Vita"
arch=("i686" "x86_64")
url="https://github.com/codestation/qcma"
license=('GPL')
makedepends=('qt5-tools')
depends=('qt5-base' 'libvitamtp>=2.5.5' 'ffmpeg' 'libnotify')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/codestation/${pkgname}/archive/v${pkgver}.tar.gz")
install=qcma.install
sha256sums=('79c84d33eb9db7beaff46aa3811b85a55b6d15abde27cc6c0c7b2a22d0ad184e')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  lrelease-qt5 common/resources/translations/*.ts
  qmake-qt5 qcma.pro PREFIX="/usr"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make INSTALL_ROOT="${pkgdir}" install
}
