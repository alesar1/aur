# Maintainer: Peter Jung ptr1337 <admin@ptr1337.dev>
# Contributor: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>

### Selecting the CPU scheduler
# ATTENTION - one of seven predefined values should be selected!
# 'bmq' - select 'BitMap Queue CPU scheduler'
# 'pds' - select 'Priority and Deadline based Skip list multiple queue CPU scheduler'
# 'cacule' - select 'CacULE scheduler'
# 'cacule-rdb' - select 'CacULE-RDB scheduler'
# 'bore' - select 'Burst-Oriented Response Enhancer'
# 'tt' - select 'Task Type Scheduler by Hamad Marri'
# 'cfs' - select 'Completely Fair Scheduler'
_cpusched='tt'

### BUILD OPTIONS
# Set these variables to ANYTHING that is not null to enable them

### Tweak kernel options prior to a build via nconfig
_makenconfig=

# NUMA is optimized for multi-socket motherboards.
# A single multi-core CPU actually runs slower with NUMA enabled.
# See, https://bugs.archlinux.org/task/31187
_NUMAdisable=y

# Compile ONLY used modules to VASTLYreduce the number of modules built
# and the build time.
#
# To keep track of which modules are needed for your specific system/hardware,
# give module_db script a try: https://aur.archlinux.org/packages/modprobed-db
# This PKGBUILD read the database kept if it exists
#
# More at this wiki page ---> https://wiki.archlinux.org/index.php/Modprobed-db
_localmodcfg=

# Use the current kernel's .config file
# Enabling this option will use the .config of the RUNNING kernel rather than
# the ARCH defaults. Useful when the package gets updated and you already went
# through the trouble of customizing your config options.  NOT recommended when
# a new kernel is released, but again, convenient for package bumps.
_use_current=

#enable winesync
_winesync=y

### Running with a 1000HZ, 750Hz or  500HZ tick rate
_1k_HZ_ticks=
_750_HZ_ticks=y
_600_HZ_ticks=
_500_HZ_ticks=

### Disable MQ-Deadline I/O scheduler
_mq_deadline_disable=y

### Disable Kyber I/O scheduler
_kyber_disable=y

### Enable protect file mappings under memory pressure
_mm_protect=y

### Enable multigenerational LRU
_lru_enable=y

## Enable Page-Table-Check
#_page_table_check=y

### Enable DAMON
_damon=

### Enable Linux Random Number Generator
_lrng_enable=y

## Apply Kernel automatic Optimization
_use_auto_optimization=y

## Apply Kernel Optimization selecting
_use_optimization_select=


### Selecting the ZSTD compression level
# ATTENTION - one of two predefined values should be selected!
# 'ultra' - highest compression ratio
# 'normal' - standard compression ratio
_zstd_level='normal'

### Selecting the ZSTD module compression level
# If you want to use ZSTD compression,
# first install mkinitcpio-zstd:
# https://gitlab.com/sirlucjan/lucjan-kernels/tree/master/depends
# or
# https://github.com/sirlucjan/lucjan-kernels/tree/master/depends
# ATTENTION - one of two predefined values should be selected!
# 'ultra' - highest compression ratio
# 'normal' - standard compression ratio
# WARNING: the ultra settings can sometimes
# be counterproductive in both size and speed.
_zstd_module_level='normal'

### Enable SECURITY_FORK_BRUTE
# WARNING Not recommended.
# An experimental solution, still in testing phase.
# Possible compilation and installation errors.
# Leave it unselected.
_fork_brute=

## Enable it for compiling with LLVM and THINLTO
_use_llvm_lto=

# Enable it for using the LLVM CFI PATCH for a better security
_use_cfi=

## Enable PGO (patch is failing when cfi is also used)
#_use_pgo=


if [ -n "$_use_llvm_lto" ]; then
  pkgbase=linux-cachyos-tt-lto
else
  pkgbase=linux-cachyos-tt
