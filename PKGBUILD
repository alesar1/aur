# Maintainer: Knut Ahlers <knut@ahlers.me>
# Contributor: Baron Hou <houbaron@gmail.com>

pkgname=archisteamfarm-bin
pkgver=5.2.3.7
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
	"${pkgname}-${pkgver}.zip::https://github.com/JustArchiNET/ArchiSteamFarm/releases/download/${pkgver}/ASF-linux-x64.zip"
	"LICENSE-${pkgver}.txt::https://raw.githubusercontent.com/JustArchiNET/ArchiSteamFarm/${pkgver}/LICENSE.txt"
	"ArchiSteamFarm-bin.desktop"
)

sha512sums=('341243d9a1b20a345905c514161ce30cbb474ebbf5d8ec79669aac2aaf3a11bc3a863466da8a820a50f13d5ff0c4df6d085ae51f626a919a666c4ae456630932'
            '98f6b79b778f7b0a15415bd750c3a8a097d650511cb4ec8115188e115c47053fe700f578895c097051c9bc3dfb6197c2b13a15de203273e1a3218884f86e90e8'
            '32aaead4aacc02c9c60afef74e04cb3a30afc4d76f5e6836a05e672344c7db66cf099849cb2bc9a04454a026f99c9f60d3d7186f4a496d4626fe1a3d40d4ecf6')

prepare() {
	unzip "${pkgname}-${pkgver}.zip" -d "ASF"
}

package() {
	install -d "${pkgdir}/usr/share/licenses/${pkgname}"
	cp "LICENSE-${pkgver}.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-2.0.txt"

	install -Dm644 -t "${pkgdir}/usr/share/applications" "ArchiSteamFarm-bin.desktop"

	install -d "${pkgdir}/opt/ArchiSteamFarm-bin"
	cp -r "${srcdir}/ASF"/* "${pkgdir}/opt/ArchiSteamFarm-bin/"
	install -Dm755 -t "${pkgdir}/opt/ArchiSteamFarm-bin" "${srcdir}/ASF/ArchiSteamFarm"
}
