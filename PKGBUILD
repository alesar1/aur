# Maintainer: Wilhelm Jochim <whjochim@gmail.com>
pkgname=xwacomcalibrate
pkgver=1.1
pkgrel=1
arch=("any")
pkgdesc="calibrates wacom tablets to the current window"
url="https://github.com/whjochim/xwacomcalibrate"
license=("GPL")
depends=("xdotool" "xf86-input-wacom" "xorg-xwininfo")
makedepends=("rust" "cargo" "git")
provides=(xwacomcalibrate)
source=(xwacomcalibrate)
sha256sums=("SKIP")

package() {
	install -D -t "$pkgdir/usr/bin" "$srcdir/xwacomcalibrate"
}
