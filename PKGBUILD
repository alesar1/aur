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
_cpusched='cacule'

### BUILD OPTIONS
# Set these variables to ANYTHING that is not null to enable them

### Tweak kernel options prior to a build via nconfig
_makenconfig=

# NUMA is optimized for multi-socket motherboards.
# A single multi-core CPU actually runs slower with NUMA enabled.
# See, https://bugs.archlinux.org/task/31187
_NUMAdisable=y

## Enable Anbox
_anbox=

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

### Enable KBUILD_CFLAGS -O3
_cc_harder=y

### Set performance governor as default
_per_gov=y

### Enable TCP_CONG_BBR2
_tcp_bbr2=y

### Running with a 1000HZ, 750Hz, 600 Hz or 500Hz tick rate
_1k_HZ_ticks=
_750_HZ_ticks=y
_600_HZ_ticks=
_500_HZ_ticks=

##ä Choose between perodic, tickless idle or full tickless
### Full tickless can give higher performances in various cases but, depending on hardware, lower consistency. Just tickless idle can perform better on some platforms (mostly AMD based).
_tickrate=full

### Disable MQ-Deadline I/O scheduler
_mq_deadline_disable=y

### Disable Kyber I/O scheduler
_kyber_disable=y

### Enable multigenerational LRU
_lru_enable=y

### Enable DAMON
_damon=y

_spf_enable=y

### Enable Linux Random Number Generator
_lrng_enable=y

## Apply Kernel automatic Optimization
_use_auto_optimization=y

## Apply Kernel Optimization selecting
_use_optimization_select=

# Enable zram/zswap ZSTD compression
_zstd_compression=y

_nf_cone=y

# Clang LTO mode, only available with the "llvm" compiler - options are "no", "full" or "thin".
# "full: uses 1 thread for Linking, slow and uses more memory, theoretically with the highest performance gains."
# "thin: uses multiple threads, faster and uses less memory, may have a lower runtime performance than Full."
_use_llvm_lto=

## Change the thin lto cachedir for fixing building several dkms modules including zfs
_thin_lto_cachedir=

# Enable it for using the LLVM CFI PATCH for a better security
_use_cfi=

if [ -n "$_use_llvm_lto" ]; then
  pkgbase=linux-cachyos-${_cpusched}-lto
else
  pkgbase=linux-cachyos-${_cpusched}
fi
_major=5.17
_minor=5
#_minorc=$((_minor+1))
#_rcver=rc8
pkgver=${_major}.${_minor}
_stable=${_major}.${_minor}
#_stable=${_major}
#_stablerc=${_major}-${_rcver}
_srcname=linux-${_stable}
#_srcname=linux-${_major}
arch=(x86_64 x86_64_v3)
pkgdesc='Linux cacULE scheduler Kernel by CachyOS with other patches and improvements'
pkgrel=1
arch=('x86_64' 'x86_64_v3')
url="https://github.com/CachyOS/linux-cachyos"
license=('GPL2')
options=('!strip')
makedepends=('bc' 'texlive-latexextra' 'libelf' 'pahole' 'cpio' 'perl' 'tar' 'xz' 'zstd' 'xmlto' 'git' 'gcc' 'gcc-libs' 'glibc' 'binutils' 'make' 'patch')
if [ -n "$_use_llvm_lto" ]; then
  depends+=(clang llvm lld python)
  BUILD_FLAGS=(
    CC=clang
    LD=ld.lld
    LLVM=1
    LLVM_IAS=1
  )
fi
_patchsource="https://raw.githubusercontent.com/ptr1337/kernel-patches/master/${_major}"
source=(
  "https://cdn.kernel.org/pub/linux/kernel/v${pkgver%%.*}.x/${_srcname}.tar.xz"
  "config"
)
if [ "$_cpusched" = "bmq" ]; then
  source+=("${_patchsource}/sched/0001-prjc.patch")
fi
if [ "$_cpusched" = "pds" ]; then
  source+=("${_patchsource}/sched/0001-prjc.patch")
fi
if [ "$_cpusched" = "cacule" ]; then
  source+=("${_patchsource}/sched/0001-cacULE.patch")
fi
if [ "$_cpusched" = "cacule-rdb" ]; then
  source+=("${_patchsource}/sched/0001-cacULE.patch")
fi
if [ "$_cpusched" = "tt" ]; then
  source+=("${_patchsource}/sched/0001-tt.patch")
fi
if [ "$_cpusched" = "bore" ]; then
  source+=("${_patchsource}/sched/0001-bore-sched.patch")
fi
source+=(
  "${_patchsource}/0001-arch.patch"
  "${_patchsource}/0002-anbox.patch"
  "${_patchsource}/0003-bbr2.patch"
  "${_patchsource}/0004-cachy.patch"
  "${_patchsource}/0005-clearlinux.patch"
  "${_patchsource}/0006-cpu.patch"
  "${_patchsource}/0007-fixes-miscellaneous.patch"
  "${_patchsource}/0008-fs-patches.patch"
  "${_patchsource}/0009-hwmon.patch"
  "${_patchsource}/0010-lru-le9.patch"
  "${_patchsource}/0011-spf-lru.patch"
  "${_patchsource}/0012-xanmod.patch"
  "${_patchsource}/0013-lrng.patch"
  "${_patchsource}/0014-ck-hrtimer.patch"
  "${_patchsource}/0015-futex-winesync.patch"
#  "${_patchsource}/0017-FG-KASLR.patch"
#  "${_patchsource}/0018-zstd-dev.patch"  # Don't use them without custom mkinitcpio
  "auto-cpu-optimization.sh"
)
  ## Change the thin lto cachedir for fixing building several dkms modules
