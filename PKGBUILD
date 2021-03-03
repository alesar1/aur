#Maintainer: weearc <q19981121@163.com>
pkgname=cosbrowser
pkgver=2.5.5
pkgrel=1
epoch=
pkgdesc="腾讯云COS工具"
arch=("x86_64")
url="https://cloud.tencent.com"
license=('custom')
groups=()
depends=(
	 'gtk3'
	 'libxcb'
	 'electron4'
	 'libappindicator-gtk2'
	 'gconf'
	 'libnotify'
	 'libxss'
	 'libxtst'
	)
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
source=(
	"https://cos5.cloud.tencent.com/cosbrowser/releases/cosbrowser-latest-linux.zip"
	"https://raw.githubusercontent.com/tencentyun/qcloud-documents/master/product/管理与支持/政策与规范/腾讯云隐私声明.md")
noextract=()
sha256sums=('SKIP'
            'SKIP')
validpgpkeys=()

prepare() {
	cd ${srcdir}/
	./cosbrowser.AppImage --appimage-extract
    
}


package() {
	install -d ${pkgdir}/opt
	install -d ${pkgdir}/usr/bin
	install -d ${pkgdir}/usr/share/icons
	install -d ${pkgdir}/usr/share/applications
	install -d ${pkgdir}/usr/share/licenses
	
	echo "#!/bin/bash
electron /opt/$pkgname/app.asar \$@" > ${pkgdir}/usr/bin/$pkgname && chmod a+x ${pkgdir}/usr/bin/$pkgname
	
	echo "[Desktop Entry]
Name=$pkgname
Name[zh_CN]=$pkgname
Exec=/usr/bin/cosbrowser %U
Terminal=false
Type=Application
Icon=cosbrowser
Comment=
Comment[zh_CN]=
Categories=Network;FileTransfer;" > ${pkgdir}/usr/share/applications/$pkgname.desktop

	mkdir ${pkgdir}/opt/$pkgname
	install -Dm644 ${srcdir}/squashfs-root/resources/app.asar ${pkgdir}/opt/$pkgname/app.asar
	
	mkdir ${pkgdir}/usr/share/licenses/tencent
	install -Dm644 "腾讯云隐私声明.md" "${pkgdir}/usr/share/licenses/tencent/腾讯云隐私声明.md"
	
	for i in 16 22 24 32 36 48 64 72 96 128 256
	do
        mkdir -p ${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps
        install ${srcdir}/squashfs-root/usr/share/icons/hicolor/0x0/apps/$pkgname.png ${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/$pkgname.png
    done
}
