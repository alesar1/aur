# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Diego <cdprincipe@gmail.com>
# Current Maintainer <erik.dubois@gmail.com>

pkgname=numix-icon-theme-git
pkgver=20.06.07.r8.g91e4a9747
pkgrel=1
pkgdesc='Base icon theme from the Numix project'
arch=('any')
url='https://github.com/numixproject/numix-icon-theme'
license=('GPL3')
depends=('gtk-update-icon-cache')
makedepends=('git')
provides=('numix-icon-theme' 'numix-light-icon-theme')
conflicts=('numix-icon-theme' 'numix-light-icon-theme')
options=('!strip')
source=('git+https://github.com/numixproject/numix-icon-theme.git')
sha256sums=('SKIP')

pkgver() {
  git -C numix-icon-theme describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd numix-icon-theme

  install -dm 755 "$pkgdir"/usr/share/icons
  cp -dr --no-preserve='ownership' Numix{,-Light} "$pkgdir"/usr/share/icons/
}

