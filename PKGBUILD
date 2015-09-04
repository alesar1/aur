# Maintainer: Christian Hesse <mail@eworm.de>

pkgbase=vmware-horizon-client
pkgname=('vmware-horizon-client' 'vmware-horizon-pcoip' 'vmware-horizon-rtav' 'vmware-horizon-smartcard' 'vmware-horizon-usb' 'vmware-horizon-virtual-printing')
pkgver=3.5.0
_build=2999900
_cart='CART15Q3'
pkgrel=1
pkgdesc='VMware Horizon Client connect to VMware Horizon virtual desktop'
arch=('i686' 'x86_64')
url='https://my.vmware.com/web/vmware/info/slug/desktop_end_user_computing/vmware_horizon_clients/3_0'
license=('custom')
makedepends=('libxslt')
source=('http://sources.gentoo.org/cgi-bin/viewvc.cgi/gentoo-x86/eclass/vmware-bundle.eclass'
	'vmware-horizon-client.desktop'
	'vmware-horizon-usb'
	'vmware-horizon-usb.service'
	'vmware-horizon-usb-tmpfiles.conf'
	'vmware-horizon-virtual-printing.service')
source_x86_64=("https://download3.vmware.com/software/view/viewclients/${_cart}/VMware-Horizon-Client-${pkgver}-${_build}.x64.bundle")
source_i686=("https://download3.vmware.com/software/view/viewclients/${_cart}/VMware-Horizon-Client-${pkgver}-${_build}.x86.bundle")
sha256sums=('d8794c22229afdeb698dae5908b7b2b3880e075b19be38e0b296bb28f4555163'
            '21927f16cfb92ac07777297787106982b301b5d42ca068e052a01dc3f2cbb208'
            '7c78953823f7307814104881b322dcf66c36ca02e44e559239ac51abcf1e7a37'
            '5e737d69e49ea7e039bc94f358b45c8e6d9071b7c041a53800555d3dc21c8dac'
            'ec763930dd50d6e77a31c40c939909752cfb124cafb0a4ca4f76860375a14d75'
            'e47e770a1e19ed321de7c2765b2d682f59ac466aef92b2e4ea5e65cacf56de36')
sha256sums_x86_64=('7088096fb001695784f65606b145522f37bae7630b7b77bb7ee1a8a0b5eff120')
sha256sums_i686=('9a92d844305a6a38f9fa09df170e9780112211e4d43f0a8bca30595f61fa8caf')

# We need these functions for the Gentoo eclass...
ebegin() {
	echo -n "Begin ${1}: "
}
eend() {
	echo 'done'
}

prepare() {
	# We need this variable for the Gentoo eclass...
	export T="${srcdir}"

	source "${srcdir}/vmware-bundle.eclass"

	case "${CARCH}" in
		x86_64)
			bundlefile="$(basename "${source_x86_64[0]}")"
			;;
		i686)
			bundlefile="$(basename "${source_i686[0]}")"
			;;
	esac

	for bundle in ${pkgname[@]}; do
	        vmware-bundle_extract-bundle-component "${srcdir}/${bundlefile}" "${bundle}" "${srcdir}/extract/${bundle}"
	done

	# This is a dirty hack, but it works.
	# Change dynamic section in ELF files to fix dynamic linking.
	# Make sure the length is not changed!
	#	libudev.so.0 -> libudev.so.1
	#	libssl.so.1.0.1 -> libssl.so.1.0.0
	#	libcrypto.so.1.0.1 -> libcrypto.so.1.0.0
	for FILE in $(find "${srcdir}/extract/" -type f); do
		# executables and libraries only
		file --mime "${FILE}" | egrep -q "(application/x-(executable|sharedlib)|text/x-shellscript)" || continue

		# make executable
		chmod +x "${FILE}"

		# link against libudev.so.1
		sed -i -e 's/libudev.so.0/libudev.so.1/' "${FILE}"

		# even openssl 1.0.1.x has library file names ending in .so.1.0.0
		sed -i -e 's/libssl.so.1.0.1/libssl.so.1.0.0/' \
			-e 's/libcrypto.so.1.0.1/libcrypto.so.1.0.0/' \
			"${FILE}"
	done

	# now that we fixed dynamic linking let's remove binary libs
	# we create symlinks in package() function
	rm -f "${srcdir}"/extract/vmware-horizon-pcoip/pcoip/lib/vmware/lib{crypto,ssl}.so.1.0.1
}

