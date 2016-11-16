# Maintainer: André Silva <emulatorman@parabola.nu>
# Contributor: Nicolás Reynolds <fauno@kiwwwi.com.ar>
# Contributor: Sorin-Mihai Vârgolici <smv@yobicore.org>
# Contributor: Michał Masłowski <mtjm@mtjm.eu>
# Contributor: Márcio Silva <coadde@parabola.nu>
# Contributor: Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor: Luke R. <g4jc@openmailbox.org>

# Based on linux-grsec package

pkgbase=linux-libre-grsec-xen
_pkgbasever=4.8-gnu
_pkgver=4.8.8-gnu
_grsecver=3.1
_timestamp=201611150756

_replacesarchkernel=('linux%') # '%' gets replaced with _kernelname
_replacesoldkernels=() # '%' gets replaced with _kernelname
_replacesoldmodules=() # '%' gets replaced with _kernelname

_srcname=linux-${_pkgbasever%-*}
_archpkgver=${_pkgver%-*}.${_timestamp}
epoch=1
pkgver=${_pkgver//-/_}.r${_timestamp}
pkgrel=1
rcnrel=armv7-x4
arch=('i686' 'x86_64' 'armv7h')
url="https://grsecurity.net/"
license=('GPL2')
makedepends=('xmlto' 'docbook-xsl' 'kmod' 'inetutils' 'bc' 'libelf')
makedepends_armv7h=('git')
options=('!strip')
source=("http://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgbasever}/linux-libre-${_pkgbasever}.tar.xz"
        "http://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgbasever}/linux-libre-${_pkgbasever}.tar.xz.sign"
        "http://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgver}/patch-${_pkgbasever}-${_pkgver}.xz"
        "http://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgver}/patch-${_pkgbasever}-${_pkgver}.xz.sign"
        "https://repo.parabola.nu/other/grsecurity-libre/test/grsecurity-libre-${_grsecver}-${_pkgver%-*}-${_timestamp}.patch"
        "https://repo.parabola.nu/other/grsecurity-libre/test/grsecurity-libre-${_grsecver}-${_pkgver%-*}-${_timestamp}.patch.sig"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_clut224.ppm"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_clut224.ppm.sig"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_mono.pbm"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_mono.pbm.sig"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_vga16.ppm"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_vga16.ppm.sig"
        # the main kernel config files
        'config.i686' 'config.x86_64' 'config.armv7h'
        # standard config files for mkinitcpio ramdisk
        'linux.preset'
        'change-default-console-loglevel.patch'
        '0001-usb-serial-gadget-no-TTY-hangup-on-USB-disconnect-WI.patch'
        '0002-fix-Atmel-maXTouch-touchscreen-support.patch'
        # armv7h patches
        "https://repo.parabola.nu/other/rcn-libre-grsec/patches/${_pkgver%-*}/rcn-libre-grsec-${_pkgver%-*}-${rcnrel}.patch"
        "https://repo.parabola.nu/other/rcn-libre-grsec/patches/${_pkgver%-*}/rcn-libre-grsec-${_pkgver%-*}-${rcnrel}.patch.sig"
        '0001-ARM-disable-implicit-function-declaration-error.patch'
        '0002-ARM-fix-redefinition-error-of-atomic64_xchg_unchecked_relaxed.patch'
        '0001-ARM-atags-add-support-for-Marvell-s-u-boot.patch'
        '0002-ARM-atags-fdt-retrieve-MAC-addresses-from-Marvell-bo.patch'
        '0003-SMILE-Plug-device-tree-file.patch'
        '0004-fix-mvsdio-eMMC-timing.patch'
        '0005-net-smsc95xx-Allow-mac-address-to-be-set-as-a-parame.patch'
        '0006-ARM-TLV320AIC23-SoC-Audio-Codec-Fix-errors-reported-.patch'
        '0007-set-default-cubietruck-led-triggers.patch'
        '0008-USB-armory-support.patch'
        '0009-ARM-dts-imx6ul-pico-hobbit-Add-Wifi-support.patch'
        '0010-exynos4412-odroid-set-higher-minimum-buck2-regulator.patch'
        '0011-usb-musb-Call-pm_runtime-from-musb_gadget_queue.patch'
        '0012-phy-twl4030-usb-better-handle-musb_mailbox-failure.patch'
        '0013-Revert-gpu-drm-omapdrm-dss-of-add-missing-of_node_pu.patch')
sha256sums=('d54e0f8a27e24f3666c19b395c19dba194635db26929c89e78ffa4b2b0e8ca3a'
            'SKIP'
            'e181d8175cbcda285b9c8864887907a89405517f00c12b0367c9717e2804a6a0'
            'SKIP'
            '1c92d99b389efb854c841dc52f0fbe5e6c07ee90d2a645d7207eaf42e501858a'
            'SKIP'
            'bfd4a7f61febe63c880534dcb7c31c5b932dde6acf991810b41a939a93535494'
            'SKIP'
            '13bd7a8d9ed6b6bc971e4cd162262c5a20448a83796af39ce394d827b0e5de74'
            'SKIP'
            '6de8a8319271809ffdb072b68d53d155eef12438e6d04ff06a5a4db82c34fa8a'
            'SKIP'
            'f3eab4b8522494815337717af286b3ac9b869031c1141df88c79141998f3a185'
            '00d7f50599804e0a20397a3cef2a00f99dc1ed9772aef7aa734e181b5396114e'
            '6846bca8abf98d653b2af1afb5297a4125580a9c632f925703350ed11fd25fd2'
            'f0d90e756f14533ee67afda280500511a62465b4f76adcc5effa95a40045179c'
            '1256b241cd477b265a3c2d64bdc19ffe3c9bbcee82ea3994c590c2c76e767d99'
            '0376bd5efa31d4e2a9d52558777cebd9f0941df8e1adab916c868bf0c05f2fc3'
            '351fd96be8cd5ebd0435c0a8a978673fc023e3b1026085e67f86d815b2285e25'
            '8c0efb7f602dd445b9c31357f0b27730a47ab3a496aea8ff0465ab8c3caa3ca2'
            'SKIP'
            '1fc7055041da895d5d023fcf0c5e06d00a3506ae98931138229dba7392e2c382'
            '34c74396b40f1a22a94c1e49e6ae1aaed2fb55f28225dfa9de2cb6f9f4607d21'
            '858eac5f4aadb7a4157a36b31d101d75d841a9c58199e580201d8305356044e3'
            'eee25f5fa6e6b0fb3d5ab913521af67adf788b8613cad1b6d38711261f70646f'
            'ece5581c6b19073ccb191a6c49d50cd17ff61916ab53c7eb3039e5ecbcf2d0e3'
            '0b7f588d1bccef7ac116f4d64e8877aefdf9099f16177a75ffc0c1bcd5d2fff9'
            '9b504e544345119660fc50875decc1b9ee59ca9783bc5b466461410b307974f2'
            '1b2eb7f52cf0f5481bdaca484cbd3175b2e472e63e46887cc0ed003e39e57ff3'
            'c7bba5a22db69e50ea8c7c7abc6bb8d133a30b27b2e7d77fc1f7e435f328366a'
            'f485923217433862978af1029d6d0573b39d6779796fb8f85ab4d588466ec0d2'
            '5b21335a3a23345f8296e9258c20f7d70d9668a771019f4ea52eda3e916915b5'
            '616970b049d597e994930d323c5a5efdd3e1344275c53792840a1898a52bb5dd'
            '9b0afd186edf6dae0fe0c89ca1c83e5cfa207640859d5c560defead6897478b2'
            'e565ff56ec6b4dcb43a45cb4d79060d5311e6363f6f0dcfe209cb0efb49df65c'
            '10055949d09efc74b1586df4d74531910b551a8a8e047ab3800942881e97c974')
validpgpkeys=(
              '474402C8C582DAFBE389C427BCB7CF877E7D47A7' # Alexandre Oliva
              'C92BAA713B8D53D3CAE63FC9E6974752F9704456' # André Silva
              '684D54A189305A9CC95446D36B888913DDB59515' # Márcio Silva
              #'F949CFBD140A6DD071E90B8CDC24396B6D451038' # Julian Kirsch
)

_kernelname=${pkgbase#linux-libre}
_replacesarchkernel=("${_replacesarchkernel[@]/\%/${_kernelname}}")
_replacesoldkernels=("${_replacesoldkernels[@]/\%/${_kernelname}}")
_replacesoldmodules=("${_replacesoldmodules[@]/\%/${_kernelname}}")

case "${CARCH}" in
  i686|x86_64) KARCH=x86;;
  armv7h) KARCH=arm;;
esac

prepare() {
  cd "${srcdir}/${_srcname}"

  # add upstream patch
  if [ "${_pkgbasever}" != "${_pkgver}" ]; then
    patch -p1 -i "${srcdir}/patch-${_pkgbasever}-${_pkgver}"
  fi

  # add grsecurity patches (bnx2 firmware deblobbed)
  patch -Np1 -i "${srcdir}/grsecurity-libre-${_grsecver}-${_pkgver%-*}-${_timestamp}.patch"
  rm localversion-grsec

  if [ "${CARCH}" = "armv7h" ]; then
    # RCN patch (CM3 firmware deblobbed, AUFS and RT removed)
    # Note: For stability reasons, AUFS and RT have been removed in the RCN patch.
    # We are supporting AUFS in linux-libre-pck through PCK patch and RT through its official
    # patch in linux-libre-rt. See https://wiki.parabola.nu/PCK for further details about PCK.
    git apply -v "${srcdir}/rcn-libre-grsec-${_pkgver%-*}-${rcnrel}.patch"

    # disable implicit function declaration error since grsecurity patches conflicts against some RCN modules
    patch -p1 -i "${srcdir}/0001-ARM-disable-implicit-function-declaration-error.patch"

    # fix redefinition error of atomic64_xchg_unchecked_relaxed
    patch -p1 -i "${srcdir}/0002-ARM-fix-redefinition-error-of-atomic64_xchg_unchecked_relaxed.patch"

    # ALARM patches
    patch -p1 -i "${srcdir}/0001-ARM-atags-add-support-for-Marvell-s-u-boot.patch"
    patch -p1 -i "${srcdir}/0002-ARM-atags-fdt-retrieve-MAC-addresses-from-Marvell-bo.patch"
    patch -p1 -i "${srcdir}/0003-SMILE-Plug-device-tree-file.patch"
    patch -p1 -i "${srcdir}/0004-fix-mvsdio-eMMC-timing.patch"
    patch -p1 -i "${srcdir}/0005-net-smsc95xx-Allow-mac-address-to-be-set-as-a-parame.patch"
    patch -p1 -i "${srcdir}/0006-ARM-TLV320AIC23-SoC-Audio-Codec-Fix-errors-reported-.patch"
    patch -p1 -i "${srcdir}/0007-set-default-cubietruck-led-triggers.patch"
    patch -p1 -i "${srcdir}/0008-USB-armory-support.patch"
    patch -p1 -i "${srcdir}/0009-ARM-dts-imx6ul-pico-hobbit-Add-Wifi-support.patch"
    patch -p1 -i "${srcdir}/0010-exynos4412-odroid-set-higher-minimum-buck2-regulator.patch"
    patch -p1 -i "${srcdir}/0011-usb-musb-Call-pm_runtime-from-musb_gadget_queue.patch"
    patch -p1 -i "${srcdir}/0012-phy-twl4030-usb-better-handle-musb_mailbox-failure.patch"
    patch -p1 -i "${srcdir}/0013-Revert-gpu-drm-omapdrm-dss-of-add-missing-of_node_pu.patch"
  fi

  # add freedo as boot logo
  install -m644 -t drivers/video/logo \
    "${srcdir}/logo_linux_"{clut224.ppm,vga16.ppm,mono.pbm}

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git

  # set DEFAULT_CONSOLE_LOGLEVEL to 4 (same value as the 'quiet' kernel param)
  # remove this when a Kconfig knob is made available by upstream
  # (relevant patch sent upstream: https://lkml.org/lkml/2011/7/26/227)
  patch -p1 -i "${srcdir}/change-default-console-loglevel.patch"

  # maintain the TTY over USB disconnects
  # http://www.coreboot.org/EHCI_Gadget_Debug
  patch -p1 -i "${srcdir}/0001-usb-serial-gadget-no-TTY-hangup-on-USB-disconnect-WI.patch"

  # fix Atmel maXTouch touchscreen support
  # https://labs.parabola.nu/issues/877
  # http://www.fsfla.org/pipermail/linux-libre/2015-November/003202.html
  patch -p1 -i "${srcdir}/0002-fix-Atmel-maXTouch-touchscreen-support.patch"

  cat "${srcdir}/config.${CARCH}" > ./.config

  # append pkgrel to extraversion
  sed -ri "s|^(EXTRAVERSION =.*\S).*|\1-${_timestamp}-${pkgrel}|" Makefile

  # don't run depmod on 'make install'. We'll do this ourselves in packaging
  sed -i '2iexit 0' scripts/depmod.sh

  # get kernel version
  make prepare

  # load configuration
  # Configure the kernel. Replace the line below with one of your choice.
  #make menuconfig # CLI menu for configuration
  #make nconfig # new CLI menu for configuration
  #make xconfig # X-based configuration
  #make oldconfig # using old config from previous kernel version
  # ... or manually edit .config

  # rewrite configuration
  yes "" | make config >/dev/null
}

build() {
  cd "${srcdir}/${_srcname}"

  if [ "${CARCH}" = "armv7h" ]; then
    make ${MAKEFLAGS} LOCALVERSION= zImage modules dtbs
  elif [ "${CARCH}" = "x86_64" ] || [ "${CARCH}" = "i686" ]; then
    make ${MAKEFLAGS} LOCALVERSION= bzImage modules
  fi
}

_package() {
  pkgdesc="The ${pkgbase^} kernel and modules with grsecurity/PaX patches and Xen guest support"
  [ "${pkgbase}" = "linux-libre" ] && groups=('base')
  depends=('coreutils' 'linux-libre-firmware' 'kmod' 'grsec-common')
  optdepends=('crda: to set the correct wireless channels of your country'
              'gradm: to configure and enable Role Based Access Control (RBAC)'
              'paxd-libre: to enable PaX exploit mitigations and apply exceptions automatically')
  provides=("${_replacesarchkernel[@]/%/=${_archpkgver}}")
  conflicts=("${_replacesoldkernels[@]}" "${_replacesoldmodules[@]}")
  replaces=("${_replacesarchkernel[@]}" "${_replacesoldkernels[@]}" "${_replacesoldmodules[@]}")
  depends_i686=('mkinitcpio>=0.7')
  depends_x86_64=('mkinitcpio>=0.7')
  backup_i686=("etc/mkinitcpio.d/${pkgbase}.preset")
  backup_x86_64=("etc/mkinitcpio.d/${pkgbase}.preset")
  install=linux.install

  cd "${srcdir}/${_srcname}"

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{lib/modules,lib/firmware,boot}
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}" modules_install
  if [ "${CARCH}" = "armv7h" ]; then
    make LOCALVERSION= INSTALL_DTBS_PATH="${pkgdir}/boot/dtbs/${pkgbase}" dtbs_install
    cp arch/$KARCH/boot/zImage "${pkgdir}/boot/vmlinuz-${pkgbase}"
  elif [ "${CARCH}" = "x86_64" ] || [ "${CARCH}" = "i686" ]; then
    cp arch/$KARCH/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"
  fi

  # set correct depmod command for install
  cp -f "${startdir}/${install}" "${startdir}/${install}.pkg"
  true && install=${install}.pkg
  sed \
    -e  "s/KERNEL_NAME=.*/KERNEL_NAME=${_kernelname}/" \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/" \
    -i "${startdir}/${install}"

  if [ "${CARCH}" = "x86_64" ] || [ "${CARCH}" = "i686" ]; then
    # install mkinitcpio preset file for kernel
    install -D -m644 "${srcdir}/linux.preset" "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"
    sed \
      -e "1s|'linux.*'|'${pkgbase}'|" \
      -e "s|ALL_kver=.*|ALL_kver=\"/boot/vmlinuz-${pkgbase}\"|" \
      -e "s|default_image=.*|default_image=\"/boot/initramfs-${pkgbase}.img\"|" \
      -e "s|fallback_image=.*|fallback_image=\"/boot/initramfs-${pkgbase}-fallback.img\"|" \
      -i "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"
  fi

  # remove build and source links
  rm -f "${pkgdir}"/lib/modules/${_kernver}/{source,build}
  # remove the firmware
  rm -rf "${pkgdir}/lib/firmware"
  # make room for external modules
  ln -s "../extramodules-${_basekernel}${_kernelname}" "${pkgdir}/lib/modules/${_kernver}/extramodules"
  # add real version for building modules and running depmod from post_install/upgrade
  mkdir -p "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname}"
  echo "${_kernver}" > "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname}/version"

  # Now we call depmod...
  depmod -b "${pkgdir}" -F System.map "${_kernver}"

  # move module tree /lib -> /usr/lib
  mkdir -p "${pkgdir}/usr"
  mv "${pkgdir}/lib" "${pkgdir}/usr/"

  if [ "${CARCH}" = "x86_64" ] || [ "${CARCH}" = "i686" ]; then
    # add vmlinux
    install -D -m644 vmlinux "${pkgdir}/usr/lib/modules/${_kernver}/build/vmlinux"
  fi
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase^} kernel"
  provides=("${_replacesarchkernel[@]/%/-headers=${_archpkgver}}")
  conflicts=("${_replacesoldkernels[@]/%/-headers}")
  replaces=("${_replacesarchkernel[@]/%/-headers}" "${_replacesoldkernels[@]/%/-headers}")

  install -dm755 "${pkgdir}/usr/lib/modules/${_kernver}"

  cd "${srcdir}/${_srcname}"
  install -D -m644 Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/Makefile"
  install -D -m644 kernel/Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/kernel/Makefile"
  install -D -m644 .config \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/.config"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include"

  for i in acpi asm-generic config crypto drm generated keys linux math-emu \
    media net pcmcia scsi soc sound trace uapi video xen; do
    cp -a include/${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/include/"
  done

  # copy arch includes for external modules
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}"
  cp -a arch/${KARCH}/include "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"
  if [ "${CARCH}" = "armv7h" ]; then
    for i in dove exynos omap2; do
      mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/mach-${i}"
      cp -a arch/${KARCH}/mach-${i}/include "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/mach-${i}/"
    done
    for i in omap orion samsung versatile; do
      mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/plat-${i}"
      cp -a arch/${KARCH}/plat-${i}/include "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/plat-${i}/"
    done
  fi

  # copy files necessary for later builds
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

  # add dvb headers for external modules
  # in reference to:
  # http://bugs.archlinux.org/task/9912
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-core"
  cp drivers/media/dvb-core/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-core/"
  # and...
  # http://bugs.archlinux.org/task/11194
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/config/dvb/"
  cp include/config/dvb/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/config/dvb/"

  # add dvb headers for http://mcentral.de/hg/~mrec/em28xx-new
  # in reference to:
  # http://bugs.archlinux.org/task/13146
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"
  cp drivers/media/dvb-frontends/lgdt330x.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/i2c/"
  cp drivers/media/i2c/msp3400-driver.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/i2c/"

  # add dvb headers
  # in reference to:
  # http://bugs.archlinux.org/task/20402
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/usb/dvb-usb"
  cp drivers/media/usb/dvb-usb/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/usb/dvb-usb/"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends"
  cp drivers/media/dvb-frontends/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/tuners"
  cp drivers/media/tuners/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/tuners/"

  # add xfs and shmem for aufs building
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/fs/xfs"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/mm"
  # removed in 3.17-gnu series
  # cp fs/xfs/xfs_sb.h "${pkgdir}/usr/lib/modules/${_kernver}/build/fs/xfs/xfs_sb.h"

  # copy in Kconfig files
  for i in $(find . -name "Kconfig*"); do
    mkdir -p "${pkgdir}"/usr/lib/modules/${_kernver}/build/`echo ${i} | sed 's|/Kconfig.*||'`
    cp ${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/${i}"
  done

  # add objtool for external module building and enabled VALIDATION_STACK option
  if [ -f tools/objtool/objtool ];  then
      mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/tools/objtool"
      cp -a tools/objtool/objtool ${pkgdir}/usr/lib/modules/${_kernver}/build/tools/objtool/ 
  fi

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
  find "${pkgdir}"/usr/lib/modules/${_kernver}/build/arch -mindepth 1 -maxdepth 1 -type d -not -name "$KARCH" -exec rm -rf {} +

  # remove files already in docs package
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/kbuild/Kconfig.recursion-issue-01"
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/kbuild/Kconfig.recursion-issue-02"
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/kbuild/Kconfig.select-break"
}

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase^} kernel"
  provides=("${_replacesarchkernel[@]/%/-docs=${_archpkgver}}")
  conflicts=("${_replacesoldkernels[@]/%/-docs}")
  replaces=("${_replacesarchkernel[@]/%/-docs}" "${_replacesoldkernels[@]/%/-docs}")

  cd "${srcdir}/${_srcname}"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build"
  cp -al Documentation "${pkgdir}/usr/lib/modules/${_kernver}/build"
  find "${pkgdir}" -type f -exec chmod 444 {} \;
  find "${pkgdir}" -type d -exec chmod 755 {} \;

  # remove a file already in kernel package
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/DocBook/Makefile"
}

pkgname=("${pkgbase}" "${pkgbase}-headers" "${pkgbase}-docs")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#${pkgbase}}")
    _package${_p#${pkgbase}}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:
