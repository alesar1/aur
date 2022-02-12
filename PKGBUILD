#Maintainer: rmbgame<rmb@rmbgame.net>
#Maintainer: AigioL<https://github.com/AigioL>
pkgname=steam++-bin
pkgdesc=一个开源跨平台的多功能Steam工具箱。
pkgver=2.6.7
pkgrel=2
arch=('x86_64' 'aarch64')
url=https://steampp.net/
license=('GPL3')
depends=('dotnet-runtime>=6.0.1')
makedepends=('p7zip')
optdepends=('steam: need official or flatpak version of steam')
provides=('steamt++')
conflicts=('steam++')
options=('!strip')
source=('steamtools.desktop' 'icon.png::https://github.com/BeyondDimension/SteamTools/raw/develop/resources/AppIcon/Logo_64.png')
source_aarch64=("Steam++_aarch64.7z::https://github.com/BeyondDimension/SteamTools/releases/download/${pkgver}/Steam++_linux_arm64_v${pkgver}.7z")
source_x86_64=("Steam++_x86_64.7z::https://github.com/BeyondDimension/SteamTools/releases/download/${pkgver}/Steam++_linux_x64_v${pkgver}.7z")
sha256sums=('9d19a6f955cc212b7bbe71cd80c36d5d8286b5f5d7b9259b3c6b63b92f15fe97'
            '1c7e2b167b6b457c685d0d4890147edf70eb2a3eeefb12aa42ddd0c721b2f49d')
sha256sums_x86_64=('8c94467aa49e089728bada2b4291c91b7946f2cf8ff611209244af7163857b71')
sha256sums_aarch64=('e693ac7ef9c5e485b53450709dd708677828a07f3620b4c18d0965382af43784')
noextract=("Steam++_${CARCH}.7z")
package(){
    mkdir -p "${pkgdir}/opt/steam++"
    mkdir -p "${pkgdir}/usr/share/applications"
    mkdir -p "${pkgdir}/usr/share/icons/hicolor/64x64/apps"
    mkdir -p "${pkgdir}/usr/bin"
    cd "${pkgdir}/opt/steam++"
    7z e "${srcdir}/Steam++_${CARCH}.7z"
    chmod +x "${pkgdir}/opt/steam++/Steam++"
    install -Dm644 "${srcdir}/icon.png" "${pkgdir}/usr/share/icons/hicolor/64x64/apps/steam++.png"
    ln -sf /opt/steam++/Steam++ "${pkgdir}/usr/bin/steam++"
    install -Dm644 "${srcdir}/steamtools.desktop" "${pkgdir}/usr/share/applications/steam++.desktop"
    # Fix font issue, will remove once upstream fix this
    sed -i "s|Exec=/usr/bin/steam++|Exec=env LANG=en_US.UTF-8 /usr/bin/steam++|" "${pkgdir}/usr/share/applications/steam++.desktop"
}
