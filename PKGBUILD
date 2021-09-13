# Maintainer: GI_Jack <GI_Jack@hackermail.com>

pkgname=disk-image-scripts
pkgver=1.3
pkgrel=1
pkgdesc="Scripts for manipulating raw images of disks as files"
arch=('any')
url="https://github.com/GIJack/disk-image-scripts"
license=('GPLv3')
depends=('bash' 'qemu')
source=(${pkgname}-${pkgver}.tar.gz::"https://github.com/GIJack/disk-image-scripts/archive/v${pkgver}.tar.gz")
sha256sums=('f7c01d1f5421220cb3f11e56a4e19a4f063888d5b8ef2df858aebf6c60c0c342')

package() {
  cd "${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}/" PREFIX="usr/" install
}
