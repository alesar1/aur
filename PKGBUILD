# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Gui||aume <michaudg@gmail.com>

pkgname=rocketchat-client-bin
pkgver=3.5.3
pkgrel=1
pkgdesc="The Ultimate Open Source Web Chat Platform"
arch=('x86_64')
license=('MIT')
url='https://rocket.chat'
depends=('gtk3' 'nss' 'libxss')
optdepends=('libnotify: For sending desktop notifications'
            'libindicator-gtk3: For the system tray icon')
source=("https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/${pkgver}/rocketchat_${pkgver}_amd64.deb"
        'LICENSE')
sha256sums=('8565baff966bcf39667a752b1bf4fe2f24b10b19ba51f5b05c2374edcb6c51bb'
            '362e3ce451a4aa3e51e5728a2102b01135827d3a4af0a450b672c54540dec5c5')

package() {
    cd "$pkgdir"
    tar -xf "$srcdir"/data.tar.xz
    chmod -R go-w .
    mkdir -m 755 -p usr/bin
    ln -s ../../opt/Rocket.Chat/rocketchat-desktop usr/bin
    install -Dm644 "$srcdir"/LICENSE usr/share/licenses/"$pkgname"/LICENSE
}
