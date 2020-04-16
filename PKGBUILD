# Maintainer:  Joakim Hernberg <jbh@alchemy.lu>
# Contributor: David Runge <dvzrv@archlinux.org>

pkgbase=linux-rt
_pkgver=5.6.4
_rtpatchver=3
pkgver="${_pkgver}.${_rtpatchver}"
pkgrel=1
pkgdesc='Linux RT'
arch=('x86_64')
url="https://wiki.linuxfoundation.org/realtime/start"
license=('GPL2')
makedepends=('bc' 'git' 'graphviz' 'imagemagick' 'kmod' 'libelf'
'python-sphinx' 'python-sphinx_rtd_theme' 'xmlto')
options=('!strip')
_srcname=linux-${_pkgver}
source=(
  "https://www.kernel.org/pub/linux/kernel/v5.x/linux-${_pkgver}.tar.xz"
  "https://www.kernel.org/pub/linux/kernel/v5.x/linux-${_pkgver}.tar.sign"
  "https://www.kernel.org/pub/linux/kernel/projects/rt/${_pkgver%.*}/older/patch-${_pkgver}-rt${_rtpatchver}.patch.xz"
  "https://www.kernel.org/pub/linux/kernel/projects/rt/${_pkgver%.*}/older/patch-${_pkgver}-rt${_rtpatchver}.patch.sign"
  config
  0001-ZEN-Add-sysctl-and-CONFIG-to-disallow-unprivileged-C.patch
  0001-ALSA-hda-Fix-potential-access-overflow-in-beep-helpe.patch
  0001-ALSA-ice1724-Fix-invalid-access-for-enumerated-ctl-i.patch)
validpgpkeys=(
  'ABAF11C65A2970B130ABE3C479BE3E4300411886'  # Linus Torvalds
  '647F28654894E3BD457199BE38DBBDC86092693E'  # Greg Kroah-Hartman
  '8218F88849AAC522E94CF470A5E9288C4FA415FA'  # Jan Alexander Steffens (heftig)
  '64254695FFF0AA4466CC19E67B96E8162A8CF5D1'  # Sebastian Andrzej Siewior
  '5ED9A48FC54C0A22D1D0804CEBC26CDB5A56DE73'  # Steven Rostedt
  'E644E2F1D45FA0B2EAA02F33109F098506FF0B14'  # Thomas Gleixner
)
sha256sums=('5df1741e550cb6fa7471530f42da98bac5093e693e2c4f3aef4393d8135b9d91'
            'SKIP'
            'a9bb755ad66269d209c7b1f66034be9eae0901ea8440bab7b5c2ad1a2ec7eed5'
            'SKIP'
            '52d177093cf226208efbf13137909d3f05c8e586bf3c7f7b355a7a4ee537b572'
            'ad3275a696348703c57f05b9626e7fbab7243299da32e52044ff51666f810e85'
            'd9032bb428c42e093f2686ae2830133c3600496f93574b3b41dc0ec69af6d5ad'
            'bc53f7ec92126955e221698e634d2185909e83bc526f7ff9c7ad86da3fd8c8f4')

export KBUILD_BUILD_HOST=archlinux
export KBUILD_BUILD_USER=$pkgbase
export KBUILD_BUILD_TIMESTAMP="$(date -Ru${SOURCE_DATE_EPOCH:+d @$SOURCE_DATE_EPOCH})"

prepare() {
  cd $_srcname

  echo "Setting version..."
  scripts/setlocalversion --save-scmversion
  echo "-$pkgrel" > localversion.10-pkgrel
  echo "${pkgbase#linux}" > localversion.20-pkgname

  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    # picking up the RT patch
    src="${src//patch.xz/patch}"
    [[ $src = *.patch ]] || continue
    echo "Applying patch $src..."
    patch -Np1 < "../$src"
  done

  # removing cdomain configuration (incompatible with python-sphinx >= 3.0.0):
  # https://github.com/sphinx-doc/sphinx/issues/7421
  sed -e "s/'cdomain',//" -i Documentation/conf.py

  echo "Setting config..."
  cp ../config .config
  make olddefconfig
#  make menuconfig # CLI menu for configuration

  make -s kernelrelease > version
  echo "Prepared $pkgbase version $(<version)"
}

build() {
  cd $_srcname
  make all
  make htmldocs
}

_package() {
  pkgdesc="The $pkgdesc kernel and modules"
  depends=(coreutils initramfs kmod)
  optdepends=('crda: to set the correct wireless channels of your country'
              'linux-firmware: firmware images needed for some devices')

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
  make INSTALL_MOD_PATH="$pkgdir/usr" modules_install

  # remove build and source links
  rm "$modulesdir"/{source,build}
}

_package-headers() {
  pkgdesc="Headers and scripts for building modules for the $pkgdesc kernel"

  cd $_srcname
  local builddir="$pkgdir/usr/lib/modules/$(<version)/build"

  echo "Installing build files..."
  install -Dt "$builddir" -m644 .config Makefile Module.symvers System.map \
    localversion.* version vmlinux
  install -Dt "$builddir/kernel" -m644 kernel/Makefile
  install -Dt "$builddir/arch/x86" -m644 arch/x86/Makefile
  cp -t "$builddir" -a scripts

  # add objtool for external module building and enabled VALIDATION_STACK option
  install -Dt "$builddir/tools/objtool" tools/objtool/objtool

  # add xfs and shmem for aufs building
  mkdir -p "$builddir"/{fs/xfs,mm}

  echo "Installing headers..."
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

  echo "Adding symlink..."
  mkdir -p "$pkgdir/usr/src"
  ln -sr "$builddir" "$pkgdir/usr/src/$pkgbase"
}

_package-docs() {
  pkgdesc="Documentation for the $pkgdesc kernel"

  cd $_srcname
  local builddir="$pkgdir/usr/lib/modules/$(<version)/build"

  echo "Installing documentation..."
  local src dst
  while read -rd '' src; do
    dst="${src#Documentation/}"
    dst="$builddir/Documentation/${dst#output/}"
    install -Dm644 "$src" "$dst"
  done < <(find Documentation -name '.*' -prune -o ! -type d -print0)

  echo "Adding symlink..."
  mkdir -p "$pkgdir/usr/share/doc"
  ln -sr "$builddir/Documentation" "$pkgdir/usr/share/doc/$pkgbase"
}

pkgname=("$pkgbase" "$pkgbase-headers" "$pkgbase-docs")
for _p in "${pkgname[@]}"; do
  eval "package_$_p() {
    $(declare -f "_package${_p#$pkgbase}")
    _package${_p#$pkgbase}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:
