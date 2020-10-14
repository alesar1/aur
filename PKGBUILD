# Maintainer: Nick Webster <nick@nick.geek.nz>
pkgname=micropad
pkgver=3.26.0
pkgrel=1
pkgdesc="A powerful note-taking app that helps you organise + take notes without restrictions."
arch=('x86_64')
url="https://getmicropad.com"
license=('MPL2')
depends=(
	'electron>=9.0.0'
)
source=(
    "https://github.com/MicroPad/MicroPad-Electron/releases/download/v${pkgver}/${pkgname}-${pkgver}.pacman"
    "micropad-bin"
)
md5sums=(
    '025ecfac09e0088f459d09e675da2dc8'
    'f763f23b4887a15000b3aeac8d6c3439'
)
install="micropad.install"

package() {
    install -dm755 "$pkgdir/opt/µPad"
    cp -a opt/µPad/resources "$pkgdir/opt/µPad/"
    cp -a usr "$pkgdir/usr"

    # Use system electron
    install -Dm755 "$pkgname-bin" "$pkgdir/opt/µPad/$pkgname"

    # Link to the binary
    install -dm755 "$pkgdir/usr/bin"
    ln -sf /opt/µPad/micropad "$pkgdir/usr/bin/$pkgname"
}
