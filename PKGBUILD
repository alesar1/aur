# Maintainer: j.r <j.r@jugendhacker.de>
_pkgname=onedrive_tray
pkgname=$_pkgname-git
pkgver=r18.0058bfb
pkgrel=1
pkgdesc="OneDrive system tray program"
arch=('i686' 'x86_64')
url="https://github.com/DanielBorgesOliveira/onedrive_tray"
license=('unknown')
depends=('qt5-base' 'onedrive-abraunegg')
makedepends=('git') # 'bzr', 'git', 'mercurial' or 'subversion'
provides=("onedrive_tray=$pkgver")
conflicts=("onedrive_tray")
source=('git+https://github.com/DanielBorgesOliveira/onedrive_tray.git')
md5sums=('SKIP')

pkgver() {
	cd "$_pkgname"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"
	rm -rf build && mkdir -p build
	cd build
	qmake ../systray.pro
	make
}

package() {
	cd "$_pkgname/build"
	make INSTALL_ROOT="${pkgdir}" install
}
