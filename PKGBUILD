# Maintainer: yjun <jerrysteve1101@gmail.com>

pkgname=netease-music-tui-bin
pkgver=0.1.1
pkgrel=1
pkgdesc="netease cloud music terminal client by rust"
arch=('x86_64')
url="https://github.com/betta-cyber/netease-music-tui"
license=('MIT')
makedepends=('rust')
provides=('netease-music-tui')
conflicts=('netease-music-tui')
source=(${pkgname}-${pkgver}.tar.gz::"https://github.com/betta-cyber/netease-music-tui/releases/download/v0.1.1/netease-music-tui-linux.tar.gz")
sha256sums=('d727599bcae423c9278929c4a3f2ff2ce43eba9e34b856b17272637e0b6e9c2a')
package() {
	install -Dm755 ncmt ${pkgdir}/usr/bin/ncmt
}
