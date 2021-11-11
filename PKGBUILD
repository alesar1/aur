# Maintainer: kumen

pkgname="embedded-studio-risc-v"
pkgver=5.66
pkgrel=1
pkgdesc="Segger Embedded Studio for RISC-V"
arch=('x86_64' 'aarch64')
makedepends=()
depends=('jlink-software-and-documentation')
optdepends=()
conflicts=()
url="https://www.segger.com/products/development-tools/embedded-studio/"
license=('Commercial')
options=(!strip)

source_x86_64=("Setup_EmbeddedStudio_RISCV_v${pkgver/./}_linux_x64.tar.gz::https://dl.segger.com/files/embedded-studio/Setup_EmbeddedStudio_RISCV_v${pkgver/./}_linux_x64.tar.gz")
source_aarch64=("Setup_EmbeddedStudio_RISCV_v${pkgver/./}_linux_arm64.tar.gz::https://dl.segger.com/files/embedded-studio/Setup_EmbeddedStudio_RISCV_v${pkgver/./}_linux_arm64.tar.gz")

md5sums_x86_64=('87e899127916571ea325a6dc8c4a1f05')
md5sums_aarch64=('10c9743370d81c8eefc2b58cbc989312')

prepare(){
	# Change src path name
	if [ ${CARCH} = "x86_64" ]; then
		mv riscv_segger_embedded_studio_${pkgver/./}_linux_x64 embedded-studio-risc-v
	else 
		mv riscv_segger_embedded_studio_${pkgver/./}_linux_arm64 embedded-studio-risc-v
	fi
}

package() {
	install -dm755 "${pkgdir}/opt/SEGGER/Embedded-Studio-RISC-V" \
		    "${pkgdir}/usr/share/licenses/${pkgname}" \
		    "${pkgdir}/usr/bin/" \

	msg2 'Installing Embedded Studio RISC-V'
	"$srcdir"/embedded-studio-risc-v/install_segger_embedded_studio --copy-files-to ${pkgdir}/opt/SEGGER/Embedded-Studio-RISC-V/  --accept-license --no-upgrade

	msg2 'Instalation of binary file'
	ln -s /opt/SEGGER/Embedded-Studio-RISC-V/bin/emStudio "${pkgdir}/usr/bin/emStudio-RISC-V"
        ln -s /opt/SEGGER/Embedded-Studio-RISC-V/bin/emBuild "${pkgdir}/usr/bin/emBuild-RISC-V"

	msg2 'Installing desktop shortcut and icon'
	install -Dm 644 "${pkgdir}/opt/SEGGER/Embedded-Studio-RISC-V/bin/StudioIcon.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -Dm644 /dev/stdin "$pkgdir/usr/share/applications/${pkgname}.desktop" <<END
[Desktop Entry]
Name=RISC-V Embedded Studio
Comment=Embedded Studio for RISC-V
GenericName=Embedded Studio RISC-V
Exec=env GDK_BACKEND=x11 emStudio-RISC-V %F
Icon=embedded-studio-risc-v
Path=/opt/SEGGER/Embedded-Studio-RISC-V/bin
Terminal=false
StartupNotify=true
Type=Application
Categories=Development
END
	
	msg2 'Instalation of license file'
	ln -s /opt/SEGGER/Embedded-Studio-RISC-V/html/License.htm "${pkgdir}/usr/share/licenses/${pkgname}/"
	
}

#
# makepkg --printsrcinfo > .SRCINFO
#

# vim: set ts=8 sw=8 tw=0 noet:
