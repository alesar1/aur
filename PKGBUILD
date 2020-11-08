# Maintainer: Static_Rocket

pkgname=asus-nb-ctrl-git
pkgver=2.1.0.r4.gb496139
pkgrel=1
pkgdesc="Asus laptop control utilities"
arch=('x86_64')
url="https://gitlab.com/asus-linux/asus-nb-ctrl"
license=('Mozilla Public License Version 2.0')
depends=('libusb' 'udev' 'systemd' 'hid-asus-rog-dkms-git')
optdepends=('asus-rog-nb-wmi-dkms-git: G14/G15 support'
	'acpi_call: fan control')
makedepends=('git' 'rust' 'clang' 'glibc')
source=('git+https://gitlab.com/asus-linux/asus-nb-ctrl.git')
md5sums=('SKIP')
_gitdir=${pkgname%"-git"}

pkgver() {
	cd "$_gitdir"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$_gitdir"
	make build
}

package() {
	cd "$_gitdir"
	make DESTDIR="$pkgdir" install
}

