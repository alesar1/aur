# Maintainer: Haruue Icymoon <haruue@caoyue.com.cn>

pkgname=linux-mainline-usermode
true && pkgname=(linux-mainline-usermode linux-mainline-usermode-modules)
pkgbase=linux-mainline-usermode
_kernelname=${pkgbase#linux}
_srcname=linux-4.10-rc6
#_patchname=patch-4.10-rc4
pkgver=4.10rc6
pkgrel=1
pkgdesc="User mode Linux-mainline kernel and modules"
arch=('i686' 'x86_64')
license=('GPL2')
url="http://user-mode-linux.sourceforge.net/"
depends=('coreutils')
makedepends=('bc' 'inetutils' 'vde2-static' 'vde2')
source=(
	"https://cdn.kernel.org/pub/linux/kernel/v4.x/testing/${_srcname}.tar.xz"
#	"https://mirrors.ustc.edu.cn/kernel.org/linux/kernel/v4.x/${_srcname}.tar.xz"
#	"https://cdn.kernel.org/pub/linux/kernel/v4.x/testing/${_patchname}.xz"
#	"https://mirrors.ustc.edu.cn/kernel.org/linux/kernel/v4.x/testing/${_patchname}.xz"
	"config-i686" "config-x86_64"
    )
sha256sums=('3bee15b3b1c644da44c36522e62895d6062bb418e4b1bee3796e91501bb0beac'
            'f001a5860c927c14e12eb6c4c09ad22e57834a0f44d71c9516bc2c2f6f1a290f'
            '2a786756a47a52b77ae4bffb31eadd60a7a717c2e3544a315f1cfe9ba9091f30')
validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linus Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
             )

prepare() {
  cd "${srcdir}/${_srcname}"

  # mainline: not needed
  # add upstream patch
  # patch -p1 -i "${srcdir}/patch-${pkgver}"

  # mainline: add patch
  #patch -p1 -i "${srcdir}/${_patchname}" || true
}

build() {
  cd "${srcdir}/${_srcname}"
  unset LDFLAGS CFLAGS
  cp $srcdir/config-$CARCH .config
  if [ "${_kernelname}" != "" ]; then
    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|g" ./.config
  fi

  # Edit configuration
  # Configure the kernel. Replace the line below with one of your choice.
  #make defconfig ARCH=um # default configuration
  make defconfig ARCH=um
  #make menuconfig ARCH=um # CLI menu for configuration
  #make nconfig ARCH=um # new CLI menu for configuration
  #make xconfig ARCH=um # X-based configuration
  # ... or manually edit .config

  make ARCH=um vmlinux modules KCFLAGS=-fPIC

}

package_linux-mainline-usermode() {
  cd "${srcdir}/${_srcname}"

  # get kernel version
  _kernver="$(make ARCH=um kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/share/${_kernver}/build"
  cp System.map ${pkgdir}/usr/share/${_kernver}/build/System.map
  cp vmlinux ${pkgdir}/usr/bin/vmlinux-mainline
}

package_linux-mainline-usermode-modules() {
  install=modules.install

  cd "${srcdir}/${_srcname}"

  # get kernel version
  _kernver="$(make ARCH=um kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

#  make ARCH=um INSTALL_MOD_PATH="${pkgdir}/usr" modules_install
  make ARCH=um INSTALL_MOD_PATH="${pkgdir}/usr" _modinst_
  rm -f $pkgdir/usr/lib/modules/${_kernver}/{source,build}
  sed \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/g" \
    -i "${startdir}/modules.install"
}
