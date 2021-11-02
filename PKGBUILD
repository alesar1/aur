# Maintainer: Philip Meier <meier.philip@posteo.de>
pkgname='timeular'
pkgver=4.0.1
_bin="${pkgname}-${pkgver}.appimage"
pkgrel=0
pkgdesc='A proprietary time tracking service'
arch=('x86_64')
url='https://timeular.com'
license=('custom')
depends=('zlib'
	'hicolor-icon-theme')
options=('!strip')
source=("${_bin}::https://s3.amazonaws.com/timeular-desktop-packages/linux/production/Timeular.AppImage"
	'LICENSE')
sha512sums=('95e168465df140ce3695ee134ac971d3b66a2dc852b5c50c4e4aa773b6d2463fc0bca19fabf5c0fd736543fc59a4b869d33bd8d81e5c1a53029798cdd7ad0657'
            'SKIP')
	    
prepare() {
    cd "${srcdir}"
    chmod +x "${_bin}"
    "./${_bin}" --appimage-extract
    chmod -x "${_bin}"

    sed -e "s/Exec=.*/Exec=timeular/" -i "${srcdir}/squashfs-root/timeular.desktop"
}

package() {  
    install -Dm755 "${srcdir}/${_bin}" "${pkgdir}/opt/${pkgname}/${_bin}" 
    mkdir -p "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${_bin}" "${pkgdir}/usr/bin/timeular"
    
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 "${srcdir}/squashfs-root/timeular.desktop" "${pkgdir}/usr/share/applications/timeular.desktop"

    cp -R "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share"
    find "${pkgdir}/usr/share/icons" -type d -exec chmod 755 {} + -o -type f -exec chmod 644 {} +
}

