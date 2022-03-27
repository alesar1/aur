# Maintainer=yuh <yuhldr@qq.com>

pkgname=ldr-translate-gtk
pkgdata=ldr-translate
pkgver=1.3.1
pkgrel=8
epoch=
pkgdesc="一个翻译软件，更适合gnome桌面，专注文献翻译，可以截图翻译、复制翻译等，顺带显示网速等系统信息"
arch=('x86_64')
url="https://github.com/yuhldr/ldr-translate"
license=('GPL')
groups=(ldr)
depends=(make python python-pip python-gobject gnome-shell-extension-appindicator libappindicator-gtk3)
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/yuhldr/$pkgdata/archive/refs/tags/v$pkgver.tar.gz")
noextract=()
md5sums=(a5bf142da605f3116159aa0ca10fb355)
validpgpkeys=()

prepare() {
	cd "$pkgdata-$pkgver"
	echo "ldr"
}

build() {
	cd "$pkgdata-$pkgver"
	make gtk
}

check() {
	cd "$pkgdata-$pkgver"
	make check-gtk
}

package() {
	cd "$pkgdata-$pkgver"
	make install
}
