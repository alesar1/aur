# Maintainer: Tom Nguyen <tom81094@gmail.com>
# Contributor: Boohbah <boohbah at gmail.com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>
# Contributor: Jonathan Chan <jyc@fastmail.fm>
# Contributor: misc <tastky@gmail.com>
# Contributor: NextHendrix <cjones12 at sheffield.ac.uk>

### BUILD OPTIONS
# Set these variables to ANYTHING that is not null to enable them

# Use tentative patches from https://groups.google.com/forum/#!forum/bfq-iosched
_use_tentative_patches=

### Use mailing-list patches; many thanks to Piotr "sir_lucjan" Gorski
# ML1 - [PATCH V4 00/14] blk-mq-sched: improve SCSI-MQ performance: https://marc.info/?l=linux-block&m=150436546704854&w=2
_use_ml1_patches=

# ML2 - [PATCH] block,bfq: Disable writeback throttling: https://marc.info/?l=linux-block&m=150486424501778&w=2
_use_ml2_patches=

# Running with a 1000 HZ tick rate
_1k_HZ_ticks=

### Enable fancontrol for DELL
_dell_fancontrol=

### Set performance governor as default
_per_gov=

# NUMA is optimized for multi-socket motherboards. A single multi-core CPU can
# actually run slower with NUMA enabled. Most users will want to set this option
# to enabled ... in other words, do not use NUMA on a single CPU system.
#
# See, https://bugs.archlinux.org/task/31187
_NUMAdisable=y

# Compile ONLY probed modules
# As of mainline 2.6.32, running with this option will only build the modules
# that you currently have probed in your system VASTLY reducing the number of
# modules built and the build time to do it.
#
# WARNING - ALL modules must be probed BEFORE you begin making the pkg!
#
# To keep track of which modules are needed for your specific system/hardware,
# give module_db script a try: https://aur.archlinux.org/packages/modprobed-db
# This PKGBUILD will call it directly to probe all the modules you have logged!
#
# More at this wiki page ---> https://wiki.archlinux.org/index.php/Modprobed-db
_localmodcfg=

# Use the current kernel's .config file
# Enabling this option will use the .config of the RUNNING kernel rather than
# the ARCH defaults. Useful when the package gets updated and you already went
# through the trouble of customizing your config options.  NOT recommended when
# a new kernel is released, but again, convenient for package bumps.
_use_current=

### Disable Deadline I/O scheduler
_deadline_disable=

### Disable CFQ I/O scheduler
_CFQ_disable=

### Disable Kyber I/O scheduler
_kyber_disable=

### Do no edit below this line unless you know what you're doing

