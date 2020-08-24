# $Id$
# Maintainer: shmilee <shmilee.zju@gmail.com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>
# Contributor: Andreas Radke <andyrtr@archlinux.org>

# last/latest "longterm maintenance" kernel releases
# https://www.kernel.org/category/releases.html
# 5.4 Greg Kroah-Hartman & Sasha Levin 2019-11-24 Dec, 2021
_LLL_VER=5.4
_LLL_SUBVER=60

# Bisect debug, v5.4.47 -> v5.4.48
_Bisect_debug=off # on, test, off
if [ "$_Bisect_debug" == "on" ]; then
  _burlbase=https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git
  _bcommit=f7757368e0f0b3e108088ca7b5b8abda6faa7ebc #Peter, 8 x
# _bcommit=2e256dd5b05561b051e895121530d2a0062c7a0f #Jann, 10 v
# _bdiff="$_burlbase/diff/?h=linux-${_LLL_VER}.y&id2=v${_LLL_VER}.${_LLL_SUBVER}&id=$_bcommit"
  _bpatch="$_burlbase/rawdiff/?h=linux-${_LLL_VER}.y&id2=v${_LLL_VER}.${_LLL_SUBVER}&id=$_bcommit"
  msg "Bisect debug on: v${_LLL_VER}.${_LLL_SUBVER} --> $_bcommit"
  msg "Bisect debug patch: $_bpatch"
fi

# NUMA is optimized for multi-socket motherboards.
# A single multi-core CPU can actually run slower with NUMA enabled.
# Most users can disable NUMA.
# see, https://bugs.archlinux.org/task/31187
_NUMA_disable=y

# Add ck patch set
# http://ck.kolivas.org/patches/5.0/
# https://wiki.archlinux.org/index.php/Linux-ck
_CK_VER=1
_CK_PATCH="http://ck.kolivas.org/patches/5.0/${_LLL_VER}/${_LLL_VER}-ck${_CK_VER}/patch-${_LLL_VER}-ck${_CK_VER}.xz"

# Ultra Kernel Samepage Merging
_UKSM_VER=0.1.2.6
_UKSM_COMMIT=150e27c4e7f66e4519c89573305eca8c42091f4d
_UKSM_PATCH="https://raw.githubusercontent.com/dolohow/uksm/${_UKSM_COMMIT}/v5.x/uksm-${_LLL_VER}.patch"

# CJKTTY patch 
# https://github.com/Gentoo-zh/linux-cjktty
# https://github.com/torvalds/linux/compare/v5.4...Gentoo-zh:5.4-utf8
_CJKTTY_LLL_VER=5.4
_CJKTTY_PATCH_FILE=linux-cjktty-${_CJKTTY_LLL_VER}
_CJKTTY_PATCH_URL="https://github.com/torvalds/linux/compare/v${_CJKTTY_LLL_VER}...Gentoo-zh:${_CJKTTY_LLL_VER}-utf8.patch"
_CJKTTY_PATCH="${_CJKTTY_PATCH_FILE}.patch::${_CJKTTY_PATCH_URL}"

_PATHSET_DESC="ck${_CK_VER} uksm-${_UKSM_VER} and cjktty"

pkgbase=linux-shmilee
pkgname=("${pkgbase}" "${pkgbase}-headers")
if [ "$_Bisect_debug" == "off" ]; then
  pkgname+=("${pkgbase}-docs")
fi
_srcname=linux-${_LLL_VER}
pkgver=${_LLL_VER}.${_LLL_SUBVER}
pkgrel=1
arch=('x86_64')
url="https://www.kernel.org/"
license=('GPL2')
makedepends=('xmlto' 'kmod' 'inetutils' 'bc' 'libelf' 'python-sphinx' 'graphviz')
options=('!strip')
source=(
        "https://www.kernel.org/pub/linux/kernel/v5.x/${_srcname}.tar.xz"
        "https://www.kernel.org/pub/linux/kernel/v5.x/${_srcname}.tar.sign"
        "https://www.kernel.org/pub/linux/kernel/v5.x/patch-${pkgver}.xz"
        #"https://www.kernel.org/pub/linux/kernel/v5.x/patch-${pkgver}.sign"
        ${_CK_PATCH}
        ${_UKSM_PATCH}
        ${_CJKTTY_PATCH}
        'legacy-wireless-ioctls-4.9+.patch'
        'sphinx-workaround.patch'
        'ck-patch-for-5.4.57+.patch'
        'uksm-patch-for-5.4.33+.patch'
        'linux-cjktty-patch-for-5.4.36+.patch'
        'linux-cjktty-patch-for-5.4.54+.patch'
        'broken-sleep-5.4.48+.patch::https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/patch/?id=f7757368e0f0b3e108088ca7b5b8abda6faa7ebc'
        'config'         # the main kernel config file
        '60-linux.hook'  # pacman hook for depmod
        '90-linux.hook'  # pacman hook for initramfs regeneration
        'linux.preset'   # standard config files for mkinitcpio ramdisk
)
validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linus Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman 
)
# https://www.kernel.org/pub/linux/kernel/v4.x/sha256sums.asc
sha256sums=('bf338980b1670bca287f9994b7441c2361907635879169c64ae78364efc5f491'
            'SKIP'
            '03fd731d632249ec5233a02343273f7f23e23127ebd860490b283a01caecff80'
            'f445eea4d0ec2015a25f1ad625c848f4f2252099795966fa4105e0aa29674c5c'
            '81d34bf02e771a126af5cb382d44a86dcc759c88b7c89fc7e5b7737731b9130e'
            '50213f3270499fceb452946252d61f5471571c77baf3dd510fbb00cfa9831c9a'
            'edfb9939840b8710d6ee0385a8e968609eef348295465bb087744c18ed3496e0'
            'b7c814c8183e4645947a6dcc3cbf80431de8a8fd4e895b780f9a5fd92f82cb8e'
            'a10a4848c7a9842c0c7760b087ea38a4356dc1a2c2e26334cb0106c25785554f'
            '6826624f65276927de012f040e77b02231fe6345b9da7c702deacd9372ea001e'
            '573f1c40951a6ee4cf6b07a6a8a1123b00fcd8bff29843905cf191e08f1d87f2'
            '2c9faabb5e09b1f818b051ced3eb90b6c04aa08616952d99eedf328c7c8dda2f'
            '9f9ec5becca27bc7b65b372254bcd4c64069deff1d3b7fa15e6e416595163654'
            '7ce388e429d8df479a721285e445e116c5ee41e3126a702862e59056460b655e'
            'ae2e95db94ef7176207c690224169594d49445e04249d2499e9d2fbc117a0b21'
            '75f99f5239e03238f88d1a834c50043ec32b1dc568f2cc291b07d04718483919'
            'ad6344badc91ad0630caacde83f7f9b97276f80d26a20619a87952be65492c65')

