# Maintainer: fenuks

_pkgname=powerline-go
_binary=${_pkgname}-linux-amd64
pkgname=${_pkgname}-bin
pkgver=1.22.1
pkgrel=1
pkgdesc="A beautiful and useful low-latency prompt for your shell, written in go"
arch=("x86_64")
url="https://github.com/justjanne/powerline-go"
license=("GPL3")
depends=()
optdepends=("powerline-fonts: fonts with powerline symbols")
makedepends=()
provides=("${_pkgname}")
conflicts=("${_pkgname}")
install=$pkgname.install
source=("${_pkgname}-${pkgver}::https://github.com/justjanne/${_pkgname}/releases/download/v${pkgver}/${_binary}")

sha256sums=('1cdd4fdb5dea23fc25d59e4cc845960c60bf8ead0e9b004351ee3479d805ecb4')

package() {
    install -Dm755 "${srcdir}/${_pkgname}-${pkgver}" "${pkgdir}/usr/bin/${_pkgname}"
}
