# Maintainer: kylon

pkgname=sharedown
pkgver=4.0.1
pkgrel=1
pkgdesc="Electron application to download Sharepoint videos (especially meant for students)"
arch=('x86_64')
url="https://github.com/kylon/Sharedown"
license=('gpl')
depends=(ffmpeg yt-dlp)
options=(!strip)
source_x86_64=(
	"https://github.com/kylon/Sharedown/releases/download/${pkgver}/${pkgname}-${pkgver}.AppImage"
	"${pkgname}.desktop"
	"icon.png"
)
noextract=("${pkgname}-${pkgver}.AppImage")
sha256sums_x86_64=(
	'd5e55a0c4dc807a21d0f6bb471b4ffbc61d2d1f9b52be4799268dd77e23d0077'
	'0586bf9de90587649c43c58b8665d97ac41fde8a64e5e239bef07099dbd1e255'
	'42cd3a7ed38456d161af85013b25237c982013204f1c578021eb341c7c864dd7'
)

prepare() {
    chmod +x "${pkgname}-${pkgver}.AppImage"
    ./"${pkgname}-${pkgver}.AppImage" --appimage-extract
}

build() {
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${srcdir}/${pkgname}-${pkgver}.AppImage" "${pkgdir}/opt/${pkgname}/${pkgname}-${pkgver}.AppImage"

    # Desktop file
    install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    # Icon
    install -Dm644 "${srcdir}/icon.png" "${pkgdir}/usr/share/sharedown/icon.png"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}-${pkgver}.AppImage" "${pkgdir}/usr/bin/${pkgname}"
}