_kernelname=${pkgbase#linux}

if [ "$_Bisect_debug" != "off" ]; then
  makedepends+=('wget' 'modprobed-db')
  PKGEXT='.pkg.tar'
fi

prepare() {
  cd ${_srcname}

  # add upstream patch
  patch -p1 -i ../patch-${pkgver}

  # Bisect debug
  if [ "$_Bisect_debug" == "on" ]; then
    msg "Patching upstream v$pkgver --> $_bcommit"
    if [ ! -f "${srcdir}/../v${pkgver}-${pkgrel}-$_bcommit" ]; then
      wget "$_bpatch" -O "${srcdir}/../v${pkgver}-${pkgrel}-$_bcommit"
    fi
    patch -p1 -i "${srcdir}/../v${pkgver}-${pkgrel}-$_bcommit"
  fi
  # Bisect debug result
  if [ "$_Bisect_debug" != "on" ]; then
    patch -R -p1 -i "../broken-sleep-5.4.48+.patch"
  fi

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git

  # fix naming schema in EXTRAVERSION of ck patch set
  sed -i -re "s/^(.EXTRAVERSION).*$/\1 = /" "../patch-${_LLL_VER}-ck${_CK_VER}"
  # Patch source with ck patch set
  msg "Patching source with ck${_CK_VER} including BFS"
  cp "../patch-${_LLL_VER}-ck${_CK_VER}" "../patch-${_LLL_VER}.${_LLL_SUBVER}-ck${_CK_VER}"
  patch -i ../ck-patch-for-5.4.57+.patch "../patch-${_LLL_VER}.${_LLL_SUBVER}-ck${_CK_VER}"
  patch -Np1 -i "../patch-${_LLL_VER}.${_LLL_SUBVER}-ck${_CK_VER}"

  msg "Patching source with uksm ${_UKSM_VER} patches"
  cp "../uksm-${_LLL_VER}.patch" "../uksm-${_LLL_VER}.${_LLL_SUBVER}.patch"
  patch -i ../uksm-patch-for-5.4.33+.patch "../uksm-${_LLL_VER}.${_LLL_SUBVER}.patch"
  patch -Np1 -i "../uksm-${_LLL_VER}.${_LLL_SUBVER}.patch"

  msg "Patching source with Gentoo-zh/linux-cjktty patches"
  cp "../${_CJKTTY_PATCH_FILE}.patch" "../${_CJKTTY_PATCH_FILE}.${_LLL_SUBVER}.patch"
  patch -i ../linux-cjktty-patch-for-5.4.36+.patch "../${_CJKTTY_PATCH_FILE}.${_LLL_SUBVER}.patch"
  patch -i ../linux-cjktty-patch-for-5.4.54+.patch "../${_CJKTTY_PATCH_FILE}.${_LLL_SUBVER}.patch"
  patch -Np1 -i "../${_CJKTTY_PATCH_FILE}.${_LLL_SUBVER}.patch"

  msg "Patching source to reinstate the legacy wireless ioctls"
  patch -Np2 -i ../legacy-wireless-ioctls-4.9+.patch

  msg "Patching sphinx extensions for htmldocs"
  patch -Np1 -i ../sphinx-workaround.patch

  cp -Tf ../config .config

  if [ "${_kernelname}" != "" ]; then
    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config
  fi

  # set extraversion to pkgrel
  sed -ri "s|^(EXTRAVERSION =).*|\1 -${pkgrel}|" Makefile

  # Optionally disable NUMA for 64-bit kernels only
  if [ -n "$_NUMA_disable" ] && [ "${CARCH}" = "x86_64" ]; then
      msg "Disabling NUMA from kernel config..."
      sed -i -e 's/CONFIG_NUMA=y/# CONFIG_NUMA is not set/' \
        -i -e '/CONFIG_AMD_NUMA=y/d' \
        -i -e '/CONFIG_X86_64_ACPI_NUMA=y/d' \
        -i -e '/CONFIG_NODES_SPAN_OTHER_NODES=y/d' \
        -i -e '/# CONFIG_NUMA_EMU is not set/d' \
        -i -e '/CONFIG_NODES_SHIFT=6/d' \
        -i -e '/CONFIG_NEED_MULTIPLE_NODES=y/d' \
        -i -e '/# CONFIG_MOVABLE_NODE is not set/d' \
        -i -e '/CONFIG_USE_PERCPU_NUMA_NODE_ID=y/d' \
        -i -e '/CONFIG_ACPI_NUMA=y/d' ./.config
  fi

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

  if [ "$_Bisect_debug" != "off" ]; then
    make LSMOD=$HOME/.config/modprobed.db localmodconfig
  fi

  # rewrite configuration
  yes "" | make config >/dev/null
}

build() {
  cd ${_srcname}

  if [ "$_Bisect_debug" == "off" ]; then
    make ${MAKEFLAGS} LOCALVERSION= bzImage modules htmldocs
  else
    make ${MAKEFLAGS} LOCALVERSION= bzImage modules
  fi
}

_package() {
  pkgdesc="The ${pkgbase/linux/Linux} kernel and modules with the ${_PATHSET_DESC} patchsets"
  [ "${pkgbase}" = "linux" ] && groups=('base')
  depends=('coreutils' 'kmod' 'mkinitcpio')
  optdepends=('crda: to set the correct wireless channels of your country'
              'linux-firmware: firmware images needed for some devices')
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  install=linux.install

  cd ${_srcname}

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{boot,usr/lib/modules}

  msg2 "Installing boot image..."
  install -Dm644 "$(make -s image_name)" "${pkgdir}/boot/vmlinuz-${pkgbase}"

  msg2 "Installing modules..."
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}/usr" modules_install

  # make room for external modules
  local _extramodules="extramodules-${_basekernel}${_kernelname:--ARCH}"
  ln -s "../${_extramodules}" "${pkgdir}/usr/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from hook
  echo "${_kernver}" |
    install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modules/${_extramodules}/version"

  # remove build and source links
  rm "${pkgdir}"/usr/lib/modules/${_kernver}/{source,build}

  # remove the firmware
  rm -rf "${pkgdir}/usr/lib/firmware"

  # now we call depmod...
  depmod -b "${pkgdir}/usr" -F System.map "${_kernver}"

  msg2 "Installing hooks..."  
  # sed expression for following substitutions
  local _subst="
    s|%PKGBASE%|${pkgbase}|g
    s|%KERNVER%|${_kernver}|g
    s|%EXTRAMODULES%|${_extramodules}|g
  "

  # hack to allow specifying an initially nonexisting install file
  sed "${_subst}" "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  # install mkinitcpio preset file and pacman hooks
  sed "${_subst}" ../linux.preset | install -Dm644 /dev/stdin \
    "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"
  sed "${_subst}" ../60-linux.hook | install -Dm644 /dev/stdin \
    "${pkgdir}/usr/share/libalpm/hooks/60-${pkgbase}.hook"
  sed "${_subst}" ../90-linux.hook | install -Dm644 /dev/stdin \
    "${pkgdir}/usr/share/libalpm/hooks/90-${pkgbase}.hook"

  msg2 "Fixing permissions..."
  chmod -Rc u=rwX,go=rX "$pkgdir"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase/linux/Linux} kernel"

  cd ${_srcname}
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  msg2 "Installing build files..."
  install -Dt "${_builddir}" -m644 Makefile .config Module.symvers System.map vmlinux
  install -Dt "${_builddir}/kernel" -m644 kernel/Makefile
  install -Dt "${_builddir}/arch/x86" -m644 arch/x86/Makefile
  cp -t "${_builddir}" -a scripts

  # add objtool for external module building and enabled VALIDATION_STACK option
  install -Dt "${_builddir}/tools/objtool" tools/objtool/objtool

  # add xfs and shmem for aufs building
  mkdir -p "${_builddir}"/{fs/xfs,mm}

  # ???
  mkdir "${_builddir}/.tmp_versions"

  msg2 "Installing headers..."
  cp -t "${_builddir}" -a include
  cp -t "${_builddir}/arch/x86" -a arch/x86/include
  install -Dt "${_builddir}/arch/x86/kernel" -m644 arch/x86/kernel/asm-offsets.s

  install -Dt "${_builddir}/drivers/md" -m644 drivers/md/*.h
  install -Dt "${_builddir}/net/mac80211" -m644 net/mac80211/*.h

  # http://bugs.archlinux.org/task/13146
  install -Dt "${_builddir}/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # http://bugs.archlinux.org/task/20402
  install -Dt "${_builddir}/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "${_builddir}/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "${_builddir}/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  msg2 "Installing KConfig files..."
  find . -name 'Kconfig*' -exec install -Dm644 {} "${_builddir}/{}" \;

  msg2 "Removing unneeded architectures..."
  local _arch
  for _arch in "${_builddir}"/arch/*/; do
    [[ ${_arch} == */x86/ ]] && continue
    rm -r "${_arch}"
  done

  msg2 "Removing files already in linux-docs package..."
  rm -r "${_builddir}/Documentation"

  msg2 "Removing broken symlinks..."
  find -L "${_builddir}" -type l -printf 'Removing %P\n' -delete

  msg2 "Removing loose objects..."
  find "${_builddir}" -type f -name '*.o' -printf 'Removing %P\n' -delete

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
  done < <(find "${_builddir}" -type f -perm -u+x ! -name vmlinux -print0)

  msg2 "Adding symlink..."
  mkdir -p "$pkgdir/usr/src"
  ln -sr "${_builddir}" "$pkgdir/usr/src/$pkgbase-$pkgver"

  msg2 "Fixing permissions..."
  chmod -Rc u=rwX,go=rX "$pkgdir"
}

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase/linux/Linux} kernel"

  cd ${_srcname}
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  msg2 "Installing documentation..."
  mkdir -p "${_builddir}"
  cp -t "${_builddir}" -a Documentation

  msg2 "Removing doctrees..."
  rm -r "${_builddir}/Documentation/output/.doctrees"

  msg2 "Moving HTML docs..."
  local src dst
  while read -rd '' src; do
    dst="${_builddir}/Documentation/${src#${_builddir}/Documentation/output/}"
    mkdir -p "${dst%/*}"
    mv "$src" "$dst"
    rmdir -p --ignore-fail-on-non-empty "${src%/*}"
  done < <(find "${_builddir}/Documentation/output" -type f -print0)

  msg2 "Adding symlink..."
  mkdir -p "${pkgdir}/usr/share/doc"
  ln -sr "${_builddir}/Documentation" "${pkgdir}/usr/share/doc/${pkgbase}"

  msg2 "Fixing permissions..."
  chmod -Rc u=rwX,go=rX "${pkgdir}"
}

for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#${pkgbase}}")
    _package${_p#${pkgbase}}
  }"
done
