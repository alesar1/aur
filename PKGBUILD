# Maintainer: dryland <dryland718@163.com>

pkgname=reliao
pkgver=2.2.0
pkgrel=1
pkgdesc="爱奇艺之家热聊"
arch=("x86_64")
url="https://home.iqiyi.com/app/download/index.html"
license=("custom")
depends=(
    "gtk2" "libxss"
)

source=("https://hotchat-dl.iqiyi.com/version/linux/${pkgname}_${pkgver}_amd64.deb")
md5sums=('05f37341e9ca90676fd94735e0d7c092')

package() {
    cd ${srcdir}
    tar -xzvf data.tar.gz -C ${pkgdir}
}

