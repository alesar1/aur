# Maintainer: yjun <jerrysteve1101@gmail.com>

pkgname=natapp
pkgver=2_3_9
pkgrel=4	
pkgdesc="内网穿透,基于ngrok的国内高速内网映射工具"
arch=("x86_64" "aarch64" "armv7h")
url="https://natapp.cn"
license=('custom')
source=("LICENSE::https://natapp.cn/article/serviceagreement")
source_x86_64=(
    "http://download.natapp.cn/assets/downloads/clients/${pkgver}/${pkgname}_linux_amd64_${pkgver}.zip"
)
source_aarch64=(
    "http://download.natapp.cn/assets/downloads/clients/${pkgver}/${pkgname}_linux_arm64_${pkgver}.zip"
)
source_armv7h=(
    "http://download.natapp.cn/assets/downloads/clients/${pkgver}/${pkgname}_linux_arm_${pkgver}.zip"
)
md5sums=('6ae2f443e1902be706a9d370feb6571e')
md5sums_x86_64=('71037d0cf5f038b6cbb84bdcf37d7c30')
md5sums_aarch64=('33e100ca4d57834a551eafb5830c976f')
md5sums_armv7h=('116ce8024b15dc2da61786e93f925053')

package() {
cd ${srcdir}
    install -Dm755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
    install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
