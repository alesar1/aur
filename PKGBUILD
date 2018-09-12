# Maintainer: silver_remal <adumail2 at gmail dot com>

_pkgname=desktop-app
pkgname=leanote
pkgver=2.6.1
pkgrel=1
pkgdesc="Knowledge, Blog, Sharing, Cooperation."
arch=("i686" "x86_64")
url="https://leanote.com/"
license=("GPL3")
depends=("electron" "gconf")
makedepends=("electron" "gulp" "libarchive")
provides=("${pkgname}")
conflicts=("${pkgname}")
#install=$pkgname.install

source=("leanote.desktop"
"leanote"
)
sha256sums=('8dab30fe0835432e44b5a3a1d46aebde8716a2a47ba4031cbe2a01560987aa83'
'57155a0e423bc98f0e83acb35f03ace06b3de54bdc64b2373128671c801727b1'
)

source_x86_64=("${pkgname}-${pkgver}.zip::https://sourceforge.net/projects/leanote-desktop-app/files/${pkgver}/leanote-desktop-linux-x64-v${pkgver}.zip/download")
source_i686=("${pkgname}-${pkgver}.zip::https://sourceforge.net/projects/leanote-desktop-app/files/${pkgver}/leanote-desktop-linux-ia32-v${pkgver}.zip/download")
sha256sums_x86_64=('5353d454f7875253748cf1e85c14a741ddbfdc72bf4a196770ac411999f50aa0')
sha256sums_i686=('d49133ce0f9fd5fcd9d5923c61f3dcd53fe736dc5d28c8e0479104722ec07422')
noextract=("${pkgname}-${pkgver}.zip")

prepare() {
    echo "    Extracting files..."
    mkdir -p src
    bsdtar -xf ${pkgname}-${pkgver}.zip -C src
}

build() {
    echo "    Cleanup directories..."
	cd "${srcdir}/src"
    rm -rf __MACOSX 
    rm -rf .DS_Store
}

package() {
    install -d "${pkgdir}"/opt
    install -D -m655 "./${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -D -m644 "./${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -D -m644 "${srcdir}/src/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -D -m644 "${srcdir}/src/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 "${srcdir}/src/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSES.chromium.html"
    
    rm -rf "${srcdir}/src/LICENSE"
    rm -rf "${srcdir}/src/LICENSE.chromium.html"
    rm -rf "${srcdir}/src/${pkgname}.png"

    cp -R ${srcdir}/src/ "${pkgdir}/opt/leanote"
}
