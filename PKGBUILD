# Maintainer: Lena Fuhrimann

pkgname=pacmanfile
pkgver=0.0.8
pkgrel=1
pkgdesc='Manage your pacman packages declaratively'
arch=(x86_64 i686)
url="https://github.com/mastertinner/${pkgname}"
license=(Apache)
provides=("$pkgname")
source=("https://github.com/mastertinner/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('0a61d3fa2455f6d0b2d8647acd578cd27c822d35297e070b79bb8e8492c63642')

package() {
	install -Dm755 "${pkgname}-${pkgver}/$pkgname" -t "${pkgdir}/usr/bin"
}
