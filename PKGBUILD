# Maintainer: Grey Christoforo <first name [at] last name [dot] net>
# Contributer: Stefan Seemayer <stefan@seemayer.de>
pkgbase=tsmclient
pkgname=(tsmclient-service tsmclient-dkms)
pkgver=7.1.8.0
pkgrel=1
pkgdesc="IBM Tivoli Storage Manager Client"
arch=('x86_64')
url="http://www-03.ibm.com/software/products/en/tivostormana/"
license=('proprietary')
depends=()
makedepends=(libarchive patchelf)
checkdepends=()
optdepends=('jre8-openjdk: support for dsmj java gui')
provides=()
conflicts=()
install=
options=(!strip)

# For 7.1.6.2:
# 7
_ver_major="${pkgver%%.*}"
# 7.1.6
_ver_3="${pkgver%.*}"
# 716
_ver_3_nd="${_ver_3//.}"
# 7.1
_ver_2="${_ver_3%.*}"
# 1
_ver_minor="${_ver_2#*.}"
source=(ftp://public.dhe.ibm.com/storage/tivoli-storage-management/maintenance/client/v${_ver_major}r${_ver_minor}/Linux/LinuxX86/BA/v${_ver_3_nd}/${pkgver}-TIV-TSMBAC-LinuxX86.tar
	dkms.conf)

sha1sums=('78d1f6ce0827c13337603ea9369589f0828b7d7b'
          'ad89fff3d6096ba25d973e7e27ee3ce10e2fe57f')

prepare() {
	cd "$srcdir/"
	for rpmfile in *.rpm; do
		case "$rpmfile" in
			TIVsm-filepath-*) continue ;;
		esac
		echo "Extracting '$rpmfile'"
		bsdtar -xf $rpmfile
	done

	bsdtar -xf TIVsm-filepath-source.tar.gz
}

package_tsmclient-service() {
	cd "$srcdir/"

	#cp -r "$srcdir/etc" "$pkgdir/"
	cp -r "$srcdir/opt" "$pkgdir/"
	cp -r "$srcdir/usr" "$pkgdir/"
        mv "$pkgdir/usr/lib64" "$pkgdir/usr/lib"

	ln -s "/opt/tivoli/tsm/client/lang/EN_US" "$pkgdir/opt/tivoli/tsm/client/ba/bin/EN_US"

	for serv in "$srcdir"/opt/tivoli/tsm/client/ba/bin/*.service; do
		install -d "$pkgdir"/usr/lib/systemd/system
		install -m 644 "$serv" "$pkgdir"/usr/lib/systemd/system
	done

	# Permissions even for owner are locked down, fix what we need for now.
	chmod u+rw -R "$pkgdir"/opt/tivoli/tsm/client/ba

	# GSK stuff is in wierd places, tweak rpath to allow it
	# TODO: consider relocating these somewhere else
	for bin in "$pkgdir"/opt/tivoli/tsm/client/ba/bin/{dsmadmc,dsmagent,dsmc,dsmcad,dsmcert,dsmswitch,dsmtrace,tsmjbbd}; do
		if ! [ -x "$bin" ]; then
			>&2 echo "Error: could not find $bin"
			exit 1
		fi
		echo "Patch rpath of $bin"
		patchelf --set-rpath '/usr/local/ibm/gsk8_64/lib64:/opt/tivoli/tsm/client/api/bin64'  "$bin"
	done
}

package_tsmclient-dkms() {
	arch=('any')
	depends=('dkms')

	cd "$srcdir"/jbb_gpl

	install -d -m 0755 "${pkgdir}"/usr/src/${pkgbase}-${pkgver}
	install -D -m 0644 "${srcdir}"/dkms.conf "${pkgdir}"/usr/src/${pkgbase}-${pkgver}/dkms.conf
	install -m0644 Makefile *.c *.h "${pkgdir}"/usr/src/${pkgbase}-${pkgver}/

	sed \
		-e "s/@PKGBASE@/${pkgbase}/" \
		-e "s/@PKGVER@/${pkgver}/" \
		-i "${pkgdir}"/usr/src/${pkgbase}-${pkgver}/dkms.conf
}
		
