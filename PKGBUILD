# Maintainer: XYenon <i at xyenon dot bid>

pkgname=go-cqhttp-bin

pkgver=v1.0.0_beta6
pkgrel=1

pkgdesc="Lightweight, native cross-platform implementation of cqhttp in Golang."
arch=("i686" "x86_64" "armv7h" "aarch64")
url="https://github.com/Mrs4s/go-cqhttp/releases"
license=("AGPL3")

optdepends=("ffmpeg: support voice sending in any format")

source_i686=("${pkgname}-i686-${pkgver//_/-}.tar.gz::https://github.com/Mrs4s/go-cqhttp/releases/download/${pkgver//_/-}/go-cqhttp_linux_386.tar.gz")
source_x86_64=("${pkgname}-x86_64-${pkgver//_/-}.tar.gz::https://github.com/Mrs4s/go-cqhttp/releases/download/${pkgver//_/-}/go-cqhttp_linux_amd64.tar.gz")
source_armv7h=("${pkgname}-armv7h-${pkgver//_/-}.tar.gz::https://github.com/Mrs4s/go-cqhttp/releases/download/${pkgver//_/-}/go-cqhttp_linux_armv7.tar.gz")
source_aarch64=("${pkgname}-aarch64-${pkgver//_/-}.tar.gz::https://github.com/Mrs4s/go-cqhttp/releases/download/${pkgver//_/-}/go-cqhttp_linux_arm64.tar.gz")

sha512sums_i686=('b09b0954d21dc3f2146f2e642ffd1e912303a09e6244e0bffe1485bde616ea1e7c03f1c228f1f7d7cc6e52ecb6e5699748085959284c94e5ccd816aee5c91df1')
sha512sums_x86_64=('4fa25904606849c1c7d45c0beea4e0fc1d8fbfd550790120eebf11f8939d962d4fd8a2810b389aa3938d88e623a51fb12b0a5a07d43487c7215652089239713f')
sha512sums_armv7h=('bc9ffea3a4b5f04ff413fc83829cc98f662aa8b0767f3eba52425a5ed9fd473b6006df6e40b9e3abd5428a0e4f4778c5c16f79a6855f5e9dd9b51e9d8c7739e2')
sha512sums_aarch64=('93c133c014fc94724d9cfe6d4cec0e0d047250d28174877aec3df1b2b004f5275448e6906b9d6cec99e98dc179a9092c81b4a08d829df90332f38ca4e521c09d')

package() {
    cd ${srcdir}
    install -Dm755 "go-cqhttp" "${pkgdir}/usr/bin/go-cqhttp"
}
