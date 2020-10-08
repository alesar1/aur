# Maintainer: fsyy <fossy2001 web de>
pkgname=remotelight-bin
_pkgname=remotelight
pkgver=0.2.4
pkgrel=2
pkgdesc="Multifunctional LED Control Software"
url="https://github.com/Drumber/RemoteLight"
license=('GPL3')
arch=('any')
depends=('java-runtime')
provides=('remotelight')
conflicts=('remotelight')
source=("https://github.com/Drumber/RemoteLight/releases/download/v${pkgver}/RemoteLight-${pkgver}.jar"
        'RemoteLight.desktop'
        'remotelight'
        'remotelight.png')
b2sums=('339cc3e360c81f8dbc59c2d5788e3fe028631c639a8cbeb2b47b46b6f6559292f1f0821b5045f543ae2ba18a9ea9ee5beabb9de1ba1c94b1510ce3982deb7b75'
        '993c6353dab94b7c5709f9c02a65c7728a7df360129af4fb0dcd53a9c177596d8e6db3c4167cd0a5f8eb1d199601c0236993dd8ff0c8002a8864ad45cf7a9b90'
        'd0093893abb890c2d93abed2fe237d4c0f94faa8bf5dfa5b464ee2fb679d91ac925a527b9b99dfd77b7851cd733fa6ca8ebc4157cc3831ee1e3fc8308fe1f938'
        'f7b632a2e94006956ee8e9be0315fb63d7ca23c0fa92f1b6fae31ba5c2ed0f9cae966403156a58956d18936de43e3cde94661653b08cba2fe3132f5b7de7a446')

package() {
    install -D -m755 "$srcdir/RemoteLight-${pkgver}.jar" "$pkgdir/usr/share/java/RemoteLight/RemoteLight.jar"
    install -D -m755 "$srcdir/remotelight" "$pkgdir/usr/bin/remotelight"
    install -D -m644 "$srcdir/remotelight.png" "$pkgdir/usr/share/pixmaps/remotelight.png"
    install -D -m644 "$srcdir/RemoteLight.desktop" "$pkgdir/usr/share/applications/RemoteLight.desktop"    
}
