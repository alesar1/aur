# Maintainer: Philippe Loctaux <loctauxphilippe@gmail.com>

pkgname=materialos-icon-theme-git
pkgver=0.r33.91eeeb4
pkgrel=1
pkgdesc='A community driven material design icon pack'
arch=('any')
url='https://github.com/materialos/Linux-Icon-Pack'
license=('CCPL:by-sa')
makedepends=('git')
provides=('materialos-icon-theme')
conflicts=('materialos-icon-theme')
source=('git+https://github.com/materialos/Linux-Icon-Pack.git')
sha256sums=('SKIP')

pkgver() {
	cd Linux-Icon-Pack/

	printf "0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd Linux-Icon-Pack/

	install -dm 755 "$pkgdir"/usr/share/icons
	cp -dr --no-preserve='ownership' Materialos "$pkgdir"/usr/share/icons/
}
