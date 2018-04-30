# Maintainer: Haruue Icymoon <haruue@caoyue.com.cn>
# Contributor: Lucjan Lucjanov <lucjan.lucjanov@gmail.com>

pkgname=linux-usermode
true && pkgname=(linux-usermode linux-usermode-modules)
pkgbase=linux-usermode
_kernelname=-usermodelinux
_srcname=linux-4.16
pkgver=4.16.5
pkgrel=1
pkgdesc="User mode Linux kernel and modules"
arch=('x86_64')
license=('GPL2')
url="http://user-mode-linux.sourceforge.net/"
depends=('coreutils')
makedepends=('bc' 'inetutils')
source=(
  http://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.{xz,sign}
  http://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.{xz,sign}
  config)

sha256sums=('63f6dc8e3c9f3a0273d5d6f4dca38a2413ca3a5f689329d05b750e4c87bb21b9'                                        
            'SKIP'
            '8c3bb050d11da6e91d3e169f76ee3ed6937e1ca64264e605ddba8108696ba011'                                        
            'SKIP'
            '42c31c891d7aaa90ca74e2471a22759e78e08d3c60c007621cb707756ac06a5f')  

validpgpkeys=(
  'ABAF11C65A2970B130ABE3C479BE3E4300411886'  # Linus Torvalds
  '647F28654894E3BD457199BE38DBBDC86092693E'  # Greg Kroah-Hartman
)

prepare() {
  cd "${srcdir}/${_srcname}"

  # add upstream patch
  patch -p1 -i "${srcdir}/patch-${pkgver}"

  cat ../config - >.config <<END
CONFIG_LOCALVERSION="${_kernelname}"
CONFIG_LOCALVERSION_AUTO=n
END

  # set extraversion to pkgrel
  sed -i "/^EXTRAVERSION =/s/=.*/= -${pkgrel}/" Makefile

  # rewrite configuration
  yes "" | make ARCH=um config >/dev/null
}

build() {
  cd "${srcdir}/${_srcname}"
  unset LDFLAGS CFLAGS

  make ARCH=um vmlinux modules 
}

package_linux-usermode() {
  cd "${srcdir}/${_srcname}"
  mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/share/kernel-usermode"
  install -m 644 System.map ${pkgdir}/usr/share/kernel-usermode/System.map
  install -m 755 vmlinux ${pkgdir}/usr/bin/
}

package_linux-usermode-modules() {
  install=modules.install

  cd "${srcdir}/${_srcname}"

  # get kernel version
  _kernver="$(make ARCH=um kernelrelease)"

  #  make ARCH=um INSTALL_MOD_PATH="${pkgdir}/usr" modules_install
  make ARCH=um INSTALL_MOD_PATH="${pkgdir}/usr" _modinst_
  rm -f $pkgdir/usr/lib/modules/${_kernver}/{source,build}
  sed \
    -e "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/g" \
    -i "${startdir}/modules.install"
}

# vim:set ts=8 sts=2 sw=2 et:
