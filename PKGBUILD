# Maintainer:  Tony Fettes <tonyfettes@tonyfettes.tk>

pkgname=tunasync-bin
pkgver=0.6.3
pkgrel=1
pkgdesc="Mirror job management tool developed by TUNA"
arch=('x86_64')
url="https://github.com/tuna/tunasync/releases"
license=('GPL3')
depends=('glibc')
source=("tunasync-bin.tar.bz2::https://github.com/tuna/tunasync/releases/download/v${pkgver}/tunasync-linux-bin.tar.bz2")
md5sums=('SKIP')

package() {
  install -Dm755 "${srcdir}"/tunasync "${pkgdir}"/usr/bin/tunasync
  install -Dm755 "${srcdir}"/tunasynctl "${pkgdir}"/usr/bin/tunasynctl
}
