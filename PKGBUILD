# Maintainer: Metal A-wing <1 at 233 dot email>
# Contributor: Rocka <i at Rocka dot me>

pkgname=electron-netease-cloud-music
pkgver=0.4.1
pkgrel=2
pkgdesc="UNOFFICAL clinet for music.163.com. Powered by Electron and Vue"
arch=('x86_64')
url="https://github.com/Rocket1184/electron-netease-cloud-music"
license=('GPL-3.0')
depends=('electron')
makedepends=('asar')

source_x86_64=("https://github.com/Rocket1184/electron-netease-cloud-music/releases/download/v${pkgver}/app.asar"
  'electron-netease-cloud-music.desktop'
  'electron-netease-cloud-music.sh'
  'netease-cloud-music.svg'
)

md5sums_x86_64=('1d97eb7cd9fb08ec4d0a9af9b12bac5d'
                '9198bd214026256cab4f0ad60ed5a538'
                '77f597cf81b39d6d6bfee05d4009d026'
                '24cb8955dac6c6c5f0ae2bc1451c56b8')

package() {
    cd "$srcdir"

    install -Dm755 "$srcdir/electron-netease-cloud-music.sh" "$pkgdir/usr/bin/electron-netease-cloud-music"
    install -Dm644 "$srcdir/electron-netease-cloud-music.desktop" -t "$pkgdir/usr/share/applications/"
    install -Dm644 "$srcdir/netease-cloud-music.svg" -t "$pkgdir/usr/share/icons/hicolor/symbolic/apps/"

    asar e "$srcdir/app.asar" app
    install -Dm644 "$srcdir/app/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    install -Dm644 "$srcdir/app.asar" -t "$pkgdir/usr/lib/$pkgname/"
}

