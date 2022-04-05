# Maintainer: taotieren <admin@taotieren.com>

pkgbase=nuclei-qemu
pkgname=(nuclei-qemu-bin)
pkgver=2022.04
pkgrel=1
pkgdesc="nuclei-qemu 是 Nuclei Studio IDE 的仿真工具。"
arch=("x86_64")
makedepends=()
depends=()
optdepends=('nucleistudioide: Nuclei Studio IDE 是基于 MCU Eclipse IDE 开发的一款针对芯来公司处理器核产品的集成开发环境工具，用于 RISC-V 开发继承了 Eclipse IDE 平台的各种优势。'
			'jlink-software-and-documentation: Segger JLink software & documentation pack for Linux')
conflicts=()
url="https://www.nucleisys.com/download.php"
license=('unknow')
options=(!strip)

source=("https://www.nucleisys.com/upload/files/toochain/qemu/nuclei-qemu-${pkgver}-linux-x64.tar.gz")
sha256sums=('809dc4d9a4dcdc6358208484919b54870075474943f3e7ef4f390552d17e24e4')

package_nuclei-qemu-bin() {
	msg2 'Installing Nuclei QEMU'
	install -dm755 "${pkgdir}/opt/nuclei/NucleiStudio/toolchain/"

	mv "${srcdir}/linux_qemu" "${pkgdir}/opt/nuclei/qemu"
	ln -sf "/opt/nuclei/qemu" "${pkgdir}/opt/nuclei/NucleiStudio/toolchain/qemu"
}

#
# makepkg --printsrcinfo > .SRCINFO
#

# vim: set ts=8 sw=8 tw=0 noet:
