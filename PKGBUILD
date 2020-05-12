# Maintainer: Excitable Snowball <excitablesnowball@gmail.com>

pkgname=zoom-firejail
pkgver=0.1.4
pkgrel=1
pkgdesc=".desktop file for running Zoom in Firejail"
arch=('x86_64')
license=('MIT')
depends=('zoom' 'firejail')
optdepends=('xdg-utils')
install=zoom-firejail.install
source=('ZoomFirejail.desktop'
        'zoom-firejail')
sha512sums=('71af881f8bbb2daa7ee74b63a32ddb7e450ff6c83a0be4f054a9f4afa953f936ccb4c5f1812cae5d4317626fd222360eb10b0b48ec8876f70f74a0d804a9852a'
            'aea3761bd540ebe71b350a1f7fd79683080d73a1c26373ad1f91a552f5c9319665cba4e1d3bc0267bfca3f8d37598ec5077797eec43561f5f7bcd3b583df4b2a')

package() {
    install -Dm755 zoom-firejail "$pkgdir"/usr/bin/zoom-firejail
    install -Dm644 ZoomFirejail.desktop "$pkgdir"/usr/share/applications/ZoomFirejail.desktop
}
