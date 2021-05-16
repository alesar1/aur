# Maintainer: mynacol <paul àt dismail _ de>

pkgname=theme-switcher-git
pkgver=0.1.2
pkgrel=1
pkgdesc="Switching between light and dark themes made easy"
arch=('any')
url="https://aur.archlinux.org/packages/${pkgname}/"
license=('GPL')
depends=('bash' 'glib2' 'sed' 'jq' 'moreutils')
optdepends=(
	'xfce4-settings: for GTK switching under Xorg'
	'qt5ct: for Qt5 switching. Additional setup required.'
	'adwaita-qt: Qt5 theme'
	'feh: for setting wallpaper under Xorg'
	'swaybg: for setting wallpaper in sway'
)
makedepends=('coreutils')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('dark-theme.sh')
sha256sums=('SKIP')

package() {
	cd "$srcdir"
	install -Dm755 dark-theme.sh "$pkgdir/usr/bin/${pkgname%-git}"
}
