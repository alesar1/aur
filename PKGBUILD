# Maintainer: Peter Ivanov <ivanovp@gmail.com>

pkgname=mspgcc-ti
pkgver=9.2.0.0
pkgrel=1
pkgdesc="GNU toolchain (as, gcc, g++, ld, gdb) for the TI MSP430 processor"
arch=('i686' 'x86_64')
url="https://www.ti.com/tool/download/MSP430-GCC-OPENSOURCE"
license=('GPL')
depends=('elfutils' 'libmpc' 'zlib')
options=(!strip !emptydirs !libtool staticlibs)
PKGEXT=".pkg.tar"
install=mspgcc-ti.install
#http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/latest/exports/msp430-gcc-8.2.0.52_linux64.tar.bz2
_name=msp430-gcc-9.2.0.50
_tarbz2=${_name}_linux32.tar.bz2
_tarbz2_x64=${_name}_linux64.tar.bz2
_zip=msp430-gcc-support-files-1.210.zip
source=("${pkgname}.sh"
    "http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/9_2_0_0/export/$_zip")
source_i686=("http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/9_2_0_0/export/$_tarbz2")
source_x86_64=("http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/9_2_0_0/export/$_tarbz2_x64")
sha1sums=('a4a81f1b041bf39c3f9c75d94c22d149d1ceee9e'
          '9ca58e925f4c3cdbed46436dc4e0c43b2506632a')
sha1sums_i686=('f133287193b3d9a71dd04e3f2dbe734ff267c0ec')
sha1sums_x86_64=('eed9f3e8b0c11021f841b16de21912c3f0bcc35b')
_install_dir=/opt/ti

package() {
  msg "Extracting compiler..."
  mkdir -p $pkgdir$_install_dir
  cd $pkgdir$_install_dir
  if test "$CARCH" == x86_64; then
    tar xjf ${srcdir}/$_tarbz2_x64
    ln -s ${_name}_linux64 $pkgdir$_install_dir/mspgcc
  else
    tar xjf ${srcdir}/$_tarbz2
    ln -s ${_name}_linux32 $pkgdir$_install_dir/mspgcc
  fi
  msg "Unzipping headers..."
  unzip -qx ${srcdir}/$_zip
  msg "Moving headers to their place..."
  mv ${srcdir}/msp430-gcc-support-files/include/* $pkgdir$_install_dir/mspgcc/include
  rm -rf $pkgdir$_install_dir/msp430-gcc-support-files
  msg "Fixing directory permissions..."
  find $pkgdir$_install_dir -type d -exec chmod a+x {} \;
  mkdir -p $pkgdir$_install_dir/msp430-elf/lib
  msg "Moving linker scripts to their place..."
  mv $pkgdir$_install_dir/mspgcc/include/*.ld $pkgdir$_install_dir/mspgcc/msp430-elf/lib
#  mkdir -p $pkgdir$_install_dir/msp430-elf/include
#  msg "Moving header files to their place..."
#  mv $pkgdir$_install_dir/include/*.h $pkgdir$_install_dir/msp430-elf/include
#  msg "Copying devices.csv to msp430-elf/include..."
#  cp $pkgdir$_install_dir/include/*.csv $pkgdir$_install_dir/msp430-elf/include

  install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/etc/profile.d/${pkgname}.sh"
}

# vim:set sts=2 ts=2 sw=2 et:
