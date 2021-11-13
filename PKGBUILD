# Maintainer: kumen

pkgname="embedded-studio-arm-nordic"
pkgver=5.60
pkgrel=1
pkgdesc="Segger Embedded Studio for ARM, Nordic version"
arch=('x86_64' 'i686')
makedepends=()
depends=('jlink-software-and-documentation')
optdepends=()
conflicts=()
replaces=()
url="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/gs_installing.html#installing-ses-nordic-edition"
license=('Commercial')
options=(!strip)

source_x86_64=("Setup_EmbeddedStudio_ARM_Nordic_v${pkgver/./}_linux_x64.tar.gz::https://dl.segger.com/files/embedded-studio/EmbeddedStudio_ARM_Nordic_v${pkgver/./}_linux_x64.tar.gz")
source_i686=("Setup_EmbeddedStudio_ARM_Nordic_v${pkgver/./}_linux_x86.tar.gz::https://dl.segger.com/files/embedded-studio/EmbeddedStudio_ARM_Nordic_v${pkgver/./}_linux_x86.tar.gz")
	
sha256sums_x86_64=('daeb45b28493aa8910be0d716f94bb19cd97f52f8cdc8dfd534a2c47cb60203d')
sha256sums_i686=('0006f99b8cdbcfe5884569b75a52140b43471138ce181446b0ccb9ff6ecd4185')

prepare(){
        # Change src path name
        case ${CARCH} in
	  "x86_64")
	    mv ${srcdir}/arm_segger_embedded_studio_v${pkgver/./}_linux_x64_nordic embedded-studio-arm
	    ;;

	  "i686")
	    mv ${srcdir}/arm_segger_embedded_studio_v${pkgver/./}_linux_x86_nordic embedded-studio-arm
	    ;;
	esac
}

package() {
	install -dm755 "${pkgdir}/opt/SEGGER/Embedded-Studio-ARM-Nordic" \
		    "${pkgdir}/usr/share/licenses/${pkgname}" \
		    "${pkgdir}/usr/bin/" \

	msg2 'Installing Embedded Studio ARM Nordic'
	mv "${srcdir}/embedded-studio-arm/"* "${pkgdir}/opt/SEGGER/Embedded-Studio-ARM-Nordic/"

	msg2 'Instalation of binary file'
	ln -s /opt/SEGGER/Embedded-Studio-ARM-Nordic/bin/emStudio "${pkgdir}/usr/bin/emStudio-ARM-Nordic"

	msg2 'Installing desktop shortcut and icon'
	install -Dm 644 "${pkgdir}/opt/SEGGER/Embedded-Studio-ARM-Nordic/bin/StudioIcon.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -Dm644 /dev/stdin "$pkgdir/usr/share/applications/${pkgname}.desktop" <<END
[Desktop Entry]
Name=ARM Embedded Studio Nordic Edition
Comment=SEGGER Embedded Studio for ARM (Nordic Edition)
GenericName=Embedded Studio ARM (Nordic edition)
Exec=env GDK_BACKEND=x11 emStudio-ARM-Nordic %F
Icon=embedded-studio-arm
Path=/opt/SEGGER/Embedded-Studio-ARM-Nordic/bin
Terminal=false
StartupNotify=true
Type=Application
Categories=Development
END
	
	msg2 'Instalation of license file'
	ln -s /opt/SEGGER/Embedded-Studio-ARM-Nordic/html/License.htm "${pkgdir}/usr/share/licenses/${pkgname}/"
	
}

#
# makepkg --printsrcinfo > .SRCINFO
#

# vim: set ts=8 sw=8 tw=0 noet:
