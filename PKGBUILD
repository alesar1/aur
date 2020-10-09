# Maintainer: yangon99 <yangon99_all@outlook.com>

pkgname=clash-premium-bin
pkgver=2020.10.09
pkgrel=1
pkgdesc="Close-sourced pre-built Clash binary with TUN support"
provides=('clash')
conflicts=('clash' 'clash-tun' 'clash-dev-git')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/Dreamacro/clash/releases/tag/premium"
license=('unknown')
depends=('glibc')
install=${pkgname}.install
source=("clash@.service"
        "clash_user.service")
sha512sums=('3d4b599a972caab7238f405d57e8ec74f9d0f51bc2b51f6656305f3a46aecd4d1d5c10a16415c3c158df1e0248f0aad327ddefc168d480c2674cec29602a31a0'
            'c08d9f25b8c7656b72da975c2ab580adfc8834a61c2dfec8296f19b6964460d12cad2100becadb7478cbccffa7c4805dbed80847c2a30075fc9fb31dee60ebe2')
source_i686=("${pkgname}-i686-${pkgver}.gz::https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-386-${pkgver}.gz")
source_x86_64=("${pkgname}-x86_64-${pkgver}.gz::https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-amd64-${pkgver}.gz")
source_arm=("${pkgname}-arm-${pkgver}.gz::https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-armv5-${pkgver}.gz")
source_armv6h=("${pkgname}-armv6h-${pkgver}.gz::https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-armv6-${pkgver}.gz")
source_armv7h=("${pkgname}-armv7h-${pkgver}.gz::https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-armv7-${pkgver}.gz")
source_aarch64=("${pkgname}-aarch64-${pkgver}.gz::https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-armv8-${pkgver}.gz")

sha512sums_i686=('462d8a60728691ab7b8d8513d493a4c4c480c10672d37e3c3d242f27a68b256849f40dd3425e74fdced16b2f9680182cb433e0a614ce750559ba733a27b8d906')
sha512sums_x86_64=('0955b93533b4f46a12b25effda04094a1bb4070016b4f97e999a3f121bcb871e8f3f15f050957771d397bc5d0823b911858fa5334e0133b55b595e634dc4872d')
sha512sums_arm=('0cd26ff7260a4617a5d114278c064691b16e7ad5e5a6926f0f8c94df829345387a90fddd3d7b09db6e47ca02236a15803930f943e55e8e273920cf1f7719391c')
sha512sums_armv6h=('23273578d95ed9f47f5a27417642434e045d9a3333409e2dbb0154ca0d8eded62f0197a89cef57c713d144129c70102239909d8939ae8fb4156e397323b40d52')
sha512sums_armv7h=('3887b2a6a5c526b1a4164ea21f91e2d0095c3414244776a05f308ce3f399f6a822bea926497669e8f7aa83fb23f136b863ca79f4517391fce1716a1230c03a3e')
sha512sums_aarch64=('801d2e7eecc48cb1f36ff1085eec4773359754ef83521f3c70678f93741b40858c2b88d993eea24d84c0075d5d46aa3fb96c1782628af200ba4536c1d31761dd')

prepare() {
    cd "${srcdir}"
    gunzip -kfN "${pkgname}-${CARCH}-${pkgver}.gz"
}

package() {
    if [ $CARCH = "i686" ]; then
        _arch='386'
    elif [ $CARCH = "x86_64" ]; then
        _arch='amd64'
    elif [ $CARCH = "arm" ]; then
        _arch='armv5'
    elif [ $CARCH = "armv6h" ]; then
        _arch='armv6'
    elif [ $CARCH = "armv7h" ]; then
        _arch='armv7'
    elif [ $CARCH = "aarch64" ]; then
        _arch='armv8'
    fi
    install -Dm755 "${srcdir}/clash-linux-${_arch}" "${pkgdir}/usr/bin/clash"
    install -Dm644 "${srcdir}/clash@.service" "${pkgdir}/usr/lib/systemd/system/clash@.service"
    install -Dm644 "${srcdir}/clash_user.service" "${pkgdir}/usr/lib/systemd/user/clash.service"
}