if [ -n "$_thin_lto_cachedir" ] && [ "$_use_llvm_lto" = "thin" ]; then
source+=(
  "${_patchsource}/0016-thinlto-cache-dir.patch"
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
    scripts/config --enable CONFIG_SCHED_ALT
    scripts/config --enable CONFIG_SCHED_BMQ
    scripts/config --disable CONFIG_SCHED_PDS
  elif [ "$_cpusched" = "pds" ]; then
    echo "Selecting PDS CPU scheduler..."
    scripts/config --enable CONFIG_SCHED_ALT
    scripts/config --disable CONFIG_SCHED_BMQ
    scripts/config --enable CONFIG_SCHED_PDS
  elif [ "$_cpusched" = "cacule" ]; then
    echo "Selecting CacULE scheduler..."
    scripts/config --enable CONFIG_CACULE_SCHED
    scripts/config --disable CONFIG_CACULE_RDB
  elif [ "$_cpusched" = "cacule-rdb" ]; then
    echo "Selecting CacULE-RDB scheduler..."
    scripts/config --enable CONFIG_CACULE_SCHED
    scripts/config --enable CONFIG_CACULE_RDB
    scripts/config --set-val CONFIG_RDB_INTERVAL 19
  elif [ "$_cpusched" = "tt" ]; then
    echo "Enable TT CPU scheduler..."
    scripts/config --enable CONFIG_TT_SCHED
    scripts/config --enable CONFIG_TT_ACCOUNTING_STATS
  elif [ "$_cpusched" = "bore" ]; then
    echo "Selecting BORE Scheduler..."
    scripts/config --enable CONFIG_SCHED_BORE
  elif [ "$_cpusched" = "cfs" ]; then
    echo "Selecting Completely Fair Scheduler..."
  else
    if [ -n "$_cpusched" ]; then
      error "The value $_cpusched is invalid. Choose the correct one again."
    else
      error "The value is empty. Choose the correct one again."
    fi
    error "Selecting the CPU scheduler failed!"
    exit
  fi

  ## Enable it for using the LLVM CFI PATCH for a better security
  if [ -n "$_use_cfi" ] && [ -n "$_use_llvm_lto" ]; then
    echo "Enabling CFI"
    scripts/config --enable CONFIG_ARCH_SUPPORTS_CFI_CLANG
    scripts/config --enable CONFIG_CFI_CLANG
  fi

  ### Selecting the THIN or FULL-LTO compression level
  if [ "$_use_llvm_lto" = "thin" ]; then
    echo "Enabling LLVM THIN LTO..."
    scripts/config --disable LTO_NONE \
      --enable LTO \
      --enable LTO_CLANG \
      --enable ARCH_SUPPORTS_LTO_CLANG \
      --enable ARCH_SUPPORTS_LTO_CLANG_THIN \
      --enable HAS_LTO_CLANG \
      --enable LTO_CLANG_THIN \
      --enable HAVE_GCC_PLUGINS
  elif [ "$_use_llvm_lto" = "full" ]; then
    echo "Enabling LLVM FULL LTO..."
    scripts/config --disable LTO_NONE \
      --enable LTO \
      --enable LTO_CLANG \
      --enable ARCH_SUPPORTS_LTO_CLANG \
      --enable ARCH_SUPPORTS_LTO_CLANG_THIN \
      --enable HAS_LTO_CLANG \
      --enable LTO_CLANG \
      --enable LTO_CLANG_FULL \
      --enable HAVE_GCC_PLUGINS
  else
    scripts/config --enable CONFIG_LTO_NONE
  fi

  ### Optionally set tickrate to 1000Hz
  if [ -n "$_1k_HZ_ticks" ]; then
    echo "Setting tick rate to 1k Hz..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_1000
    scripts/config --set-val CONFIG_HZ 1000
  fi

  ### Optionally set tickrate to 750HZ
  if [ -n "$_750_HZ_ticks" ]; then
    echo "Setting tick rate to 750Hz..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_750
    scripts/config --set-val CONFIG_HZ 750
  fi

  ### Optionally set tickrate to 600HZ
  if [ -n "$_600_HZ_ticks" ]; then
    echo "Setting tick rate to 600Hz..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_600
    scripts/config --set-val CONFIG_HZ 600
  fi

  ### Optionally set tickrate to 500HZ
  if [ -n "$_500_HZ_ticks" ]; then
    echo "Setting tick rate to 500Hz..."
    scripts/config --disable CONFIG_HZ_300
    scripts/config --enable CONFIG_HZ_500
    scripts/config --set-val CONFIG_HZ 500
  fi

  ### Optionally disable NUMA for 64-bit kernels only
  # (x86 kernels do not support NUMA)
  if [ -n "$_NUMAdisable" ]; then
    echo "Disabling NUMA from kernel config..."
    scripts/config --disable CONFIG_NUMA
    scripts/config --disable CONFIG_AMD_NUMA
    scripts/config --disable CONFIG_X86_64_ACPI_NUMA
    scripts/config --disable CONFIG_NODES_SPAN_OTHER_NODES
    scripts/config --disable CONFIG_NUMA_EMU
    scripts/config --disable CONFIG_NEED_MULTIPLE_NODES
    scripts/config --disable CONFIG_USE_PERCPU_NUMA_NODE_ID
    scripts/config --disable CONFIG_ACPI_NUMA
    scripts/config --disable CONFIG_ARCH_SUPPORTS_NUMA_BALANCING
    scripts/config --disable CONFIG_NODES_SHIFT
    scripts/config --undefine CONFIG_NODES_SHIFT
    scripts/config --disable CONFIG_NEED_MULTIPLE_NODES
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

  ### Set performance governor
  if [ -n "$_per_gov" ]; then
    echo "Setting performance governor..."
    scripts/config --disable CONFIG_CPU_FREQ_DEFAULT_GOV_SCHEDUTIL
    scripts/config --enable CONFIG_CPU_FREQ_DEFAULT_GOV_PERFORMANCE
    echo "Set PCIEASPM DRIVER to performance..."
    scripts/config --enable CONFIG_PCIEASPM
    scripts/config --enable CONFIG_PCIEASPM_PERFORMANCE
    echo "Set CONFIG_PCIE_BUS for performance..."
    scripts/config --enable CONFIG_PCIE_BUS_PERFORMANCE
  fi

  ### Selecting between tickless idle, perodic tics or full tickless
  if [ "$_tickrate" = "perodic" ]; then
    echo "Enabling periodic ticks..."
    scripts/config --disable CONFIG_NO_HZ_IDLE
    scripts/config --disable CONFIG_NO_HZ_FULL
    scripts/config --disable CONFIG_NO_HZ
    scripts/config --disable CONFIG_NO_HZ_COMMON
    scripts/config --enable CONFIG_HZ_PERIODIC
  elif [ "$_tickrate" = "idle" ]; then
    echo "Enabling tickless idle..."
    scripts/config --disable CONFIG_HZ_PERIODIC
    scripts/config --disable CONFIG_NO_HZ_FULL
    scripts/config --enable CONFIG_NO_HZ_IDLE
    scripts/config --enable CONFIG_NO_HZ
    scripts/config --enable CONFIG_NO_HZ_COMMON
  elif [ "$_tickrate" = "full" ]; then
    echo "Enabling tickless idle..."
    scripts/config --disable CONFIG_HZ_PERIODIC
    scripts/config --disable CONFIG_NO_HZ_IDLE
    scripts/config --disable CONFIG_CONTEXT_TRACKING_FORCE
    scripts/config --enable CONFIG_NO_HZ_FULL_NODEF
    scripts/config --enable CONFIG_NO_HZ_FULL
    scripts/config --enable CONFIG_NO_HZ
    scripts/config --enable CONFIG_NO_HZ_COMMON
    scripts/config --enable CONFIG_CONTEXT_TRACKING
  fi

  ### Enable KBUILD_CFLAGS -O3
  if [ -n "$_cc_harder" ]; then
    echo "Enabling KBUILD_CFLAGS -O3..."
    scripts/config --disable CONFIG_CC_OPTIMIZE_FOR_PERFORMANCE
    scripts/config --enable CONFIG_CC_OPTIMIZE_FOR_PERFORMANCE_O3
  fi

  ### Enable TCP_CONG_BBR2
  if [ -n "$_tcp_bbr2" ]; then
    echo "Disabling TCP_CONG_CUBIC..."
    scripts/config --module CONFIG_TCP_CONG_CUBIC
    scripts/config --disable CONFIG_DEFAULT_CUBIC
    echo "Enabling TCP_CONG_BBR2..."
    scripts/config --enable CONFIG_TCP_CONG_BBR2
    scripts/config --enable CONFIG_DEFAULT_BBR2
    scripts/config --set-str CONFIG_DEFAULT_TCP_CONG bbr2
  fi

  ### Enable FULLCONENAT
  if [ -n "$_nf_cone" ]; then
    echo "Enabling FULLCONENAT..."
    scripts/config --module CONFIG_IP_NF_TARGET_FULLCONENAT
    scripts/config --module CONFIG_NETFILTER_XT_TARGET_FULLCONENAT
  fi

  ### Enable SPF
  if [ -n "$_spf_enable" ]; then
    echo "Enabling SPECULATIVE_PAGE_FAULT LRU..."
    scripts/config --enable CONFIG_SPECULATIVE_PAGE_FAULT
  fi

  ### Enable multigenerational LRU
  if [ -n "$_lru_enable" ]; then
    echo "Enabling multigenerational LRU..."
    scripts/config --enable CONFIG_ARCH_HAS_NONLEAF_PMD_YOUNG
    scripts/config --enable CONFIG_LRU_GEN
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
    scripts/config --disable CONFIG_RANDOM_DEFAULT_IMPL
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

  ### Enable zram/zswap ZSTD compression
  if [ -n "$_zstd_swap_compression" ]; then
    echo "Enabling zram ZSTD compression..."
    scripts/config --disable CONFIG_ZRAM_DEF_COMP_LZORLE
    scripts/config --enable CONFIG_ZRAM_DEF_COMP_ZSTD
    scripts/config --set-str CONFIG_ZRAM_DEF_COMP zstd
    echo "Enabling zswap ZSTD compression..."
    scripts/config --disable CONFIG_ZSWAP_COMPRESSOR_DEFAULT_LZ4
    scripts/config --enable CONFIG_ZSWAP_COMPRESSOR_DEFAULT_ZSTD
    scripts/config --set-str CONFIG_ZSWAP_COMPRESSOR_DEFAULT zstd
  fi

    ## Enable Anbox Support
  if [ -n "$_anbox" ]; then
    echo "Enable Anbox..."
    scripts/config --enable CONFIG_ASHMEM
    scripts/config --enable CONFIG_ANDROID
    scripts/config --enable CONFIG_ANDROID_BINDER_IPC
    scripts/config --enable CONFIG_ANDROID_BINDERFS
    scripts/config --enable CONFIG_ANDROID_BINDER_DEVICES="binder,hwbinder,vndbinder"
  fi

  echo "disable debugging features to reduce the size..."
  scripts/config --disable CONFIG_DEBUG_INFO
  scripts/config --disable CONFIG_CGROUP_BPF
  scripts/config --disable CONFIG_BPF_LSM
  scripts/config --disable CONFIG_BPF_PRELOAD
  scripts/config --disable CONFIG_BPF_LIRC_MODE2
  scripts/config --disable CONFIG_BPF_KPROBE_OVERRIDE
  scripts/config --enable CONFIG_PSI_DEFAULT_DISABLED
  scripts/config --disable CONFIG_LATENCYTOP
  scripts/config --disable CONFIG_SCHED_DEBUG
  scripts/config --disable CONFIG_KVM_WERROR

  echo "Enable CONFIG_USER_NS_UNPRIVILEGED"
  scripts/config --enable CONFIG_USER_NS

  echo "Enable WINE FASTSYNC"
  scripts/config --enable CONFIG_WINESYNC

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
  install -Dm644 "$(make ${BUILD_FLAGS[*]} -s image_name)" "$modulesdir/vmlinuz"

  # Used by mkinitcpio to name the kernel
  echo "$pkgbase" | install -Dm644 /dev/stdin "$modulesdir/pkgbase"

  echo "Installing modules..."
  make ${BUILD_FLAGS[*]} INSTALL_MOD_PATH="$pkgdir/usr" INSTALL_MOD_STRIP=1 \
    DEPMOD=/doesnt/exist modules_install  # Suppress depmod

  # remove build and source links
  rm "$modulesdir"/{source,build}
}

