# Maintainer: Johannes Löthberg <johannes@kyriasis.com>

pkgname=sv_dvorak
pkgver=1
pkgrel=3
pkgdesc="A Swedish dvorak keyboard layout (Xorg driver)"
arch=(any)
url="http://tlundqvist.org/sv_dvorak/"
license=('GPL')
depends=('xorg-server')
install=sv_dvorak.install
source=("http://tlundqvist.org/sv_dvorak/drivers/se_sv_dvorak_new.xorg")
md5sums=('1e4a2818c89e60001a1ec2d98911a0a0')

package() {
	install -Dm644 se_sv_dvorak_new.xorg "$pkgdir"/usr/share/X11/xkb/symbols/se_sv_dvorak
}

# vim: set ts=2 sts=2 sw=2 noet:
