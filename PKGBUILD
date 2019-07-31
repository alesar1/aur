# Maintainer: Jonas Witschel <diabonas at gmx dot de>
# Contributor: Giancarlo Razzolini <grazzolini@archlinux.org>
pkgname=dracut-git
pkgver=049.r98.23acf152
pkgrel=1
pkgdesc='An event driven initramfs infrastructure'
arch=('x86_64')
url='https://dracut.wiki.kernel.org'
license=('GPL')
depends=('bash' 'coreutils' 'cpio' 'filesystem' 'findutils' 'grep' 'gzip'
         'kmod' 'procps-ng' 'sed' 'systemd' 'util-linux' 'xz')
makedepends=('git' 'asciidoc')
optdepends=('binutils: --uefi option support'
            'elfutils: strip binaries to reduce initramfs size'
            'hardlink: --hardlink option support'
            'multipath-tools: dmraid dracut module support'
            'pigz: faster gzip compression'
            'sbsigntools: uefi_secureboot_cert/key configuration option support')
provides=("${pkgname%-git}" 'initramfs')
conflicts=("${pkgname%-git}")
backup=('etc/dracut.conf')
source=('git+https://github.com/dracutdevs/dracut.git')
sha512sums=('SKIP')

pkgver() {
	cd "${pkgname%-git}"
	git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g'
}

build() {
	cd "${pkgname%-git}"
	./configure --prefix=/usr --sysconfdir=/etc --systemdsystemunitdir=/usr/lib/systemd/system
	make
}

package() {
	cd "${pkgname%-git}"
	make DESTDIR="$pkgdir" install
}
