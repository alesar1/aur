# Maintainer: André Silva <emulatorman@parabola.nu>
# Maintainer: Márcio Silva <coadde@parabola.nu>
# Contributor: Nicolás Reynolds <fauno@kiwwwi.com.ar>
# Contributor: Sorin-Mihai Vârgolici <smv@yobicore.org>
# Contributor: Michał Masłowski <mtjm@mtjm.eu>
# Contributor: Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor: Luke R. <g4jc@openmailbox.org>

# Based on linux package

pkgbase=linux-libre-pck
_pkgbasever=4.9-gnu
_pkgver=4.9.3-gnu
_pckpatchver=pck1

_replacesarchkernel=('linux-zen')
_replacesoldkernels=()
_replacesoldmodules=()

_srcname=linux-${_pkgbasever%-*}
_archpkgver=${_pkgver%-*}
pkgver=${_pkgver//-/_}.${_pckpatchver}
pkgrel=1
rcnrel=armv7-x4
arch=('i686' 'x86_64' 'armv7h')
url="https://wiki.parabola.nu/PCK"
license=('GPL2')
makedepends=('xmlto' 'docbook-xsl' 'kmod' 'inetutils' 'bc' 'libelf')
makedepends_armv7h=('git')
options=('!strip')
source=("https://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgbasever}/linux-libre-${_pkgbasever}.tar.xz"
        "https://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgbasever}/linux-libre-${_pkgbasever}.tar.xz.sign"
        "https://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgver}/patch-${_pkgbasever}-${_pkgver}.xz"
        "https://linux-libre.fsfla.org/pub/linux-libre/releases/${_pkgver}/patch-${_pkgbasever}-${_pkgver}.xz.sign"
        "https://repo.parabola.nu/other/pck/patches/${_pkgver}/patch-${_pkgver}-${_pckpatchver}.patch"
        "https://repo.parabola.nu/other/pck/patches/${_pkgver}/patch-${_pkgver}-${_pckpatchver}.patch.sig"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_clut224.ppm"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_clut224.ppm.sig"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_mono.pbm"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_mono.pbm.sig"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_vga16.ppm"
        "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_vga16.ppm.sig"
        # the main kernel config files
        'config.i686' 'config.x86_64' 'config.armv7h'
        # pacman hook for initramfs regeneration
        '99-linux.hook'
        # standard config files for mkinitcpio ramdisk
        'linux.preset'
        'change-default-console-loglevel.patch'
        # armv7h patches
        "https://repo.parabola.nu/other/rcn-libre/patches/${_pkgver%-*}/rcn-libre-${_pkgver%-*}-${rcnrel}.patch"
        "https://repo.parabola.nu/other/rcn-libre/patches/${_pkgver%-*}/rcn-libre-${_pkgver%-*}-${rcnrel}.patch.sig"
        '0001-ARM-atags-add-support-for-Marvell-s-u-boot.patch'
        '0002-ARM-atags-fdt-retrieve-MAC-addresses-from-Marvell-bo.patch'
        '0003-SMILE-Plug-device-tree-file.patch'
        '0004-fix-mvsdio-eMMC-timing.patch'
        '0005-net-smsc95xx-Allow-mac-address-to-be-set-as-a-parame.patch'
        '0006-ARM-TLV320AIC23-SoC-Audio-Codec-Fix-errors-reported-.patch'
        '0007-set-default-cubietruck-led-triggers.patch'
        '0008-exynos4412-odroid-set-higher-minimum-buck2-regulator.patch')
sha512sums=('885eb0a7fab45dc749acb4329b4330a43b704df2d5f2f5aac1811503c132ca53ca49452f9b1cc80b0826c7a4962dbe4937aecb697aa823b2543ba2cabc704816'
            'SKIP'
            'df4408961165279f45611374e86d817de84c164b93c125d8a0fbee2535a5bbdfef3c40e629541024428257b56105284fe50d402c496ca42b4202fb57e61f65a9'
            'SKIP'
            '28a4a987f9f3588df8035f392497d2e69300fcf63ff4594ca21fadb1f9c7d7fe8d1e10c2c07395cd95cabe4c87a3251a448ec45e5ae66ea08aad91b6f5be2945'
            'SKIP'
            '13cb5bc42542e7b8bb104d5f68253f6609e463b6799800418af33eb0272cc269aaa36163c3e6f0aacbdaaa1d05e2827a4a7c4a08a029238439ed08b89c564bb3'
            'SKIP'
            '267295aa0cea65684968420c68b32f1a66a22d018b9d2b2c1ef14267bcf4cb68aaf7099d073cbfefe6c25c8608bdcbbd45f7ac8893fdcecbf1e621abdfe9ecc1'
            'SKIP'
            '7a3716bfe3b9f546da309c7492f3e08f8f506813afeb1c737a474c83313d5c313cf4582b65215c2cfce3b74d9d1021c96e8badafe8f6e5b01fe28d2b5c61ae78'
            'SKIP'
            '74f85c01d42382c983578bb21bf4ee705963c73f7a3bd4aab1ce674f71a63dee18adbf1afcd792793f9172875a732e2d5d1ac82c17d5524360fa55f9712da7fe'
            '90e2b791be43726e82cd836440f93f105690883485830b18419a4d7b4703ecc80ad0f4f6ee824ea6db7f165279ad090771cb2215e55265af04d1e6640aa4d0b0'
            'e4c85cfe5cf0fc5b380511a565606a850d0a820ae2ffebfe0078bc29823844acaa5739f66de30d1506c400ec22f5d771c6b5d544f085a409322cf28bb1fadebb'
            'd6faa67f3ef40052152254ae43fee031365d0b1524aa0718b659eb75afc21a3f79ea8d62d66ea311a800109bed545bc8f79e8752319cd378eef2cbd3a09aba22'
            '2dc6b0ba8f7dbf19d2446c5c5f1823587de89f4e28e9595937dd51a87755099656f2acec50e3e2546ea633ad1bfd1c722e0c2b91eef1d609103d8abdc0a7cbaf'
            'd9d28e02e964704ea96645a5107f8b65cae5f4fb4f537e224e5e3d087fd296cb770c29ac76e0ce95d173bc420ea87fb8f187d616672a60a0cae618b0ef15b8c8'
            '72d92d0a48ecdecf82799f09004946e1b2de69a4e0b42d7a9bdcf41ab38b61657df3e30e0c9f86c707f44cec93ab21a78f0a7195d806671c220edc578cffe857'
            'SKIP'
            'ccf18eb2c3d33a57871cbadd5ad825d2f2f489e69c54c7293b160abdc3e9e5c6a664ba7926a617d31affcf20b7ecb4e8de54fa78438c574aa1b257f686faade9'
            '69f13bb2e353727acbe39034978729272511c6578aa2faf8c829e1bb89c22e769262289b76d93254314304ebd7547c45cdc8ba6afc278444a8fd09f71dff9757'
            '47038a476ff90d7106e1ce2cf5dd3f2c356c75ab8cefc6901f8eddcbf7cd0f23c44f6ce96b2b3d57a6e3f30bdd5192cf3e75759277ab0ac6fbb179423f2431a0'
            '75513d1d6dfeb6425763dc8fe8d7f607ddd11d2a8397230333a4e556b303ceb7e68bfdb26d0a10f4b557ef13adbf54c3aab00f5b493772a94b5cd87d143663c4'
            '37df06631772200edc7e5a4450719155156a781e9a475383283627f6f1b8cbe94db6ba2e2fbc59107ea288846b56881b892e9b21d3d899b974fad4226c4def10'
            '73916b59fd8f269ce2831d9a0710f503b9cd1004d94caf9e061ebff870a115cc8455409040574a609473e48c60b2f0b833c907327dacb085509e615c27dd463f'
            'eef5d8161edcc9817832de2000ad30320507a1e16fc321fb2b97dd2d159825b8f924cd29e5a4ffa29c339c8727f106730e6b6858c50d8afe7a5000629507badd'
            'b3aad9fd9292122fd3227f05d54742731bf4d6d57aaac680b34eca19597dfb56a7f54c7ad54f37cfc2ec7f622fbd90abe7f288f11f8eb98278ab07df32cf890a')
validpgpkeys=(
              '474402C8C582DAFBE389C427BCB7CF877E7D47A7' # Alexandre Oliva
              'C92BAA713B8D53D3CAE63FC9E6974752F9704456' # André Silva
              '684D54A189305A9CC95446D36B888913DDB59515' # Márcio Silva
)

_kernelname=${pkgbase#linux-libre}

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

  # add PCK patch
  patch -p1 -i "${srcdir}/patch-${_pkgver}-${_pckpatchver}.patch"

  if [ "${CARCH}" = "armv7h" ]; then
    # RCN patch (CM3 firmware deblobbed, AUFS and RT removed)
    # Note: For stability reasons, AUFS and RT have been removed in the RCN patch.
    # We are supporting AUFS in linux-libre-pck through PCK patch and RT through its official
    # patch in linux-libre-rt. See https://wiki.parabola.nu/PCK for further details about PCK.
    git apply -v "${srcdir}/rcn-libre-${_pkgver%-*}-${rcnrel}.patch"

    # ALARM patches
    patch -p1 -i "${srcdir}/0001-ARM-atags-add-support-for-Marvell-s-u-boot.patch"
    patch -p1 -i "${srcdir}/0002-ARM-atags-fdt-retrieve-MAC-addresses-from-Marvell-bo.patch"
    patch -p1 -i "${srcdir}/0003-SMILE-Plug-device-tree-file.patch"
    patch -p1 -i "${srcdir}/0004-fix-mvsdio-eMMC-timing.patch"
    patch -p1 -i "${srcdir}/0005-net-smsc95xx-Allow-mac-address-to-be-set-as-a-parame.patch"
    patch -p1 -i "${srcdir}/0006-ARM-TLV320AIC23-SoC-Audio-Codec-Fix-errors-reported-.patch"
    patch -p1 -i "${srcdir}/0007-set-default-cubietruck-led-triggers.patch"
    patch -p1 -i "${srcdir}/0008-exynos4412-odroid-set-higher-minimum-buck2-regulator.patch"
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

  cat "${srcdir}/config.${CARCH}" > ./.config

  # append pkgrel to extraversion
  sed -ri "s|^(EXTRAVERSION =.*\S).*|\1-${pkgrel}|" Makefile

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
  pkgdesc="The ${pkgbase^} kernel and modules with a handful of awesome features not merged into mainline [AUFS, BFQ, BFS, Knock, UKSM]"
  [ "${pkgbase}" = "linux-libre" ] && groups=('base' 'base-openrc')
  depends=('coreutils' 'linux-libre-firmware' 'kmod')
  optdepends=('crda: to set the correct wireless channels of your country'
              'systemd-knock: to use system and service manager with TCP Stealth support'
              'openssh-knock: to use SSH with TCP Stealth support')
  provides=("${_replacesarchkernel[@]/%/=${_archpkgver}}")
  conflicts=("${_replacesoldkernels[@]}" "${_replacesoldmodules[@]}")
  replaces=("${_replacesoldkernels[@]}" "${_replacesoldmodules[@]}")
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
  sed -e "s|%PKGBASE%|${pkgbase}|g;s|%KERNVER%|${_kernver}|g" \
    "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  if [ "${CARCH}" = "x86_64" ] || [ "${CARCH}" = "i686" ]; then
    # install mkinitcpio preset file for kernel
    sed "s|%PKGBASE%|${pkgbase}|g" "${srcdir}/linux.preset" |
      install -D -m644 /dev/stdin "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

    # install pacman hook for initramfs regeneration
    sed "s|%PKGBASE%|${pkgbase}|g" "${srcdir}/99-linux.hook" |
      install -D -m644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/99-${pkgbase}.hook"
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
  replaces=("${_replacesoldkernels[@]/%/-headers}")

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
  replaces=("${_replacesoldkernels[@]/%/-docs}")

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
