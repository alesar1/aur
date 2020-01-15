# Maintainer: Victor Zamanian <victor.zamanian@gmail.com>


pkgname=pomotroid
pkgver=0.6.2
_appimage="${pkgname}-${pkgver}.AppImage"
pkgrel=1
pkgdesc="Simple and visually-pleasing Pomodoro timer"
arch=('x86_64')
url="https://github.com/Splode/pomotroid"
license=('MIT')
depends=('zlib' 'hicolor-icon-theme')
options=(!strip)
source_x86_64=(
  "${_appimage}::${url}/releases/download/v${pkgver}/${pkgname}-${pkgver}-${arch}.AppImage"
  "https://raw.githubusercontent.com/Splode/pomotroid/master/LICENSE"
)
noextract=("${_appimage}")
md5sums_x86_64=(
  'eb5320db172dcc6f8fd4038fbf0089b7'
  '98368ac76439a0812a58d0a586b28ed1'
)

prepare() {
    chmod +x "${_appimage}"
    ./"${_appimage}" --appimage-extract
}

build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=AppRun|Exec=env DESKTOPINTEGRATION=false /usr/bin/${pkgname}|"\
        "squashfs-root/${pkgname}.desktop"
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${srcdir}/${_appimage}" "${pkgdir}/opt/${pkgname}/${pkgname}.AppImage"
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/opt/${pkgname}/LICENSE"

    # Desktop file
    install -Dm644 "${srcdir}/squashfs-root/${pkgname}.desktop"\
            "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    # Icon images
    install -dm755 "${pkgdir}/usr/share"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${pkgname}"

    # Symlink license
    install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "/opt/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname"
}
