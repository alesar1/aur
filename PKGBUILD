# Maintainer : Daniel Bermond < yahoo-com: danielbermond >
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: André Silva <emulatorman@riseup.net>
# Contributor: Márcio Silva <coadde@riseup.net>
# Contributor (Parabola): Nicolás Reynolds <fauno@kiwwwi.com.ar>
# Contributor (Parabola): Sorin-Mihai Vârgolici <smv@yobicore.org>
# Contributor (Parabola): Michał Masłowski <mtjm@mtjm.eu>
# Contributor (Parabola): Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor (Parabola): Luke R. <g4jc@openmailbox.org>

# Based on linux package

pkgbase=linux-libre         # Build stock kernel
#pkgbase=linux-libre-custom # Build kernel with a different name
_srcbasever=5.0-gnu
_srcver=5.0.5-gnu

_replacesarchkernel=('linux%') # '%' gets replaced with _kernelname
_replacesoldkernels=() # '%' gets replaced with _kernelname
_replacesoldmodules=() # '%' gets replaced with _kernelname

_srcname=linux-${_srcbasever%-*}
_archpkgver=${_srcver%-*}
pkgver=${_srcver//-/_}
pkgrel=1
rcnrel=armv7-x6
arch=(i686 x86_64 armv7h)
url='https://linux-libre.fsfla.org/'
license=(GPL2)
makedepends=(xmlto kmod inetutils bc libelf python-sphinx graphviz)
makedepends_armv7h=(uboot-tools vboot-utils dtc) # for linux-libre-chromebook
options=('!strip')
source=(
  "https://linux-libre.fsfla.org/pub/linux-libre/releases/$_srcbasever/linux-libre-$_srcbasever.tar.xz"{,.sign}
  "https://linux-libre.fsfla.org/pub/linux-libre/releases/$_srcver/patch-$_srcbasever-$_srcver.xz"{,.sign}
  "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_clut224.ppm"{,.sig}
  "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_mono.pbm"{,.sig}
  "https://repo.parabola.nu/other/linux-libre/logos/logo_linux_vga16.ppm"{,.sig}
  # the main kernel config files
  config.i686 config.x86_64 config.armv7h
  # pacman hooks for depmod and initramfs regeneration
  60-linux.hook 90-linux.hook
  # standard config files for mkinitcpio ramdisk
  linux.preset
  # files for signing Chromebooks kernels
  kernel.its kernel.keyblock kernel_data_key.vbprivk
  # armv7h patches
  "https://repo.parabola.nu/other/rcn-libre/patches/${_srcver%-*}/rcn-libre-${_srcver%-*}-$rcnrel.patch"{,.sig}
  0001-ARM-atags-add-support-for-Marvell-s-u-boot.patch
  0002-ARM-atags-fdt-retrieve-MAC-addresses-from-Marvell-bo.patch
  0003-SMILE-Plug-device-tree-file.patch
  0004-fix-mvsdio-eMMC-timing.patch
  0005-net-smsc95xx-Allow-mac-address-to-be-set-as-a-parame.patch
  0006-set-default-cubietruck-led-triggers.patch
  0007-exynos4412-odroid-set-higher-minimum-buck2-regulator.patch
  0008-ARM-dove-enable-ethernet-on-D3Plug.patch
  0009-media-s5p-mfc-fix-incorrect-bus-assignment-in-virtua.patch
  # other patches
  0001-usb-serial-gadget-no-TTY-hangup-on-USB-disconnect-WI.patch
  0002-fix-Atmel-maXTouch-touchscreen-support.patch
  0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch
  0002-netfilter-nf_tables-fix-set-double-free-in-abort-pat.patch
)
validpgpkeys=(
  '474402C8C582DAFBE389C427BCB7CF877E7D47A7' # Alexandre Oliva
  '6DB9C4B4F0D8C0DC432CF6E4227CA7C556B2BA78' # David P.
)
sha512sums=('56b8e77eb445c92c3e0ec0dc45fa5fb09641cad18003b79991652b83cf1d96cc1651750dfa9eec15652108a1b8aff1781c4f8ec5f92784b8542e59e0605922d9'
            'SKIP'
            '5331dacd07dca625cebb3a05cf9779fd2d9260d78cec072508a360506c2fcc23a8783b3961c8438849d0155ab9f00d2f907fe2329d5734fac9cba637ce06529c'
            'SKIP'
            '13cb5bc42542e7b8bb104d5f68253f6609e463b6799800418af33eb0272cc269aaa36163c3e6f0aacbdaaa1d05e2827a4a7c4a08a029238439ed08b89c564bb3'
            'SKIP'
            '267295aa0cea65684968420c68b32f1a66a22d018b9d2b2c1ef14267bcf4cb68aaf7099d073cbfefe6c25c8608bdcbbd45f7ac8893fdcecbf1e621abdfe9ecc1'
            'SKIP'
            '7a3716bfe3b9f546da309c7492f3e08f8f506813afeb1c737a474c83313d5c313cf4582b65215c2cfce3b74d9d1021c96e8badafe8f6e5b01fe28d2b5c61ae78'
            'SKIP'
            '7fc366487ad4083a6595046dfbbf2cf100962ebe452da1b5b42019b33fb962714e9aff128bf16a0d3743e0916218e337aa46a93871b6d6afe9e5afd828bb3ae1'
            '4a6fe5cadd58ae3bdc35e739fe8691e3ab7609f6220c5aeb9db7ac1997b613422fb30e007e2f4c15040568c4a0b06e58da0dd65e1b043883c548fea828a632d8'
            '4b9e98e440426036fd9330b5a2408ceb9a871b14e9686933c43678bc9f55020df48d177bbd1c4333fe84dc95db095cc6043cfe421b4e2ea954d6ffbe2b8c7dda'
            '7ad5be75ee422dda3b80edd2eb614d8a9181e2c8228cd68b3881e2fb95953bf2dea6cbe7900ce1013c9de89b2802574b7b24869fc5d7a95d3cc3112c4d27063a'
            '2718b58dbbb15063bacb2bde6489e5b3c59afac4c0e0435b97fe720d42c711b6bcba926f67a8687878bd51373c9cf3adb1915a11666d79ccb220bf36e0788ab7'
            '2dc6b0ba8f7dbf19d2446c5c5f1823587de89f4e28e9595937dd51a87755099656f2acec50e3e2546ea633ad1bfd1c722e0c2b91eef1d609103d8abdc0a7cbaf'
            '167bc73c6c1c63931806238905dc44c7d87c5a5c0f6293159f2133dfe717fb44081018d810675716d1605ec7dff5e8333b87b19e09e2de21d0448e447437873b'
            'bb6718984a7357c9b00c37e4788480e5b8b75018c172ecc1441bc3fc5d2d42444eb5d8c7f9d2e3a7d6fed6d03acb565e3c0559486e494c40a7fe6bd0570c9ede'
            '143dea30c6da00e504c99984a98a0eb2411f558fcdd9dfa7f607d6c14e9e7dffff9cb00121d9317044b07e3e210808286598c785ee854084b993ec9cb14d8232'
            '86efeee41eff41928ce2ce8926dc11d34799437d415cf51239ee7e9cf04b82a20cbb6d11b89af2ae7c6c0464afb57369133093653acaf3a0e0ff9d7630d00834'
            'SKIP'
            '6e2eed5e047d95a825241bf30bd09e3edad7787f1f742ca5cf3cf53f4f1383ca7ede306f12cf522fa1175930b3dde550994ef085bf6d93761babfe976dc94ca2'
            '32a185f7d8b93e8cb70bee0d32eb6876ac0a976abe550ec83de1fc57963b0879872831c671f4aa5281b4def9bf81660c92809047eda9a9ada939bdf5b7d32dbc'
            'b523cc0978f6426162d8ef82dc44763fca7ca57c8bf3b2b27549d7ed7d873389ba3acf00dfe5576ceef991d31ba39613c3203195cb5a91900330c997c9b0efff'
            'd85f97025f21c26b438afb599af13939bae3ff769c1d1055bdcf9130a1449703a26ecf04ce715390570c14d6b91b693e7b220e7cff0576f9775990ee2fe75113'
            'a3b846c5a79afdfc5233ba5020cb8fc91bad0864bd811204f29191f8b2e7dd76cb19d8fa38cac55ad3adbbd4126f3b2102b03016fe9423bd7d0d252ed1b4c460'
            'd547f6ef7f876690092622c7b7de6995b972e46f25b34fac92b301d90ad7b04f993341346bbc54284e5338e5bbf76ccdfa42485842ed0a0b4a8414cf8a16412a'
            'b3cc320e6414c6a9a287df405cc6768cbc204bd859189c4c3f6902e55fd425ad7f05743ea6db3996c99a49f6b3a175d83c8fb05fd4314c2b1a3df52e8b1b16f3'
            'bed58fede674b139e470a2593c3d07f61f7f771d86ce137a5cf7e1b5cc53a8c2127439f7ef2bee9daaf554555f6cb9bb80cf35bbe6a6adf10a04cb5a93d0cc8f'
            '17b09c80b0c235a5395c350c2b1acfda1c549c5bb6017f6a7056a84686fe23d7983a40f416cfc1da075523ad87d39ff4ff7b4057a275705679830db15b621991'
            '02af4dd2a007e41db0c63822c8ab3b80b5d25646af1906dc85d0ad9bb8bbf5236f8e381d7f91cf99ed4b0978c50aee37cb9567cdeef65b7ec3d91b882852b1af'
            'b8fe56e14006ab866970ddbd501c054ae37186ddc065bb869cf7d18db8c0d455118d5bda3255fb66a0dde38b544655cfe9040ffe46e41d19830b47959b2fb168'
            '0016e750127728458ab23ef445f92a8b52064806f235c03dd92e699a8bfb397d6274f6ba484a99af19ed729f6c63bab714bd350c7e7ed82c30a4b62b29857ff7'
            '8348ecfeec519a41c68f1a97ec4b6007b3ed5ed61c271733d562ae22c6c85e4e217eb6c367bb53f3c53ad72f311360bd3aa57d09fba7cda358748c2bdd0416c2')

_kernelname=${pkgbase#linux-libre}
_replacesarchkernel=("${_replacesarchkernel[@]/\%/${_kernelname}}")
_replacesoldkernels=("${_replacesoldkernels[@]/\%/${_kernelname}}")
_replacesoldmodules=("${_replacesoldmodules[@]/\%/${_kernelname}}")

case "$CARCH" in
  i686|x86_64) KARCH=x86;;
  armv7h) KARCH=arm;;
esac

prepare() {
  cd $_srcname

  # add upstream patch
  if [ "$_srcbasever" != "$_srcver" ]; then
    patch -p1 -i ../patch-$_srcbasever-$_srcver
  fi

  if [ "$CARCH" = "armv7h" ]; then
    # RCN patch (CM3 firmware deblobbed and AUFS/WireGuard removed)
    # Note: For stability reasons, AUFS has been removed in the RCN patch.
    # We are supporting AUFS in linux-libre-pck through PCK patch.
    # See https://wiki.parabola.nu/PCK for further details.
    patch -p1 -i ../rcn-libre-${_srcver%-*}-$rcnrel.patch

    # ALARM patches
    patch -p1 -i ../0001-ARM-atags-add-support-for-Marvell-s-u-boot.patch
    patch -p1 -i ../0002-ARM-atags-fdt-retrieve-MAC-addresses-from-Marvell-bo.patch
    patch -p1 -i ../0003-SMILE-Plug-device-tree-file.patch
    patch -p1 -i ../0004-fix-mvsdio-eMMC-timing.patch
    patch -p1 -i ../0005-net-smsc95xx-Allow-mac-address-to-be-set-as-a-parame.patch
    patch -p1 -i ../0006-set-default-cubietruck-led-triggers.patch
    patch -p1 -i ../0007-exynos4412-odroid-set-higher-minimum-buck2-regulator.patch
    patch -p1 -i ../0008-ARM-dove-enable-ethernet-on-D3Plug.patch
    patch -p1 -i ../0009-media-s5p-mfc-fix-incorrect-bus-assignment-in-virtua.patch
  fi

  # add freedo as boot logo
  install -m644 -t drivers/video/logo \
    ../logo_linux_{clut224.ppm,vga16.ppm,mono.pbm}

  # add Arch patches
  patch -p1 -i ../0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch
  patch -p1 -i ../0002-netfilter-nf_tables-fix-set-double-free-in-abort-pat.patch

  # maintain the TTY over USB disconnects
  # http://www.coreboot.org/EHCI_Gadget_Debug
  patch -p1 -i ../0001-usb-serial-gadget-no-TTY-hangup-on-USB-disconnect-WI.patch

  # fix Atmel maXTouch touchscreen support
  # https://labs.parabola.nu/issues/877
  # http://www.fsfla.org/pipermail/linux-libre/2015-November/003202.html
  patch -p1 -i ../0002-fix-Atmel-maXTouch-touchscreen-support.patch

  msg2 "Setting version..."
  scripts/setlocalversion --save-scmversion
  echo "-$pkgrel" > localversion.10-pkgrel
  echo "$_kernelname" > localversion.20-pkgname

  msg2 "Setting config..."
  cp ../config.$CARCH .config
  make olddefconfig

  make -s kernelrelease > ../version
  msg2 "Prepared %s version %s" "$pkgbase" "$(<../version)"
}

