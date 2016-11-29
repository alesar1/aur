# Maintainer: Edgard Castro <castro@edgard.org>
# Contributor: Frederic Bezies <fredbezies at gmail dot com>
# Contributor: FadeMind <fademind@gmail.com>

pkgname=papirus-icon-theme-git
pkgver=r416.2d33bde
pkgrel=1
pkgdesc="Papirus icon theme (git version)"
url="https://github.com/PapirusDevelopmentTeam/${pkgname%-git}"
arch=('any')
license=('LGPL3')
makedepends=('git')
conflicts=('papirus-gtk-icon-theme' 'papirus-gtk-icon-theme-git' 'papirus-icon-theme-gtk' 'papirus-icon-theme-gtk-git' 'papirus-icon-theme-kde' 'papirus-icon-theme-kde-git')
options=('!strip')
source=("${pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname}
  ( set -o pipefail
    git describe --long --tag | sed -r 's/([^-]*-g)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  ) 2>/dev/null
}

package() {
    cd ${pkgname}
    install -dm 755 "${pkgdir}"/usr/share/icons
    cp -dr --no-preserve='ownership' Papirus{,-Dark} "${pkgdir}"/usr/share/icons/
}
