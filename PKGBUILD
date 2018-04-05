# $Id$
# Maintainer: Joan Figueras <ffigue at gmail dot com>
# Contributor: Yoshi2889 <rick.2889 at gmail dot com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>

##
## The following variables take integer value, change at your wish
##
## Config you want to build kernel:
## 1 xanmod's provided (default)
## 2 Archlinux stock
_configuration=1
##
## Look inside 'choose-gcc-optimization.sh' to choose your microarchitecture
## Only valid numbers are: 0 to 22
## Default is: 0 => generic
## Good option if your package is for one machine: 22 => native
_microarchitecture=0
##

pkgbase=linux-xanmod
_srcname=linux
pkgver=4.16.0
xanmod=1
pkgrel=1
arch=('x86_64')
url="http://www.xanmod.org/"
license=('GPL2')
makedepends=('xmlto' 'kmod' 'inetutils' 'bc' 'libelf')
options=('!strip')

# Arch stock configuration files are directly pulled from a specific trunk
arch_config_trunk=d7625be23f83416491d202d5cea96e5a871fb216

# Arch additional patches
arch_patches=(
  0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch
  0002-drm-i915-edp-Only-use-the-alternate-fixed-mode-if-it.patch
)

source=(https://github.com/xanmod/linux/archive/${pkgver}-xanmod${xanmod}.tar.gz
       60-linux.hook  # pacman hook for depmod
       90-linux.hook  # pacman hook for initramfs regeneration
       ${pkgbase}.preset   # standard config files for mkinitcpio ramdisk
       choose-gcc-optimization.sh
)
for _patch in ${arch_patches[@]} ; do source+=("${_patch}::https://git.archlinux.org/svntogit/packages.git/plain/trunk/${_patch}?h=packages/linux&id=${arch_config_trunk}") ; done
source_x86_64=("config::https://git.archlinux.org/svntogit/packages.git/plain/trunk/config?h=packages/linux&id=${arch_config_trunk}")

sha256sums=('c64bacc3860afd2da7dca7777a9f1b701fd490e42befcb21d62414377d1b8fa1'
            'ae2e95db94ef7176207c690224169594d49445e04249d2499e9d2fbc117a0b21'
            '75f99f5239e03238f88d1a834c50043ec32b1dc568f2cc291b07d04718483919'
            'ad6344badc91ad0630caacde83f7f9b97276f80d26a20619a87952be65492c65'
            'bae7b9253512ef5724629738bfd4460494a08566f8225b9d8ec544ea8cc2f3a5'
            'f47b643156811581b31963cf56672f35c5ab275fcb01a3f534577676a4df0bc1'
            '971fcb1a89c62333871a7371a488dc78484ed5972230ff3ced31a11ad44714de')
sha256sums_x86_64=('d60cb7258ab632ab3ca25071266632970ae0ded00c1f4004fa8c6fc3547225c5')

_kernelname=${pkgbase#linux}

prepare() {
  cd "${srcdir}/linux-${pkgver}-xanmod${xanmod}"

  case $_configuration in
    1) true ; answer="Xanmod" ;;
    2) cat "${srcdir}/config" > ./.config ; answer="Archlinux" ;;
    *) echo "Variable _configuration should be 1 or 2"; exit 1 ;;
  esac
  warning "This package is now totally non-interactive!!!!!"
  msg "Building this kernel with configuration provided by: $answer"
  sleep 2
  warning "To change this modify _configuration variable in PKGBUILD"

  if [ "${_kernelname}" != "" ]; then
    #sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config
  fi

  # CONFIG_STACK_VALIDATION gives better stack traces. Also is enabled in all official kernel packages by Archlinux team
  sed -i "s|# CONFIG_STACK_VALIDATION.*|CONFIG_STACK_VALIDATION=y|" ./.config

  # Archlinux patches
  # [0] disable USER_NS for non-root users by default
  # [1] https://bugs.archlinux.org/task/56575
  # [2] https://nvd.nist.gov/vuln/detail/CVE-2017-8824
  for n in ${arch_patches[@]} ; do patch -Np1 -i ../$n ; done

  # Enable IKCONFIG following Arch's philosophy
  sed -i "s|# CONFIG_IKCONFIG.*|CONFIG_IKCONFIG=y\nCONFIG_IKCONFIG_PROC=y|" ./.config

  # EXPERIMENTAL: let's user choose microarchitecture optimization in GCC
  ${srcdir}/choose-gcc-optimization.sh $_microarchitecture

  # set extraversion to pkgrel and empty localversion
  sed -e "/^EXTRAVERSION =/s/=.*/= -${pkgrel}/" \
      -e "/^EXTRAVERSION =/aLOCALVERSION =" \
      -i Makefile

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
  cd "${srcdir}/linux-${pkgver}-xanmod${xanmod}"

  make bzImage modules
}

