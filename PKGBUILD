# Maintainer: Metal A-wing <1 at 233 dot email>

pkgname=electron-netease-cloud-music
pkgver=0.4.0.beta02b4193
pkgrel=1
pkgdesc=" UNOFFICAL clinet for music.163.com. Powered by Electron and Vue"
arch=('x86_64')
url="https://github.com/Rocket1184/electron-netease-cloud-music"
license=('GPL-3.0')
depends=('glibc')

source_x86_64=("http://ncm.qn.rocka.cn/electron-ncm-linux-x64-02b4193.tar.gz"
  'electron-netease-cloud-music.desktop'
  'netease-cloud-music.svg'
)

md5sums_x86_64=('603b5d957620d41d6c8c54a4aaa3732e'
                '9198bd214026256cab4f0ad60ed5a538'
                '24cb8955dac6c6c5f0ae2bc1451c56b8')

package() {
    cd "$srcdir"

    install -Dm644 electron-netease-cloud-music.desktop -t "$pkgdir/usr/share/applications/"
    install -Dm644 netease-cloud-music.svg "$pkgdir/usr/share/icons/hicolor/symbolic/apps/netease-cloud-music.svg"

    cd "$srcdir/$pkgname-linux-x64"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    mkdir -p "$pkgdir/usr/lib/$pkgname/"
    cp -r --no-preserve='ownership' -- * "$pkgdir/usr/lib/$pkgname/"

    mkdir -p "$pkgdir/usr/bin/"
    ln -s '../lib/electron-netease-cloud-music/electron-netease-cloud-music' "$pkgdir/usr/bin/electron-netease-cloud-music"
}

