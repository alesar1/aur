# Maintainer: Radim Sückr <kontakt@radimsuckr.cz>

pkgname=dagger-bin
pkgver=0.2.8
pkgrel=1
pkgdesc='A portable devkit for CI/CD pipelines'
arch=('x86_64' 'aarch64')
url='https://github.com/dagger/dagger'
license=('Apache License 2.0')
conflicts=('dagger')
depends=()
makedepends=()
source_x86_64=("https://github.com/dagger/dagger/releases/download/v${pkgver}/dagger_v${pkgver}_linux_amd64.tar.gz")
source_aarch64=("https://github.com/dagger/dagger/releases/download/v${pkgver}/dagger_v${pkgver}_linux_arm64.tar.gz")
sha512sums_x86_64=('44d6fd36c32ea41a619db2afe99af5470cfea3743d9a7d99abbd927d6793685b3e607a51840698f51e7bae1d888b0f9e5dc61285e2caa19af0b22c89b5b68752')
sha512sums_aarch64=('1a5d156da0f3ca8105ba0de2e74dd8f767d9fa5f3d8c0061cf186769aaba51d1ddf7e2684fd564f20aaa06c2c6b16015c5a954dc1fe6a86d378cc53420870072')

package() {
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm755 "${srcdir}/dagger" "${pkgdir}/usr/bin/dagger"
}
