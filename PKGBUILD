# Maintainer: ptr1337 <admin@ptr1337.dev>
# Contributor: Torge Matthies <openglfreak at googlemail dot com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Yoshi2889 <rick.2889 at gmail dot com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>


##You will be asked at the building process for your cpu architectures, if you dont know it, just take native!



## Set variable "use_numa" to: n to disable (possibly increase performance)
##                             y to enable  (stock default)
if [ -z ${use_numa+x} ]; then
  use_numa=n
fi

## For performance you can disable FUNCTION_TRACER/GRAPH_TRACER. Limits debugging and analyzing of the kernel.
## Stock Archlinux and Xanmod have this enabled.
## Set variable "use_tracers" to: n to disable (possibly increase performance)
##                                y to enable  (stock default)
if [ -z ${use_tracers+x} ]; then
  use_tracers=n
fi

if [ -z ${_localmodcfg} ]; then
  _localmodcfg=n
fi

if [ -z ${fsync+x} ]; then
  fsync=y
fi

if [ -z ${futex2+x} ]; then
  futex2=y
fi
if [ -z ${winesync+x} ]; then
  winesync=y
fi



### IMPORTANT: Do no edit below this line unless you know what you're doing

pkgbase=linux-cacule-rdb
pkgver=5.11.15
pkgrel=7
pkgdesc='Linux-CacULE-RDB Kernel by Hamad Marri and with some other patchsets'
url="http://www.kernel.org/"
arch=(x86_64)
license=(GPL2)
makedepends=(
  xmlto kmod inetutils bc libelf cpio
  )
options=('!strip')
_patchsource="https://raw.githubusercontent.com/ptr1337/kernel-patches/main/5.11"
source=("https://www.kernel.org/pub/linux/kernel/v5.x/linux-$pkgver.tar.xz"
        "config"
        "${_patchsource}/cacule-patches/cacule-5.11.patch"
        "${_patchsource}/cacule-patches/0002-cacule-Change-default-preemption-latency-to-2ms-for-.patch"
        "${_patchsource}/cpu-patches/0001-cpu-5.11-merge-graysky-s-patchset.patch"
        "${_patchsource}/misc/0005-Disable-CPU_FREQ_GOV_SCHEDUTIL.patch"
        "${_patchsource}/futex-patches/0001-futex2-resync-from-gitlab.collabora.com.patch"
        "${_patchsource}/wine-patches/0007-v5.11-winesync.patch"
        "${_patchsource}/futex-patches/0007-v5.11-fsync.patch"
        "${_patchsource}/misc/0002-init-Kconfig-enable-O3-for-all-arches.patch"
        "${_patchsource}/misc/0001-LL-kconfig-add-750Hz-timer-interrupt-kernel-config-o.patch"
        "${_patchsource}/bbr2-patches/0001-bbr2-5.11-introduce-BBRv2.patch"
        "${_patchsource}/lqx-patches/0001-lqx-patches.patch"
        "${_patchsource}/xanmod-patches/0001-xanmod-patches.patch"
        "${_patchsource}/mm-patches/0001-mm-patches.patch"
        "${_patchsource}/zstd-patches/0001-zstd-patches.patch"
        "${_patchsource}/zstd-patches/0001-zstd-dev-patches.patch"
        "${_patchsource}/zswap-patches/0001-zswap-patches.patch"
        "${_patchsource}/clearlinux-patches/0001-clearlinux-patches.patch")

sha256sums=('d6a7845357cf56b695e50b4c60e09a8832b651ac701062a76145550a8e77c44a'
            '2e3b1f1b6ceb958a3e4b2a4740c77953287a2cdb156234af8c9bf9ddad9268e3'
            'c539655de9eef5084b6349389b1a2fac3aaab274149c9b95667cca93570166ea'
            'cf00507d6881b737a9814d152e27b1db02f45a4d8a8ba3f4c9f542f0964ac697'
            'b74526f681f3eafa12f74764e79792949cb949fe1c8424118746c48fe16a09a8'
            '39a36b356e2452aa244f80700524c73884f995bd29ccabd3bdb760480f37ce8e'
            '05cebcd1dbab8d5f8d26b5351ba0237d36b8e848c830dad7a4f7d1c58cc7824c'
            'd220593436059b76c975ceee061fd124dec37fff774db45a4419c2ce1839c351'
            'b302ba6c5bbe8ed19b20207505d513208fae1e678cf4d8e7ac0b154e5fe3f456'
            '15524321f6e532747be4145341dd6d426a4240bf190e85160bdf06ae6ea0ff20'
            'bc35b9f8f695d3f0ef88ba1a5abad8c881c8ad1eda681dd139d887df6f7a9849'
            '68dcadab17c405335633e0ded03d13a78ee524311bc927df2a0f0fc1a1463caf'
            'b268f8f50734239fee6910d8d7cfa5742e9f17cbd9e90f258139a5df44fed407'
            'a571b8db83f36d36222b3b11ed607fc93728a351782edbe1129b623c236f050e'
            'f797fb4fd2ac4c1116e988e9ccf8bf1b4d9ba53511c388b958f17888d33cf994'
            '3fe144975c1b30b983fca9e34ba58e7b4704456a340130584a1aca0feabdc22e'
            'ba228b7688cb3c8be9312edadf1f9067e91ce8f303941b3b921a748e3cf974d2'
            '251327be9627d8039e8c344d1beca19982676ba1eadc1b97251531fbd7611108'
            '3547dd94fceb67dbf7d013310ce2732944a2d02d82759c8b3c23f37b1bd5252b')

export KBUILD_BUILD_HOST=${KBUILD_BUILD_HOST:-archlinux}
export KBUILD_BUILD_USER=${KBUILD_BUILD_USER:-makepkg}
export KBUILD_BUILD_TIMESTAMP=${KBUILD_BUILD_TIMESTAMP:-$(date -Ru${SOURCE_DATE_EPOCH:+d @$SOURCE_DATE_EPOCH})}

prepare() {

  cd linux-${pkgver}

    echo "Setting version..."
    scripts/setlocalversion --save-scmversion
    echo "-$pkgrel" > localversion.10-pkgrel
    echo "${pkgbase#linux}" > localversion.20-pkgname

  # Apply any patch
  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    [[ $src = *.patch ]] || continue
    msg2 "Applying patch $src..."
    patch -Np1 < "../$src"
  done

    # Copy the config file first
    # Copy "${srcdir}"/config to linux-${pkgver}/.config
#    msg2 "Copy "${srcdir}"/config to linux-5.11.14/.config"
#    cp "${srcdir}"/config-5.11 .config
      echo "Setting config..."
      cp ../config .config

      # disable CONFIG_DEBUG_INFO=y at build time otherwise memory usage blows up
      # and can easily overwhelm a system with 32 GB of memory using a tmpfs build
      # partition ... this was introduced by FS#66260, see:
      # https://git.archlinux.org/svntogit/packages.git/commit/trunk?h=packages/linux&id=663b08666b269eeeeaafbafaee07fd03389ac8d7
      scripts/config --disable CONFIG_DEBUG_INFO
      scripts/config --disable CONFIG_CGROUP_BPF
      scripts/config --disable CONFIG_BPF_LSM
      scripts/config --disable CONFIG_BPF_PRELOAD
      scripts/config --disable CONFIG_BPF_LIRC_MODE2
      scripts/config --disable CONFIG_BPF_KPROBE_OVERRIDE

      # https://bbs.archlinux.org/viewtopic.php?pid=1824594#p1824594
      scripts/config --enable CONFIG_PSI_DEFAULT_DISABLED

      # https://bbs.archlinux.org/viewtopic.php?pid=1863567#p1863567
      scripts/config --disable CONFIG_LATENCYTOP
      scripts/config --disable CONFIG_SCHED_DEBUG

      # FS#66613
      # https://bugzilla.kernel.org/show_bug.cgi?id=207173#c6
      scripts/config --disable CONFIG_KVM_WERROR

    # Customize the kernel
    source "${startdir}"/cacule_config

    configure

    cpu_arch

    # User set. See at the top of this file
    if [ "$use_tracers" = "n" ]; then
      msg2 "Disabling FUNCTION_TRACER/GRAPH_TRACER..."
      scripts/config --disable CONFIG_FUNCTION_TRACER \
                     --disable CONFIG_STACK_TRACER
    fi

    if [ "$use_numa" = "n" ]; then
      echo "Disable NUMA"
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

    if [ "$fsync" = "y" ]; then
      echo "Enable Fsync support"
      scripts/config --enable CONFIG_FUTEX
      scripts/config --enable CONFIG_FUTEX_PI
    fi

    if [ "$futex2" = "y" ]; then
      echo "Enable Futex2 support"
      scripts/config --enable CONFIG_FUTEX2
    fi

    if [ "$winesync" = "y" ]; then
      echo "Enable winesync support"
      scripts/config --module CONFIG_WINESYNC
    fi



    # Setting localversion
    msg2 "Setting localversion..."
    scripts/setlocalversion --save-scmversion
    echo "-${pkgbase}" > localversion

    make olddefconfig


    ### Optionally load needed modules for the make localmodconfig
    # See https://aur.archlinux.org/packages/modprobed-db
    if [ "$_localmodcfg" = "y" ]; then
      if [ -f $HOME/.config/modprobed.db ]; then
        msg2 "Running Steven Rostedt's make localmodconfig now"
        make LSMOD=$HOME/.config/modprobed.db localmodconfig
      else
        msg2 "No modprobed.db data found"
        exit
      fi
    fi


    make -s kernelrelease > version
    msg2 "Prepared $pkgbase version $(<version)"

    # save configuration for later reuse
    cat .config > "${startdir}/config.last"
}

build() {
  cd linux-${pkgver}
  make -j$(nproc) all
}

_package() {
  pkgdesc="The Linux kernel and modules with the cacule scheduler and other patchsets"
  depends=(coreutils kmod initramfs)
  optdepends=('crda: to set the correct wireless channels of your country'
              'linux-firmware: firmware images needed for some devices')

  cd linux-${pkgver}
  local kernver="$(<version)"
  local modulesdir="$pkgdir/usr/lib/modules/$kernver"

  msg2 "Installing boot image..."
  # systemd expects to find the kernel here to allow hibernation
  # https://github.com/systemd/systemd/commit/edda44605f06a41fb86b7ab8128dcf99161d2344
  install -Dm644 "$(make -s image_name)" "$modulesdir/vmlinuz"

  # Used by mkinitcpio to name the kernel
  echo "$pkgbase" | install -Dm644 /dev/stdin "$modulesdir/pkgbase"

  msg2 "Installing modules..."
  make INSTALL_MOD_PATH="$pkgdir/usr" INSTALL_MOD_STRIP=1 modules_install

  # remove build and source links
  rm "$modulesdir"/{source,build}
}

_package-headers() {
  pkgdesc="Headers and scripts for building modules for the $pkgdesc kernel"
  depends=(pahole)

  cd linux-${pkgver}
  local builddir="$pkgdir/usr/lib/modules/$(<version)/build"

  msg2 "Installing build files..."
  install -Dt "$builddir" -m644 .config Makefile Module.symvers System.map \
    localversion.* version vmlinux
  install -Dt "$builddir/kernel" -m644 kernel/Makefile
  install -Dt "$builddir/arch/x86" -m644 arch/x86/Makefile
  cp -t "$builddir" -a scripts

  # add objtool for external module building and enabled VALIDATION_STACK option
  install -Dt "$builddir/tools/objtool" tools/objtool/objtool

  # add xfs and shmem for aufs building
  mkdir -p "$builddir"/{fs/xfs,mm}

  msg2 "Installing headers..."
  cp -t "$builddir" -a include
  cp -t "$builddir/arch/x86" -a arch/x86/include
  install -Dt "$builddir/arch/x86/kernel" -m644 arch/x86/kernel/asm-offsets.s

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
    [[ $arch = */x86/ ]] && continue
    echo "Removing $(basename "$arch")"
    rm -r "$arch"
  done

  msg2 "Removing documentation..."
  rm -r "$builddir/Documentation"

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

  msg2 "Stripping vmlinux..."
  strip -v $STRIP_STATIC "$builddir/vmlinux"
  msg2 "Adding symlink..."
  mkdir -p "$pkgdir/usr/src"
  ln -sr "$builddir" "$pkgdir/usr/src/$pkgbase"
}

pkgname=("${pkgbase}" "${pkgbase}-headers")
for _p in "${pkgname[@]}"; do
  eval "package_$_p() {
    $(declare -f "_package${_p#$pkgbase}")
    _package${_p#$pkgbase}
  }"
done
