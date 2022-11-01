# Maintainer: Kimiblock Zhou <pn3535 at icloud dot com>
# Contributor: qing <qing at he dot email>
pkgname=electronic-wechat-uos-bin
pkgver=v2.3.1.fix
pkgrel=5
epoch=
pkgdesc="Linux 下更好用的微信客户端. 更多功能, 更少bug. 使用Electron构建, 利用UOS请求头修复了登陆问题."
arch=('x86_64')
url="https://github.com/Riceneeder/electronic-wechat"
license=('MIT')
groups=()
depends=('nss' 'xdg-utils' 'libxss' 'electron')
makedepends=()
checkdepends=()
optdepends=(
	'xdg-desktop-portal-kde: KDE下的原生对话框'
	'xdg-desktop-portal-lxqt: lxqt下的原生对话框'
	'xdg-desktop-portal-gnome: Gnome下的原生对话框'
	'libnotify: 桌面通知, 需要搭配通知服务器使用'
)
provides=(electronic-wechat)
conflicts=()
replaces=()
install=${pkgname}.install
source=(
	electronic-wechat-uos-bin.desktop
	electronic-wechat-uos-bin.svg
	wechat-${pkgver}.tar.gz::"https://github.com/Riceneeder/electronic-wechat/releases/download/v2.3.1.fix/electronic-wechat-linux-x64.tar.gz"
)
noextract=()
md5sums=(
	'SKIP'
	'SKIP'
	'SKIP'
)
validpgpkeys=()
package() {
	for directory in /usr/bin /opt/electronic-wechat-uos-bin /usr/share/applications; do
		info "创建目录 ${pkgdir}${directory}..."
		mkdir -p ${pkgdir}${directory}
	done
	info "复制文件..."
	cp -r ${srcdir}/electronic-wechat-linux-x64/resources ${pkgdir}/opt/electronic-wechat-uos-bin
	cp ${srcdir}/electronic-wechat-uos-bin.svg ${pkgdir}/opt/electronic-wechat-uos-bin
	cp ${srcdir}/electronic-wechat-uos-bin.desktop ${pkgdir}/usr/share/applications
	echo '#!/bin/bash
exec electron /opt/electronic-wechat-uos-bin/resources/app.asar' >${pkgdir}/usr/bin/electronic-wechat-uos-bin
	chmod 644 ${pkgdir}/usr/share/applications/electronic-wechat-uos-bin.desktop
	chmod -R 755 ${pkgdir}/opt/electronic-wechat-uos-bin
	chmod a=rx ${pkgdir}/usr/bin/electronic-wechat-uos-bin
	chmod u=rwx ${pkgdir}/usr/bin/electronic-wechat-uos-bin
}

function info() {
	all_off="$(tput sgr0)"
	bold="${all_off}$(tput bold)"
	blue="${bold}$(tput setaf 4)"
	yellow="${bold}$(tput setaf 3)"
    printf "${blue}==>${yellow} [Info]:${bold} $1${all_off}\n"
}