fi
_major=5.16
_minor=3
#_minorc=$((_minor+1))
#_rcver=rc8
pkgver=${_major}.${_minor}
_stable=${_major}.${_minor}
#_stable=${_major}
#_stablerc=${_major}-${_rcver}
_srcname=linux-${_stable}
#_srcname=linux-${_major}
arch=(x86_64 x86_64_v3)
pkgdesc='Linux TT scheduler Kernel by CachyOS and with some other patches and other improvements'
pkgrel=1
arch=('x86_64' 'x86_64_v3')
url="https://github.com/CachyOS/linux-cachyos"
license=('GPL2')
options=('!strip')
makedepends=('kmod' 'bc' 'libelf' 'python-sphinx' 'python-sphinx_rtd_theme'
'graphviz' 'imagemagick' 'pahole' 'cpio' 'perl' 'tar' 'xz')
if [ -n "$_use_llvm_lto" ]; then
  depends=(clang llvm lld python)
fi
_patchsource="https://raw.githubusercontent.com/ptr1337/kernel-patches/master/5.16"
source=(
  "https://cdn.kernel.org/pub/linux/kernel/v${pkgver%%.*}.x/${_srcname}.tar.xz"
  "config"
  #  "${_patchsource}/sched/0001-prjc.patch"
  #  "${_patchsource}/sched/0001-cacULE-5.16-full.patch"
  #  "${_patchsource}/sched/0001-bore-sched.patch"
  "${_patchsource}/sched/0001-tt.patch"
  "${_patchsource}/0001-arch-patches.patch"
  "${_patchsource}/0001-amdpstate.patch"
  "${_patchsource}/0001-anbox.patch"
  "${_patchsource}/0001-bbr2-patches.patch"
  "${_patchsource}/0001-bfq-patches.patch"
  "${_patchsource}/0001-btrfs.patch"
  "${_patchsource}/0001-cfi.patch"
  "${_patchsource}/0001-cpu.patch"
  "${_patchsource}/0001-clearlinux.patch"
  "${_patchsource}/0001-lrng.patch"
  "${_patchsource}/0001-lru-le9-patches.patch"
  "${_patchsource}/0001-misc.patch"
  "${_patchsource}/0001-net-patches.patch"
  "${_patchsource}/0001-fixes-misc.patch"
  "${_patchsource}/0001-pf-patches.patch"
  "${_patchsource}/0001-futex-winesync.patch"
  "${_patchsource}/0001-hwmon.patch"
#  "${_patchsource}/0001-ksmbd.patch"
  "${_patchsource}/0001-zstd-patches.patch"
  "${_patchsource}/misc/0001-cc.patch"
  "${_patchsource}/misc/0010-ELF.patch"
#  "${_patchsource}/0001-zen-patches.patch"
#  "${_patchsource}/next/0001-mm-next.patch"
#  "${_patchsource}/0001-FG-KASLR.patch"
#  "${_patchsource}/0001-fix-building-with-gcc-trunk.patch"
#  "${_patchsource}/0001-fortify.patch"
  "auto-cpu-optimization.sh"
)
#if [ -n "$_use_pgo" ]; then
#  source+=("${_patchsource}/0001-PGO.patch")
#fi

if [ -n "$_use_llvm_lto" ]; then
  BUILD_FLAGS=(
    LLVM=1
    LLVM_IAS=1
  )
fi

export KBUILD_BUILD_HOST=archlinux
export KBUILD_BUILD_USER=$pkgbase
export KBUILD_BUILD_TIMESTAMP="$(date -Ru${SOURCE_DATE_EPOCH:+d @$SOURCE_DATE_EPOCH})"

