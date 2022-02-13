# Maintainer: kumen

pkgname="embedded-studio-arm"
pkgver=5.70a
pkgrel=1
pkgdesc="Segger Embedded Studio for ARM"
arch=('x86_64' 'i686' 'arm' 'aarch64')
makedepends=()
depends=('jlink-software-and-documentation')
optdepends=()
conflicts=()
url="https://www.segger.com/products/development-tools/embedded-studio/"
license=('Commercial')
options=(!strip)

source_x86_64=("Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_x64.tar.gz::https://www.segger.com/downloads/embedded-studio/Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_x64.tar.gz")
source_i686=("Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_x86.tar.gz::https://www.segger.com/downloads/embedded-studio/Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_x86.tar.gz")
source_arm=("Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_arm.tar.gz::https://www.segger.com/downloads/embedded-studio/Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_arm.tar.gz")
source_aarch64=("Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_arm64.tar.gz::https://www.segger.com/downloads/embedded-studio/Setup_EmbeddedStudio_ARM_v${pkgver/./}_linux_arm64.tar.gz")

md5sums_x86_64=('959c9c2d7a2d4940e8a394cc3c59a85e')
md5sums_i686=('dc93c4a0347eba5ab5710db24d7f28de')
md5sums_aarch64=('61468ccb38aeca184a5aba739e896f26')
md5sums_arm=('8759a755742f1977c10ccfdc1389910c')

prepare(){
        # Change src path name
        case ${CARCH} in
	  "x86_64")
	    mv arm_segger_embedded_studio_${pkgver/./}_linux_x64 embedded-studio-arm
	    ;;

	  "i686")
	    mv arm_segger_embedded_studio_${pkgver/./}_linux_x86 embedded-studio-arm
	    ;;

	  "aarch64")
	    mv arm_segger_embedded_studio_${pkgver/./}_linux_arm64 embedded-studio-arm
	    ;;

	  "arm")
	   mv arm_segger_embedded_studio_${pkgver/./}_linux_arm embedded-studio-arm
	    ;;
	esac
}

package() {
        install -dm755 "${pkgdir}/opt/SEGGER/Embedded-Studio-ARM" \
                    "${pkgdir}/usr/share/licenses/${pkgname}" \
                    "${pkgdir}/usr/bin/" \

        msg2 'Installing Embedded Studio ARM'
        "$srcdir"/embedded-studio-arm/install_segger_embedded_studio --copy-files-to ${pkgdir}/opt/SEGGER/Embedded-Studio-ARM/  --accept-license --no-upgrade

        msg2 'Instalation of binary files'
        ln -s /opt/SEGGER/Embedded-Studio-ARM/bin/emStudio "${pkgdir}/usr/bin/emStudio-ARM"
        ln -s /opt/SEGGER/Embedded-Studio-ARM/bin/emBuild "${pkgdir}/usr/bin/emBuild-ARM"

        msg2 'Installing desktop shortcut and icon'
        install -Dm 644 "${pkgdir}/opt/SEGGER/Embedded-Studio-ARM/bin/StudioIcon.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
        install -Dm644 /dev/stdin "$pkgdir/usr/share/applications/${pkgname}.desktop" <<END
[Desktop Entry]
Name=ARM Embedded Studio
Comment=Embedded Studio for ARM
GenericName=Embedded Studio ARM
Exec=env GDK_BACKEND=x11 emStudio-ARM %F
Icon=embedded-studio-arm
Path=/opt/SEGGER/Embedded-Studio-ARM/bin
Terminal=false
StartupNotify=true
Type=Application
Categories=Development
END

        msg2 'Instalation of license file'
        ln -s /opt/SEGGER/Embedded-Studio-ARM/html/License.htm "${pkgdir}/usr/share/licenses/${pkgname}/"
}

#
# makepkg --printsrcinfo > .SRCINFO
#

# vim: set ts=8 sw=8 tw=0 noet:
