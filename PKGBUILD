# Maintainer: Manuel Coenen <manuel.coenen@gmail.com>
pkgname=duetcontrolserver-bin
pkgver=1.0.3.1
pkgrel=1
pkgdesc="Control server application for Duet 3 series"
arch=('armv7h')
url="https://github.com/chrishamm/DuetSoftwareFramework"
license=('GPL3')
provides=('duetcontrolserver')
conflicts=('duetcontrolserver')
depends=("duetruntime>=${pkgver}" 'linux>=4.8')
options=(!strip staticlibs)
backup=('opt/dsf/conf/config.json')
source=("https://pkg.duet3d.com/dists/stable/armv7/binary-armhf/duetcontrolserver_${pkgver}.deb")
sha256sums=('20026c79b6cf0fc32051f3a92f991f173f3d7380a7df43c05032f8dea9c5b100')

prepare() {
    tar -xf data.tar.xz
}

package() {

	# DuetControlServer, DuetWebServer, CodeConsole, CodeLogger
	install -dm 755 "${pkgdir}"/{opt/dsf/bin,opt/dsf/conf,usr/bin,usr/lib/systemd/system}
	install "${srcdir}/opt/dsf/bin/"* "${pkgdir}/opt/dsf/bin"
	install "${srcdir}/usr/lib/systemd/system/"* "${pkgdir}/usr/lib/systemd/system"
	install "${srcdir}/opt/dsf/conf/"* "${pkgdir}/opt/dsf/conf"

	ln -s "/opt/dsf/bin/DuetControlServer" "${pkgdir}/usr/bin/"
}
