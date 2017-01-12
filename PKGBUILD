# Maintainer:  Janne Heß <jannehess@gmail.com>
# Contributor: Arthur Borsboom <arthurborsboom@gmail.com>
# Contributor: Shanmu Thiagaraja <sthiagaraja+AUR@prshanmu.com>
# Contributor: Limao Luo
# Contributor: Luceo
# Contributor: Revellion
# Contributor: John Thomson

# linux-4.7 EFI boot panic issue (patch linux)
#http://lkml.iu.edu/hypermail/linux/kernel/1608.2/03448.html

#####
# Settings
#####

_build_stubdom=${build_stubdom:-false}
# use _build_stubdom=true to build xen with stubdom

#####
# Versions
#####

_xen_version='4.8.0'
_xen_major_version='4'
# grep -R 'UPSTREAM_REVISION' src/xen-*/Config.mk
_git_tag_seabios='#tag=rel-1.10.0'
_git_tag_ovmf='#tag=bc54e50e0fe03c570014f363b547426913e92449'
# grep IPXE_GIT_TAG src/xen-*/tools/firmware/etherboot
_git_tag_ipxe='827dd1bfee67daa683935ce65316f7e0f057fe1c'
# grep '_VERSION=' src/xen-*/stubdom/configure
if [ "${_build_stubdom}" = true ]; then
	_zlib_version='1.2.3'
	_libpci_version='2.2.9'
	_newlib_version='1.16.0'
	_lwip_version='1.3.0'
	_grub_version='0.97'
	_ocaml_version='3.11.0'
	_ocaml_short_version='3.11'
	_gmp_version='4.3.2'
	_polarssl_version='1.1.4'
	_tpmemu_version='0.7.4'
fi

#####
# Package metadata
#####

pkgname=xen
pkgver="${_xen_version}"
pkgrel=1
pkgdesc='Virtual Machine Hypervisor & Tools'
url='http://www.xenproject.org/'
license=('GPL2')
install="${pkgname}.install"
changelog='ChangeLog'
validpgpkeys=('23E3222C145F4475FA8060A783FE14C957E82BD9') # Xen.org Xen tree code signing
arch=('x86_64') # TODO What about ARM?
conflicts=(xen-4.2{,-testing-hg} xen-{gdbsx,hg-unstable,rc,git,igvtg} xen-4.3{,-testing-hg} xen-4.{4..8})
provides=("xen-${pkgver}")
options=(!buildflags !strip)
# Dependencies
depends=(
	bridge-utils
	curl
	gnutls
	iproute2
	lib32-glibc
	libaio
	libcap-ng
	libiscsi
	libnl
	libpng
	lzo2
	pciutils
	python2
	sdl
	spice
	usbredir
	yajl
	# TODO why not use system's seabios, ovmf, qemu
)
makedepends=(
	bin86
	cmake
	dev86
	figlet
	git
	iasl
	markdown
	nasm
	ocaml-findlib
	spice-protocol
	wget
)

# For building Xen EFI boot file.
# mingw-w64-binutils only needed if
# binutils not built with --enable-targets=x86_64-pep
_binutils_efi=false
if [ "$(ld -V)" = *'i386pep'* ]; then
	_binutils_efi=true
else
	makedepends+=(mingw-w64-binutils)
fi

optdepends=(
	'xen-docs: Official Xen Documentation'
	'openvswitch: Optional Networking support'
)
backup=(
	etc/conf.d/xen{commons,domains}
	"etc/${pkgname}/efi-xen.cfg"
	"etc/${pkgname}/cpupool"
	"etc/${pkgname}/grub.conf"
	"etc/${pkgname}/oxenstored.conf"
	"etc/${pkgname}/xl.conf"
)


# Sources
source=(
	"http://bits.xensource.com/oss-xen/release/${pkgver}/${pkgname}-${pkgver}.tar.gz"
	"http://bits.xensource.com/oss-xen/release/${pkgver}/${pkgname}-${pkgver}.tar.gz.sig"
	"http://xenbits.xen.org/xen-extfiles/ipxe-git-${_git_tag_ipxe}.tar.gz"

	'seabios'::"git://xenbits.xen.org/seabios.git${_git_tag_seabios}"
	'ovmf'::"git://xenbits.xen.org/ovmf.git${_git_tag_ovmf}"
	# HTTP access
	#'seabios'::"git+http://xenbits.xen.org/git-http/seabios.git${_git_tag_seabios}"

	# Compile patches
	ovmf.patch
	patch-gcc6-ovmf-build.sh.patch

	# XSA patches
	'https://xenbits.xen.org/xsa/xsa203-4.8.patch'
	'https://xenbits.xen.org/xsa/xsa204-4.8.patch'

	# Files
	'grub-mkconfig-helper'
	'efi-xen.cfg'
	'grub.conf'
	"${pkgname}.conf"
	'tmpfiles.conf'
)

if [ "${_build_stubdom}" = true ] ; then
	source+=(
		"http://xenbits.xen.org/xen-extfiles/zlib-${_zlib_version}.tar.gz"
		"http://xenbits.xen.org/xen-extfiles/pciutils-${_libpci_version}.tar.bz2"
		"http://xenbits.xen.org/xen-extfiles/newlib-${_newlib_version}.tar.gz"
		"http://xenbits.xen.org/xen-extfiles/lwip-${_lwip_version}.tar.gz"
		"http://xenbits.xen.org/xen-extfiles/grub-${_grub_version}.tar.gz"
		"http://caml.inria.fr/pub/distrib/ocaml-${_ocaml_short_version}/ocaml-${_ocaml_version}.tar.gz"
		"http://xenbits.xen.org/xen-extfiles/gmp-${_gmp_version}.tar.bz2"
		"http://xenbits.xen.org/xen-extfiles/polarssl-${_polarssl_version}-gpl.tgz"
		"http://xenbits.xen.org/xen-extfiles/tpm_emulator-${_tpmemu_version}.tar.gz"
	)
fi

sha256sums=(
	'1e15c713ab7ba3bfda8b4a285ed973529364fd1100e6dd5a61f29583dc667b04'
	'SKIP'
	'36deacb946c59ad1d6600f6e5b89d6a7a8961e65eb000900e184075920120f49'

	'SKIP'
	'SKIP'

	'9cf9232c6e9a2b972cd4e1c7aacac9152bb8676db2b794381e1964c9f452e7de'
	'6403a0478e3cfed91dcad53b5f02e71745c98d18ab53930f87aeff1da8d71d55'
	# XSA patches
	'4218fcfff11ec4788462a3ea9dddecb25b9d9fb1beaad17ca0f723b07b6675e4'
	'fa2a69682868104b6263655abbfc6b326f76deebdac3273b4b65da6673f5d977'
	# PKGBUILD files
	'06c9f6140f7ef4ccfc4b1a7d9732a673313e269733180f53afcd9e43bf6c26bb'
	'ceaff798a92a7aef1465a0a0b27b1817aedd2c857332b456aaa6dd78dc72438f'
	'3f0af16958c3e057b9baa5afc47050d9adf7dd553274dd97ae4f35938fefb568'
	'50a9b7fd19e8beb1dea09755f07318f36be0b7ec53d3c9e74f3266a63e682c0c'
	'40e0760810a49f925f2ae9f986940b40eba477dc6d3e83a78baaae096513b3cf'
)


if [ "$_build_stubdom" = true ] ; then
	sha256sums+=(
		'1795c7d067a43174113fdf03447532f373e1c6c57c08d61d9e4e9be5e244b05e'
		'f60ae61cfbd5da1d849d0beaa21f593c38dac9359f0b3ddc612f447408265b24'
		'db426394965c48c1d29023e1cc6d965ea6b9a9035d8a849be2750ca4659a3d07'
		'772e4d550e07826665ed0528c071dd5404ef7dbe1825a38c8adbc2a00bca948f'
		'4e1d15d12dbd3e9208111d6b806ad5a9857ca8850c47877d36575b904559260b'
		'ecdd4f8473ab0dee5d3acb5c0a31a4c1dd6aa12179895cf1903dd0f455c43a4f'
		'936162c0312886c21581002b79932829aa048cfaf9937c6265aeaa14f1cd1775'
		'2d29fd04a0d0ba29dae6bd29fb418944c08d3916665dcca74afb297ef37584b6'
		'4e48ea0d83dd9441cc1af04ab18cd6c961b9fa54d5cbf2c2feee038988dea459'
	)
fi

noextract=(
	"ipxe-git-${_git_tag_ipxe}.tar.gz"
)

if [ "$_build_stubdom" = true ] ; then
	noextract+=(
		"zlib-${_zlib_version}.tar.gz"
		"pciutils-${_libci_version}.tar.bz2"
		"newlib-${_newlib_version}.tar.gz"
		"lwip-${_lwip_version}.tar.gz"
		"grub-${_grub_version}.tar.gz"
		"ocaml-${_ocaml_version}.tar.gz"
		"gmp-${_gmp_version}.tar.bz2"
		"polarssl-${_polarssl_version}-gpl.tgz"
		"tpm_emulator-${_tpmemu_version}.tar.gz"
	)
fi

prepare() {
	cd "${pkgname}-${pkgver}/"

	msg2 'Copying downloaded files...'
	mkdir -p tools/firmware/{seabios,ovmf}-dir-remote/ tools/firmware/etherboot
	cp -r ../seabios/* tools/firmware/seabios-dir-remote/
	cp -r ../ovmf/* tools/firmware/ovmf-dir-remote/
	cp "${srcdir}/ipxe-git-${_git_tag_ipxe}.tar.gz" tools/firmware/etherboot/ipxe.tar.gz

	# XSA Patches
	msg2 'Applying XSA Patches...'
	patch -Np1 -i "${srcdir}/xsa203-4.8.patch"
	patch -Np1 -i "${srcdir}/xsa204-4.8.patch"

	# Patch EFI binary build with mingw
	if [ "${_binutils_efi}" != true ]; then
		msg2 'Patching EFI build...'
		sed -i.bak '/ EFI_LD/s/LD/LD_EFI/' xen/arch/x86/Makefile
		sed -i.bak 's/LD/LD_EFI/' xen/arch/x86/efi/Makefile
		sed -i.bak '/EFI_MOUNTPOINT .*/aLD_EFI ?= $(LD)' xen/Makefile
	fi

	# OVMF Compile support (Pulls from git repo, so patching to patch after pull request)
	msg2 'Patching OVMF Python version...'
	patch -Np1 -i "${srcdir}/ovmf.patch"
	cp "${srcdir}/patch-gcc6-ovmf-build.sh.patch" tools/firmware/

	# Fix Install Paths
	msg2 'Fixing installation paths...'
	sed -i 's:\$localstatedir/run/xen:/run/xen:' m4/paths.m4
	sed -i 's:/var/run:/run:' tools/ocaml/xenstored/define.ml
	sed -i 's:/var/run:/run:' tools/ocaml/xenstored/systemd_stubs.c

	if [ "${_build_stubdom}" = true ] ; then
		msg2 'Copying stubdom files...'
		# Copy supporting tarballs into place
		cp "${srcdir}/zlib-${_zlib_version}.tar.gz" stubdom/
		cp "${srcdir}/pciutils-${_libpci_version}.tar.bz2" stubdom/
		cp "${srcdir}/newlib-${_newlib_version}.tar.gz" stubdom/
		cp "${srcdir}/lwip-${_lwip_version}.tar.gz" stubdom/
		cp "${srcdir}/grub-${_grub_version}.tar.gz" stubdom/
		cp "${srcdir}/ocaml-${_ocaml_version}.tar.gz" stubdom/
		cp "${srcdir}/gmp-${_gmp_version}.tar.bz2" stubdom/
		cp "${srcdir}/polarssl-${_polarssl_version}-gpl.tgz" stubdom/
		cp "${srcdir}/tpm_emulator-${_tpmemu_version}.tar.gz" stubdom/
	fi

	# Workaround for cannot compute sizeof (unsigned short) 
	# Makefile:170: recipe for target 'gmp-x86_64' failed
	# Probably not safe!
	#sed -i.bak "/< gmp.patch/a\	sed -i.bak 's/\\\\(\\\\s*\\\\)\\\\(fprintf (f,\\\\)\\\\(.*\\\\)/\\\\1\\\\2\\\\3\\\\n\\\\1clearerr(f);/' \$@/configure" stubdom/Makefile
}

build() {
	cd "${pkgname}-${pkgver}/"
	export LD_EFI='/usr/x86_64-w64-mingw32/bin/ld'
	if [ "${_build_stubdom}" = true ] ; then
		local _config_stubdom='--enable-stubdom'
	fi

	msg2 'Configuring...'
	./autogen.sh
	./configure \
		PYTHON=/usr/bin/python2 \
		--prefix=/usr \
		--sbindir=/usr/bin \
		--with-sysconfig-leaf-dir=conf.d \
		--with-initddir=/etc/init.d \
		--enable-systemd \
		--disable-docs \
		--enable-ovmf \
		"${_config_stubdom:---disable-stubdom}" \
		--with-extra-qemuu-configure-args="--disable-bluez --disable-gtk --enable-spice --enable-usb-redir"
		#--with-system-qemu --with-system-seabios --with-system-ovmf 
		#defaults --enable-qemu-traditional --enable-rombios \

	msg2 'Building Xen (1/3)...'
	make LANG=C PYTHON=python2 dist-misc
	msg2 'Building Xen (2/3)...'
	make LANG=C PYTHON=python2 dist-xen
	msg2 'Building Xen (3/3)...'
	make LANG=C PYTHON=python2 dist-tools
	if [ "$_build_stubdom" = true ] ; then
		msg2 'Building Stubdom...'
		make LANG=C PYTHON=python2 dist-stubdom
	fi
}

package() {
	cd "${pkgname}-${pkgver}/"

	msg2 'Installing Xen...'
	make DESTDIR="${pkgdir}" LANG=C PYTHON=python2 install

	cd "${pkgdir}"

	# Install files for Arch
	msg2 'Installing Arch-specific files...'
	install -Dm644 "${srcdir}/tmpfiles.conf" "usr/lib/tmpfiles.d/${pkgname}.conf"
	install -Dm644 "${srcdir}/grub.conf" etc/xen/grub.conf
	install -Dm755 "${srcdir}/grub-mkconfig-helper" etc/grub.d/09_xen
	install -Dm644 "${srcdir}/efi-xen.cfg" etc/xen/efi-xen.cfg

	# Fix paths in scripts, move to right locations and create missing directories
	msg2 'Fixing paths...'
	sed -i 's:/var/run:/run:' usr/lib/xen/bin/xenpvnetboot
	sed -i 's:/var/run:/run:' usr/lib/xen/bin/pygrub
	sed -i 's:/var/run:/run:' usr/bin/xenmon.py

	mkdir -p var/log/xen/console

	# Sanitize library path (if lib64 exists)
	if [ -d usr/lib64 ]; then
		msg2 'Sanatizing library paths...'
		cd usr/
		mv lib64/* lib/
		rmdir lib64
		cd ../
	fi

	# If EFI binaries build, move to /boot
	if [ -f usr/lib/efi/xen.efi ]; then
		msg2 'Moving efi binary...'
		mv usr/lib/efi/xen*.efi "boot/"
		rm -rf usr/lib/efi
	fi

	# Clean up
	msg2 'Cleaning up...'

	# Hypervisor symlinks
	rm -f boot/xen{,-${_xen_major_version},-${_xen_version}{,-rc}}.gz

	# Documentation cleanup ( see xen-docs package )
	rm -rf usr/share/doc
	rm -rf usr/share/man

	# sysvinit scripts
	rm -rf etc/init.d

	# Unnecessary qemu support files
	rm usr/share/qemu-xen/qemu/{palcode,openbios}-*
	rm usr/share/xen/qemu/openbios-*

	# adhere to Static Library Packaging Guidelines
	rm -f usr/lib/*.a
}
