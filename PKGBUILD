# Maintainer: Nestor Cagnoli <nestor[DOT]cagnoli[at]gmail[DOT]com>
# Maintainer: Michael Gruz <michael.gruz@gmail.com>
pkgname=cura-5-beta-bin
_pkgname=cura-5-beta-bin
_shortname=cura5
pkgver=5.2.1
beta=
subbeta=
pkgrel=1
pkgdesc='Cura is an open source slicing application for 3D printers (include betaversion)'
arch=('x86_64')
url="https://ultimaker.com/software/ultimaker-cura"
license=('LGPL3')
depends=('xdg-desktop-portal' 'xdg-desktop-portal-gtk')
optdepends=('cura-5-plugin-octoprint: Cura plugin which enables printing directly to OctoPrint and monitoring the progress'
	'cura-5-plugin-octoprint-git: Cura plugin which enables printing directly to OctoPrint and monitoring the progress (latest git version)')
conflicts=('cura-5-bin' 'cura-5-modern-bin' 'cura-5-modern-beta-bin')
provides=('cura')
options=(!strip)
DLAGENTS=("https::/usr/bin/curl -A 'Mozilla' -fLC - --retry 3 --retry-delay 3 -o %o %u")
source=(
    "https://github.com/Ultimaker/Cura/releases/download/${pkgver}${beta}/Ultimaker-Cura-${pkgver}${beta}${subbeta}-linux.AppImage"
    "https://raw.githubusercontent.com/Ultimaker/Cura/${pkgver}/LICENSE"
    "${_shortname}.sh"
    "cura.desktop.patch"
)

sha256sums=('0da9e05892492763f6aa056cb470c7d07658920020ad1322655c44e4fccbe7fa'
            'f361bfaa2b63576ba829b3fb608f3f8baf5c25df51ebaba8c3554a7f3108e87d'
            'a6e48b9d24ff90fee3feaf9782ca9f264d67b225854473b3d12b3340f409a44d'
            '076fee81d82b5ae55e44d230adef79cf944f51befb76f30074195ac18dd7e16a')
   
prepare() {
    cd "${srcdir}"
    chmod +x ${srcdir}/Ultimaker-Cura-${pkgver}${beta}${subbeta}-linux.AppImage
    ${srcdir}/Ultimaker-Cura-${pkgver}${beta}${subbeta}-linux.AppImage --appimage-extract 1>>/dev/null 2>>/dev/null
    mv squashfs-root ${_shortname}
    cd ${_shortname}
    patch -Np0 < ${srcdir}/cura.desktop.patch

}

package() {
    install -d "${pkgdir}/opt/"
    cp -rf "${srcdir}/${_shortname}" "${pkgdir}/opt/"
    install -d "${pkgdir}/usr/bin/"
    install -Dm 755 "${srcdir}/cura5.sh" "${pkgdir}/usr/bin/${_shortname}"
    install -Dm 755 "${srcdir}/cura5/cura-icon.png" "${pkgdir}/usr/share/pixmaps/cura5-icon.png"
    install -Dm 644 "${srcdir}/cura5/cura.desktop" "${pkgdir}/usr/share/applications/cura5.desktop"
    install -Dm 644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