prepare() {

  cd $_srcname

  ### Setting version
  echo "Setting version..."
  scripts/setlocalversion --save-scmversion
  echo "-$pkgrel" > localversion.10-pkgrel
  echo "${pkgbase#linux}" > localversion.20-pkgname

  ### Patching sources
  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    [[ $src = *.patch ]] || continue
    echo "Applying patch $src..."
    patch -Np1 < "../$src"
  done

  ### Setting config
  echo "Setting config..."
  cp ../config .config

  ### Microarchitecture Optimization (GCC/CLANG)
  if [ -n "$_use_auto_optimization" ]; then
    "${srcdir}"/auto-cpu-optimization.sh
  fi

  if [ -n "$_use_optimization_select" ]; then
    source "${startdir}"/configure
    cpu_arch
  fi

  ### Selecting the CPU scheduler
  if [ "$_cpusched" = "bmq" ]; then
    echo "Selecting BMQ CPU scheduler..."
    scripts/config --enable CONFIG_SCHED_BMQ
    scripts/config --disable CONFIG_SCHED_PDS
  elif [ "$_cpusched" = "pds" ]; then
    echo "Selecting PDS CPU scheduler..."
    scripts/config --disable CONFIG_SCHED_BMQ
    scripts/config --enable CONFIG_SCHED_PDS
  elif [ "$_cpusched" = "cacule" ]; then
    echo "Selecting CacULE scheduler..."
    scripts/config --disable CONFIG_SCHED_ALT
    scripts/config --enable CONFIG_CACULE_SCHED
  elif [ "$_cpusched" = "cacule-rdb" ]; then
    echo "Selecting CacULE-RDB scheduler..."
    scripts/config --disable CONFIG_SCHED_ALT
    scripts/config --enable CONFIG_CACULE_SCHED
    scripts/config --enable CONFIG_CACULE_RDB
    scripts/config --set-val CONFIG_RDB_INTERVAL 19
  elif [ "$_cpusched" = "tt" ]; then
    echo "Enable TT CPU scheduler..."
    scripts/config --enable CONFIG_TT_SCHED
    scripts/config --enable CONFIG_TT_ACCOUNTING_STATS
  elif [ "$_cpusched" = "bore" ]; then
    echo "Selecting BORE Scheduler..."
    scripts/config --disable CONFIG_SCHED_ALT
  elif [ "$_cpusched" = "cfs" ]; then
    echo "Selecting Completely Fair Scheduler..."
    scripts/config --disable CONFIG_SCHED_ALT
  else
    if [ -n "$_cpusched" ]; then
      error "The value $_cpusched is invalid. Choose the correct one again."
    else
      error "The value is empty. Choose the correct one again."
    fi
    error "Selecting the CPU scheduler failed!"
    exit
  fi

  if [ -n "$_use_cfi" ] && [ -n "$_use_llvm_lto" ]; then
    echo "Enabling CFI"
    scripts/config --enable CONFIG_ARCH_SUPPORTS_CFI_CLANG
    scripts/config --enable CONFIG_CFI_CLANG
  fi

  if [ -n "$_use_llvm_lto" ]; then
      scripts/config --disable LTO_NONE \
                     --enable LTO \
                     --enable LTO_CLANG \
                     --enable ARCH_SUPPORTS_LTO_CLANG \
                     --enable ARCH_SUPPORTS_LTO_CLANG_THIN \
                     --enable HAS_LTO_CLANG \
                     --enable LTO_CLANG_THIN \
                     --enable HAVE_GCC_PLUGINS
  fi

  ### Optionally set tickrate to 1000
  if [ -n "$_1k_HZ_ticks" ]; then
    echo "Setting tick rate to 1k..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_1000
    scripts/config --set-val CONFIG_HZ 1000
  fi

  ### Optionally set tickrate to 750HZ
  if [ -n "$_750_HZ_ticks" ]; then
    echo "Setting tick rate to 750HZ..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_750
    scripts/config --set-val CONFIG_HZ 750
  fi

  ### Optionally set tickrate to 600HZ
  if [ -n "$_600_HZ_ticks" ]; then
    echo "Setting tick rate to 600HZ..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_600
    scripts/config --set-val CONFIG_HZ 600
  fi

  ### Optionally set tickrate to 500HZ
  if [ -n "$_500_HZ_ticks" ]; then
    echo "Setting tick rate to 500HZ..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_500
    scripts/config --set-val CONFIG_HZ 500
  fi

  ### Optionally disable NUMA for 64-bit kernels only
  # (x86 kernels do not support NUMA)
  if [ -n "$_NUMAdisable" ]; then
    echo "Disabling NUMA from kernel config..."
    scripts/config --disable CONFIG_NUMA
  fi

  if [ -n "$_winesync" ]; then
    echo "Enable winesync support"
    scripts/config --module CONFIG_WINESYNC
  fi

  ### Disable MQ-Deadline I/O scheduler
  if [ -n "$_mq_deadline_disable" ]; then
    echo "Disabling MQ-Deadline I/O scheduler..."
    scripts/config --disable CONFIG_MQ_IOSCHED_DEADLINE
  fi

  ### Disable Kyber I/O scheduler
  if [ -n "$_kyber_disable" ]; then
    echo "Disabling Kyber I/O scheduler..."
    scripts/config --disable CONFIG_MQ_IOSCHED_KYBER
  fi


  ### Enable protect mappings under memory pressure
  if [ -n "$_mm_protect" ]; then
    echo "Enabling protect file mappings under memory pressure..."
    scripts/config --set-val CONFIG_ANON_MIN_KBYTES 0
    scripts/config --set-val CONFIG_CLEAN_LOW_KBYTES 524288
    scripts/config --set-val CONFIG_CLEAN_MIN_KBYTES 0
  fi

  ### Enable multigenerational LRU
#  if [ -n "$_page_table_check" ]; then
#    echo "Enabling Page-Table-Check..."
#    scripts/config --enable CONFIG_PAGE_TABLE_CHECK
#    scripts/config --enable CONFIG_PAGE_TABLE_CHECK_ENFORCED
#    scripts/config --enable CONFIG_ARCH_SUPPORTS_PAGE_TABLE_CHECK
#  fi

  ### Enable multigenerational LRU
  if [ -n "$_lru_enable" ]; then
    echo "Enabling multigenerational LRU..."
    scripts/config --enable CONFIG_ARCH_HAS_NONLEAF_PMD_YOUNG
    scripts/config --enable CONFIG_LRU_GEN
    scripts/config --set-val CONFIG_NR_LRU_GENS 7
    scripts/config --set-val CONFIG_TIERS_PER_GEN 4
    scripts/config --enable CONFIG_LRU_GEN_ENABLED
    scripts/config --disable CONFIG_LRU_GEN_STATS
  fi

  ### Enable DAMON
  if [ -n "$_damon" ]; then
    echo "Enabling DAMON..."
    scripts/config --enable CONFIG_DAMON
    scripts/config --disable CONFIG_DAMON_VADDR
    scripts/config --disable CONFIG_DAMON_DBGFS
    scripts/config --enable CONFIG_DAMON_PADDR
    scripts/config --enable CONFIG_DAMON_RECLAIM
  fi

  ### Enable Linux Random Number Generator
  if [ -n "$_lrng_enable" ]; then
    echo "Enabling Linux Random Number Generator ..."
    echo "Enabling Linux Random Number Generator with pfkernel config..."
    scripts/config --enable CONFIG_LRNG
    scripts/config --enable CONFIG_LRNG_OVERSAMPLE_ENTROPY_SOURCES
    scripts/config --set-val CONFIG_CONFIG_LRNG_OVERSAMPLE_ES_BITS 64
    scripts/config --set-val CONFIG_LRNG_SEED_BUFFER_INIT_ADD_BITS 128
    scripts/config --enable CONFIG_LRNG_IRQ
    scripts/config --enable CONFIG_LRNG_CONTINUOUS_COMPRESSION_ENABLED
    scripts/config --disable CONFIG_LRNG_CONTINUOUS_COMPRESSION_DISABLED
    scripts/config --enable CONFIG_LRNG_ENABLE_CONTINUOUS_COMPRESSION
    scripts/config --enable CONFIG_LRNG_SWITCHABLE_CONTINUOUS_COMPRESSION
    scripts/config --disable CONFIG_LRNG_COLLECTION_SIZE_512
    scripts/config --enable CONFIG_LRNG_COLLECTION_SIZE_1024
    scripts/config --disable CONFIG_LRNG_COLLECTION_SIZE_2048
    scripts/config --disable CONFIG_LRNG_COLLECTION_SIZE_4096
    scripts/config --disable CONFIG_LRNG_COLLECTION_SIZE_8192
    scripts/config --set-val CONFIG_LRNG_COLLECTION_SIZE 1024
    scripts/config --enable CONFIG_LRNG_HEALTH_TESTS
    scripts/config --set-val CONFIG_LRNG_RCT_CUTOFF 31
    scripts/config --set-val CONFIG_LRNG_APT_CUTOFF 325
    scripts/config --set-val CONFIG_LRNG_IRQ_ENTROPY_RATE 256
    scripts/config --enable CONFIG_LRNG_JENT
    scripts/config --set-val CONFIG_LRNG_JENT_ENTROPY_RATE 16
    scripts/config --enable CONFIG_LRNG_CPU
    scripts/config --set-val CONFIG_LRNG_CPU_ENTROPY_RATE 8
    scripts/config --enable CONFIG_LRNG_DRNG_SWITCH
    scripts/config --enable CONFIG_LRNG_KCAPI_HASH
    scripts/config --module CONFIG_LRNG_DRBG
    scripts/config --module CONFIG_LRNG_KCAPI
    scripts/config --enable CONFIG_LRNG_TESTING_MENU
    scripts/config --disable CONFIG_LRNG_RAW_HIRES_ENTROPY
    scripts/config --disable CONFIG_LRNG_RAW_JIFFIES_ENTROPY
    scripts/config --disable CONFIG_LRNG_RAW_IRQ_ENTROPY
    scripts/config --disable CONFIG_LRNG_RAW_IRQFLAGS_ENTROPY
    scripts/config --disable CONFIG_LRNG_RAW_RETIP_ENTROPY
    scripts/config --disable CONFIG_LRNG_RAW_REGS_ENTROPY
    scripts/config --disable CONFIG_LRNG_RAW_ARRAY
    scripts/config --disable CONFIG_LRNG_IRQ_PERF
    scripts/config --disable CONFIG_LRNG_ACVT_HASH
    scripts/config --enable CONFIG_LRNG_RUNTIME_ES_CONFIG
    scripts/config --disable CONFIG_LRNG_RUNTIME_MAX_WO_RESEED_CONFIG
    scripts/config --disable CONFIG_LRNG_TEST_CPU_ES_COMPRESSION
    scripts/config --enable CONFIG_LRNG_SELFTEST
    scripts/config --disable CONFIG_LRNG_SELFTEST_PANIC
  fi

  ### Selecting the ZSTD compression level
  if [ "$_zstd_level" = "ultra" ]; then
    echo "Enabling highest ZSTD compression ratio..."
    scripts/config --set-val CONFIG_KERNEL_ZSTD_LEVEL 19
    scripts/config --enable CONFIG_KERNEL_ZSTD_LEVEL_ULTRA
  elif [ "$_zstd_level" = "normal" ]; then
    echo "Enabling standard ZSTD compression ratio..."
    scripts/config --set-val CONFIG_KERNEL_ZSTD_LEVEL 19
    scripts/config --disable CONFIG_KERNEL_ZSTD_LEVEL_ULTRA
  else
    if [ -n "$_zstd_level" ]; then
      error "The value $_zstd_level is invalid. Choose the correct one again."
    else
      error "The value is empty. Choose the correct one again."
    fi
    error "Selecting the ZSTD compression level failed!"
    exit
  fi

  ### Selecting the ZSTD module compression level
  if [ "$_zstd_module_level" = "ultra" ]; then
    echo "Enabling highest ZSTD module compression ratio..."
    scripts/config --set-val CONFIG_MODULE_COMPRESS_ZSTD_LEVEL 19
    scripts/config --enable CONFIG_MODULE_COMPRESS_ZSTD_ULTRA
    scripts/config --set-val CONFIG_MODULE_COMPRESS_ZSTD_LEVEL_ULTRA 22
  elif [ "$_zstd_module_level" = "normal" ]; then
    echo "Enabling standard ZSTD module compression ratio..."
    scripts/config --set-val CONFIG_MODULE_COMPRESS_ZSTD_LEVEL 19
    scripts/config --disable CONFIG_MODULE_COMPRESS_ZSTD_ULTRA
  else
    if [ -n "$_zstd_module_level" ]; then
      error "The value $_zstd_module_level is invalid. Choose the correct one again."
    else
      error "The value is empty. Choose the correct one again."
    fi
    error "Selecting the ZSTD module compression level failed!"
    exit
  fi

  echo "Disabling TCP_CONG_CUBIC..."
  scripts/config --module CONFIG_TCP_CONG_CUBIC
  scripts/config --disable CONFIG_DEFAULT_CUBIC
  echo "Enabling TCP_CONG_BBR2..."
  scripts/config --enable CONFIG_TCP_CONG_BBR2
  scripts/config --enable CONFIG_DEFAULT_BBR2
  scripts/config --set-str CONFIG_DEFAULT_TCP_CONG bbr2
  echo "Setting performance governor..."
  scripts/config --disable CONFIG_CPU_FREQ_DEFAULT_GOV_SCHEDUTIL
  scripts/config --enable CONFIG_CPU_FREQ_DEFAULT_GOV_PERFORMANCE
  scripts/config --enable CONFIG_CPU_FREQ_GOV_ONDEMAND
  scripts/config --enable CONFIG_CPU_FREQ_GOV_PERFORMANCE
  scripts/config --enable CONFIG_CPU_FREQ_GOV_CONSERVATIVE
  scripts/config --enable CONFIG_CPU_FREQ_GOV_USERSPACE
  scripts/config --enable CONFIG_CPU_FREQ_GOV_SCHEDUTIL
  echo "Enable AMD PSTATE driver"
  scripts/config --enable CONFIG_X86_AMD_PSTATE
  scripts/config --enable CONFIG_AMD_PTDMA
  echo "Enable Anbox"
  scripts/config --enable CONFIG_ASHMEM
  scripts/config --enable CONFIG_ANDROID
  scripts/config --enable CONFIG_ANDROID_BINDER_IPC
  scripts/config --enable CONFIG_ANDROID_BINDERFS
  scripts/config --enable CONFIG_ANDROID_BINDER_DEVICES="binder,hwbinder,vndbinder"
  scripts/config --enable CONFIG_NTFS3_FS
  echo "Enabling KBUILD_CFLAGS -O3..."
  scripts/config --disable CONFIG_CC_OPTIMIZE_FOR_PERFORMANCE
  scripts/config --enable CONFIG_CC_OPTIMIZE_FOR_PERFORMANCE_O3

  ### Optionally use running kernel's config
  # code originally by nous; http://aur.archlinux.org/packages.php?ID=40191
  if [ -n "$_use_current" ]; then
    if [[ -s /proc/config.gz ]]; then
      echo "Extracting config from /proc/config.gz..."
      # modprobe configs
      zcat /proc/config.gz > ./.config
    else
      warning "Your kernel was not compiled with IKCONFIG_PROC!"
      warning "You cannot read the current config!"
      warning "Aborting!"
      exit
    fi
  fi


  ### Optionally load needed modules for the make localmodconfig
  # See https://aur.archlinux.org/packages/modprobed-db
  if [ -n "$_localmodcfg" ]; then
      if [ -e $HOME/.config/modprobed.db ]; then
          echo "Running Steven Rostedt's make localmodconfig now"
          make ${BUILD_FLAGS[*]} LSMOD=$HOME/.config/modprobed.db localmodconfig
      else
          echo "No modprobed.db data found"
          exit
      fi
  fi

  echo "Applying default config..."

  make ${BUILD_FLAGS[*]}  olddefconfig
  make ${BUILD_FLAGS[*]} -s kernelrelease > version
  echo "Prepared $pkgbase version $(<version)"

  ### Running make nconfig
    [[ -z "$_makenconfig" ]] || make ${BUILD_FLAGS[*]} nconfig

  ### Save configuration for later reuse
  cp -Tf ./.config "${startdir}/config-${pkgver}-${pkgrel}${pkgbase#linux}"

}