build() {
  cd $_srcname
  if [ "$CARCH" = "armv7h" ]; then
    make zImage modules dtbs htmldocs
  elif [ "$CARCH" = "x86_64" ] || [ "$CARCH" = "i686" ]; then
    make bzImage modules htmldocs
  fi
}

_package() {
  pkgdesc="The ${pkgbase^} kernel and modules"
  [[ $pkgbase = linux-libre ]] && groups=(base base-openrc)
  depends=(coreutils linux-libre-firmware kmod mkinitcpio)
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=("${_replacesarchkernel[@]/%/=${_archpkgver}}" "LINUX-ABI_VERSION=${_srcver%%-*}")
  conflicts=("${_replacesarchkernel[@]}" "${_replacesoldkernels[@]}" "${_replacesoldmodules[@]}")
  replaces=("${_replacesarchkernel[@]}" "${_replacesoldkernels[@]}" "${_replacesoldmodules[@]}")
  backup=("etc/mkinitcpio.d/$pkgbase.preset")
  install=linux.install

  local kernver="$(<version)"
  local modulesdir="$pkgdir/usr/lib/modules/$kernver"

  cd $_srcname

  msg2 "Installing boot image..."
  if [ "$CARCH" = "armv7h" ]; then
    make INSTALL_DTBS_PATH="$pkgdir/boot/dtbs/$pkgbase" dtbs_install
  fi
  # systemd expects to find the kernel here to allow hibernation
  # https://github.com/systemd/systemd/commit/edda44605f06a41fb86b7ab8128dcf99161d2344
  install -Dm644 "$(make -s image_name)" "$modulesdir/vmlinuz"
  install -Dm644 "$modulesdir/vmlinuz" "$pkgdir/boot/vmlinuz-$pkgbase"

  msg2 "Installing modules..."
  make INSTALL_MOD_PATH="$pkgdir/usr" modules_install

  # a place for external modules,
  # with version file for building modules and running depmod from hook
  local extramodules="extramodules$_kernelname"
  local extradir="$pkgdir/usr/lib/modules/$extramodules"
  install -Dt "$extradir" -m644 ../version
  ln -sr "$extradir" "$modulesdir/extramodules"

  # remove build and source links
  rm "$modulesdir"/{source,build}

  msg2 "Installing hooks..."
  # sed expression for following substitutions
  if [ "$CARCH" = "armv7h" ]; then
  local subst="
    s|/boot/vmlinuz-%PKGBASE%|$kernver|g
    s|%PKGBASE%|$pkgbase|g
    s|%KERNVER%|$kernver|g
    s|%EXTRAMODULES%|$extramodules|g
  "
  else
  local subst="
    s|%PKGBASE%|$pkgbase|g
    s|%KERNVER%|$kernver|g
    s|%EXTRAMODULES%|$extramodules|g
  "
  fi

  # hack to allow specifying an initially nonexisting install file
  sed "$subst" "$startdir/$install" > "$startdir/$install.pkg"
  true && install=$install.pkg

  # fill in mkinitcpio preset and pacman hooks
  sed "$subst" ../linux.preset | install -Dm644 /dev/stdin \
    "$pkgdir/etc/mkinitcpio.d/$pkgbase.preset"
  sed "$subst" ../60-linux.hook | install -Dm644 /dev/stdin \
    "$pkgdir/usr/share/libalpm/hooks/60-$pkgbase.hook"
  sed "$subst" ../90-linux.hook | install -Dm644 /dev/stdin \
    "$pkgdir/usr/share/libalpm/hooks/90-$pkgbase.hook"

  msg2 "Fixing permissions..."
  chmod -Rc u=rwX,go=rX "$pkgdir"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase^} kernel"
  provides=("${_replacesarchkernel[@]/%/-headers=${_archpkgver}}")
  conflicts=("${_replacesarchkernel[@]/%/-headers}" "${_replacesoldkernels[@]/%/-headers}")
  replaces=("${_replacesarchkernel[@]/%/-headers}" "${_replacesoldkernels[@]/%/-headers}")

  local builddir="$pkgdir/usr/lib/modules/$(<version)/build"

  cd $_srcname

  msg2 "Installing build files..."
  install -Dt "$builddir" -m644 Makefile .config Module.symvers System.map vmlinux
  install -Dt "$builddir/kernel" -m644 kernel/Makefile
  install -Dt "$builddir/arch/$KARCH" -m644 arch/$KARCH/Makefile
  if [[ $CARCH = i686 ]]; then
    install -Dt "$builddir/arch/$KARCH" -m644 arch/$KARCH/Makefile_32.cpu
  fi
  cp -t "$builddir" -a scripts

  # add objtool for external module building and enabled VALIDATION_STACK option
  if [[ -e tools/objtool/objtool ]]; then
    install -Dt "$builddir/tools/objtool" tools/objtool/objtool
  fi

  # add xfs and shmem for aufs building
  mkdir -p "$builddir"/{fs/xfs,mm}

  # ???
  mkdir "$builddir/.tmp_versions"

  msg2 "Installing headers..."
  cp -t "$builddir" -a include
  cp -t "$builddir/arch/$KARCH" -a arch/$KARCH/include
  install -Dt "$builddir/arch/$KARCH/kernel" -m644 arch/$KARCH/kernel/asm-offsets.s

  install -Dt "$builddir/drivers/md" -m644 drivers/md/*.h
  install -Dt "$builddir/net/mac80211" -m644 net/mac80211/*.h

  # http://bugs.archlinux.org/task/13146
  install -Dt "$builddir/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # http://bugs.archlinux.org/task/20402
  install -Dt "$builddir/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "$builddir/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "$builddir/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  msg2 "Installing KConfig files..."
  find . -name 'Kconfig*' -exec install -Dm644 {} "$builddir/{}" \;

  msg2 "Removing unneeded architectures..."
  local arch
  for arch in "$builddir"/arch/*/; do
    [[ $arch = */$KARCH/ ]] && continue
    echo "Removing $(basename "$arch")"
    rm -r "$arch"
  done

  msg2 "Removing documentation..."
  rm -r "$builddir/Documentation"

  # Parabola changes
  # 
  # since we don't want to diverge too much from Arch's PKGBUILD, we'll
  # start marking our changes as such
  if [ "$CARCH" = "armv7h" ]; then
    for i in dove exynos omap2; do
      mkdir -p "$pkgdir/usr/lib/modules/$kernver/build/arch/$KARCH/mach-$i"
      cp -a arch/$KARCH/mach-$i/include "$pkgdir/usr/lib/modules/$kernver/build/arch/$KARCH/mach-$i/"
    done
    for i in omap orion samsung versatile; do
      mkdir -p "$pkgdir/usr/lib/modules/$kernver/build/arch/$KARCH/plat-$i"
      cp -a arch/$KARCH/plat-$i/include "$pkgdir/usr/lib/modules/$kernver/build/arch/$KARCH/plat-$i/"
    done
  fi
  # end of Parabola changes

  msg2 "Removing broken symlinks..."
  find -L "$builddir" -type l -printf 'Removing %P\n' -delete

  msg2 "Removing loose objects..."
  find "$builddir" -type f -name '*.o' -printf 'Removing %P\n' -delete

  msg2 "Stripping build tools..."
  local file
  while read -rd '' file; do
    case "$(file -bi "$file")" in
      application/x-sharedlib\;*)      # Libraries (.so)
        strip -v $STRIP_SHARED "$file" ;;
      application/x-archive\;*)        # Libraries (.a)
        strip -v $STRIP_STATIC "$file" ;;
      application/x-executable\;*)     # Binaries
        strip -v $STRIP_BINARIES "$file" ;;
      application/x-pie-executable\;*) # Relocatable binaries
        strip -v $STRIP_SHARED "$file" ;;
    esac
  done < <(find "$builddir" -type f -perm -u+x ! -name vmlinux -print0)

  msg2 "Adding symlink..."
  mkdir -p "$pkgdir/usr/src"
  ln -sr "$builddir" "$pkgdir/usr/src/$pkgbase-$pkgver"

  msg2 "Fixing permissions..."
  chmod -Rc u=rwX,go=rX "$pkgdir"
}

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase^} kernel"
  provides=("${_replacesarchkernel[@]/%/-docs=${_archpkgver}}")
  conflicts=("${_replacesarchkernel[@]/%/-docs}" "${_replacesoldkernels[@]/%/-docs}")
  replaces=("${_replacesarchkernel[@]/%/-docs}" "${_replacesoldkernels[@]/%/-docs}")
  
  local builddir="$pkgdir/usr/lib/modules/$(<version)/build"

  cd $_srcname

  msg2 "Installing documentation..."
  mkdir -p "$builddir"
  cp -t "$builddir" -a Documentation

  msg2 "Removing doctrees..."
  rm -r "$builddir/Documentation/output/.doctrees"

  msg2 "Moving HTML docs..."
  local src dst
  while read -rd '' src; do
    dst="$builddir/Documentation/${src#$builddir/Documentation/output/}"
    mkdir -p "${dst%/*}"
    mv "$src" "$dst"
    rmdir -p --ignore-fail-on-non-empty "${src%/*}"
  done < <(find "$builddir/Documentation/output" -type f -print0)

  msg2 "Adding symlink..."
  mkdir -p "$pkgdir/usr/share/doc"
  ln -sr "$builddir/Documentation" "$pkgdir/usr/share/doc/$pkgbase"

  msg2 "Fixing permissions..."
  chmod -Rc u=rwX,go=rX "$pkgdir"
}

_package-chromebook() {
  pkgdesc="Kernel image sign for ${pkgbase^} - Chromebooks"
  depends=('linux-libre')
  provides=("${_replacesarchkernel[@]/%/-armv7-chromebook=${_archpkgver}}")
  conflicts=("${_replacesarchkernel[@]/%/-armv7-chromebook}" "${_replacesoldkernels[@]/%/-armv7-chromebook}")
  replaces=("${_replacesarchkernel[@]/%/-armv7-chromebook}" "${_replacesoldkernels[@]/%/-armv7-chromebook}")
  install=linux-chromebook.install

  cd $_srcname

  msg2 "Setting options for device tree compiler..."
  cp ../kernel.its .
  mkimage -D "-I dts -O dtb -p 2048" -f kernel.its kernel.itb
  dd if=/dev/zero of=bootloader.bin bs=512 count=1
  echo 'console=tty0 init=/sbin/init root=PARTUUID=%U/PARTNROFF=1 rootwait rw noinitrd' > cmdline

  msg2 "Creating kernel sign..."
  vbutil_kernel \
    --pack vmlinux.kpart \
    --version 1 \
    --vmlinuz kernel.itb \
    --arch arm \
    --keyblock ../kernel.keyblock \
    --signprivate ../kernel_data_key.vbprivk \
    --config cmdline \
    --bootloader bootloader.bin

  msg2 "Installing kernel sign..."
  mkdir -p "$pkgdir/boot"
  cp vmlinux.kpart "$pkgdir/boot"
}

pkgname=("$pkgbase" "$pkgbase-headers" "$pkgbase-docs")
[[ $CARCH = armv7h ]] && pkgname+=("$pkgbase-chromebook")
for _p in "${pkgname[@]}"; do
  eval "package_$_p() {
    $(declare -f "_package${_p#$pkgbase}")
    _package${_p#$pkgbase}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:
