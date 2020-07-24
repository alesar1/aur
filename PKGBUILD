# Maintainer: kumen
# Contributor: nightuser <nightuser.android@gmail.com>

pkgname="stm32cubeide"
pkgver=1.4.0
_pkgver_ext="$pkgver"_7511_20200720_0928
_pkg_file_name=en.st-stm32cubeide_${_pkgver_ext}_amd64_sh.zip
pkgrel=1
pkgdesc="Integrated Development Environment for STM32"
arch=("x86_64")
makedepends=('xdg-user-dirs')
depends=('java-runtime' 'jlink-software-and-documentation' 'ncurses5-compat-libs' 'glibc' 'libusb')
optdepends=()
conflicts=('truestudio')
url="https://www.st.com/en/development-tools/stm32cubeide.html"
license=('Commercial')
options=(!strip)

_DOWNLOADS_DIR=`xdg-user-dir DOWNLOAD`
if [ ! -f ${PWD}/${_pkg_file_name} ]; then
	if [ -f $_DOWNLOADS_DIR/${_pkg_file_name} ]; then
		ln -sfn $_DOWNLOADS_DIR/${_pkg_file_name} ${PWD}
	else
		msg2 ""
		msg2 "The package can be downloaded here: "
		msg2 "Please remember to put a downloaded package ${_pkg_file_name} into the build directory ${PWD} or $_DOWNLOADS_DIR"
		msg2 ""
	fi
fi

source=("local://${_pkg_file_name}"
	$pkgname.desktop
	$pkgname.sh
	"99-jlink.rules.patch")
sha256sums=('97bbd79147af5ab166ac6234bc9ffb160e01024b7cef4e9f201bc1512829e350'
	'c334b743447c2b3b986d5724fd8269b7dbace23b61e68ee9c9b9e15f5e0fa879'
	'90ac2f3ee85d08bc4eba130f07db72f4dc5271ee8cb7713c5fde09667a574e38'
	'0f3f69f7c980a701bf814e94595f5acb51a5d91be76b74e5b632220cfb0e7bb3')

prepare(){
	mkdir -p build
	sh "${srcdir}/"st-stm32cubeide_${_pkgver_ext}_amd64.sh --quiet --noexec --nox11 --target "${srcdir}/build"

	mkdir -p "${srcdir}/build/stlink-server"
	sh "${srcdir}/build/"st-stlink-server.*.install.sh --quiet --noexec --nox11 --target "${srcdir}/build/stlink-server"

	mkdir -p "${srcdir}/build/stlink-udev"
	sh "${srcdir}/build/"st-stlink-udev-rules-*-linux-noarch.sh --quiet --noexec --nox11 --target "${srcdir}/build/stlink-udev"

	mkdir -p "${srcdir}/build/jlink-udev"
	sh "${srcdir}/build/"segger-jlink-udev-rules-*-linux-noarch.sh --quiet --noexec --nox11 --target "${srcdir}/build/jlink-udev"
}

package() {
	cd "$srcdir"

	msg2 'Installing STM32CubeIDE'
	install -d -m755 "${pkgdir}/opt/${pkgname}"
	tar zxf "./build/st-stm32cubeide_${_pkgver_ext}_amd64.tar.gz" -C "${pkgdir}/opt/${pkgname}"

	msg2 'Installing stlink server'
	install -d -m755 "${pkgdir}/usr/bin/"
	cp "${srcdir}/build/stlink-server/stlink-server" "${pkgdir}/usr/bin/"
	chmod 0755 "${pkgdir}/usr/bin/stlink-server"
	chown root:root "${pkgdir}/usr/bin/stlink-server"

	#msg2 'Instalation of STlink udev rules skipped'
	msg2 'Installing STlink udev rules'
	install -d -m755 "${pkgdir}/etc/udev/rules.d/"
	tar zxf "$srcdir/build/stlink-udev/"st-stlink-udev-rules-*-linux-all.tar.gz -C "$srcdir/build/stlink-udev"
	gzip -dc "$srcdir/build/stlink-udev/st-stlink-udev-rules.sw" | tar -xpf - -C "${pkgdir}/"

	msg2 'Instalation of JLink udev rules skipped'
	#msg2 'Installing JLink udev rules'
	#tar zxf "$srcdir/build/jlink-udev/makeself_payload.tar.gz" -C "${pkgdir}/etc/udev/rules.d/" --strip-components 4
	#patch -i "${srcdir}/99-jlink.rules.patch" "${pkgdir}/etc/udev/rules.d/99-jlink.rules"

	msg2 'Instalation of binary file'
	install -Dm 755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

	msg2 'Installing desktop shortcut and icon'
	convert "${pkgdir}/opt/stm32cubeide/icon.xpm" "${srcdir}/${pkgname}.png"
	install -Dm 644 "${srcdir}/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -Dm 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

	#msg2 'Cleaning build folder'
	#rm -rf "${srcdir}/build"

	msg2 'Prevent automatical '${pkgname}'.desktop file replacement by not functional one'
	rm ${pkgdir}/opt/stm32cubeide/plugins/com.st.stm32cube.ide.mcu.ide_*/resources/project_importer/linux/mimetype/stm32cubeide.desktop.template
}

#
# makepkg --printsrcinfo > .SRCINFO
#

# vim: set ts=8 sw=8 tw=0 noet:
