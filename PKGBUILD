# Maintainer: Sebastian Lau <archlinux _at_ slau _dot_ info>
# Contributor:  Wessel Dirksen "p-we" <wdirksen at gmail dot com>
# Contributer: American_Jesus <american.jesus.pt AT gmail DOT com>

pkgname=grub2-theme-arch-suse
pkgver=3
pkgrel=1
pkgdesc="ArchLinux branded Grub2 theme adapted from openSUSE 12.2"
url="http://www.opensuse.org/en/"
arch=('any')
license=('GPL')
depends=('grub')
install='grub2-theme-arch-suse.install'

source=("${pkgname}-v${pkgver}.tar.gz::https://github.com/nullptrT/grub2-theme-arch-suse/archive/v${pkgver}.tar.gz"
        "grub2-theme-arch-suse.install")

md5sums=('9ddf9b38301a6040367def78e3280185'
         '460923a2a8efcf3311e4209ca092d10a')

package() {
  cd $srcdir
  install -Dm755 -d ${pkgdir}/usr/share/grub/themes
  cp -rf ${srcdir}/${pkgname}-${pkgver}/theme ${pkgdir}/usr/share/grub/themes/arch-suse/
}

