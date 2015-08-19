# $Id: PKGBUILD 57440 2011-10-27 20:16:15Z lcarlier $
# Maintainer: Hector <hsearaDOTatDOTgmailDOTcom>

pkgname=gromacs-5.0-complete
pkgver=5.0.6
pkgrel=1
pkgdesc='A versatile package to perform molecular dynamics, i.e. simulate the Newtonian equations of motion for systems with hundreds to millions of particles.'
url='http://www.gromacs.org/'
license=("LGPL")
arch=('i686' 'x86_64')
depends=('fftw' 'lesstif' 'perl' 'libxml2' 'libsm' 'libx11')
makedepends=('cmake')
options=('!libtool')
source=(ftp://ftp.gromacs.org/pub/gromacs/gromacs-${pkgver}.tar.gz)
sha1sums=('b4b30e1ba56805856130e99568eabcf614a2b2cd')

build() {
  mkdir -p ${srcdir}/{single,double}

  ###### CMAKE OPTIONS DISABLE BY DEFAULT ###########
  # If you are using a haswell CPU, you will have   #
  # problems compiling with AVX2 support unless you #
  # modify march=native in the /etc/makepkg.conf:   #
  # https://wiki.archlinux.org/index.php/Makepkg#Architecture.2C_compile_flagsAdd #
  ###################################################
  msg2 "Building the double precision files"
  cd ${srcdir}/double	
  cmake ../gromacs-${pkgver}/ \
        -DCMAKE_INSTALL_PREFIX=/usr/local/gromacs/gromacs-5.0.6/ \
        -DBUILD_SHARED_LIBS=ON \
        -DGMX_X11=ON \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DGMX_DOUBLE=ON \
        -DREGRESSIONTEST_DOWNLOAD=ON \
        -DGMX_LIBS_SUFFIX=_d
  make

  msg2 "Building the single precision files"
  cd ${srcdir}/single
  cmake ../gromacs-${pkgver}/ \
        -DCMAKE_INSTALL_PREFIX=/usr/local/gromacs/gromacs-5.0.6/ \
        -DBUILD_SHARED_LIBS=ON \
        -DGMX_X11=ON \
        -DREGRESSIONTEST_DOWNLOAD=ON \
        -DCMAKE_INSTALL_LIBDIR=lib
  make
}

check () {
  msg2 "Testing double precision compilation"
  cd ${srcdir}/double
  make check
  msg2 "Testing single precision compilation"
  cd ${srcdir}/single
  make check
}

package() {

  msg2 "Making the single precision executables"
  cd ${srcdir}/single
  make  DESTDIR=${pkgdir} install

  # Cleaning up, kept the csh completion at default location
  msg2 "Making the double precision executables"
  cd ${srcdir}/double
  make DESTDIR=${pkgdir} install

}
