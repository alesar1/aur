# Maintainer: Daniel Milde <daniel@milde.cz>
# Contributor: Florian Mounier aka paradoxxxzero <paradoxxx.zero@gmail.com>
# Contributor: Michael Schubert <mschu.dev at gmail> 

pkgname=gnome-shell-extension-system-monitor-git
pkgver=704.8b31f07
_gitname=gnome-shell-system-monitor-applet
pkgrel=2
pkgdesc="System monitor extension for Gnome-Shell (display mem swap cpu usage)"
arch=('any')
url="http://github.com/paradoxxxzero/gnome-shell-system-monitor-applet"
license=('GPL3')
depends=('gnome-shell>=3.10' 'libgtop' 'networkmanager')
makedepends=('git')
provides=("system-monitor-applet gnome-shell-system-monitor-applet-git")
replaces=("gnome-shell-system-monitor-applet-git")
conflicts=("gnome-shell-system-monitor-applet-git")
source=('git://github.com/paradoxxxzero/gnome-shell-system-monitor-applet.git')
sha1sums=('SKIP')

package() {
    cd "$srcdir/$_gitname"
    mkdir -p "$pkgdir/usr/share/gnome-shell/extensions/"
    cp -R "system-monitor@paradoxxx.zero.gmail.com" "$pkgdir/usr/share/gnome-shell/extensions"
}

pkgver() {
  cd $_gitname
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}
