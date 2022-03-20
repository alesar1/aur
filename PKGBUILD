# Maintainer: dplusplus <echo cmFuZG9tdGVzdG5hbWUtYXQtZ21haWwoZG90KWNvbQo= | base64 -d>
# Contributor: Sefa Eyeoglu <contact@scrumplex.net>
# Contributor: Philip Abernethy <chais.z3r0@gmail.com>

_pkgname=tshock
pkgname=${_pkgname}-bin
pkgver=4.5.17
_terraria_ver=1.4.3.6
# Because of tag 4.2200 is 4.2.2.1228 and tag 4.2202 is 4.2.2.0224 epoch must be 1
epoch=1
pkgrel=1
pkgdesc="A Terraria Server administration modification that runs on the open source TerrariaAPI."
arch=("x86_64" "aarch64")
url="https://github.com/Pryaxis/TShock"
license=("GPL3")
depends=("mono" "tmux")
provides=($_pkgname)
conflicts=($_pkgname)
source=(
	"${_pkgname}_${pkgver}.zip::https://github.com/Pryaxis/TShock/releases/download/v${pkgver}/TShock${pkgver}_Terraria_${_terraria_ver}.zip"
	"${_pkgname}.sh"
	"default.conf"
	"${_pkgname}@.service"
	"${_pkgname}.sysusers"
	"${_pkgname}.tmpfiles"
	"${_pkgname}.install"
)
noextract=("${_pkgname}_${pkgver}.zip")
sha512sums=('a9309dab7737d4b5a5d685a1c5a51f2bd8711619b64e885e3cb40067c7f04113c5ce250dd31f05c5d337afd3eb3f4b319a80cb4a599ccf7788d9cfb30892a115'
	'SKIP'
	'SKIP'
	'SKIP'
	'SKIP'
	'SKIP'
	'SKIP'
)

install="tshock.install"
backup=("etc/conf.d/${_pkgname}/default.conf")

package() {
    install -Dm755 "${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"

	install -Dm644 "default.conf" "${pkgdir}/etc/conf.d/${_pkgname}/default.conf"

    # Unzip server files
    install -d "${pkgdir}/srv/${_pkgname}"
    bsdtar -x -f "${_pkgname}_${pkgver}.zip" -C "${pkgdir}/srv/${_pkgname}"


    install -Dm644 "${_pkgname}@.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}@.service"
    install -Dm644 "${_pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${_pkgname}.conf"
    install -Dm644 "${_pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${_pkgname}.conf"
}
