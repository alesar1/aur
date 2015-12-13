# Maintainer: Steven Noonan <steven@uplinklabs.net>

pkgbase=linux-ec2
_srcname=linux-4.3
pkgver=4.3.2
pkgrel=1
arch=('i686' 'x86_64')
url="http://git.uplinklabs.net/snoonan/projects/archlinux/ec2/ec2-packages.git/tree/linux-ec2"
license=('GPL2')
makedepends=('xmlto' 'docbook-xsl' 'kmod' 'inetutils' 'bc')
options=('!strip')
source=("http://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.xz"
        "http://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.sign"
        "http://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.xz"
        "http://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.sign"
        # the main kernel config files
        'config.i686' 'config.x86_64'
        # standard config files for mkinitcpio ramdisk
        'linux.preset'
        'cancel_balloon_v2.patch'

        '0001-mmc-sdhci-get-runtime-pm-when-sdio-irq-is-enabled.patch'
        '0002-PM-QoS-Add-pm_qos_cancel_request_lazy-that-doesn-t-s.patch'
        '0003-mmc-sdhci-Support-maximum-DMA-latency-request-via-PM.patch'
        '0004-mmc-sdhci-acpi-Fix-device-hang-on-Intel-BayTrail.patch'
        '0005-mmc-sdhci-pci-Fix-device-hang-on-Intel-BayTrail.patch'
        )
sha256sums=('4a622cc84b8a3c38d39bc17195b0c064d2b46945dfde0dae18f77b120bc9f3ae'
            'SKIP'
            'a96b8a4e90887dea82066b4d804ac193700c200b6c0075fecba0b691b0240a5e'
            'SKIP'
            'SKIP'
            'SKIP'
            '7460d523b7c5af4d7dcd87236ec708c70511a62cd54c400dc8b770e8c79cbfcb'
            'b242c90f08ea5deb920b0cd7c1066574ee120ce5519b2d512c552fb92ae7e35e'
            'a7b1f3b66616159932576b7ef053f5af27b2c3e1a64345a327a73882beb06fd5'
            '2b3dc57468dfbd68d02a48712cb221f54fbb98da4179800ee9cbb2cabfaea21b'
            'f6c44ffae48124cdd4490b5a2043a7fdbced2ed2f59f3e84d3326faf4b983774'
            '9815062166e5b3b3ecb9b02412c7ce6001128faec806597c249fa5c615eccc0f'
            'd3bb559061549f876a3384e738e2f8bd8e937372c80748c2780dc940912b1000')

validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linux Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
             )

_kernelname=${pkgbase#linux}

prepare() {
  cd "${srcdir}/${_srcname}"

  dots="${pkgver//[^.]}"
  dotcount="${#dots}"

  # add upstream patch
  if [ "$dotcount" -gt 1 ]; then
    patch -Np1 -i "${srcdir}/patch-${pkgver}"
  fi

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git
  patch -Np1 -i "${srcdir}/cancel_balloon_v2.patch"

  # Bay Trail fixes
  patch -Np1 -i "${srcdir}/0001-mmc-sdhci-get-runtime-pm-when-sdio-irq-is-enabled.patch"
  patch -Np1 -i "${srcdir}/0002-PM-QoS-Add-pm_qos_cancel_request_lazy-that-doesn-t-s.patch"
  patch -Np1 -i "${srcdir}/0003-mmc-sdhci-Support-maximum-DMA-latency-request-via-PM.patch"
  patch -Np1 -i "${srcdir}/0004-mmc-sdhci-acpi-Fix-device-hang-on-Intel-BayTrail.patch"
  patch -Np1 -i "${srcdir}/0005-mmc-sdhci-pci-Fix-device-hang-on-Intel-BayTrail.patch"

  cp -L "${srcdir}/config.${CARCH}" .config

  if [ "${_kernelname}" != "" ]; then
    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config
  fi

  # set extraversion to pkgrel
  sed -ri "s|^(EXTRAVERSION =).*|\1 -${pkgrel}|" Makefile

  # don't run depmod on 'make install'. We'll do this ourselves in packaging
  sed -i '2iexit 0' scripts/depmod.sh

  # get kernel version
  make prepare
}

build() {
  cd "${srcdir}/${_srcname}"

  make ${MAKEFLAGS} LOCALVERSION= bzImage modules
}

_buildid() {
  LANG=C readelf -n $1 | sed -n '/Build ID/ { s/.*: //p; q; }'
}

_package() {
  pkgdesc="The ${pkgbase} kernel and modules"
  [ "${pkgbase}" = "linux" ] && groups=('base')
  depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=0.7')
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=("kernel26${_kernelname}=${pkgver}" "linux=${pkgver}")
  conflicts=("kernel26${_kernelname}")
  replaces=("kernel26${_kernelname}")
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  options=('strip' 'debug')
  install=linux.install

  cd "${srcdir}/${_srcname}"

  KARCH=x86

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{lib/modules,lib/firmware,boot}
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}" modules_install
  cp arch/$KARCH/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"

  # install fallback mkinitcpio.conf file and preset file for kernel
  install -D -m644 "${srcdir}/linux.preset" "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # set correct depmod command for install
  cp -f "${startdir}/${install}" "${startdir}/${install}.pkg"
  true && install=${install}.pkg
  sed \
    -e  "s/KERNEL_NAME=.*/KERNEL_NAME=${_kernelname}/" \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/" \
    -i "${startdir}/${install}"

  sed \
    -e "1s|'linux.*'|'${pkgbase}'|" \
    -e "s|ALL_kver=.*|ALL_kver=\"/boot/vmlinuz-${pkgbase}\"|" \
    -e "s|default_image=.*|default_image=\"/boot/initramfs-${pkgbase}.img\"|" \
    -e "s|fallback_image=.*|fallback_image=\"/boot/initramfs-${pkgbase}-fallback.img\"|" \
    -i "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # remove build and source links
  rm -f "${pkgdir}"/lib/modules/${_kernver}/{source,build}

  # remove the firmware
  rm -rf "${pkgdir}/lib/firmware"

  # make room for external modules
  ln -s "../extramodules-${_basekernel}${_kernelname:--ARCH}" "${pkgdir}/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from post_install/upgrade
  mkdir -p "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname:--ARCH}"
  echo "${_kernver}" > "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname:--ARCH}/version"

  # Now we call depmod...
  depmod -b "${pkgdir}" -F System.map "${_kernver}"

  # move module tree /lib -> /usr/lib
  install -dm755 "$pkgdir/usr"
  mv "$pkgdir/lib" "$pkgdir/usr"

  # Install vmlinux in -debug
  debugpkg="${pkgdir}/../${pkgbase}-debug"
  VMLINUX_BID=$(_buildid vmlinux)

  echo $VMLINUX_BID > vmlinux.id
  install -D -m644 vmlinux.id \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/vmlinux.id"

  install -dm755 "${debugpkg}/usr/lib/debug/.build-id/${VMLINUX_BID:0:2}"
  ln -s "../../usr/lib/modules/${_kernver}/build/vmlinux" \
    "${debugpkg}/usr/lib/debug/.build-id/${VMLINUX_BID:0:2}/${VMLINUX_BID:2}"

  install -D -m755 vmlinux \
    "${debugpkg}/usr/lib/debug/usr/lib/modules/${_kernver}/build/vmlinux"

  ln -s build/vmlinux "${debugpkg}/usr/lib/debug/usr/lib/modules/${_kernver}/vmlinux"

  # Some tools expect modules to be in /lib/modules, and thus the debug
  # information in /usr/lib/debug/lib/modules.
  install -dm755 "${debugpkg}/usr/lib/debug/lib/modules"
  ln -s ../../usr/lib/modules/${_kernver} "${debugpkg}/usr/lib/debug/lib/modules/${_kernver}"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase} kernel"
  install=linux-headers.install
  provides=("kernel26${_kernelname}-headers=${pkgver}" "linux-headers=${pkgver}")
  conflicts=("kernel26${_kernelname}-headers")
  replaces=("kernel26${_kernelname}-headers")
  options=('!strip')

  cp -f "${startdir}/${install}" "${startdir}/${install}.pkg"
  true && install=${install}.pkg
  sed \
    -e  "s/KERNEL_NAME=.*/KERNEL_NAME=${_kernelname}/" \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/" \
    -i "${startdir}/${install}"

  install -dm755 "${pkgdir}/usr/lib/modules/${_kernver}"

  cd "${srcdir}/${_srcname}"
  install -D -m644 System.map \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/System.map"
  install -D -m644 Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/Makefile"
  install -D -m644 kernel/Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/kernel/Makefile"
  install -D -m644 .config \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/.config"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include"

  for i in acpi asm-generic config crypto drm generated keys linux math-emu \
    media net pcmcia scsi sound trace uapi video xen; do
    cp -a include/${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/include/"
  done

  # copy arch includes for external modules
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/x86"
  cp -a arch/x86/include "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/x86/"

  # copy files necessary for later builds, like nvidia and vmware
  cp Module.symvers "${pkgdir}/usr/lib/modules/${_kernver}/build"
  cp -a scripts "${pkgdir}/usr/lib/modules/${_kernver}/build"

  # fix permissions on scripts dir
  chmod og-w -R "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/.tmp_versions"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel"

  cp arch/${KARCH}/Makefile "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"

  if [ "${CARCH}" = "i686" ]; then
    cp arch/${KARCH}/Makefile_32.cpu "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"
  fi

  cp arch/${KARCH}/kernel/asm-offsets.s "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel/"

  # add docbook makefile
  install -D -m644 Documentation/DocBook/Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/DocBook/Makefile"

  # add dm headers
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"
  cp drivers/md/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"

  # add inotify.h
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux"
  cp include/linux/inotify.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux/"

  # add wireless headers
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"
  cp net/mac80211/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"

  # add xfs and shmem for aufs building
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/fs/xfs"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/mm"

  # copy in Kconfig files
  for i in $(find . -name "Kconfig*"); do
    mkdir -p "${pkgdir}"/usr/lib/modules/${_kernver}/build/`echo ${i} | sed 's|/Kconfig.*||'`
    cp ${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/${i}"
  done

  chown -R root.root "${pkgdir}/usr/lib/modules/${_kernver}/build"
  find "${pkgdir}/usr/lib/modules/${_kernver}/build" -type d -exec chmod 755 {} \;

  # strip scripts directory
  find "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts" -type f -perm -u+w 2>/dev/null | while read binary ; do
    case "$(file -bi "${binary}")" in
      *application/x-sharedlib*) # Libraries (.so)
        /usr/bin/strip ${STRIP_SHARED} "${binary}";;
      *application/x-archive*) # Libraries (.a)
        /usr/bin/strip ${STRIP_STATIC} "${binary}";;
      *application/x-executable*) # Binaries
        /usr/bin/strip ${STRIP_BINARIES} "${binary}";;
    esac
  done

  # remove unneeded architectures
  rm -rf "${pkgdir}"/usr/lib/modules/${_kernver}/build/arch/{alpha,arc,arm,arm26,arm64,avr32,blackfin,c6x,cris,frv,h8300,hexagon,ia64,m32r,m68k,m68knommu,metag,mips,microblaze,mn10300,openrisc,parisc,powerpc,ppc,s390,score,sh,sh64,sparc,sparc64,tile,unicore32,um,v850,xtensa}
}

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase} kernel"
  provides=("kernel26${_kernelname}-docs=${pkgver}" "linux-docs=${pkgver}")
  conflicts=("kernel26${_kernelname}-docs")
  replaces=("kernel26${_kernelname}-docs")

  cd "${srcdir}/${_srcname}"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build"
  cp -al Documentation "${pkgdir}/usr/lib/modules/${_kernver}/build"
  find "${pkgdir}" -type f -exec chmod 444 {} \;
  find "${pkgdir}" -type d -exec chmod 755 {} \;

  # remove a file already in linux package
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/DocBook/Makefile"
}

# AUR hack
pkgname=linux-ec2
pkgdesc="Linux kernel for Amazon EC2"

true && pkgname=("${pkgbase}" "${pkgbase}-headers" "${pkgbase}-docs")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    _package${_p#${pkgbase}}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:
