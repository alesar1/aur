# Maintainer: Amal Karunarathna <nasashinega@gmail.com>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributor: Nabil Freij <nabil.freij@gmail.com>

pkgname=gnome-shell-extension-workspaces-to-dock
_gitname=workspaces-to-dock
pkgver=44_3.26
pkgrel=2
pkgdesc="Gnome shell extension, Workspaces to Dock, Transform Gnome Shell's overview workspaces into an intelligent dock."
arch=('any')
url="https://github.com/passingthru67/workspaces-to-dock"
license=('GPL3')
depends=('gnome-shell>=3.26')
conflicts=("${_gitname}-git")
source=("https://github.com/passingthru67/${_gitname}/archive/${_gitname}.v${pkgver}.tar.gz")
sha256sums=('adabf07456e75673eaa01147cf6f2f87bbd7ee88e22d07491eb314fc24730ad1')

package() {
  cd "${srcdir}/${_gitname}-${_gitname}.v${pkgver}"
  install -d "${pkgdir}/usr/share/gnome-shell/extensions"
  cp -a "workspaces-to-dock@passingthru67.gmail.com" "${pkgdir}/usr/share/gnome-shell/extensions/"
}
