# Maintainer: Andrea Denisse Gómez-Martínez <aur at denisse dot dev>

pkgname=beehive-bin
_pkgname=${pkgname%-bin}
pkgver=0.4.0
pkgrel=1
url="https://github.com/muesli/beehive"
pkgdesc='A flexible event/agent & automation system with lots of bees'
arch=(aarch64 armv6h i686 x86_64)
license=('AGPL3')
provides=($_pkgname)
conflicts=($_pkgname)

source=("${url}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_Linux_x86_64.tar.gz")
source_aarch64=("${url}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_Linux_arm64.tar.gz")
source_armv6h=("${url}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_Linux_armv6.tar.gz")
source_i686=("${url}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_Linux_i386.tar.gz")

sha256sums=('f1959bc2f7c19d4ec8eaabc7b78492836afcc3bcd75d034854e66607efa9efab')
sha256sums_aarch64=('d8ad07d68eadaa7b8a52df9c0b35b64902f6b9435096ccfad57ff7e20d262cd9')
sha256sums_armv6h=('c1fa8f5a1935ee12f09a2bd9579281d64552897c597534361aba90ed992676fb')
sha256sums_i686=('baf8c1213bcacc3d6516b8a595de216ecd4dcbfd01964aac39d530b6fe265a7d')
sha512sums=('5863862781a445332182261239772ac16484a1873a0af118b3871ee60845020a7f970e6c7df6397038ca97c8e5b99ab60dbbe35d3812d688a7ff6e123b7718e8')
sha512sums_aarch64=('6724e186f8c196755f300ea71205ef4598ad20d2af2162a648b56be67222eaf980db3aef84fbb10aa72d610d49b416ec1ba34f211f7dedcd7976ebae77e28b30')
sha512sums_armv6h=('70e0ad938584ab4babd51b0228e3a62438247db75845de3ab2b0ca34366ffd431368b460514483e919d47e4a8b5d697ca942eb9d0390a6bf4bbf69bfd301e0f2')
sha512sums_i686=('9299ebdb8392b4f8f73e1da36ff417af6edc359274cd3f61ba4cdb56161ee514af9085fbc99c58bb9754c34a021cd8b67eb30e7dfb7e7d5a8da348bfe16faa9a')
b2sums=('bcc0a72788296d29f4e03591bd36c6f5fb20e8ca70e614a29c5a87c9fa891ae5f52ed2251780dfbbbb6a1673675380c562a28fb7d815445efef23fbd43fd375c')
b2sums_aarch64=('72ee19630255a35e3ae723e1f24c716345a529718a5753016b7e7bc4ccb92eb126bfbf01a9648340b1be1b4fea16eb8629891bc33c664ce5f1cdb15c5fcc25f2')
b2sums_armv6h=('9f35ba8df7ac77144c83b99b506216c592086dbc12f86e835081abbce3e3048e40617a4209d91713afea627645f36c1ed22250bed495e8b4e5c0c97936b12cce')
b2sums_i686=('bd3b1a65b4c431fa75a784abf4312c53ab0baa33ef6be7111f8ff7b34cbbbf444e9f6cc6965687a23947e28bc8f6d12289ef515079bae9b0f70469fde6c9ad32')



package() {
  # Install binary
  install -Dm755 "$srcdir/$_pkgname" "$pkgdir/usr/bin/$_pkgname"

  # Copy License
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
