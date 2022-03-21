# Maintainer: gigas002 <gigas002@pm.me>

pkgname=sweet-kde-theme-git
_pkgname=Sweet-kde
pkgver=r24.9e36d3a
pkgrel=2
pkgdesc="Sweet KDE Plasma theme"
arch=('x86_64')
url="https://github.com/EliverLara/$_pkgname"
license=('GPL3')
makedepends=('git')
depends=()
provides=("sweet-kde")
conflicts=('sweet-kde' 'sweet-kde-git')
options=('!strip')
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
	cd $srcdir/$_pkgname
  	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    install -d $pkgdir/usr/share/plasma/desktoptheme/
	cp -R $srcdir/Sweet-kde/ $pkgdir/usr/share/plasma/desktoptheme/Sweet
}
