# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=ipxe-git
pkgver=1.0.0.r1979.g657dd5f
pkgrel=1
pkgdesc='iPXE open source boot firmware - git checkout'
arch=('any')
url='http://www.ipxe.org/'
license=('GPL')
makedepends=('git' 'syslinux' 'libisoburn' 'mtools' 'xz')
provides=('ipxe')
conflicts=('ipxe')
install=ipxe.install
source=('git://git.ipxe.org/ipxe.git'
	'0001-git-version.patch'
	'0002-banner.patch'
	'0003-allow-to-build-ISO-image-with-EFI-support.patch'
	'0004-fix-no-pie-workaround.patch'
	'grub'
	'chain-default.ipxe'
	'chain-default-3928.ipxe')
backup=('etc/grub.d/20_ipxe')

pkgver() {
	cd ipxe/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git log -1 --format='%h')"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git log -1 --format='%h')"
	fi
}

prepare() {
	cd ipxe/src/

	# git version
	patch -Np2 < "${srcdir}/0001-git-version.patch"

	# ArchLinux branding
	patch -Np2 < "${srcdir}/0002-banner.patch"

	# ISO image with EFI support
	patch -Np2 < "${srcdir}/0003-allow-to-build-ISO-image-with-EFI-support.patch"

	# build fix
	patch -Np2 < "${srcdir}/0004-fix-no-pie-workaround.patch"

	# read and set keymap
	[ -s /etc/vconsole.conf ] && source /etc/vconsole.conf
	if [ -n "${KEYMAP}" ]; then
		sed -i "/^#define\tKEYBOARD_MAP/c #define KEYBOARD_MAP ${KEYMAP}" config/console.h
	fi

	# change menu colors
	sed -i "/COLOR_[A-Z]*_BG/s/COLOR_BLUE/COLOR_BLACK/" config/colour.h

	# enable neighbour command
	sed -i "/NEIGHBOUR_CMD/c #define NEIGHBOUR_CMD" config/general.h

	# enable ping command
	sed -i "/PING_CMD/c #define PING_CMD" config/general.h

	# enable reboot and poweroff
	sed -i -e "/REBOOT_CMD/c #define REBOOT_CMD" \
		-e "/POWEROFF_CMD/c #define POWEROFF_CMD" config/general.h

	# disable WEP, WPA and WPA2
	sed -i -e "/CRYPTO_80211_/s/^#define/#undef/" \
		-e "/IWMGMT_CMD/c #undef IWMGMT_CMD" config/general.h
}

build() {
	cd ipxe/src/

	# default targets (ipxe.{lkrn,dsk,iso,usb})
	make all

	# UNDI-only - this is without drivers
	make bin/undionly.kpxe

	# this includes drivers, but is bigger
	# build targets with embedded scripts first and rename
	make bin/ipxe.pxe EMBED=${srcdir}/chain-default.ipxe
	mv bin/ipxe.pxe bin/ipxe-default.pxe

	make bin/ipxe.pxe EMBED=${srcdir}/chain-default-3928.ipxe
	mv bin/ipxe.pxe bin/ipxe-default-3928.pxe

	make bin/ipxe.pxe

	# EFI
	make bin-i386-efi/ipxe.efi bin-x86_64-efi/ipxe.efi

	# ipxe.liso and ipxe.eiso
	# build after EFI!
	make bin/ipxe.liso bin/ipxe.eiso
}

package() {
	cd ipxe/

	install -D -m0755 ${srcdir}/grub ${pkgdir}/etc/grub.d/20_ipxe

	install -D -m0644 COPYING ${pkgdir}/usr/share/licenses/ipxe/COPYING
	install -D -m0644 COPYING.GPLv2 ${pkgdir}/usr/share/licenses/ipxe/COPYING.GPLv2
	install -D -m0644 COPYING.UBDL ${pkgdir}/usr/share/licenses/ipxe/COPYING.UBDL

	cd src/

	# iPXE kernel bzImage
	install -D -m0644 bin/ipxe.lkrn ${pkgdir}/boot/ipxe/ipxe.lkrn

	# default targets, legacy and EFI ISO
	install -D -m0644 bin/ipxe.dsk ${pkgdir}/usr/share/ipxe/ipxe.dsk
	install -D -m0644 bin/ipxe.usb ${pkgdir}/usr/share/ipxe/ipxe.usb
	install -D -m0644 bin/ipxe.iso ${pkgdir}/usr/share/ipxe/ipxe.iso
	install -D -m0644 bin/ipxe.liso ${pkgdir}/usr/share/ipxe/ipxe-legacy.iso
	install -D -m0644 bin/ipxe.eiso ${pkgdir}/usr/share/ipxe/ipxe-efi.iso

	# iPXE UNDI-only targets
	install -D -m0644 bin/undionly.kpxe ${pkgdir}/usr/lib/ipxe/undi.kpxe

	# iPXE targets with full driver support
	install -D -m0644 bin/ipxe.pxe ${pkgdir}/usr/lib/ipxe/ipxe.pxe
	install -D -m0644 bin/ipxe-default.pxe ${pkgdir}/usr/lib/ipxe/ipxe-default.pxe
	install -D -m0644 bin/ipxe-default-3928.pxe ${pkgdir}/usr/lib/ipxe/ipxe-default-3928.pxe

	# iPXE EFI targets
	install -D -m0644 bin-i386-efi/ipxe.efi ${pkgdir}/usr/lib/ipxe/efi-i386.efi
	install -D -m0644 bin-x86_64-efi/ipxe.efi ${pkgdir}/usr/lib/ipxe/efi-x86_64.efi
}

sha256sums=('SKIP'
            'a72ebfc3ab294cdf0d2a495597e84e87feba0fb48b618b504c1a8fc277b7366d'
            'e60a4c6569e426a6ce7298a17c4f062d73391aa00aff5085694fee98a2618c8f'
            '337fe8b39ba5fd8f921e83f1d6611f3945cd1d8b2f8fd780fcbdc6fffdcc0276'
            'bbf03ca532be2ec36cd45420acc34815a03e321ebd435950a30ba052e3e7a2cc'
            '808ff1b3ea54375d0b653b8dbe0992f7821329ef4b976a85a7ac7e5acc12a514'
            'f7ec78e26671f4df90d89440d8b2a69473c15cb6b25dda32c773023378fec42a'
            'e26a54b4e99816b34baebcb7a15d99d57c9395c9689ffbae2329cc675248f9b9')
