# Maintainer: Nick Webster <nick@nick.geek.nz>
pkgname=micropad
pkgver=3.11.0
pkgrel=1
pkgdesc="A powerful notepad app that respects your freedoms and runs on everything."
arch=('x86_64')
url="https://getmicropad.com"
license=('MPL2')
depends=('electron<3.0.0')
source=(
    "https://github.com/MicroPad/Electron/releases/download/v${pkgver}/${pkgname}-${pkgver}.pacman"
    "micropad-bin"
)
md5sums=(
    '52749ca35fa37898a7c304d0ff8d60a3'
    'fb88bf75df0f836b4a6da178be1cb6c2'
)
install="micropad.install"

package() {
    # Replace bundled binary to use the community electron package
    chmod +x "${srcdir}/micropad-bin"
    cp "${srcdir}/micropad-bin" opt/µPad/micropad

    mv opt "${pkgdir}/opt"
    mv usr "${pkgdir}/usr"
}
