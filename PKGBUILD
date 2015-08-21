# vim: ft=PKGBUILD
# Maintainer: Jack L. Frost <fbt@fleshless.org>
# % Trigger: 1439307323 %

pkgname=('vdev-git' 'vdev-libudev-compat-git')
pkgver=r582.072fd7a
pkgrel=2
pkgdesc='A virtual device manager for *nix'
url='https://github.com/jcnelson/vdev.git'
arch=( 'x86_64' 'i686' )
license=( 'custom:ISC' )
makedepends=( 'libpstat' 'fskit' 'squashfs-tools' 'dash' )

source=( "${pkgname}::git+${url}" )

pkgver() {
	cd "${pkgname}"

	if git_version=$( git describe --long --tags 2>/dev/null ); then
		IFS='-' read last_tag tag_rev commit <<< "$git_version"
		printf '%s.r%s.%s' "$last_tag" "$tag_rev" "$commit"
	else
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	fi
}

build() {
	cd "${pkgname}"
	
	make PREFIX=/usr -C vdevd
	make PREFIX=/usr -C hwdb
#	make PREFIX=/usr -C fs

	make -C libudev-compat
}

package_vdev-git() {
	depends=( 'util-linux' 'kmod' 'iproute2' 'sed' 'grep' 'device-mapper' 'lvm2' 'dash' )
	provides=( 'vdev' )
	conflicts=( 'vdev' )

	cd "$pkgname"
	make -C vdevd \
	     PREFIX='/usr' \
	     DESTDIR="${pkgdir}" \
	     SBINDIR="${pkgdir}/usr/bin" \
	     USRSBINDIR="${pkgdir}/usr/bin" \
	install

	make -C example \
	     PREFIX='/usr' \
	     DESTDIR="${pkgdir}" \
	     SBINDIR="${pkgdir}/usr/bin" \
	     USRSBINDIR="${pkgdir}/usr/bin" \
	install

	make PREFIX=/usr -C hwdb install

	cd "$pkgdir"

	# There is no way to tell the Makefile not to install these.
	rm etc/init.d/vdev
	rmdir etc/init.d

	# Config files
	backup+=( etc/vdev/actions/*.act )
	backup+=( etc/vdev/*.conf )
}

#package_vdevfs-git() {
#	depends=( 'libpstat' 'fskit' 'fuse' 'libstdc++5' )
#	provides=( 'vdevfs' )
#	conflicts=( 'vdevfs' )
#
#	cd vdev-git
#	make -C fs \
#	     PREFIX='/usr' \
#	     DESTDIR="${pkgdir}" \
#	     SBINDIR="${pkgdir}/usr/bin" \
#	     USRSBINDIR="${pkgdir}/usr/bin" \
#	install
#}

package_vdev-libudev-compat-git() {
	provides=( "libudev" 'libudev.so' )
	conflicts=( "libudev" 'libudev.so'	)

	cd vdev-git
	make LIBDIR="${pkgdir}/usr/lib" INCLUDEDIR="${pkgdir}/usr/include" -C libudev-compat install
}

sha1sums=( 'SKIP' )
