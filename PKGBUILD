# Maintainer=yuh <yuhldr@qq.com>

pkgdata=ldr-translate
pkgname=$pkgdata-gtk
pkgver=1.5.1
pkgrel=2
epoch=
pkgdesc="一个翻译软件，更适合gnome桌面，专注文献翻译，可以截图翻译、复制翻译等，顺带显示网速等系统信息"
arch=('x86_64')
url="https://github.com/yuhldr/$pkgdata"
license=('GPL')
groups=(ldr)
depends=(python python-requests python-psutil python-gobject libappindicator-gtk3)
checkdepends=()
optdepends=(gnome-shell-extension-appindicator)
provides=()
conflicts=($pkgdata-qt)
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/yuhldr/$pkgdata/archive/refs/tags/v$pkgver.tar.gz")
noextract=()
md5sums=(0f5eb3876a7e4ef940c97de2951c0b5c)
validpgpkeys=()

prepare() {
	cd "$pkgdata-$pkgver"
	echo "ldr"
}

package() {
	cd "$pkgdata-$pkgver"

	mkdir -p "$pkgdir"/usr/bin
	mkdir -p "$pkgdir"/usr/share/applications
	mkdir -p "$pkgdir"/usr/share/icons
	mkdir -p "$pkgdir"/opt/ldr-translate

	cp data/ldr "$pkgdir"/usr/bin/

	cp data/icon/icon.png "$pkgdir"/usr/share/icons/ldr-translate.png
	cp data/ldr-translate.desktop "$pkgdir"/usr/share/applications/

	cp -r api data/icon data/config.json data/config_locale.json "$pkgdir"/opt/ldr-translate/
	sudo cp gui/gtk/* "$pkgdir"/opt/ldr-translate/
}
