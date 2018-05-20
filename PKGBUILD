# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=gnome-shell-extension-workspaces-to-dock-git
pkgver=45_3.28.r22.g8b053f2
pkgrel=1
pkgdesc="Gnome shell extension, Workspaces to Dock, Transform Gnome Shell's overview workspaces into an intelligent dock."
arch=('any')
url="https://github.com/passingthru67/workspaces-to-dock"
license=('GPL')
groups=('gnome-shell-extensions')
depends=('gnome-shell')
makedepends=('git' 'gnome-common')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://github.com/passingthru67/workspaces-to-dock.git")
install='gnome-shell-extension.install'
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/workspaces-to-dock"
  git describe --long | sed 's/workspaces-to-dock.v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/workspaces-to-dock"
  glib-compile-schemas "workspaces-to-dock@passingthru67.gmail.com/schemas/"
}

package() {
  cd "$srcdir/workspaces-to-dock"
  install -d "$pkgdir/usr/share/gnome-shell/extensions"
  cp -a "workspaces-to-dock@passingthru67.gmail.com" "$pkgdir/usr/share/gnome-shell/extensions/"
}
# vim:set ts=2 sw=2 et:
