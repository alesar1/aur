# Maintainer: Evgeny Myandin <evgeny.myandin[at]gmail[dot]com>
# Manjaro credits:
# Bernhard Landauer <bernhard@manjaro.org>
# Philip Müller <philm[at]manjaro[dot]org>
# Arch credits:
# Tobias Powalowski <tpowa@archlinux.org>
# Thomas Baechler <thomas@archlinux.org>
#
# This is original kernel of Manjaro Linux + ACS patch


pkgbase=linux-acs-manjaro
pkgname=('linux-acs-manjaro' 'linux-acs-manjaro-headers')
_kernelname=-ACS-MANJARO
_basekernel=5.16
_basever=516
pkgver=5.16.16
pkgrel=1
arch=('x86_64')
url="https://www.kernel.org/"
license=('GPL2')
makedepends=('bc'
    'docbook-xsl'
    'libelf'
    'pahole'
    'git'
    'inetutils'
    'kmod'
    'xmlto'
    'cpio'
    'perl'
    'tar'
    'xz')
options=('!strip')
source=("https://www.kernel.org/pub/linux/kernel/v5.x/linux-${_basekernel}.tar.xz"
        "https://www.kernel.org/pub/linux/kernel/v5.x/patch-${pkgver}.xz"
        'config'
        # ARCH Patches
        '0001-ZEN-Add-sysctl-and-CONFIG-to-disallow-unprivileged-CLONE_NEWUSER.patch'
        '0002-Btintel_Fix_bdaddress_comparison_with_garbage_value.patch'
        '0003_Bluetooth_Read_codec_capabilities_only_if_supported.patch'
        '0004_Bluetooth_fix_deadlock_for_RFCOMM_sk_state_change.patch'
        '0005_mt76_mt7921_add_support_for_PCIe_ID_0x0608-0x0616.patch'
        '0006_mt76_mt7921_reduce_log_severity_levels_for_informative_messages.patch'
        '0007_Revert_NFSv4.1_query_for_fs_location_attr_on_a_new_file_system.patch'
        # MANJARO Patches
        '0101-i2c-nuvoton-nc677x-hwmon-driver.patch'
        '0105-quirk-kernel-org-bug-210681-firmware_rome_error.patch'
        # Bootsplash
        '0301-revert-fbcon-remove-now-unusued-softback_lines-cursor-argument.patch'
        '0302-revert-fbcon-remove-no-op-fbcon_set_origin.patch'
        '0303-revert-fbcon-remove-soft-scrollback-code.patch'
        '0401-bootsplash.patch'
        '0402-bootsplash.patch'
        '0403-bootsplash.patch'
        '0404-bootsplash.patch'
        '0405-bootsplash.patch'
        '0406-bootsplash.patch'
        '0407-bootsplash.patch'
        '0408-bootsplash.patch'
        '0409-bootsplash.patch'
        '0410-bootsplash.patch'
        '0411-bootsplash.patch'
        '0412-bootsplash.patch'
        '0413-bootsplash.gitpatch'
        # ACS override patch
        '0999-acs.gitpatch')
sha256sums=('027d7e8988bb69ac12ee92406c3be1fe13f990b1ca2249e226225cd1573308bb'
            '9e7af5007d3596c1efee8556aaa1b1a2e40ddded107448b583624a1f305376db'
            '585d1a7e885ad8cf98408b0c79d9e3ea92ba385acc0c65ee14a41a9bbbdef485'
            '986f8d802f37b72a54256f0ab84da83cb229388d58c0b6750f7c770818a18421'
            'b89188b1bc3516d54965dd36def6a2af3d81379e53ff7e527bbd91f77c6f191b'
            'adfabecb2e23cfaebe1d493a54119a967a97930dac677e20f26d4bcaa1b80f3c'
            '7aa2293dff32463665c2a35054c5164470e24075ddda181715d4079ca126cbbd'
            '9c67c62e9e744eaeae43c80d83c9eb61b486406cf18cd057427bdbc44f8e4e10'
            'f8fc51c0c644ae743154c37b77ade50fa5a950980c9dd56d8752e4d6b5dfb153'
            '24fc6f087aa82a72905f0fb6b9f3f5f18741187d5a425f5ec845dab436ab1c58'
            '7823d7488f42bc4ed7dfae6d1014dbde679d8b862c9a3697a39ba0dae5918978'
            '5e804e1f241ce542f3f0e83d274ede6aa4b0539e510fb9376f8106e8732ce69b'
            '2b11905b63b05b25807dd64757c779da74dd4c37e36d3f7a46485b1ee5a9d326'
            '94a8538251ad148f1025cc3de446ce64f73dc32b01815426fb159c722e8fa5bc'
            '1f18c5c10a3c63e41ecd05ad34cd9f6653ba96e9f1049ce2b7bb6da2578ae710'
            '59202940d4f12bad23c194a530edc900e066866c9945e39748484a6545af96de'
            'e096b127a5208f56d368d2cb938933454d7200d70c86b763aa22c38e0ddb8717'
            '8c1c880f2caa9c7ae43281a35410203887ea8eae750fe8d360d0c8bf80fcc6e0'
            '1144d51e5eb980fceeec16004f3645ed04a60fac9e0c7cf88a15c5c1e7a4b89e'
            'dd4b69def2efacf4a6c442202ad5cb93d492c03886d7c61de87696e5a83e2846'
            '028b07f0c954f70ca37237b62e04103e81f7c658bb8bd65d7d3c2ace301297dc'
            'a0c548c5703d25ae34b57931f1162de8b18937e676e5791a0f039922090881e7'
            '8dbb5ab3cb99e48d97d4e2f2e3df5d0de66f3721b4f7fd94a708089f53245c77'
            'a7aefeacf22c600fafd9e040a985a913643095db7272c296b77a0a651c6a140a'
            'e9f22cbb542591087d2d66dc6dc912b1434330ba3cd13d2df741d869a2c31e89'
            '27471eee564ca3149dd271b0817719b5565a9594dc4d884fe3dc51a5f03832bc'
            '60e295601e4fb33d9bf65f198c54c7eb07c0d1e91e2ad1e0dd6cd6e142cb266d'
            '035ea4b2a7621054f4560471f45336b981538a40172d8f17285910d4e0e0b3ef'
            '2542b5cea79ab5817ce3d30c54acd045966b9c14587bfb0b2f50d473da48a1d5')

prepare() {
  cd "linux-${_basekernel}"

  # add upstream patch
  msg "add upstream patch"
  patch -p1 -i "../patch-${pkgver}"

  local src
  for src in "${source[@]}"; do
      src="${src%%::*}"
      src="${src##*/}"
      [[ $src = *.patch ]] || continue
      msg2 "Applying patch: $src..."
      patch -Np1 < "../$src"
  done

  msg2 "0513-bootsplash"
  git apply -p1 < "../0413-bootsplash.gitpatch"

  msg2 "0999-acs"
  patch --ignore-whitespace --fuzz 3 -p1 < "../0999-acs.gitpatch"

  msg2 "add config"
  cat "../config" > ./.config

  if [ "${_kernelname}" != "" ]; then
    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config
  fi

  msg "set extraversion to pkgrel"
  sed -ri "s|^(EXTRAVERSION =).*|\1 -${pkgrel}|" Makefile

  msg "don't run depmod on 'make install'"
  # We'll do this ourselves in packaging
  sed -i '2iexit 0' scripts/depmod.sh

  msg "get kernel version"
  make prepare

  msg "rewrite configuration"
  yes "" | make config >/dev/null
}

build() {
  cd "linux-${_basekernel}"

  msg "build"
  make ${MAKEFLAGS} LOCALVERSION= bzImage modules
}

