# Maintainer: unknowndev <unknowndev at archlinux.info>

pkgname=kiwivm-ga-systemd
pkgver=0.1.0
pkgrel=1
pkgdesc="KiwiVM Guest Agent systemd unit file."
arch=('any')
url="https://github.com/unknowndev233/KiwiVM-GA-systemd"
license=('Apache')
depends=('systemd>=240' 'kiwivm-ga')
conflicts=('kiwivm-ga-sysvinit')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha512sums=('7a17cd7ecdd969b04480609edfc98df26ed4d71414f6b16fc9c7fb1ed51facf7339d0d7f6be59cdaf0baf1d323383ac9ddc4a2cf336b6716382aa7dfe8dfbb0b')

package() {
	sed -i '9 s/#Type=exec/Type=exec/'                                       "${srcdir}/KiwiVM-GA-systemd-${pkgver}/qemukvmga.service"
	sed -i '10 s/Type=simple/#Type=simple/'                                  "${srcdir}/KiwiVM-GA-systemd-${pkgver}/qemukvmga.service"
	install -Dm644 "${srcdir}/KiwiVM-GA-systemd-${pkgver}/qemukvmga.service" "${pkgdir}/usr/lib/systemd/system/qemukvmga.service"
}