_package-headers() {
  pkgdesc="Headers and scripts for building modules for the $pkgdesc kernel"
  depends=(pahole)

  cd $_srcname
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
  # install -Dt "$builddir/tools/bpf/resolve_btfids" tools/bpf/resolve_btfids/resolve_btfids

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

  # echo "Stripping vmlinux..."
  # strip -v $STRIP_STATIC "$builddir/vmlinux"
  # not needed since not building with CONFIG_DEBUG_INFO=y

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

sha256sums=('9bbcd185b94436f9c8fe977fa0e862f60d34003562327fcebb27c9fa342fe987'
            '29c5dd2ae6b452b75b25816a8f6610fa2ff54f21b22a0ccef5c2e98a7077eb36'
            '6ca8fa67a30513e47b2f4dc8566a7297741404195430b589624409d9608b3710'
            'ba45fa1a0de3d0c813358e381f5fe1105afd730fbcd8c9ba451b115448f7aa5b'
            'b0cfdc9867119d36cf2deaaa8efffca165fcf1a48c7fd5a28a2b2ec7c5026421'
            '0d4b9c288727e6e4c44ba53990538cf118d5a432e612e9060534ab077427848a'
            '8ec8d66e06a1b5ca6a5ddf59a793b8af01d0e5ce4c5168e30b0b95aceb89dafb'
            'e71f3a80e83ff2a31cdc7533f1dcd4f4832f233346668fc5c86f60ec6d20a47e'
            'fcef8eb5b5d7f7dbc32fdc20d3b6764ec352b33079d96f9fd583d0f7094a1542'
            'd089a0a3063b5fbccf7175e89ebc648c19a3d9eb74cb457d4685ca5cab092628'
            'd94002f53ee9cdad412fc6f2c487cea97143a7b880335b2847d4acc2b6f4b823'
            '290f75b6ce492c32c17f3c1a0fea7b2aa7228ceb91acb274922ea0fa9c768af0'
            '4375a07806c57819cadb5c91ba15169baacdda5a44425da4ac1e2d517c483a88'
            '40500b27dc527563de24f029641bb108b829987dcbf7e441c299b3a1efc275ff'
            'ed3053a8bd1d4b855ef6ed3b0dd456cef15e38061dbb834624d62486c875b1c8'
            '71b5ea3baa39520b5687a1b5265b722f2240590eb9d11336e7b145db7f1e9c62'
            'f1fab7056f9f62b8c967bbd7d678adfc9ab20802c78d9aa9355cf6869ac699fc'
            '71e4b1f30c50a947bbf11167e00aaadcd97d3d5d4b06dce94b4f72cd3e776117'
            '65ec9ac5b8b28d5b61df1c72498059be2e7cb1f9b965bac0e4ffed3c05520b2b')
