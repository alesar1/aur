_targets="x86_64-apple-darwin"

pkgname="${_targets}"-binutils
pkgver=2.35
pkgrel=1
pkgdesc="Cross binutils for the Apple Darwin cross-compiler"
arch=('x86_64')
url="http://www.gnu.org/software/binutils"
license=('GPL')
#groups=
depends=('zlib')
options=('!libtool' '!emptydirs')
source=("rsync://mirrors.ocf.berkeley.edu/gnu/binutils/binutils-${pkgver}.tar.xz"{,.sig})
validpgpkeys=('3A24BC1E8FB409FA9F14371813FCEF89DD9E3C4F')
sha512sums=('9f222e4ab6720036402d03904fb11b73ab87714b85cd84997f7d357f405c7e10581d70202f9165a1ee0c70538632db27ecc9dfe627dddb1e6bc7edb1537cf786'
            'SKIP')

prepare() {
  cd ${srcdir}/binutils-${pkgver}
  #do not install libiberty
  sed -i 's/install_to_$(INSTALL_DEST) //' libiberty/Makefile.in
  # hack! - libiberty configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure
}

build() {
  for _target in $_targets; do
    msg "Building ${_target} cross binutils"
    mkdir -p ${srcdir}/binutils-${_target} && cd "${srcdir}/binutils-${_target}"
    $srcdir/binutils-${pkgver}/configure --prefix=/usr \
        --target=${_target} \
        --infodir=/usr/share/info/${_target} \
        --enable-lto --enable-plugins \
        --enable-64-bit-bfd \
        --disable-multilib --disable-nls \
        --disable-werror
     make
  done
}

package() {
  for _target in ${_targets}; do
    msg "Installing ${_target} cross binutils"
    cd ${srcdir}/binutils-${_target}
    make DESTDIR=${pkgdir} install
  done
}
