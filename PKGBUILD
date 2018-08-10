# Maintainer: Peter Ivanov <ivanovp@gmail.com>

pkgname=mspgcc-ti
pkgver=6.0.1.0
pkgrel=1
pkgdesc="GNU toolchain (as, gcc, g++, ld, gdb) for the TI MSP430 processor"
arch=('i686' 'x86_64')
url="http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/latest/index_FDS.html"
license=('GPL')
depends=('elfutils' 'libmpc' 'zlib')
options=(!strip !emptydirs !libtool staticlibs)
PKGEXT=".pkg.tar"
install=mspgcc-ti.install
_installer=msp430-gcc-full-linux-installer-6.0.1.0.run
_installer_x64=msp430-gcc-full-linux-x64-installer-6.0.1.0.run
source=("${pkgname}.sh")
source_i686=("http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/6_0_1_0/exports/$_installer")
source_x86_64=("http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/6_0_1_0/exports/$_installer_x64")
sha1sums=('a4a81f1b041bf39c3f9c75d94c22d149d1ceee9e')
sha1sums_i686=('b853a3de3072b737c3f008e9f646217e9b5fab2a')
sha1sums_x86_64=('ae16c0c66211e9b3b869c45da9cec32aead54f65')
_install_dir=/opt/ti/mspgcc

build() {
  if test "$CARCH" == x86_64; then
    chmod +x $_installer_x64
  else
    chmod +x $_installer
  fi
}

package() {
  msg "Running TI's installer..."
  if test "$CARCH" == x86_64; then
    ${srcdir}/$_installer_x64 --mode unattended --prefix $pkgdir$_install_dir
  else
    ${srcdir}/$_installer --mode unattended --prefix $pkgdir$_install_dir
  fi
  mkdir -p $pkgdir$_install_dir/msp430-elf/lib
  msg "Moving linker scripts to their place..."
  mv $pkgdir$_install_dir/include/*.ld $pkgdir$_install_dir/msp430-elf/lib
  mkdir -p $pkgdir$_install_dir/msp430-elf/include
  msg "Moving header files to their place..."
  mv $pkgdir$_install_dir/include/*.h $pkgdir$_install_dir/msp430-elf/include
  msg "Copying devices.csv to msp430-elf/include..."
  cp $pkgdir$_install_dir/include/*.csv $pkgdir$_install_dir/msp430-elf/include

  install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/etc/profile.d/${pkgname}.sh"
}

# vim:set sts=2 ts=2 sw=2 et:
