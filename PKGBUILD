# Maintainer: Alexandre Bouvier <contact@amb.tf>
# Contributor: Marcus Behrendt <marcus dot behrendt dot eightysix(in numbers) at bigbrothergoogle dot com
_pkgname=arc-kde
pkgname=$_pkgname-git
pkgver=20180614.r11.g04873ca
pkgrel=1
epoch=2
pkgdesc="A port of the popular GTK theme Arc for Plasma 5 desktop with a few additions and extras"
arch=('any')
url="https://github.com/PapirusDevelopmentTeam/arc-kde"
license=('GPL3')
makedepends=('git')
optdepends=(
	'arc-gtk-theme: for a consistent look in GTK applications'
	'konsole: for konsole theme'
	'konversation: for konversation theme'
	'kvantum-qt5: for kvantum theme (recommended)'
	'papirus-icon-theme: for a more consistent and beautiful experience (recommended)'
	'plasma-desktop: for plasma desktop theme'
	'yakuake: for yakuake theme'
)
provides=("$_pkgname" 'kvantum-theme-arc')
conflicts=("$_pkgname" 'kvantum-theme-arc')
options=('!strip')
source=("$_pkgname::git+$url.git")
md5sums=('SKIP')

pkgver() {
	cd $_pkgname
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	rm -rf $_pkgname/konversation/themes/papirus{,-dark}/src
}

package() {
	# shellcheck disable=SC2154
	make -C $_pkgname DESTDIR="$pkgdir" install
}
