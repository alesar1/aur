# Maintainer: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Haruue Icymoon <haruue@caoyue.com.cn>

pkgbase=linux-usermode
pkgname=('linux-usermode' 'linux-usermode-modules')
_kernelname=-usermodelinux
_major=5.7
_minor=15
pkgver=${_major}.${_minor}
_srcname=linux-${pkgver}
pkgrel=1
pkgdesc="User mode Linux kernel and modules"
arch=('x86_64')
license=('GPL2')
url="http://user-mode-linux.sourceforge.net/"
depends=('coreutils')
makedepends=('bc' 'inetutils')
source=("https://www.kernel.org/pub/linux/kernel/v5.x/linux-${pkgver}.tar.xz"
        "https://www.kernel.org/pub/linux/kernel/v5.x/linux-${pkgver}.tar.sign"
        'config'
        '70-uml.hook')

sha256sums=('0eeb17448973bc591d8dbbfb064a88474e6db148ccc2ccadbbd285c6eb3e5212'
            'SKIP'
            'd3aed447de89a141442509e31b266460dcaad2116301d35c289d6ee66c231081'
            '05ea4e00d1e99bf8140a21c94e3c42acf17b9debad9c6f5decbe1dd1fe04332c')

validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linus Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
             )

prepare() {
  cd ${_srcname}
  
  echo "Setting version..."
  sed -e "/^EXTRAVERSION =/s/=.*/=/" -i Makefile
  scripts/setlocalversion --save-scmversion
  echo "-$pkgrel" > localversion.10-pkgrel
  echo "$_kernelname" > localversion.20-pkgname

  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    [[ $src = *.patch ]] || continue
    echo "Applying patch $src..."
    patch -Np1 < "../$src"
  done

  echo "Setting config..."
  cp ../config .config
  yes "" | make ARCH=um config >/dev/null

  make ARCH=um kernelrelease > version
  echo "Prepared $pkgbase version $(<version)"

  echo "Save configuration for later reuse"
  cat .config > "${startdir}/config.last"
}

build() {
  cd ${_srcname}
  unset LDFLAGS CFLAGS
  make ARCH=um vmlinux modules
}

_package() {

  cd ${_srcname}
  mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/share/kernel-usermode"
  install -m 644 System.map ${pkgdir}/usr/share/kernel-usermode/System.map
  install -m 755 vmlinux ${pkgdir}/usr/bin/
}

_package-modules() {
  
  cd ${_srcname}
  local kernver="$(<version)"
  #  make ARCH=um INSTALL_MOD_PATH="${pkgdir}/usr" modules_install
  make ARCH=um INSTALL_MOD_PATH="${pkgdir}/usr" _modinst_
  rm -f $pkgdir/usr/lib/modules/${kernver}/{source,build}
  # sed expression for following substitutions
  local _subst="
        s|%PKGBASE%|${pkgbase}|g
        s|%KERNVER%|${kernver}|g
  "
  # install pacman hook
  sed "${_subst}" ../70-uml.hook |
        install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/70-uml.hook"
}

pkgname=("${pkgbase}" "${pkgbase}-modules")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#${pkgbase}}")
    _package${_p#${pkgbase}}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:
