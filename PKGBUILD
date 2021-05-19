# Maintainer: ANDRoid7890 <andrey.android7890@gmail.com>

pkgname=bootsplash-manager-bin
pkgver=1.7
pkgrel=1
pkgdesc="Simple bootsplash manager"
url="https://github.com/ANDRoid7890/bootsplash-manager"
arch=(x86_64)
license=(GPL3)
depends=('qt5-base'
         'bootsplash-systemd'
         'kauth'
         'pamac'
         'sdl2')
conflicts=('bootsplash-manager')

source=("https://github.com/ANDRoid7890/bootsplash-manager/releases/download/$pkgver/bootsplash-manager-$pkgver.tar.gz")

md5sums=('4c31146bcbf60a08a20c57d2b7545037')

package() {
     bsdtar -xf "$srcdir/bootsplash-manager-$pkgver.tar.gz" -C "$pkgdir"
}