build() {
  cd ${_srcname}
  make ${BUILD_FLAGS[*]} -j$(nproc) all
}

_package() {
  pkgdesc="The $pkgdesc kernel and modules"
  depends=('coreutils' 'kmod' 'initramfs')
  optdepends=('crda: to set the correct wireless channels of your country'
              'linux-firmware: firmware images needed for some devices'
              'modprobed-db: Keeps track of EVERY kernel module that has ever been probed - useful for those of us who make localmodconfig')
  provides=(VIRTUALBOX-GUEST-MODULES WIREGUARD-MODULE KSMBD-MODULE)

  cd $_srcname

  local kernver="$(<version)"
  local modulesdir="$pkgdir/usr/lib/modules/$kernver"

  echo "Installing boot image..."
  # systemd expects to find the kernel here to allow hibernation
  # https://github.com/systemd/systemd/commit/edda44605f06a41fb86b7ab8128dcf99161d2344
  install -Dm644 "$(make -s image_name)" "$modulesdir/vmlinuz"

  # Used by mkinitcpio to name the kernel
  echo "$pkgbase" | install -Dm644 /dev/stdin "$modulesdir/pkgbase"

  echo "Installing modules..."
  make INSTALL_MOD_PATH="$pkgdir/usr" INSTALL_MOD_STRIP=1 modules_install

  # remove build and source links
  rm "$modulesdir"/{source,build}
}

