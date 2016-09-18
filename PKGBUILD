# Maintainer: theferdi265 at gmail dot com

pkgname=gtk-theme-numix-solarized-git
pkgver=20160918.8fc9b31
pkgrel=1
pkgdesc="Solarized versions of Numix GTK2 and GTK3 theme, compatible with GTK 3.20"
arch=('any')
url="https://github.com/Ferdi265/numix-solarized-gtk-theme"
license=('GPL3')
conflicts=('gtk-theme-numix-solarized')
depends=('gtk-engine-murrine')
makedepends=('git' 'make' 'ruby-sass' 'glib2')
source=('git+https://github.com/Ferdi265/numix-solarized-gtk-theme.git')
md5sums=('SKIP')

pkgver() {
	cd "numix-solarized-gtk-theme"
	local date=$(date --date "$(git show -s --format=%ci)" +%Y%m%d)
	local commit=$(git rev-parse --short HEAD)
	echo $date.$commit
}

package() {
	cd "numix-solarized-gtk-theme"
	make DESTDIR="${pkgdir}" install
}