_package() {
  pkgdesc="The Linux kernel and modules with Xanmod patches"
  depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=0.7')
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=('linux' 'linux-xanmod-git')
  replaces=('linux-xanmod-git')
  conflicts=('linux-xanmod-git')
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  install=linux.install

  cd "${srcdir}/linux-${pkgver}-xanmod${xanmod}"

  # get kernel version
  _kernver="$(make kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{boot,usr/lib/modules}
  make INSTALL_MOD_PATH="${pkgdir}/usr" modules_install
  cp arch/x86/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"

  # make room for external modules
  local _extramodules="extramodules-${_basekernel}${_kernelname}"
  ln -s "../${_extramodules}" "${pkgdir}/usr/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from hook
  echo "${_kernver}" |
    install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modules/${_extramodules}/version"

  # remove build and source links
  rm "${pkgdir}"/usr/lib/modules/${_kernver}/{source,build}

  # now we call depmod...
  depmod -b "${pkgdir}/usr" -F System.map "${_kernver}"

  # add vmlinux
  install -Dt "${pkgdir}/usr/lib/modules/${_kernver}/build" -m644 vmlinux

  # sed expression for following substitutions
  local _subst="
    s|%PKGBASE%|${pkgbase}|g
    s|%KERNVER%|${_kernver}|g
    s|%EXTRAMODULES%|${_extramodules}|g
  "

  # hack to allow specifying an initially nonexisting install file
  sed "${_subst}" "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  # install mkinitcpio preset file
  sed "${_subst}" ../${pkgbase}.preset |
    install -Dm644 /dev/stdin "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # install pacman hooks
  sed "${_subst}" ../60-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/60-${pkgbase}.hook"
  sed "${_subst}" ../90-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/90-${pkgbase}.hook"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for Xanmod Linux kernel"
  provides=('linux-headers' 'linux-xanmod-git-headers')
  replaces=('linux-xanmod-git-headers')
  conflicts=('linux-xanmod-git-headers')

  cd "${srcdir}/linux-${pkgver}-xanmod${xanmod}"
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  install -Dt "${_builddir}" -m644 Makefile .config Module.symvers
  install -Dt "${_builddir}/kernel" -m644 kernel/Makefile

  mkdir "${_builddir}/.tmp_versions"

  cp -t "${_builddir}" -a include scripts

  install -Dt "${_builddir}/arch/x86" -m644 arch/x86/Makefile
  install -Dt "${_builddir}/arch/x86/kernel" -m644 arch/x86/kernel/asm-offsets.s

  cp -t "${_builddir}/arch/x86" -a arch/x86/include

  install -Dt "${_builddir}/drivers/md" -m644 drivers/md/*.h
  install -Dt "${_builddir}/net/mac80211" -m644 net/mac80211/*.h

  # http://bugs.archlinux.org/task/13146
  install -Dt "${_builddir}/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # http://bugs.archlinux.org/task/20402
  install -Dt "${_builddir}/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "${_builddir}/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "${_builddir}/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  # add xfs and shmem for aufs building
  mkdir -p "${_builddir}"/{fs/xfs,mm}

  # copy in Kconfig files
  find . -name Kconfig\* -exec install -Dm644 {} "${_builddir}/{}" \;

  # add objtool for external module building and enabled VALIDATION_STACK option
  install -Dt "${_builddir}/tools/objtool" tools/objtool/objtool

  # remove unneeded architectures
  local _arch
  for _arch in "${_builddir}"/arch/*/; do
    [[ ${_arch} == */x86/ ]] && continue
    rm -r "${_arch}"
  done

  # remove files already in linux-docs package
  rm -r "${_builddir}/Documentation"

  # remove now broken symlinks
  find -L "${_builddir}" -type l -printf 'Removing %P\n' -delete

  # Fix permissions
  chmod -R u=rwX,go=rX "${_builddir}"

  # strip scripts directory
  local _binary _strip
  while read -rd '' _binary; do
    case "$(file -bi "${_binary}")" in
      *application/x-sharedlib*)  _strip="${STRIP_SHARED}"   ;; # Libraries (.so)
      *application/x-archive*)    _strip="${STRIP_STATIC}"   ;; # Libraries (.a)
      *application/x-executable*) _strip="${STRIP_BINARIES}" ;; # Binaries
      *) continue ;;
    esac
    /usr/bin/strip ${_strip} "${_binary}"
  done < <(find "${_builddir}/scripts" -type f -perm -u+w -print0 2>/dev/null)
}

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the Linux kernel"
  provides=('linux-docs')

  cd "${srcdir}/linux-${pkgver}-xanmod${xanmod}"
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  mkdir -p "${_builddir}"
  cp -t "${_builddir}" -a Documentation

  # Fix permissions
  chmod -R u=rwX,go=rX "${_builddir}"
}

pkgname=("${pkgbase}" "${pkgbase}-headers" "${pkgbase}-docs")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#${pkgbase}}")
    _package${_p#${pkgbase}}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:
