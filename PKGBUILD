# Maintainer: Knut Ahlers <knut@ahlers.me>
# Contributor: Baron Hou <houbaron@gmail.com>

pkgname=archisteamfarm-bin
pkgver=5.0.5.5
pkgrel=1
pkgdesc="C# application that allows you to farm steam cards using multiple steam accounts simultaneously."
arch=('x86_64')
url="https://github.com/JustArchiNET/ArchiSteamFarm"
license=("Apache License 2.0")
depends=(dotnet-runtime)
makedepends=("unzip" "curl" "jq")
noextract=('ASF-linux-x64.zip')
options=("!strip" "staticlibs")

source=(
	"https://github.com/JustArchiNET/ArchiSteamFarm/releases/download/${pkgver}/ASF-linux-x64.zip"
	"https://raw.githubusercontent.com/JustArchiNET/ArchiSteamFarm/${pkgver}/LICENSE-2.0.txt"
	"ArchiSteamFarm-bin.desktop"
)

sha512sums=('783716db8d67087f0b9efe5b565eb203f618191eb508c357fbb6ff07285de4a31008023866cd553b1c74d456c34949bdba6b00b2dc8e0c598027857349434c09'
            '31cc38066678c030e8f6378dcae59add64566a977f92983c3a4c929c9b76424291915ea4283e1367ece50b9537f8d51970aa8fd5ce063037aa3a7c45f0677d25'
            '32aaead4aacc02c9c60afef74e04cb3a30afc4d76f5e6836a05e672344c7db66cf099849cb2bc9a04454a026f99c9f60d3d7186f4a496d4626fe1a3d40d4ecf6')

prepare() {
	unzip ASF-linux-x64.zip -d "ASF"
}

package() {
	install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "LICENSE-2.0.txt"
	install -Dm644 -t "${pkgdir}/usr/share/applications" "ArchiSteamFarm-bin.desktop"

	install -d "${pkgdir}/opt/ArchiSteamFarm-bin"
	cp -r "${srcdir}/ASF"/* "${pkgdir}/opt/ArchiSteamFarm-bin/"
	install -Dm755 -t "${pkgdir}/opt/ArchiSteamFarm-bin" "${srcdir}/ASF/ArchiSteamFarm"
}
