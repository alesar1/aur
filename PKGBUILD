# Maintainer: Nico <desoxhd@gmail.com>
pkgname=whitesur-icon-theme-git
_gitname=WhiteSur-icon-theme
pkgver=r4.5fd57e6
pkgrel=1
pkgdesc="MacOS Big Sur style icon theme for linux desktops"
arch=('any')
makedepends=('git' 'gtk-update-icon-cache')
optdepends=('whitesur-gtk-theme-git: Recommended GTK theme' 'whitesur-kde-theme-git: Recommended KDE theme')
license=('GPL3')
url="https://github.com/vinceliuice/${_gitname}"
source=("git+${url}.git")
sha256sums=('SKIP')
options=('!strip')

pkgver() {
  cd "${srcdir}/${_gitname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "${srcdir}/${_gitname}"
  install -dm755 "${pkgdir}/usr/share/icons"
  ./install.sh -d "${pkgdir}/usr/share/icons"
}
