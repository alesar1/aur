# Maintainer: Mendel Greenberg <chabad 360 at gmail dot com>

pkgbase='citra-bin'
pkgname=('citra-bin' 'citra-qt-bin')
pkgrel=8
pkgver=1343_20190821_8fa6be5
pkgdesc="An experimental open-source Nintendo 3DS emulator/debugger"
conflicts=('citra-git' 'citra-qt-git' 'citra-nightly-bin' 'citra-qt-nightly-bin' 'citra-bin' 'citra-qt')
replaces=("citra-nightly-bin" "citra-qt-nightly-bin")
license=('GPL2')
arch=('x86_64')
url="https://citra-emu.org"

_nightly_id=$(echo $pkgver | cut -d'_' -f1)
_ref="$(echo $pkgver | cut -d'_' -f2)-$(echo $pkgver | cut -d'_' -f3)"

source=("https://github.com/citra-emu/citra-nightly/releases/download/nightly-$_nightly_id/citra-linux-$_ref.tar.xz"
        "https://raw.githubusercontent.com/citra-emu/citra/master/dist/citra.desktop")

sha256sums=('14267ac9f9122d2b5fb53984fba124bd3bee059c54d0cbf329beeb84bbe564eb'
            '93bd8f799877eba7dd87ed7a4c29607d78c42b8769626c1d479f7e34fb7b39e2')

package_citra-bin() {
    depends=('ffmpeg-compat-57' 'libsndio-61-compat' 'sdl2')
    provides=('citra')


    cd "${srcdir}/citra-linux-${_ref}"
    install -Dm755 -t "${pkgdir}/usr/bin" citra
    install -Dm755 -t "${pkgdir}/usr/bin" citra-room

}
package_citra-qt-bin() {
    depends=('ffmpeg-compat-57' 'qt5-multimedia' 'libsndio-61-compat' 'sdl2' 'desktop-file-utils')
    optdepends=('libxkbcommon-x11: for X11 support'
	        'qt5-wayland: for Wayland support')
    provides=('citra-qt')


    cd "${srcdir}/citra-linux-${_ref}"
    install -Dm755 -t "${pkgdir}/usr/bin" citra-qt
    install -Dm755 -t "${pkgdir}/usr/bin" citra-room
    install -Dm644 -t "${pkgdir}/usr/share/pixmaps" "dist/citra.png"

    cd "${srcdir}"
    install -Dm644 -t "${pkgdir}/usr/share/applications" "citra.desktop"
}
