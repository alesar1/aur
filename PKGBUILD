# Maintainer: Steven Seifried <gitlab@canox.net>
# Contributor: Steven Seifried <gitlab@canox.net>
pkgname=huawei-e3372h-udev
pkgver=1.0
pkgrel=1
pkgdesc="udev Rule for Huawei E3372h USB LTE Modem"
url="https://raw.githubusercontent.com/StevenSeifried/udev-rules/master/15-huawei-e3372h.rules"
license=("GPL3")
arch=('any')
depends=('usb_modeswitch')
source=("https://raw.githubusercontent.com/StevenSeifried/udev-rules/master/15-huawei-e3372h.rules")
sha256sums=('8e496d5df77f51c7ebe2eb1771c323384dce00df59f77ba5a9fa2aacb72bee49')
sha512sums=('5890d5c74e027cf257cad230f505eb9b656e217eb48a122d7c924a70a84c956ff025068a883451fe94286bf32006453fd2b02b9f334c40d04e86599b5a498603')
package() {
 install -Dm644 "$srcdir/15-huawei-e3372h.rules" "${pkgdir}/etc/udev/rules.d/15-huawei-e3372h.rules"
}
