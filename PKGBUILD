# Maintainer: Lasha Kanteladze <kanteladzelasha339@gmail.com>
pkgname=dxhd-bin
pkgver=10.07.2020_21.27
pkgrel=0
pkgdesc="An X11 Hotkey Daemon"
arch=('x86_64')
url="https://github.com/dakyskye/dxhd"
depends=('util-linux')
provides=('dxhd')
conflicts=('dxhd-git')
source=("https://github.com/dakyskye/dxhd/releases/download/$pkgver/dxhd_amd64" "https://raw.githubusercontent.com/dakyskye/dxhd/master/LICENSE")
md5sums=('SKIP' 'SKIP')


package() {
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname%????}/LICENSE"
	install -Dm755 dxhd_amd64 "${pkgdir}/usr/bin/dxhd"
}