_package-headers() {
  pkgdesc="Headers and scripts for building modules for the $pkgdesc kernel"
  depends=(pahole)

  cd ${_srcname}
  local builddir="$pkgdir/usr/lib/modules/$(<version)/build"

  echo "Installing build files..."
  install -Dt "$builddir" -m644 .config Makefile Module.symvers System.map \
    localversion.* version vmlinux
  install -Dt "$builddir/kernel" -m644 kernel/Makefile
  install -Dt "$builddir/arch/x86" -m644 arch/x86/Makefile
  cp -t "$builddir" -a scripts

  # required when STACK_VALIDATION is enabled
  install -Dt "$builddir/tools/objtool" tools/objtool/objtool

  # required when DEBUG_INFO_BTF_MODULES is enabled
  #install -Dt "$builddir/tools/bpf/resolve_btfids" tools/bpf/resolve_btfids/resolve_btfids

  echo "Installing headers..."
  cp -t "$builddir" -a include
  cp -t "$builddir/arch/x86" -a arch/x86/include
  install -Dt "$builddir/arch/x86/kernel" -m644 arch/x86/kernel/asm-offsets.s

  install -Dt "$builddir/drivers/md" -m644 drivers/md/*.h
  install -Dt "$builddir/net/mac80211" -m644 net/mac80211/*.h

  # https://bugs.archlinux.org/task/13146
  install -Dt "$builddir/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # https://bugs.archlinux.org/task/20402
  install -Dt "$builddir/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "$builddir/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "$builddir/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  # https://bugs.archlinux.org/task/71392
  install -Dt "$builddir/drivers/iio/common/hid-sensors" -m644 drivers/iio/common/hid-sensors/*.h

  echo "Installing KConfig files..."
  find . -name 'Kconfig*' -exec install -Dm644 {} "$builddir/{}" \;

  echo "Removing unneeded architectures..."
  local arch
  for arch in "$builddir"/arch/*/; do
    [[ $arch = */x86/ ]] && continue
    echo "Removing $(basename "$arch")"
    rm -r "$arch"
  done

  echo "Removing documentation..."
  rm -r "$builddir/Documentation"

  echo "Removing broken symlinks..."
  find -L "$builddir" -type l -printf 'Removing %P\n' -delete

  echo "Removing loose objects..."
  find "$builddir" -type f -name '*.o' -printf 'Removing %P\n' -delete

  echo "Stripping build tools..."
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

  echo "Stripping vmlinux..."
  strip -v $STRIP_STATIC "$builddir/vmlinux"

  echo "Adding symlink..."
  mkdir -p "$pkgdir/usr/src"
  ln -sr "$builddir" "$pkgdir/usr/src/$pkgbase"
}

pkgname=("$pkgbase" "$pkgbase-headers")
for _p in "${pkgname[@]}"; do
  eval "package_$_p() {
    $(declare -f "_package${_p#$pkgbase}")
    _package${_p#$pkgbase}
  }"
done

sha256sums=('ba402fe9c05b70505172664ccf8d3dd2d7b78c4fa8ec8fb27fa83a6ce6b9b5b1'
            'fa70df0ba2a15b3828eacba4b14878bbd01d3ce29194165b8f2b02f37d28a116'
            'd0ad413e7d67a4f7ac99154b39490e4f2eccbf0b828733d6a315e5312ecc346d'
            '8ac5db0022b75027970ddcc7ee80e4c57e8a235fd590ed6dcc402909bb063a8a'
            '4d592e6bd49ae19db05d758130ae1b6f3bb081923a7b6df0b946ea0f4524168e'
            '0b64f616404ed70757f423c879bf3edf51525bfdb78f7ec8f1ae21412d9e8a2a'
            'bc91fa787a28516b317fdd9e038ed2c10b61703a9848c1a9ad286e92d51c97be'
            '04f472466fe33ddadb64a52edb57db78e513111bb44dc71cb301a376ea093b46'
            '6e64484546582b4a747ef4c9d7fdf44005884a9abd86a7ecd9ab8d1f9e3e23d6'
            'eb57a61e3c1bf2966211f02a9ae080c3af4c7faf3f706821440e324a70d0cd20'
            '7936b61ba25f03597fd563be82c31a5756d8a82c893f69a2d569f99d375b1362'
            '915e992ed5ba2551ca648e4aa7340e9f250f6b7806287a061c1c8e40b1dc348b'
            'e2d99ace9b54021c5ef53b4b51716816172d6304f6a823b88d5b4e9a68562aef'
            'ff4215e6078864b9e556c3ceedbee8d6881b280755fcfbb97771148ebf05ef53'
            '5332ffc19ab2a50b162e07de425d60e473bb8b5be411ae669bae3471653f161f'
            'db0d2fde8f1e994fbb4eb37c8affa3f0b339aa658f9ab5003bb2ce453a68ab95'
            '86452400a7e2cbe02cf1dad51eb72899af963ba8b2c441c48575ae68bb9f9274'
            '8c2e3ce0874a23e4d8df419f79dd1d045ef349bbe1474717e9455c8197f41c4e'
            '9c7aebb85ef34d9c89d2e8ba34a9c82309d2ba9a14b8fdabaf01ba953ad6f08f'
            '669e8580b8bbb9ce38738154cf45e7c199cee91c2b9327102564aa9f9d7afd83'
            '9a22cd0f1dab0e6d970a7215641d7409b756b14740904501f95c5aef29d15f89'
            '1539b1786e8a57c441f4028fc7c64de59d926ad107b44dcad74a72ff9638870f'
            '6c2737225c46c8776022eede29753fea10547cfd1a0c38dcab628be7a4d7c126'
            '65ec9ac5b8b28d5b61df1c72498059be2e7cb1f9b965bac0e4ffed3c05520b2b')
