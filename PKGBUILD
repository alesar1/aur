# Maintainer: Andy Richardson <andy.john.richardson@gmail.com>
pkgname=gnome-shell-extension-simply-workspaces-git
pkgver=v5
pkgrel=1
pkgdesc="Gnome 3 workspace indicator with an i3/polybar style."
arch=(any)
licence=(GPLv3)

makedepends=('git')
source=("git+https://github.com/andyrichardson/simply-workspaces.git")
sha256sums=('SKIP')
provides+=("$pkgname=$pkgver")
conflicts+=("$pkgname")

prepare() {
  git fetch origin $pkgver
  git checkout $pkver
}

package() {
  cd simply-workspaces
  make PREFIX=$pkgdir/usr install
}
