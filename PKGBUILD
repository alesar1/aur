# $Id$
# Maintainer: Tobias Powalowski <tpowa@archlinux.org>
# Maintainer: Thomas Baechler <thomas@archlinux.org>
# Maintainer: Olivier Mehani <shtrom-arch@ssj.net>
pkgbase="kernel26-web100-mipl"
pkgname=('kernel26-web100-mipl' 'kernel26-web100-mipl-headers')
_kernelname=${pkgname#kernel26}
_basekernel=2.6.35
pkgver=${_basekernel}.7
pkgrel=1
_patchname="patch-${pkgver}-${pkgrel}-ARCH"
_web100patchversion=2.5.30
_web100patchdate=201008181640
arch=(i686 x86_64)
license=('GPL2')
url="http://www.kernel.org"
source=(ftp://ftp.kernel.org/pub/linux/kernel/v2.6/linux-$_basekernel.tar.bz2
        ftp://ftp.archlinux.org/other/kernel26/${_patchname}.bz2
	http://www.web100.org/download/kernel/${_web100patchversion}/web100-${_web100patchversion}-${_web100patchdate}.tar.gz
        # the main kernel config files
        config config.x86_64
        # standard config files for mkinitcpio ramdisk
        kernel26.preset)

build() {
  cd ${srcdir}/linux-$_basekernel
  # Add -ARCH patches
  # See http://projects.archlinux.org/linux-2.6-ARCH.git/
  patch -Np1 -i ${srcdir}/${_patchname} || return 1

  sed -i 's/^EXTRAVERSION = .*/EXTRAVERSION =/;s/^NAME = .*/NAME = Sheep on Meth/' Makefile
  patch -Np1 -i ${srcdir}/web100/web100-${_basekernel}-${_web100patchversion}-${_web100patchdate}.patch || return 1
  sed -i 's/^EXTRAVERSION = .*/EXTRAVERSION =/' Makefile

  svn checkout --username anonsvn --password anonsvn https://scm.gforge.inria.fr/svn/mehani/ipv6/dsmip/patches-linux patches

  quilt push -a || exit 1

  if [ "$CARCH" = "x86_64" ]; then
    cat ../config.x86_64 >./.config
  else
    cat ../config >./.config
  fi
  if [ "${_kernelname}" != "" ]; then
    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
  fi
  # get kernel version  
  make prepare
  # load configuration
  # Configure the kernel. Replace the line below with one of your choice.
  #make menuconfig # CLI menu for configuration
  #make xconfig # X-based configuration
  #make oldconfig # using old config from previous kernel version
  # ... or manually edit .config
  ####################
  # stop here
  # this is useful to configure the kernel
  #msg "Stopping build"
  #return 1
  ####################
  yes "" | make config
  # build!
  make bzImage modules || return 1
}

package_kernel26-web100-mipl() {
  pkgdesc="The Linux Kernel and modules with IPv6 mobility extensions and Web100 instrumented stack"
  groups=('base')
  backup=(etc/mkinitcpio.d/${pkgname}.preset)
  depends=('coreutils' 'kernel26-firmware>=2.6.32' 'module-init-tools' 'mkinitcpio>=0.5.20')
  # pwc, ieee80211 and hostap-driver26 modules are included in kernel26 now
  # nforce package support was abandoned by nvidia, kernel modules should cover everything now.
  # kernel24 support is dropped since glibc24
  replaces=('kernel24' 'kernel24-scsi' 'kernel26-scsi'
            'alsa-driver' 'ieee80211' 'hostap-driver26'
            'pwc' 'nforce' 'squashfs' 'unionfs' 'ivtv'
            'zd1211' 'kvm-modules' 'iwlwifi' 'rt2x00-cvs'
            'gspcav1' 'atl2' 'wlan-ng26' 'rt2500')
  install=kernel26.install
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=('kernel26-mipl' 'kernel26-web100')

  KARCH=x86
  cd ${srcdir}/linux-$_basekernel
  # get kernel version
  _kernver="$(make kernelrelease)"
  mkdir -p ${pkgdir}/{lib/modules,boot}
  make INSTALL_MOD_PATH=${pkgdir} modules_install || return 1
  cp System.map ${pkgdir}/boot/System.map26${_kernelname}
  cp arch/$KARCH/boot/bzImage ${pkgdir}/boot/vmlinuz26${_kernelname}
  #  # add vmlinux
  install -m644 -D vmlinux ${pkgdir}/usr/src/linux-${_kernver}/vmlinux

  # install fallback mkinitcpio.conf file and preset file for kernel
  install -m644 -D ${srcdir}/kernel26.preset ${pkgdir}/etc/mkinitcpio.d/${pkgname}.preset || return 1
  # set correct depmod command for install
  sed \
    -e  "s/KERNEL_NAME=.*/KERNEL_NAME=${_kernelname}/g" \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/g" \
    -i $startdir/kernel26.install
  sed \
    -e "s|source .*|source /etc/mkinitcpio.d/kernel26${_kernelname}.kver|g" \
    -e "s|default_image=.*|default_image=\"/boot/${pkgname}.img\"|g" \
    -e "s|fallback_image=.*|fallback_image=\"/boot/${pkgname}-fallback.img\"|g" \
    -i ${pkgdir}/etc/mkinitcpio.d/${pkgname}.preset

  echo -e "# DO NOT EDIT THIS FILE\nALL_kver='${_kernver}'" > ${pkgdir}/etc/mkinitcpio.d/${pkgname}.kver
  # remove build and source links
  rm -f ${pkgdir}/lib/modules/${_kernver}/{source,build}
  # remove the firmware
  rm -rf ${pkgdir}/lib/firmware
}

package_kernel26-web100-mipl-headers() {
  pkgdesc="Header files and scripts for building modules for kernel26-web100-mipl"
  mkdir -p ${pkgdir}/lib/modules/${_kernver}
  cd ${pkgdir}/lib/modules/${_kernver}
  ln -sf ../../../usr/src/linux-${_kernver} build
  cd ${srcdir}/linux-$_basekernel
  install -D -m644 Makefile \
    ${pkgdir}/usr/src/linux-${_kernver}/Makefile
  install -D -m644 kernel/Makefile \
    ${pkgdir}/usr/src/linux-${_kernver}/kernel/Makefile
  install -D -m644 .config \
    ${pkgdir}/usr/src/linux-${_kernver}/.config
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/include

  for i in acpi asm-generic config generated linux math-emu media net pcmcia scsi sound trace video; do
    cp -a include/$i ${pkgdir}/usr/src/linux-${_kernver}/include/
  done

  # copy arch includes for external modules
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/arch/x86
  cp -a arch/x86/include ${pkgdir}/usr/src/linux-${_kernver}/arch/x86/

  # copy files necessary for later builds, like nvidia and vmware
  cp Module.symvers ${pkgdir}/usr/src/linux-${_kernver}
  cp -a scripts ${pkgdir}/usr/src/linux-${_kernver}
  # fix permissions on scripts dir
  chmod og-w -R ${pkgdir}/usr/src/linux-${_kernver}/scripts
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/.tmp_versions

  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/arch/$KARCH/kernel

  cp arch/$KARCH/Makefile ${pkgdir}/usr/src/linux-${_kernver}/arch/$KARCH/
  if [ "$CARCH" = "i686" ]; then
    cp arch/$KARCH/Makefile_32.cpu ${pkgdir}/usr/src/linux-${_kernver}/arch/$KARCH/
  fi
  cp arch/$KARCH/kernel/asm-offsets.s ${pkgdir}/usr/src/linux-${_kernver}/arch/$KARCH/kernel/

  # add headers for lirc package
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/video
  cp drivers/media/video/*.h  ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/video/
  for i in bt8xx cpia2 cx25840 cx88 em28xx et61x251 pwc saa7134 sn9c102 usbvideo zc0301; do
   mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/video/$i
   cp -a drivers/media/video/$i/*.h ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/video/$i
  done
  # add docbook makefile
  install -D -m644 Documentation/DocBook/Makefile \
    ${pkgdir}/usr/src/linux-${_kernver}/Documentation/DocBook/Makefile
  # add dm headers
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/drivers/md
  cp drivers/md/*.h  ${pkgdir}/usr/src/linux-${_kernver}/drivers/md
  # add inotify.h
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/include/linux
  cp include/linux/inotify.h ${pkgdir}/usr/src/linux-${_kernver}/include/linux/
  # add wireless headers
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/net/mac80211/
  cp net/mac80211/*.h ${pkgdir}/usr/src/linux-${_kernver}/net/mac80211/
  # add dvb headers for external modules
  # in reference to:
  # http://bugs.archlinux.org/task/9912
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/dvb/dvb-core
  cp drivers/media/dvb/dvb-core/*.h ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/dvb/dvb-core/
  # add dvb headers for external modules
  # in reference to:
  # http://bugs.archlinux.org/task/11194
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/include/config/dvb/
  cp include/config/dvb/*.h ${pkgdir}/usr/src/linux-${_kernver}/include/config/dvb/
  # add dvb headers for http://mcentral.de/hg/~mrec/em28xx-new
  # in reference to:
  # http://bugs.archlinux.org/task/13146
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/dvb/frontends/
  cp drivers/media/dvb/frontends/lgdt330x.h ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/dvb/frontends/
  cp drivers/media/video/msp3400-driver.h ${pkgdir}/usr/src/linux-${_kernver}/drivers/media/dvb/frontends/
  # add xfs and shmem for aufs building
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/fs/xfs
  mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/mm
  cp fs/xfs/xfs_sb.h ${pkgdir}/usr/src/linux-${_kernver}/fs/xfs/xfs_sb.h
  # add headers vor virtualbox
  # in reference to:
  # http://bugs.archlinux.org/task/14568
  cp -a include/drm $pkgdir/usr/src/linux-${_kernver}/include/
  # add headers for broadcom wl
  # in reference to:
  # http://bugs.archlinux.org/task/14568
  cp -a include/trace $pkgdir/usr/src/linux-${_kernver}/include/
  # copy in Kconfig files
  for i in `find . -name "Kconfig*"`; do 
    mkdir -p ${pkgdir}/usr/src/linux-${_kernver}/`echo $i | sed 's|/Kconfig.*||'`
    cp $i ${pkgdir}/usr/src/linux-${_kernver}/$i
  done

  chown -R root.root ${pkgdir}/usr/src/linux-${_kernver}
  find ${pkgdir}/usr/src/linux-${_kernver} -type d -exec chmod 755 {} \;
  # remove unneeded architectures
  rm -rf ${pkgdir}/usr/src/linux-${_kernver}/arch/{alpha,arm,arm26,avr32,blackfin,cris,frv,h8300,ia64,m32r,m68k,m68knommu,mips,microblaze,mn10300,parisc,powerpc,ppc,s390,sh,sh64,sparc,sparc64,um,v850,xtensa}
}

md5sums=('091abeb4684ce03d1d936851618687b6'
         'df30e2eb9755e45993ddc7e679ab52d8'
         '6e7dd954e9816fb658706ad01fd97870'
         '10f7b3da1621dccc945f2e59552bc3e7'
         'c4b93d5141a5a002c350b73d103eed10'
         '25584700a0a679542929c4bed31433b6')