pkgbase=linux-bfq-mq-git
_pkgver=4.13
_srcname=bfq-mq
pkgver=4.13.3bb650d5583a
pkgrel=1
arch=('i686' 'x86_64')
url="http://www.kernel.org/"
license=('GPL2')
makedepends=('xmlto' 'docbook-xsl' 'kmod' 'inetutils' 'bc' 'git' 'libelf')
options=('!strip')
_gcc_patch='enable_additional_cpu_optimizations_for_gcc_v4.9+_kernel_v4.13+.patch'
_bfqpath="https://gitlab.com/tom81094/custom-patches/raw/master/bfq-mq"
_mlpath_1="${_bfqpath}/mailing-list/blk-mq-sched-improve-SCSI-MQ-performance-V4"
_mlpath_2="${_bfqpath}/mailing-list/block-bfq-disable-wbt"
_bfqgroup="https://groups.google.com/group/bfq-iosched/attach"
source=(# bfq-mq repository
        'git+https://github.com/Algodev-github/bfq-mq'
        # gcc cpu optimizatons from graysky and ck; forked by sir_lucjan
        "https://raw.githubusercontent.com/sirlucjan/kernel_gcc_patch/master/${_gcc_patch}"
        # tentative patches
        "${_bfqpath}/tentative/T0001-Check-presence-on-tree-of-every-entity-after-every-a.patch"
        # mailing-list (ML1) patches
        "${_mlpath_1}/ML1-0001-blk-mq-sched-fix-scheduler-bad-performance.patch"
        "${_mlpath_1}/ML1-0002-sbitmap-introduce-__sbitmap_for_each_set.patch"
        "${_mlpath_1}/ML1-0003-blk-mq-introduce-blk_mq_dispatch_rq_from_ctx.patch"
        "${_mlpath_1}/ML1-0004-blk-mq-sched-move-actual-dispatching-into-one-helper.patch"
        "${_mlpath_1}/ML1-0005-blk-mq-sched-improve-dispatching-from-sw-queue.patch"
        "${_mlpath_1}/ML1-0006-blk-mq-sched-don-t-dequeue-request-until-all-in-disp.patch"
        "${_mlpath_1}/ML1-0007-blk-mq-sched-introduce-blk_mq_sched_queue_depth.patch"
        "${_mlpath_1}/ML1-0008-blk-mq-sched-use-q-queue_depth-as-hint-for-q-nr_requ.patch"
        "${_mlpath_1}/ML1-0009-block-introduce-rqhash-helpers.patch"
        "${_mlpath_1}/ML1-0010-block-move-actual-bio-merge-code-into-__elv_merge.patch"
        "${_mlpath_1}/ML1-0011-block-add-check-on-elevator-for-supporting-bio-merge.patch"
        "${_mlpath_1}/ML1-0012-block-introduce-.last_merge-and-.hash-to-blk_mq_ctx.patch"
        "${_mlpath_1}/ML1-0013-blk-mq-sched-refactor-blk_mq_sched_try_merge.patch"
        "${_mlpath_1}/ML1-0014-blk-mq-improve-bio-merge-from-blk-mq-sw-queue.patch"
        # mailing-list (ML2) patches
        "${_mlpath_2}/ML2-0001-block-bfq-Disable-writeback-throttling.patch"
        # the main kernel config files
        'config.i686' 'config.x86_64'
        # pacman hook for initramfs regeneration
        '90-linux.hook'
        # standard config files for mkinitcpio ramdisk
        'linux.preset')
sha256sums=(# bfq-mq repository
            'SKIP'
            # gcc cpu optimizatons from graysky and ck forked by sir_lucjan
            '8b00041911e67654b0bd9602125853a1a94f6155c5cac4f886507554c8324ee8'
            # tentative patches
            'eb3cb1a9e487c54346b798b57f5b505f8a85fd1bc839d8f00b2925e6a7d74531'
            # mailing-list (ML1) patches
            'dbbcfc44c676f86e98e9a25ff0d2145f8b909f4a8bf7e25029bf24f315cbc4bb'
            '50092d4e4e408937fa9a7a374b27144854ed676dac6ba48a9d6d14827703e15b'
            '1f9a234069b487c6372517f4b29f75bb66e7c5a72e963dad8b8985d7bff7f38f'
            '2ea4aedb93ad21d9832f96e0c13e42415060ebde1642c1a6de2164e8c9b61841'
            '9e0c964332ba735c4c03b0b12b85ea120bf72236f06bf90e2840f6b4bcb62596'
            '7862c2ea18f4fd61186c34f4a24df0d0b3639fe33c0be4fec0e1735a4f4f02ab'
            '6926d21e260e058b99c7fae26aa63619b1eefa00fb108e0f0ee0ac8d0e2a31f4'
            '0c4ab9933063ee8d4e1ed55fbff9e44f16a721c035d498a1cb778aa91799e01b'
            '4d78f4e4c42a33fa3602bb3758d15bb3fe572ffd7794f6241449a2b0c96431e1'
            '27bf68a36f635ed13c8ab613d40e72043284754a92a026eabb5ae589414faaa5'
            'f37476acbe136e0ad5e2bf0be199678f4263d3e5e33bec1d1d8b8f19f5a0dfec'
            '00346abf88880eaa8b200705b5a63e322df518eb2129e34ca45e1d90c4742037'
            'bbb9dfdc98f5cdeaf1113d9c24cfafb95bc764af76d56dd57d964a16d81986b7'
            '4f7bbc6d983ab947474f5ab44194328321def86ab3f8b095f4def198d5604d08'
            # mailing-list (ML2) patches
            '5e57c8d1d87a63e1c5947aba02346862992f39be2b2761ea142b3897995495aa'
            # the main kernel config files
            '253a4225171213cbca0eaf28113b6b797aeac8a88766fdcfee0f1fbe5359b5b6'
            '97c59875e8f9eab965d6bd13030e52c0328c67243f5084105a3a2131cd58734f'
            # pacman hook for initramfs regeneration
            '834bd254b56ab71d73f59b3221f056c72f559553c04718e350ab2a3e2991afe0'
            # standard config files for mkinitcpio ramdisk
            'ad6344badc91ad0630caacde83f7f9b97276f80d26a20619a87952be65492c65')

