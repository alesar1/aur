# Maintainer: Oliver Jaksch <arch-aur@com-in.de>

pkgname=romvault
pkgver=2.2.1
pkgrel=1
pkgdesc="RomVault is a tool for managing your ROMs and DATs for emulators, like libretro"
arch=('i686' 'x86_64')
url="http://www.romvault.com/"
license=('custom')
depends=('mono')

source=(${url}/download/ROMVault_V${pkgver}.zip
	"https://raw.githubusercontent.com/gjefferyes/RomVault/master/LICENSE"
	'romvault.desktop'
	'romvault.png')

sha256sums=('e02ed613d2101cccf40747b228df651a6e99988d81e0d12ba2a0056edaf36691'
	    '996bf0d32dc11506ea2635d64474c24399fab25933463f27d70cfa1d50431a16'
	    '36a042ca80b6eb4d025dc6b6d9a75f68dfdf8f5dd4db04423447cf9bd999c202'
	    'd368d14e844f2dd6f5b2d04b31d9a70f0af6f3ec72669f5b6d98b161a8bec1d6')

package() {
    mkdir -p -m775 "${pkgdir}/opt/${pkgname}"
    cd "${pkgdir}/opt/${pkgname}"
    bsdtar -xf "${srcdir}/ROMVault_V${pkgver}.zip"

    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/opt/${pkgname}/LICENSE"
    install -D -m 644 ${srcdir}/romvault.desktop ${pkgdir}/usr/share/applications/romvault.desktop
    install -D -m 644 ${srcdir}/romvault.png ${pkgdir}/usr/share/pixmaps/romvault.png
    # chmod 644 *.exe
    # chmod -R 775 "DATRoot" "ROMRoot" "ToSort"
    # chown -R root:games "${pkgdir}/opt/${pkgname}"

    msg2 "Please create some subdirectorys ie. somewhere in your HOME and set"
    msg2 "these as your working area in programs settings."
    msg2 "---"
    msg2 "A documentation and some subsets of DAT files can be found at"
    msg2 "<https://github.com/mist-devel/mist-board/tree/master/rom_manager>"
    msg2 "and a video that shows a quick HowTo can be found at"
    msg2 "<http://www.youtube.com/embed/yUOIYYbZuAg>"
    msg2 "---"
    msg2 "You'll find more information about RomVault on it's home at <${url}> and"
    msg2 "at MiST's home at <https://github.com/mist-devel/mist-board/wiki/RomManagement>"
}
