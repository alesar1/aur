# Maintainer: Ruslan Bekenev <furyinbox at gmail dot com>
pkgname=todoist-electron
_pkgname=Todoist
pkgver=1.19.0
rlsver=1.19
pkgrel=1
pkgdesc="Electron wrapper for todoist web client."
arch=('x86_64')
url="https://github.com/KryDos/todoist-linux"
license=('ISC')
provides=('todoist')
conflicts=('todoist')
depends=('c-ares' 'ffmpeg' 'gtk3' 'http-parser' 'libevent' 'libvpx' 'libxslt' 'libxss' 'minizip' 'nss' 're2' 'snappy' 'libnotify' 'libappindicator-gtk2' 'libappindicator-gtk3' 'libappindicator-sharp')
options=('!strip' '!emptydirs')
install=${_pkgname}.install
source=("https://github.com/KryDos/todoist-linux/releases/download/$rlsver/$_pkgname-$pkgver.pacman")
sha256sums=('f7c004690dba20051c99d314df0e392aefa1c09776ab207e4fa003701d1bec80')
#noextract=($_pkgname-$pkgver.pacman)

package() {
	# copy binaries to fakeroot
	cp -r opt usr ${pkgdir}
}