package_vmware-horizon-client() {
	conflicts=('vmware-view-open-client' 'vmware-view-open-client-beta' 'vmware-view-client')
	depends=('gnome-icon-theme' 'openssl' 'libpng12' 'gtk2' 'libxml2' 'libxss')
	optdepends=('freerdp: RDP remote desktop connections'
		'rdesktop: RDP remote desktop connections'
		'vmware-horizon-pcoip: PCoIP remote desktop connections'
		'vmware-horizon-rtav: Real-Time Audio-Video'
		'vmware-horizon-smartcard: Authenticate via Samrtcard'
		'vmware-horizon-usb: Redirect USB devices'
		'vmware-horizon-virtual-printing: Redirect local printers')
	install=vmware-horizon-client.install

	cd "${srcdir}/extract/vmware-horizon-client/"

	mkdir -p "${pkgdir}/usr/"
	cp -a bin/ "${pkgdir}/usr/"
	cp -a lib/ "${pkgdir}/usr/"
	cp -a share/ "${pkgdir}/usr/"

	mkdir -p "${pkgdir}/usr/share/doc/"
	cp -a doc/ "${pkgdir}/usr/share/doc/vmware-horizon-client"
	cp -a debug/ "${pkgdir}/usr/share/doc/vmware-horizon-client/"

	install -D -m0644 "${srcdir}/vmware-horizon-client.desktop" "${pkgdir}/usr/share/applications/vmware-horizon-client.desktop"
}

package_vmware-horizon-pcoip() {
	pkgdesc='VMware Horizon Client connect to VMware Horizon virtual desktop - PCoIP connection'
	depends=('vmware-horizon-client' 'libxtst')
	optdepends=('alsa-lib: audio support via alsa'
		'libpulse: audio support via pulse sound server')

	cd "${srcdir}/extract/vmware-horizon-pcoip/"

	mkdir -p "${pkgdir}/usr/"
	cp -a pcoip/lib/ "${pkgdir}/usr/lib"
	cp -a pcoip/bin/ "${pkgdir}/usr/bin"

	ln -sf ../../lib/libcrypto.so.1.0.0 "${pkgdir}/usr/lib/vmware/libcrypto.so.1.0.0"
	ln -sf ../../lib/libssl.so.1.0.0 "${pkgdir}/usr/lib/vmware/libssl.so.1.0.0"
}

package_vmware-horizon-rtav() {
	pkgdesc='VMware Horizon Client connect to VMware Horizon virtual desktop - real-time audio-video (webcam and audio-in)'
	depends=('vmware-horizon-client')
	cd "${srcdir}/extract/vmware-horizon-rtav/"

	mkdir -p "${pkgdir}/usr/"
	cp -a lib/ "${pkgdir}/usr/lib"
}

package_vmware-horizon-smartcard() {
	pkgdesc='VMware Horizon Client connect to VMware Horizon virtual desktop - smartcard authentication'
	depends=('vmware-horizon-client' 'pcsclite')

	cd "${srcdir}/extract/vmware-horizon-smartcard/"

	mkdir -p "${pkgdir}/usr/"
	cp -a lib/ "${pkgdir}/usr/lib"
}

package_vmware-horizon-usb() {
	pkgdesc='VMware Horizon Client connect to VMware Horizon virtual desktop - USB redirection'
	depends=('vmware-horizon-client')
	install=vmware-horizon-usb.install

	cd "${srcdir}/extract/vmware-horizon-usb/"

	mkdir -p "${pkgdir}/usr/lib/vmware/view/"
	cp -a bin/ "${pkgdir}/usr/lib/vmware/view/usb"

	install -D -m0755 "${srcdir}/vmware-horizon-usb" "${pkgdir}/usr/lib/systemd/scripts/vmware-horizon-usb"
	install -D -m0644 "${srcdir}/vmware-horizon-usb.service" "${pkgdir}/usr/lib/systemd/system/vmware-horizon-usb.service"
	install -D -m0644 "${srcdir}/vmware-horizon-usb-tmpfiles.conf" "${pkgdir}/usr/lib/tmpfiles.d/vmware-horizon-usb.conf"
}

package_vmware-horizon-virtual-printing() {
	pkgdesc='VMware Horizon Client connect to VMware Horizon virtual desktop - virtual printing'
	depends=('vmware-horizon-client' 'openssl098' 'libcups')
	install=vmware-horizon-virtual-printing.install

	cd "${srcdir}/extract/vmware-horizon-virtual-printing/"

	mkdir -p "${pkgdir}/usr/bin/"

	case ${CARCH} in
		x86_64)
			cp -a bin/x86_64-linux-NOSSL/thnu* "${pkgdir}/usr/bin/"
			install -D -m0755 bin/x86_64-linux-NOSSL/.thnumod "${pkgdir}/etc/thnuclnt/.thnumod"
			;;
		i686)
			cp -a bin/i586-linux-NOSSL/thnu* "${pkgdir}/usr/bin/"
			install -D -m0755 bin/i586-linux-NOSSL/.thnumod "${pkgdir}/etc/thnuclnt/.thnumod"
			;;
	esac

	install -D -m0755 lib/tprdp.so "${pkgdir}/usr/lib/vmware/rdpvcbridge/tprdp.so"

	install -D -m0644 bin/conf/thnuclnt.convs "${pkgdir}/usr/share/cups/mime/thnuclnt.convs"
	install -D -m0644 bin/conf/thnuclnt.types "${pkgdir}/usr/share/cups/mime/thnuclnt.types"

	install -D -m0644 "${srcdir}/vmware-horizon-virtual-printing.service" "${pkgdir}/usr/lib/systemd/system/vmware-horizon-virtual-printing.service"
}