_kernelname=${pkgbase#linux}

pkgver() {
  cd "${_srcname}"

  #git describe --long | sed -E 's/^v//;s/([^-]*-g)/r\1/;s/-/./g;s/\.rc/rc/'
  echo $(echo ${_pkgver}. && git rev-parse --short HEAD) | sed -E 's/^v//;s/([^-]*-g)/r\1/;s/-/./g;s/\.rc/rc/;s/ //g'
}

prepare() {
  cd "${_srcname}"

  ### Patches related to BUG_ON(entity->tree && entity->tree != &st->active) in __bfq_requeue_entity();
  if [ -n "$_use_tentative_patches" ]; then
    msg "Apply tentative patches"
    for p in ../T000*.patch; do patch -Np1 -i "$p"; done
  fi

  ### Patches from mailing-list
  # ML1 - [PATCH V4 00/14] blk-mq-sched: improve SCSI-MQ performance: https://marc.info/?l=linux-block&m=150436546704854&w=2
  if [ -n "$_use_ml1_patches" ]; then
    msg "Apply mailing-list patches 1"
    for p in ../ML1*.patch; do
      msg " $p"
    patch -Np1 -i "$p"; done
  fi

  # ML2 - [PATCH] block,bfq: Disable writeback throttling: https://marc.info/?l=linux-block&m=150486424501778&w=2
  if [ -n "$_use_ml2_patches" ]; then
    msg "Apply mailing-list patches 2"
    for p in ../ML2*.patch; do
      msg " $p"
    patch -Np1 -i "$p"; done
  fi

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git

  ### Patch source to enable more gcc CPU optimizatons via the make nconfig
  msg "Patch source with gcc patch to enable more cpus types"
  patch -Np1 -i ../"${_gcc_patch}"

  # Clean tree and copy ARCH config over
  make mrproper

  cp -Tf ../config.${CARCH} .config

  ### Optionally set tickrate to 1000
  if [ -n "$_1k_HZ_ticks" ]; then
    msg "Setting tick rate to 1k..."
    sed -i -e 's/^CONFIG_HZ_300=y/# CONFIG_HZ_300 is not set/' \
        -i -e 's/^# CONFIG_HZ_1000 is not set/CONFIG_HZ_1000=y/' \
        -i -e 's/^CONFIG_HZ=300/CONFIG_HZ=1000/' .config
  fi

  ### Enable fancontrol
  if [ -n "$_dell_fancontrol" ]; then
    msg "Enabling I8K for Dell..."
    sed -i -e s'/CONFIG_I8K=m/CONFIG_I8K=y/' ./.config
    sed -i -e s'/CONFIG_SENSORS_DELL_SMM=m/CONFIG_SENSORS_DELL_SMM=y/' ./.config
  fi

  ### Set performance governor
  if [ -n "$_per_gov" ]; then
    msg "Setting performance governor.."
    sed -i -e s'/CONFIG_CPU_FREQ_DEFAULT_GOV_SCHEDUTIL=y/# CONFIG_CPU_FREQ_DEFAULT_GOV_SCHEDUTIL is not set/' ./.config
    sed -i -e s'/# CONFIG_CPU_FREQ_DEFAULT_GOV_PERFORMANCE is not set/CONFIG_CPU_FREQ_DEFAULT_GOV_PERFORMANCE=y/' ./.config
    msg "Disabling uneeded governors..."
    sed -i -e s'/CONFIG_CPU_FREQ_GOV_ONDEMAND=m/# CONFIG_CPU_FREQ_GOV_ONDEMAND is not set/' ./.config
    sed -i -e s'/CONFIG_CPU_FREQ_GOV_CONSERVATIVE=m/# CONFIG_CPU_FREQ_GOV_CONSERVATIVE is not set/' ./.config
    sed -i -e s'/CONFIG_CPU_FREQ_GOV_USERSPACE=m/# CONFIG_CPU_FREQ_GOV_USERSPACE is not set/' ./.config
    sed -i -e s'/CONFIG_CPU_FREQ_GOV_SCHEDUTIL=y/# CONFIG_CPU_FREQ_GOV_SCHEDUTIL is not set/' ./.config
  fi

  ### Optionally disable NUMA for 64-bit kernels only
  # (x86 kernels do not support NUMA)
  if [ -n "$_NUMAdisable" ]; then
    if [ "${CARCH}" = "x86_64" ]; then
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
  fi

  ### Optionally use running kernel's config
  # code originally by nous; http://aur.archlinux.org/packages.php?ID=40191
  if [ -n "$_use_current" ]; then
    if [[ -s /proc/config.gz ]]; then
      msg "Extracting config from /proc/config.gz..."
      # modprobe configs
      zcat /proc/config.gz > ./.config
    else
      warning "Your kernel was not compiled with IKCONFIG_PROC!"
      warning "You cannot read the current config!"
      warning "Aborting!"
      exit
    fi
  fi

  ### Disable Deadline I/O scheduler
  if [ -n "$_deadline_disable" ]; then
    msg "Disabling Deadline I/O scheduler..."
    sed -i -e s'/CONFIG_IOSCHED_DEADLINE=y/# CONFIG_IOSCHED_DEADLINE is not set/' ./.config
    sed -i -e s'/CONFIG_MQ_IOSCHED_DEADLINE=y/# CONFIG_MQ_IOSCHED_DEADLINE is not set/' ./.config
  fi

  ### Disable CFQ I/O scheduler
  if [ -n "$_CFQ_disable" ]; then
    msg "Disabling CFQ I/O scheduler..."
    sed -i -e s'/CONFIG_IOSCHED_CFQ=y/# CONFIG_IOSCHED_CFQ is not set/' ./.config
    sed -i -e s'/CONFIG_CFQ_GROUP_IOSCHED=y/# CONFIG_CFQ_GROUP_IOSCHED is not set/' ./.config
  fi

  ### Disable Kyber I/O scheduler
  if [ -n "$_kyber_disable" ]; then
    msg "Disabling Kyber I/O scheduler..."
    sed -i -e s'/CONFIG_MQ_IOSCHED_KYBER=y/# CONFIG_MQ_IOSCHED_KYBER is not set/' ./.config
  fi

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

  ### Optionally load needed modules for the make localmodconfig
  # See https://aur.archlinux.org/packages/modprobed-db
  if [ -n "$_localmodcfg" ]; then
    msg "If you have modprobed-db installed, running it in recall mode now"
    if [ -e /usr/bin/modprobed-db ]; then
      [[ -x /usr/bin/sudo ]] || {
      echo "Cannot call modprobe with sudo. Install sudo and configure it to work with this user."
      exit 1; }
      sudo /usr/bin/modprobed-db recall
    fi
    msg "Running Steven Rostedt's make localmodconfig now"
    make localmodconfig
  fi

  # load configuration
  # Configure the kernel. Replace the line below with one of your choice.
  #make menuconfig # CLI menu for configuration
  #make nconfig # new CLI menu for configuration
  #make xconfig # X-based configuration
  #make oldconfig # using old config from previous kernel version
  # ... or manually edit .config

  # rewrite configuration
  yes "" | make config >/dev/null

  # save configuration for later reuse
  cat .config > "${startdir}/config.${CARCH}.last"
}

build() {
  cd "${_srcname}"

  make ${MAKEFLAGS} LOCALVERSION= bzImage modules
}

_package() {
  pkgdesc="The ${pkgbase/linux/Linux} kernel and modules with the BFQ-MQ scheduler"
  depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=0.7')
  optdepends=('crda: to set the correct wireless channels of your country' 'modprobed-db: Keeps track of EVERY kernel module that has ever been probed - useful for those of us who make localmodconfig')
  provides=("${pkgbase}=${pkgver}" "linux=${pkgver}")
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  install=linux.install

  cd "${_srcname}"

  KARCH=x86

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{lib/modules,lib/firmware,boot}
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}" modules_install
  cp arch/$KARCH/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"

  # set correct depmod command for install
  sed -e "s|%PKGBASE%|${pkgbase}|g;s|%KERNVER%|${_kernver}|g" \
    "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  # install mkinitcpio preset file for kernel
  sed "s|%PKGBASE%|${pkgbase}|g" ../linux.preset |
    install -Dm644 /dev/stdin "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # install pacman hook for initramfs regeneration
  sed "s|%PKGBASE%|${pkgbase}|g" ../90-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/90-${pkgbase}.hook"

  # remove build and source links
  rm "${pkgdir}"/lib/modules/${_kernver}/{source,build}

  # remove the firmware
  rm -r "${pkgdir}/lib/firmware"

  # make room for external modules
  ln -s "../extramodules-${_basekernel}${_kernelname:--ARCH}" "${pkgdir}/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from post_install/upgrade
  echo "${_kernver}" |
    install -Dm644 /dev/stdin "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname:--ARCH}/version"

  # Now we call depmod...
  depmod -b "${pkgdir}" -F System.map "${_kernver}"

  # move module tree /lib -> /usr/lib
  mv -t "${pkgdir}/usr" "${pkgdir}/lib"

  # add vmlinux
  install -Dm644 vmlinux "${pkgdir}/usr/lib/modules/${_kernver}/build/vmlinux"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase/linux/Linux} kernel"
  provides=("${pkgbase}-headers=${pkgver}" "linux-headers=${pkgver}")
  depends=("${pkgbase}=${pkgver}")

  cd ${_srcname}
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  install -Dt "${_builddir}" -m644 Makefile .config Module.symvers
  install -Dt "${_builddir}/kernel" -m644 kernel/Makefile

  mkdir "${_builddir}/.tmp_versions"

  cp -t "${_builddir}" -a include scripts

  install -Dt "${_builddir}/arch/${KARCH}" -m644 arch/${KARCH}/Makefile
  install -Dt "${_builddir}/arch/${KARCH}/kernel" -m644 arch/${KARCH}/kernel/asm-offsets.s

  if [[ ${CARCH} = i686 ]]; then
    install -t "${_builddir}/arch/${KARCH}" -m644 arch/${KARCH}/Makefile_32.cpu
  fi

  cp -t "${_builddir}/arch/${KARCH}" -a arch/${KARCH}/include

  install -Dt "${_builddir}/drivers/md" -m644 drivers/md/*.h
  install -Dt "${_builddir}/net/mac80211" -m644 net/mac80211/*.h

  # http://bugs.archlinux.org/task/9912
  install -Dt "${_builddir}/drivers/media/dvb-core" -m644 drivers/media/dvb-core/*.h

  # http://bugs.archlinux.org/task/13146
  install -Dt "${_builddir}/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/lgdt330x.h
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
  if [[ -e tools/objtools/objtool ]]; then
    install -Dt "${_builddir}/tools/objtool" tools/objtool/objtool
  fi

  # remove unneeded architectures
  local _arch
  for _arch in "${_builddir}"/arch/*/; do
    if [[ ${_arch} != */${KARCH}/ ]]; then
      rm -r "${_arch}"
    fi
  done

+  # remove files already in linux-docs package
+  rm -r "${_builddir}/Documentation"
+
+  # Fix permissions
+  chmod -R u=rwX,go=rX "${_builddir}"

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
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase/linux/Linux} kernel"
  provides=("${pkgbase}-docs=${pkgver}" "linux-docs=${pkgver}")
  depends=("${pkgbase}=${pkgver}")

  cd ${_srcname}
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