package_linux-acs-manjaro() {
  pkgdesc="The Linux Manjaro standart kernel and modules with ACS patch"
  depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=27')
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=(VIRTUALBOX-GUEST-MODULES WIREGUARD-MODULE)
  replaces=(virtualbox-guest-modules wireguard)

  cd "linux-${_basekernel}"

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"

  mkdir -p "${pkgdir}"/{boot,usr/lib/modules}
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}/usr" INSTALL_MOD_STRIP=1 modules_install

  # systemd expects to find the kernel here to allow hibernation
  # https://github.com/systemd/systemd/commit/edda44605f06a41fb86b7ab8128dcf99161d2344
  cp arch/x86/boot/bzImage "${pkgdir}/usr/lib/modules/${_kernver}/vmlinuz"

  # Used by mkinitcpio to name the kernel
  echo "${pkgbase}" | install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modules/${_kernver}/pkgbase"

  # add kernel version
  echo "${pkgver}-${pkgrel}${_kernelname} x64" > "${pkgdir}/boot/${pkgbase}-${CARCH}.kver"

  # make room for external modules
  local _extramodules="extramodules-${_basekernel}${_kernelname:--MANJARO}"
  ln -s "../${_extramodules}" "${pkgdir}/usr/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from hook
  echo "${_kernver}" |
    install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modules/${_extramodules}/version"

  # remove build and source links
  rm "${pkgdir}"/usr/lib/modules/${_kernver}/{source,build}

  # now we call depmod...
  depmod -b "${pkgdir}/usr" -F System.map "${_kernver}"
}

package_linux-acs-manjaro-headers() {
  pkgdesc="Headers and scripts for building modules for the Linux Manjaro standart kernel with ACS patch"
  depends=('gawk' 'python' 'libelf' 'pahole')

  cd "linux-${_basekernel}"
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  install -Dt "${_builddir}" -m644 Makefile .config Module.symvers
  install -Dt "${_builddir}/kernel" -m644 kernel/Makefile
  install -Dt "${_builddir}" -m644 vmlinux  

  mkdir "${_builddir}/.tmp_versions"

  cp -t "${_builddir}" -a include scripts

  install -Dt "${_builddir}/arch/x86" -m644 "arch/x86/Makefile"
  install -Dt "${_builddir}/arch/x86/kernel" -m644 "arch/x86/kernel/asm-offsets.s"

  cp -t "${_builddir}/arch/x86" -a "arch/x86/include"

  install -Dt "${_builddir}/drivers/md" -m644 drivers/md/*.h
  install -Dt "${_builddir}/net/mac80211" -m644 net/mac80211/*.h

  # https://bugs.archlinux.org/task/13146
  install -Dt "${_builddir}/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # https://bugs.archlinux.org/task/20402
  install -Dt "${_builddir}/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "${_builddir}/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "${_builddir}/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  # https://bugs.archlinux.org/task/71392
  install -Dt "${_builddir}/drivers/iio/common/hid-sensors" -m644 drivers/iio/common/hid-sensors/*.h

  # add xfs and shmem for aufs building
  mkdir -p "${_builddir}"/{fs/xfs,mm}

  # copy in Kconfig files
  find . -name Kconfig\* -exec install -Dm644 {} "${_builddir}/{}" \;

  # add objtool for external module building and enabled VALIDATION_STACK option
  install -Dt "${_builddir}/tools/objtool" tools/objtool/objtool

  # required when DEBUG_INFO_BTF_MODULES is enabled
  install -Dt "${_builddir}/tools/bpf/resolve_btfids" tools/bpf/resolve_btfids/resolve_btfids

  # remove unneeded architectures
  local _arch
  for _arch in "${_builddir}"/arch/*/; do
    [[ ${_arch} == */x86/ ]] && continue
    rm -r "${_arch}"
  done

  # remove documentation files
  rm -r "${_builddir}/Documentation"

  # strip scripts directory
  local file
  while read -rd '' file; do
    case "$(file -bi "$file")" in
      application/x-sharedlib\;*)      # Libraries (.so)
        strip $STRIP_SHARED "$file" ;;
      application/x-archive\;*)        # Libraries (.a)
        strip $STRIP_STATIC "$file" ;;
      application/x-executable\;*)     # Binaries
        strip $STRIP_BINARIES "$file" ;;
      application/x-pie-executable\;*) # Relocatable binaries
        strip $STRIP_SHARED "$file" ;;
    esac
  done < <(find "${_builddir}" -type f -perm -u+x ! -name vmlinux -print0 2>/dev/null)
  strip $STRIP_STATIC "${_builddir}/vmlinux"

  # remove unwanted files
  find ${_builddir} -name '*.orig' -delete
}
