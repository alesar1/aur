# Maintainer: Samuel Walladge <samuel at swalladge dot id dot au>

pkgname=simplenote-electron-bin
_pkgname=simplenote
pkgver=1.0.6
pkgrel=1
pkgdesc="The simplest way to keep notes."
arch=('x86_64')
url="https://github.com/Automattic/simplenote-electron"
license=('GPL2')
depends=('gcc-libs' 'gconf' 'alsa-lib' 'nss' 'libxtst' 'gtk2' 'libnotify')
optdepends=()
provides=('simplenote')
source=("https://github.com/Automattic/simplenote-electron/releases/download/v${pkgver}/${_pkgname}-${pkgver}.deb")
md5sums=('752fa5f16e22f3a8e5cc4a87195099de')

package() {
  cd ${srcdir}

  # extract the data part of the deb package
  tar xzfp data.tar.gz -C ${pkgdir}

  # simlink executable to /usr/bin
  mkdir -p ${pkgdir}/usr/bin/
  ln -s /usr/share/${_pkgname}/${_pkgname} ${pkgdir}/usr/bin/${_pkgname}
}
